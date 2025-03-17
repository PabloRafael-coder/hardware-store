import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'sonner'
import z from 'zod'

import hardwareLogin from '../../assets/hardware-login.avif'
import { Button } from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import { api } from '../../services/api'
import {
  Container,
  ContainerItens,
  LoginDetails,
  FormContainer,
  SingUp,
} from './styles'

import { TextInput } from '@/components/TextInput'

const loginSchema = z.object({
  email: z
    .string()
    .email('Endereço de e-mail inválido. Por favor, insira um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
})

type LoginFormSchema = z.infer<typeof loginSchema>

export function Login() {
  const { putUserData } = useUser()
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleLoginForm(sessions: LoginFormSchema) {
    try {
      const { data } = await api.post('/sessions', {
        email: sessions.email,
        password: sessions.password,
      })

      putUserData(data)
      toast.success('Login realizado com sucesso!')

      setTimeout(() => {
        if (data.admin) history.push('/pedidos')
        else history.push('/')
      }, 1500)
    } catch {
      toast.error('Erro ao fazer login. Verifique sua senha e tente novamente.')
    }
  }

  return (
    <Container>
        <img src={hardwareLogin} alt="Imagem de login" />

      <ContainerItens>
        <LoginDetails>
          <h1>Acessar conta</h1>
          <p>Acesse sua conta para mais informações!</p>
        </LoginDetails>

        <FormContainer noValidate onSubmit={handleSubmit(handleLoginForm)}>
          <TextInput
            type="email"
            placeholder="E-mail"
            {...register('email')}
            error={errors.email}
          />

          <TextInput
            type="password"
            placeholder="Senha"
            {...register('password')}
            error={errors.password}
          />

          <Button type="submit">Acessar conta</Button>
        </FormContainer>

        <SingUp to={'/cadastro'}>Criar uma nova conta</SingUp>
      </ContainerItens>
    </Container>
  )
}

import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import signUp from '../../assets/signup-logo.avif'

import { Button, TextInput } from '../../components'
import { api } from '../../services/api'

import {
  SignUpContainer,
  FormContainer,
  NavSignUp,
  ItemsContainer,
  SignUpDetails,
} from './styles'

const signUpFormSchema = z
  .object({
    name: z.string().nonempty('Por favor, preencha o campo Nome completo.'),
    email: z.string().email({
      message:
        'Endereço de e-mail inválido. Por favor, insira um e-mail válido.',
    }),
    password: z.string().min(6, 'A senha deve conter pelo menos 6 caracteres.'),
    confirmPassword: z
      .string()
      .min(6, 'A senha deve conter pelo menos 6 caracteres.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem. Verifique e tente novamente.',
    path: ['confirmPassword'],
  })

type SignUpFormSchema = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({ resolver: zodResolver(signUpFormSchema) })

  async function handleSignUpForm(data: SignUpFormSchema) {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { validateStatus: () => true },
      )

      switch (status) {
        case 201:
          toast.success('Cadastro criado com sucesso.')
          break
        case 409:
          toast.error('Email já cadastrado! Faça login para continuar')
          break
      }
    } catch (error) {
      toast.error('O sistema falhou, tente novamente!')
    }
  }

  return (
    <SignUpContainer>
      <ItemsContainer>
        <SignUpDetails>
          <h1>Cadastre-se</h1>
          <p>Crie sua conta agora e explore nossos produtos!</p>
        </SignUpDetails>

        <FormContainer>
          <form noValidate onSubmit={handleSubmit(handleSignUpForm)}>
            <div>
              <TextInput
                type="text"
                placeholder="Nome completo*"
                {...register('name')}
                error={errors?.name}
              />
            </div>
            <div>
              <TextInput
                type="email"
                placeholder="E-mail*"
                {...register('email')}
                error={errors?.email}
              />
            </div>
            <div>
              <TextInput
                type="password"
                placeholder="Crie sua senha*"
                {...register('password')}
                error={errors.password}
              />
            </div>
            <div>
              <TextInput
                type="password"
                placeholder="Confirme sua senha*"
                {...register('confirmPassword')}
                error={errors.confirmPassword}
              />
            </div>
            <Button type="submit">Continue</Button>
          </form>
          <NavSignUp to={'/login'}>Acessar conta</NavSignUp>
        </FormContainer>
        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você concorda com nossos{' '}
          <a className="underline underline-offset-4" href="">
            termos de serviço
          </a>{' '}
          e{' '}
          <a className="underline underline-offset-4" href="">
            políticas de privacidade
          </a>
          .
        </p>
      </ItemsContainer>
      <img src={signUp} alt="Imagem de login" />
    </SignUpContainer>
  )
}

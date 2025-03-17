import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import imgLogin from '../../assets/background-login.png'

import { Button, ErrorMessage } from '../../components'
import { api } from '../../services/api'

import { SignUpContainer, FormContent, Label, Input, Text, NavSignIn } from './styles'

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
      <img src={imgLogin} alt="Imagem de login" />
      <FormContent>
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(handleSignUpForm)}>
          <div>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Insira seu nome"
              {...register('name')}
              error={errors.name?.message}
            />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              {...register('email')}
              error={errors.email?.message}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Insira sua senha"
              {...register('password')}
              error={errors.password?.message}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Confirmar senha</Label>
            <Input
              type="password"
              placeholder="Insira sua senha"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </div>
          <Button type="submit">Sign up</Button>
        </form>
        <Text>
          Já possui conta?{' '}
          <NavSignIn to={'/login'}>
            Sign in
          </NavSignIn>
        </Text>
      </FormContent>
    </SignUpContainer>
  )
}

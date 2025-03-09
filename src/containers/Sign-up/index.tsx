import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

import imgLogin from '../../assets/background-login.png'

import { Button, ErrorMessage } from '../../components'
import { api } from '../../services/api'

import { SignUpContainer, FormContent, Label, Input, Text, NavSignIn } from './styles'

const signUpFormSchema = yup
  .object({
    name: yup.string().required('Digite o seu nome'),
    email: yup
      .string()
      .email('Digite um e-mail válido.')
      .required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória.')
      .min(6, 'A senha deve ter pelo menos 6 digitos.'),
    confirmPassword: yup
      .string()
      .required('Confirme a sua senha')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required()

type SignUpFormSchema = yup.InferType<typeof signUpFormSchema>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({ resolver: yupResolver(signUpFormSchema) })

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

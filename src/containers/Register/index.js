import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import imgLogin from '../../assets/background-login.png';
import Button from '../../components/Button';
import { api } from '../../services/api';
import {
  Container,
  ContainerImg,
  ContainerItens,
  Label,
  Input,
  Text,
  ErrorMessage
} from './styles';

const schema = yup
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
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })
  .required();

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async userData => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: userData.name,
          email: userData.email,
          password: userData.password
        },
        { validateStatus: () => true }
      );

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso.');
      } else if (status === 409) {
        toast.error('Email já cadastrado! Faça o login para continuar.');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('O sistema falhou, tente mais tarde!');
    }
  };

  return (
    <Container>
      <ContainerImg src={imgLogin} />
      <ContainerItens>
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Label>Nome</Label>
            <Input
              type="text"
              placeholder="Insira seu nome"
              {...register('name')}
              error={errors.name?.message}
            ></Input>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              {...register('email')}
              error={errors.email?.message}
            ></Input>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Senha</Label>
            <Input
              type="password"
              placeholder="Insira sua senha"
              {...register('password')}
              error={errors.password?.message}
            ></Input>
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>
          <div>
            <Label>Confirmar senha</Label>
            <Input
              type="password"
              placeholder="Insira sua senha"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            ></Input>
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          </div>
          <Button type="submit">Sing up</Button>
        </form>
        <Text>
          Já possui conta?{' '}
          <Link to={'/login'} style={{ color: 'black' }}>
            Sing in
          </Link>
        </Text>
      </ContainerItens>
    </Container>
  );
}

export default Register;

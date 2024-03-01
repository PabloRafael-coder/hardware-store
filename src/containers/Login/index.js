import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import imgLogin from '../../assets/background-login.png';
import Button from '../../components/Button';
import api from '../../services/api';
import {
  Container,
  ContainerImg,
  ContainerItens,
  Label,
  Input,
  Text,
  ErrorMessage
} from './style';

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um e-mail válido.')
      .required('O e-mail é obrigatório.'),
    password: yup
      .string()
      .required('A senha é obrigatória.')
      .min(6, 'A senha deve ter pelo menos 6 digitos.')
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async userData => {
    const response = await api.post('/sessions', {
      email: userData.email,
      password: userData.password
    });

    console.log(response);
  };
  return (
    <Container>
      <ContainerImg src={imgLogin} />
      <ContainerItens>
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Sing in</Button>
        </form>
        <Text>
          Não possui conta? <a>Sing up</a>
        </Text>
      </ContainerItens>
    </Container>
  );
}

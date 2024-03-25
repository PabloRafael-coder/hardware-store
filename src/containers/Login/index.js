import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import imgLogin from '../../assets/pc-messi_640x640+fill_ffffff.png';
import { Button } from '../../components/Button';
import { useUser } from '../../hooks/UserContext';
import { api } from '../../services/api';
import {
  Container,
  ContainerImg,
  ContainerItens,
  Label,
  Input,
  Text,
  ErrorMessage,
  Img
} from './styles';

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

export function Login() {
  const history = useHistory();

  const { putUserData } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async Datas => {
    const { data } = await toast.promise(
      api.post('/sessions', {
        email: Datas.email,
        password: Datas.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)!',
        error: 'Seus dados estão incorretos'
      }
    );

    putUserData(data);

    setTimeout(() => {
      history.push('/');
    }, 1000);
  };
  return (
    <Container>
      <ContainerImg>
        <Img src={imgLogin} />
      </ContainerImg>
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
          <Button style={{ marginTop: 75 }} type="submit">
            Sing in
          </Button>
        </form>
        <Text>
          Não possui conta?{' '}
          <Link to={'/cadastro'} style={{ color: 'black' }}>
            Sing up
          </Link>
        </Text>
      </ContainerItens>
    </Container>
  );
}

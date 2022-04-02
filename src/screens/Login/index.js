import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Content, Title} from './styles';

export const Login = () => {
  return (
    <Container>
      <Content>
        <Title>Login</Title>
        <Input
          placeholder="Email"
        />
        <Input
          placeholder="Senha"
          secureTextEntry 
        />
        <Button title="Entrar" />
      </Content>
    </Container>
  );
};

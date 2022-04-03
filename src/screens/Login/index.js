import React from 'react';
import { View, Text } from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Content, Title } from './styles';

export const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <Input placeholder='Email' />
        <Input placeholder='Senha' secureTextEntry />
        <Button title='Entrar' />

        <View style={{ flex: 1 }}>
          <Text style={{ flex: 1, color: '#fff' }}>
            Não tem uma conta? Cadastre aqui!
          </Text>
        </View>
      </Content>
    </Container>
  );
};

import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { faker } from '@faker-js/faker';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, Content, Title } from './styles';
import { api } from '../../api';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const user = {
      id: faker.datatype.uuid(),
      name,
      email,
      password
    }
    const res = await api.post("/users", user)
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Content>
        <Input placeholder='Nome' onChangeText={setName} value={name} />
        <Input placeholder='Email' onChangeText={setEmail} value={email} />
        <Input
          placeholder='Senha'
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <Input placeholder='Digite a senha novamente' secureTextEntry />
        <Button title='Cadastrar' onPress={handleSubmit} />
      </Content>
    </Container>
  );
};

import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Content,
  Title,
  SignUpContainer,
  SignUpText,
  ButtonSignUp,
} from './styles';

export const Login = () => {
  const navigator = useNavigation();
  const { login } = useAuth();

  return (
    <Container>
      <Title>Login</Title>
      <Content>
        <Input placeholder='Email' />
        <Input placeholder='Senha' secureTextEntry />
        <Button title='Entrar' onPress={login} />

        <SignUpContainer>
          <ButtonSignUp>
            <SignUpText onPress={() => navigator.navigate('SignUp')}>
              Não tem uma conta? Cadastre aqui!
            </SignUpText>
          </ButtonSignUp>
        </SignUpContainer>
      </Content>
    </Container>
  );
};

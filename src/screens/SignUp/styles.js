import styled from 'styled-components/native';
import { KeyboardAvoidingView } from 'react-native';

export const Container = styled(KeyboardAvoidingView).attrs({
  behavior: 'padding',
})`
  flex: 1;
  background-color: #333;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding: 10px 40px;
  width: 90%;
  height: 50%;
  background-color: #333;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  align-items: center;
  justify-content: center;
`;

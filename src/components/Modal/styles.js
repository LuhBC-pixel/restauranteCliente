import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { SCREEN } from '../../utils';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  padding: 35px;
  align-items: center;
  width: ${SCREEN.WIDTH / 1.4}px;
`;

export const Button = styled(Pressable)`
  padding: 10px;
  elevation: 2;
  background-color: #2196f3;
`;

export const Text = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const ModalText = styled.Text`
  margin-bottom: 15;
  text-align: center;
`;

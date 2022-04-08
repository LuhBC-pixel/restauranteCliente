import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #222;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 20px 10px;
  background-color: #fafafa;
  border-radius: 8px;
  elevation: 2;
`;

export const CardText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #aaa;
`;
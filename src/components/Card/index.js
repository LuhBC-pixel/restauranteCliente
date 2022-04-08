import { Container, Title } from './styles';

export const Card = ({
  id,
  name,
  price,
  description,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Container key={id} onPress={() => setModalVisible(!modalVisible)}>
      <Title>{name}</Title>
      <Title>{price}</Title>
      <Title>{description}</Title>
    </Container>
  );
};

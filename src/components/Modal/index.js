import { Alert, Modal as ModalAnimation } from 'react-native';
import { Button, Container, ModalText, ModalView, Text } from './styles';

export const Modal = ({ modalVisible, setModalVisible, item }) => {
  return (
    <Container>
      <ModalAnimation
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <Container>
          <ModalView>
            <ModalText>{item.name}</ModalText>
            <Button onPress={() => setModalVisible(!modalVisible)}>
              <Text>Fechar</Text>
            </Button>
          </ModalView>
        </Container>
      </ModalAnimation>
    </Container>
  );
};

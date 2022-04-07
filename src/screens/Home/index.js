import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { api } from '../../api';
import { ORDER_TYPES } from '../../store/OrderReducer';

import { BarCodeBox, MainText, Container } from './styles';

export const Home = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Nada escaneado');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setScanned(false);
      setHasPermission(null);
      setText('Nada escaneado');

      // Request Camera Permission
      askForCameraPermission();
    });

    return unsubscribe;
  }, [navigation]);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setText(data);
    const response = await api.get(data);
    dispatch({
      type: ORDER_TYPES.MENU_LOADED,
      payload: response.data,
    });
    navigation.navigate('Results');
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <Container>
        <Text>Solicitando permissão da câmera</Text>
      </Container>
    );
  }
  if (hasPermission === false) {
    return (
      <Container>
        <Text style={{ margin: 10 }}>Sem acesso a câmera</Text>
        <Button
          title={'Permitir acesso a câmera'}
          onPress={() => askForCameraPermission()}
        />
      </Container>
    );
  }

  // Return the View
  return (
    <Container>
      <BarCodeBox>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </BarCodeBox>
      <Text>
        Faça a leitura do código qr localizado na sua mesa para ter acesso ao
        cardápio
      </Text>
      <MainText>{text}</MainText>

      {scanned && (
        <Button
          title={'Escanear novamente?'}
          onPress={() => setScanned(false)}
          color='tomato'
        />
      )}
    </Container>
  );
};

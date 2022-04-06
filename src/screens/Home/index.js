import React, { useState, useEffect } from 'react';
import { Text, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { api } from '../../api';

import { BarCodeBox, MainText, Container } from './styles';

export const Home = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Nada escaneado');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    setText(data);
    const res = await api.get(data)
    console.log(res)
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
      <Text>Faça a leitura do código qr localizado na sua mesa para ter acesso ao cardápio</Text>
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

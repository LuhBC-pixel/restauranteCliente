import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { useAuth } from './hooks/useAuth';
import { Routes } from './routes';

export default function App() {
  const appReady = useSelector(({ app }) => app.appReady);
  const { checkAuth } = useAuth();

  useEffect(() => {
    async function prepare() {
      try {
        await checkAuth();
        console.log(appReady);
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, [appReady]);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        {appReady ? <Routes /> : <Text>Carregando...</Text>}
      </SafeAreaView>
    </View>
  );
}

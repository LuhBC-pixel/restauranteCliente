import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_KEY = '@RestauranteCliente';

export const useStorage = (key) => {
  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem(`${APP_KEY}${key}`);
      return JSON.parse(value);
    } catch (err) {
      return null;
    }
  };

  const setItem = async (value) => {
    try {
      const valueJson = JSON.stringify(value);
      await AsyncStorage.setItem(`${APP_KEY}${key}`, valueJson);
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(`${APP_KEY}${key}`);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};

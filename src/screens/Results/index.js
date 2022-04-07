import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import { useSelector } from 'react-redux';
// import { Container, Title } from './styles';

export const Results = () => {
  const [item, setItems] = useState([]);
  const menuItems = useSelector(({ order }) => order.menu);
  const navigator = useNavigation();

  useEffect(() => {
    setItems(menuItems);
    console.log(item);
  }, [item]);

  return (
    <View>
      <Button title={'Home'} onPress={() => navigator.navigate('Home')} />
    </View>
  );
};

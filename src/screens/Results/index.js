import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
// import { Container, Title } from './styles';

export const Results = () => {
  const [item, setItems] = useState([]);
  const menuItems = useSelector(({ order }) => order.menu);

  useEffect(() => {
    setItems(menuItems);
    console.log(item);
  }, [item]);

  return <View></View>;
};

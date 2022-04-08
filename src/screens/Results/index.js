import { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Modal } from '../../components/Modal';
import { Container, Title, Card, CardText, Description } from './styles';

export const Results = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [loading, setLoading] = useState(false);

  const menuItems = useSelector(({ order }) => order.menu);

  useEffect(() => {
    setLoading(true);
    setItems(menuItems);
    setLoading(false);
  }, [items]);

  const handleSelectItem = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    );
  }
  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Card key={item.id} onPress={() => handleSelectItem(item)}>
            <View>
              <CardText>{item.name}</CardText>
              <Description>{item.description}</Description>
            </View>
            <View>
              <CardText>R$ {item.price.replace('.', ',')}</CardText>
            </View>
          </Card>
        )}
        ListEmptyComponent={() => (
          <Container>
            <Title>Nenhum item encontrado</Title>
          </Container>
        )}
      />

      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={itemSelected}
      />
    </>
  );
};

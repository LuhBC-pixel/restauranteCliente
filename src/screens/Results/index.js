import { useState, useEffect } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Modal } from "../../components/Modal";
import { Container, Title, Card, CardText, Description } from "./styles";

export const Results = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [loading, setLoading] = useState(false);
  const menuItems = useSelector(({ order }) => order.menu);

  const itemsArray = [
    {
      id: 1,
      name: "Coca-Cola",
      price: "1.5",
      description: "Bebida",
      category_uuid: "32435245",
    },
    {
      id: 2,
      name: "Fanta",
      price: "1.5",
      description: "Bebida",
      category_uuid: "32135245",
    },
    {
      id: 3,
      name: "Sprite",
      price: "1.5",
      description: "Bebida",
      category_uuid: "32435246",
    },
  ];

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
      {itemsArray.map((item) => (
        <Card key={item.id} onPress={() => handleSelectItem(item)}>
          <View>
            <CardText>{item.name}</CardText>
            <Description>{item.description}</Description>
          </View>
          <View>
            <CardText>R$ {item.price.replace(".", ",")}</CardText>
          </View>
        </Card>
      ))}

      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={itemSelected}
      />
    </>
  );
};
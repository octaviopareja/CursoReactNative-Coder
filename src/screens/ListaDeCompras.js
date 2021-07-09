import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, View, FlatList } from "react-native";

import ModalConfirm from "../components/ModalConfirm";
import AddNewItem from "../components/AddNewItem";

import styles from "../utils/styles";

export default function ListaDeCompras() {
  //------------------------ STATES -------------------------//
  const [inputText, setInputText] = useState("");
  const [inputError, setInputError] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  //--------------------- HANDLERS FUNCTIONS ---------------------//
  const handleChangeText = (text) => {
    setInputText(text);
    setInputError("");
  };

  const handleAddItem = () => {
    if (inputText) {
      setItemList([
        ...itemList,
        {
          id: Math.random().toString(),
          value: inputText,
        },
      ]);
      setInputText("");
      setInputError("");
    } else {
      setInputError("Required");
    }
  };

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };
  const handleModal = (id) => {
    setItemSelected(itemList.find((item) => item.id === id));
    setModalVisible(true);
  };
  //-------------------------------------------------------//

  return (
    <View style={{ paddingVertical: 30, paddingHorizontal: 30 }}>
      <Text style={styles.titleSections}>Agregar Gastos</Text>
      <AddNewItem
        handleChangeText={handleChangeText}
        inputText={inputText}
        handleAddItem={handleAddItem}
      />
      <Text style={styles.inputError}>{inputError}</Text>
      <FlatList
        data={itemList}
        renderItem={(data) => {
          return (
            <View style={[styles.item, styles.shadow]}>
              <Text style={styles.textItem}>{data.item.value}</Text>
              <Button
                title="X"
                color="red"
                style={styles.textItem}
                onPress={() => handleModal(data.item.id)}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <ModalConfirm
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        itemSelected={itemSelected}
      />
      <StatusBar style="auto" />
    </View>
  );
}

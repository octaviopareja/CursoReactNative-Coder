import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList, Modal, TouchableOpacity } from "react-native";
import ModalAmpliar from "../components/ModalAmpliar";

import styles from "../utils/styles";

export default function ListaDeGastos() {
  const [modalVisible, setModalVisible] = useState(false);
  const [info, setInfo] = useState({});

  const handleModal = (infoProd) => {
    setInfo(infoProd);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const itemList = [
    {
      id: Math.random().toString(),
      value: "Tomates",
      fecha: "9/7/2021",
      lugar: "El Almacen del Tano",
      prize: 100,
    },
    {
      id: Math.random().toString(),
      value: "Naranjas",
      fecha: "9/7/2021",
      lugar: "El Almacen del Tano",
      prize: 50,
    },
    {
      id: Math.random().toString(),
      value: "Arroz",
      fecha: "9/7/2021",
      lugar: "Carrefour",
      prize: 25,
    },
    {
      id: Math.random().toString(),
      value: "Pollo",
      fecha: "9/7/2021",
      lugar: "Carrefour",
      prize: 250,
    },
  ];

  return (
    <View style={{ padding: 30 }}>
      <Text style={styles.titleSections}>Listado de Gastos</Text>
      <FlatList
        data={itemList}
        renderItem={(data) => {
          return (
            <TouchableOpacity
              onPress={() =>
                handleModal({
                  titulo: data.item.value,
                  precio: data.item.prize,
                  fecha: data.item.fecha,
                  lugar: data.item.lugar,
                })
              }
            >
              <View style={[styles.item, styles.shadow]}>
                <Text style={styles.textItem}>{data.item.value}</Text>
                <Text style={styles.textItem}>$ {data.item.prize}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View style={[styles.item, styles.shadow, styles.total]}>
        <Text style={styles.textTotal}>Total</Text>
        <Text style={styles.textTotal}>$ 1000</Text>
      </View>
      <ModalAmpliar
        modalVisible={modalVisible}
        infoProd={info}
        closeModal={closeModal}
      />
      <StatusBar style="auto" />
    </View>
  );
}

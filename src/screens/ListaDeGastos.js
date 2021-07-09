import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, FlatList } from "react-native";

import styles from "../utils/styles";

export default function ListaDeGastos() {
  const itemList = [
    {
      id: Math.random().toString(),
      value: "Tomates",
      prize: 100,
    },
    {
      id: Math.random().toString(),
      value: "Naranjas",
      prize: 50,
    },
    {
      id: Math.random().toString(),
      value: "Arroz",
      prize: 25,
    },
    {
      id: Math.random().toString(),
      value: "Pollo",
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
            <View style={[styles.item, styles.shadow]}>
              <Text style={styles.textItem}>{data.item.value}</Text>
              <Text style={styles.textItem}>$ {data.item.prize}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View style={[styles.item, styles.shadow, styles.total]}>
        <Text style={styles.textTotal}>Total</Text>
        <Text style={styles.textTotal}>$ 1000</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

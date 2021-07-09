import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

import styles from "../utils/styles";

export default function MiCuenta() {
  return (
    <View style={{ paddingVertical: 30, paddingHorizontal: 30 }}>
      <Text style={styles.titleSections}>Mi cuenta</Text>
      <Image
        style={styles.myAccount}
        source={require("../../assets/myAccount.png")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

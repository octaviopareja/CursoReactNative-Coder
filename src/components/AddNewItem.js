import React from "react";
import { Button, TextInput, View } from "react-native";

import styles from "../utils/styles.js";

export default function AddNewItem({
  handleChangeText,
  inputText,
  handleAddItem,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Agregar item"
        style={styles.input}
        onChangeText={handleChangeText}
        value={inputText}
      />
      <Button
        title="Agregar"
        color="#243684"
        onPress={handleAddItem}
        style={styles.btnAdd}
      />
    </View>
  );
}

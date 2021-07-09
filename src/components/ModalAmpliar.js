import React from "react";
import { Button, Text, View, Modal } from "react-native";

import styles from "../utils/styles.js";

export default function ModalAmpliar({ modalVisible, closeModal, infoProd }) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalTitle}>{infoProd.titulo}</Text>
          <Text style={styles.modalSubtitle}>
            <Text style={{ fontWeight: "bold" }}>Precio Pagado:</Text> ${" "}
            {infoProd.precio}
          </Text>
          <Text style={styles.modalSubtitle}>
            <Text style={{ fontWeight: "bold" }}>Lugar de compra:</Text>{" "}
            {infoProd.lugar}
          </Text>
          <Text style={styles.modalSubtitle}>
            <Text style={{ fontWeight: "bold" }}>Fecha de compra:</Text>{" "}
            {infoProd.fecha}
          </Text>
          <View style={{ marginTop: 20 }}>
            <Button
              onPress={closeModal}
              title="Cerrar"
              color="teal"
              style={{ fontFamily: "NotoSansJP-Regular", marginTop: 30 }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

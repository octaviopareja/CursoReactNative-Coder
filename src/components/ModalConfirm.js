import React from "react";
import { Button, Text, View, Modal } from "react-native";

import styles from "../utils/styles.js";

export default function ModalConfirm({
  modalVisible,
  handleConfirmDelete,
  itemSelected,
}) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent>
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, styles.shadow]}>
          <Text style={styles.modalMessage}>
            ¿Está seguro que desea borrar?
          </Text>
          <Text style={styles.modalTitle}>{itemSelected.value}</Text>
          <View>
            <Button
              onPress={handleConfirmDelete}
              title="Borrar"
              color="red"
              style={{ fontFamily: "NotoSansJP-Regular" }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

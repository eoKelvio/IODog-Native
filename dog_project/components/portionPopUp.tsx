import React, { useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { PopUpProps } from '../types/popUpProps';

import { putPortion } from '../API/portion';

export default function PortionPopUp({ isVisible, onClose, onSend, title, initialValue, img1, img2 }: PopUpProps) {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(newValue: string) {
    const numericValue = newValue.replace(/[^0-9]/g, '');
    setValue(numericValue);
  }

  function handleSend() {
    // Chamando a função putPortion com o valor atual
    putPortion(value)
        .then(() => {
            // Após a conclusão de putPortion
            onClose();
            onSend();
        })
        .catch((error) => {
            // Lidar com erros, se houver
            console.error('Erro ao processar putPortion:', error);
        });
}


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.popupContainer}>
        <View style={styles.popupContent}>
          <Text style={styles.title}>{title}</Text>

          <TextInput
            style={styles.valueContainer}
            value={value}
            onChangeText={handleValueChange}
            placeholder="Digite o valor inteiro"
            keyboardType="numeric"
          />

          <View style={styles.circleContainer}>
            {/* Chama handleSend ao invés de onSend */}
            <TouchableOpacity onPress={handleSend}>
              <Image source={img1} style={styles.circleImage} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
              <Image source={img2} style={styles.circleImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}





const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 300,
    display: 'flex',
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 70,
  },
  valueContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    marginLeft: 30,
    right: 15,
    textAlign: 'center',
  },
  circleContainer: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  circleImage: {
    width: 35,
    height: 35,
  },
});



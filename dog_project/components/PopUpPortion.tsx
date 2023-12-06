import React, { FC, useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import {sendToAPI} from '../scripts/postPortion'

interface PopUpPortionProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  initialValue: string;
  img1: any;
  img2: any;
}

const PopUpPortion: FC<PopUpPortionProps> = ({ isVisible, onClose, title, initialValue, img1, img2 }) => {
  const [value, setValue] = useState(initialValue);

  const handleValueChange = (newValue: string) => {
    // Removendo caracteres não numéricos usando regex
    const numericValue = newValue.replace(/[^0-9]/g, '');

    // Atualizando o estado com o valor numérico
    setValue(numericValue);
    sendToAPI(numericValue)


  };

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

          {/* Adicionando o campo de entrada de texto para o valor inteiro */}
          <TextInput
            style={styles.valueContainer}
            value={value}
            onChangeText={handleValueChange}
            placeholder="Digite o valor inteiro"
            keyboardType="numeric" // Configurando para aceitar apenas números
          />

          <View style={styles.circleContainer}>
            <TouchableOpacity onPress={onClose}>
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
};

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

export default PopUpPortion;

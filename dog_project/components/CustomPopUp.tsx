import React, { FC, useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { isValid, parse } from 'date-fns';
import pacthHour from '../scripts/patchHour';
import { Times } from './Times';

interface CustomPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onSend: (newTime: string) => void;
  title: string;
  initialTime?: string;
  img1: any;
  img2: any;
  time: any;
  id: number; // Adicionando o id como uma propriedade
}

const CustomPopup: FC<CustomPopupProps> = ({ isVisible, onClose, title, initialTime, img1, img2, id }) => {
  const [time, setTime] = useState(initialTime);


  const handleTimeChange = (newTime: string) => {
    // Removendo caracteres não numéricos usando regex
    const numericValue = newTime.replace(/[^0-9]/g, '');
    setTime(newTime)

    // Formatando a entrada como hora (HH:mm)
    const formattedTime = numericValue.replace(/(\d{0,2})(\d{0,2})/, (match, p1, p2) => {
      if (p1 && p2) {
        return `${p1}:${p2}`;
      } else if (p1) {
        return `${p1}`;
      } else {
        return '';
      }
    });

    // Verificando se a entrada é válida antes de atualizar o estado
    if (isValid(parse(formattedTime, 'HH:mm', new Date()))) {
      setTime(formattedTime);
    }
  };

  const patch = () => {
    pacthHour(id, time)
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
          
          {/* Adicionando o campo de entrada de texto para o horário */}
          <TextInput
            style={styles.timeContainer}
            value={time}
            onChangeText={handleTimeChange}
            placeholder="Digite o horário"
            keyboardType="numeric" // Configurando para aceitar apenas números
          />

          <View style={styles.circleContainer}>
            <TouchableOpacity onPress={() => { onClose(); patch(); }}>
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
  timeContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
    marginLeft: 30,
    right: 15, 
    textAlign: 'center'
  },
  time: {
    fontSize: 16,
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
  circle: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'gray',
  },
  circleImage: {
    width: 35,
    height: 35,
  },
});

export default CustomPopup;
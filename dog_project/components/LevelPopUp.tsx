import React, { FC, useState } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { isValid, parse } from 'date-fns';

import { postLevel } from '../API/log';

interface LevelPopUpProps {
  onClose: () => void;
  onSend: () => void;
  isVisible: boolean;
  title: string;
  initialValue: string;
  img1: any;
  img2: any;
}

const LevelPopUp: FC<LevelPopUpProps> = ({ isVisible, onClose, onSend, title, initialValue, img1, img2 }) => {
  const [value, setValue] = useState(initialValue);

  function handleValueChange(newValue: string) {
    const numericValue = newValue.replace(/[^0-9]/g, '');
    setValue(numericValue);
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

          <View style={styles.circleContainer}>
            {/* Chama handleSend ao invés de onSend */}
            <TouchableOpacity onPress={postLevel}>
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
    textAlign: 'center',
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

export default LevelPopUp;
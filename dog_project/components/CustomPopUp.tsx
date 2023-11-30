import React, { FC } from 'react';
import { View, StyleSheet, Modal, Text, TouchableOpacity, Image } from 'react-native';


interface CustomPopupProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  time: string;
}

const CustomPopup: FC<CustomPopupProps> = ({ isVisible, onClose, title, time }) => {
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
          <View style={styles.timeContainer}>
            <Text style={styles.time}>{time}</Text>
          </View>
          <View style={styles.circleContainer}>
            <TouchableOpacity onPress={onClose}>
              <Image source={require('../imgs/verifica.png')} style={styles.circleImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Image source={require('../imgs/excluir.png')} style={styles.circleImage} />
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
    gap: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 70
  },
  timeContainer: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
    width: 200,
    padding: 10,
    marginBottom: 10,
    marginLeft: 30
  },
  time: {
    fontSize: 16,
    textAlign: 'center'
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

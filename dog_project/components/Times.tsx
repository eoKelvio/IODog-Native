import React, { ReactNode, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import CustomPopup from './CustomPopUp';

interface TimesProps {
  children?: ReactNode;
}

const Times = ({ children }: TimesProps) => {
  const imagemUrl = require('../imgs/relogio.png');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleEditarPress = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Parte Esquerda: Imagem */}
      <View style={styles.left}>
        <Image source={imagemUrl} style={styles.image} />
      </View>

      {/* Barra Vertical */}
      <Text style={styles.barraVertical}>|</Text>

      {/* Parte Meio: Horário */}
      <View style={styles.middle}>
        {children && <Text style={styles.textMiddle}>{children}</Text>}
      </View>

      {/* Barra Vertical */}
      <Text style={styles.barraVertical}>|</Text>

      {/* Parte Direita: Texto Clicável */}
      <TouchableOpacity style={styles.right} onPress={handleEditarPress}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>

      <CustomPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        title="Editar Horário"
        time="10:00"
        img1={require('../imgs/verifica.png')}
        img2={require('../imgs/excluir.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    paddingRight: 15,
    paddingLeft: 15,
    borderColor: "black",
    width:"90%"
  },
  left: {
    flex: 1,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  textMiddle: {
    color: '#1E86E6',
    fontWeight: '500'
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  barraVertical: {
    marginHorizontal: 10,
    color: '#1E86E6',
    fontWeight: '500'
  },
  image: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  editText: {
    color: '#1E86E6',
    fontWeight: '500'
  },
});

export { Times };

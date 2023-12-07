import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import CustomPopup from './CustomPopUp';
import {TimesProps} from '../types/types'

import pacthHour from '../scripts/patchHour';

const Times = ({ children, id }: TimesProps) => {
  const imagemUrl = require('../imgs/relogio.png');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleEditarPress = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const handleUpdateHour = (newTime: string) => {
    // Chama a função de atualização com o ID e o novo horário
    pacthHour(id, newTime);
    // Fecha o popup após a ação ser realizada
    closePopup();
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
        onSend={handleUpdateHour}
        title="Editar Horário"
        time="10:00"
        img1={require('../imgs/verifica.png')}
        img2={require('../imgs/excluir.png')}
        id={id}
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

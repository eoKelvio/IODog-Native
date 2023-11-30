import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import adicionar from '../imgs/adicionar.png';
import CustomPopup from './CustomPopUp';

const BotaoEditar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handlePress = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.botaobranco}>
          <Image source={adicionar} style={styles.image} />
        </View>
      </TouchableOpacity>

      <CustomPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        title="Editar Horário"
        time="10:00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  botaobranco: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 50,
  },

  image: {
    width: 25,
    height: 25,
    marginTop: 2,
  },
});

export default BotaoEditar;

import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
          <Image source={require('../imgs/adicionar.png')} style={styles.image} />
        </View>
      </TouchableOpacity>

      <CustomPopup
        isVisible={isPopupVisible}
        onClose={closePopup}
        title="Definir Horário"
        time="00:00"
        img1={require('../imgs/verifica.png')}
        img2={require('../imgs/cancelar.png')}
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

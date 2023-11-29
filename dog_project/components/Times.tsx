import React, { ReactNode } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

interface TimesProps {
  children?: ReactNode;
}

const Times = ({ children }: TimesProps) => {
  const imagemUrl = require('../imgs/relogio.png');

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
      <TouchableOpacity style={styles.right} onPress={() => console.log('Editar clicado')}>
        <Text style={styles.editText}>Editar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 8,
    paddingRight: 15,
    paddingLeft: 15,
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

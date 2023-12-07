import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { NavButtonProps } from '../types/types';



export default function NavigationButton({ title, img_source, ...restProps }: NavButtonProps) {

  return (
    <TouchableOpacity style={styles.buttonContainer} {...restProps}>
      {img_source && <Image source={img_source} style={styles.icon}/>}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 'auto',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 0,
    gap: 10,
    flexDirection: 'row', // Para alinhar o texto e a imagem na horizontal
  },
  icon: {
    width: 64, // Defina o tamanho da imagem conforme necessário
    height: 64,
  },
  buttonText: {
    color: '#1E86E6',
    fontWeight: 'bold',
  },
});
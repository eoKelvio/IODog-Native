// CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, StyleSheet, View, Image } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function CustomButton({ title, ...restProps }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...restProps}>
      <Image source={require('../imgs/log.png')} style={styles.icon}/>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '35%',
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

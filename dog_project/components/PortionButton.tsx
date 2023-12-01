import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface BoxProps extends TouchableOpacityProps {
    children?: ReactNode;
    image?: any; // Alteração para a propriedade image aceitar a referência direta da imagem
  }

export default function PortionButton({ children, image, ...restProps }: BoxProps) {
  const boxStyle: ViewStyle = {
    backgroundColor: '#1E86E6',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row', // Define a direção do flexbox com base na propriedade direction
  };

  return (
    <TouchableOpacity {...restProps}>
      <View style={[styles.box, boxStyle]}>
        <Image style={styles.imagen} source={require('../imgs/racao.png')}/>
        <View style={styles.textBox}>  

          <View style={styles.title}>
            <Text style={styles.defaultText2}>Porções</Text>
          </View>

          <View style={styles.number}>
            <Text style={styles.defaultText}>{children || 'Default Text'}</Text>
            <Text style={styles.defaultText2}>Und</Text>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '30%',
    height: 0,
  },
  textBox: {
    height:"100%",
    width: '60%',
    alignItems: 'center',
    justifyContent:"flex-start"     
  },
  defaultText: {
    color: 'white',
    fontSize: 28,
    fontWeight: '500',
  },
  defaultText2: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  imagen: {
    height: 90,
    width: 90,
  },
  title: {
  },
  number : {
    display:"flex",
    flexDirection:"row",
    gap:10,
  }
});

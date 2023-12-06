import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';


interface BoxProps extends TouchableOpacityProps {
    children?: ReactNode;
    image?: any;
    food_level: string
  }

export default function FoodLevel({ children, image, food_level, ...restProps }: BoxProps) {
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
      <View style={[boxStyle]}>

        <View>
          <Image style={styles.imagen} source={require('../imgs/sacoRacao.png')}/>
        </View>

        <View style={styles.divisor}>

          <View>
            <Text style={styles.defaultText}>Nível de ração</Text>
          </View>

          <View style={styles.rows}>
            <Text style={styles.altText}>{food_level}</Text>
            <Text style={styles.altText}>%</Text>
          </View>

        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  imagen: {
    height: 90,
    width: 90,
  },
  defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign:"center",
    textAlignVertical:"bottom"
  },
  altText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  divisor : {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
    width:"50%",
    gap:10
  },
  rows : {
    display:"flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "center",
    width: "100%",
    gap:10
  }
});
// PortionButton.tsx
import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import PopUpPortion from './PopUpPortion';

interface BoxProps extends TouchableOpacityProps {
  children?: ReactNode;
  image?: any;
}

export default function PortionButton({ children, image, ...restProps }: BoxProps) {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
  };

  const boxStyle: ViewStyle = {
    backgroundColor: '#1E86E6',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  };

  return (
    <View>
      <TouchableOpacity onPress={openPopUp}>
        <View style={[boxStyle]}>
          <View>
            <Image style={styles.imagen} source={require('../imgs/racao.png')} />
          </View>
          <View style={styles.divisor}>
            <View>
              <Text style={styles.defaultText}>Porções</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.altText}>2</Text>
              <Text style={styles.defaultText}>Und</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* PopUpPortion component */}
      <PopUpPortion
        isVisible={isPopUpVisible}
        onClose={closePopUp}
        title="Definir Porção"
        initialValue="0"
        img1={require('../imgs/verifica.png')}
        img2={require('../imgs/cancelar.png')}
      />
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
    textAlign: "center",
    textAlignVertical: "bottom"
  },
  altText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  divisor: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    width: "50%",
    gap: 10
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "center",
    width: "100%",
    gap: 10
  }
});

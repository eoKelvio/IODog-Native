import React, { ReactNode } from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface BoxProps {
  children?: ReactNode;
  direction: 'row' | 'column'; // Define o tipo específico para direction
}

export default function Box({ children, direction }: BoxProps) {
  const boxStyle: ViewStyle = {
    backgroundColor: '#1E86E6',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexDirection: direction, // Define a direção do flexbox com base na propriedade direction
  };

  return (
    <View style={[styles.box, boxStyle]}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Text) {
          return React.cloneElement(child, {
            style: [styles.defaultText, child.props.style],
          });
        }
        return child;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // Estilos adicionais do container
  },
  
  defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
});

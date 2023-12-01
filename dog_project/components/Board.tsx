import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BoxProps {
  children?: ReactNode;
}

export default function Board({ children }: BoxProps) {
  return (
    <View style={styles.box}>
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
    backgroundColor: '#ffffff',
    width: '90%',
    height: 'auto',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  
  defaultText: {
    fontSize: 18,
    fontWeight: '500'
  },
});

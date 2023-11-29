import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BoxProps {
  children?: ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <View style={styles.container}>
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
  container: {
    backgroundColor: '#1E86E6',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500'
  },
});

import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BoxProps } from "../types/types";



export default function Board({ children, tittle }: BoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.tittle}>{tittle}</Text>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Text) {
          return React.cloneElement(child, {});
        }
        return child;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffffff",
    width: "90%",
    height: "auto",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: 10,
  },

  defaultText: {
    fontSize: 18,
    fontWeight: "500",
  },
  tittle: {
    fontSize: 38,
    fontWeight: "500",
    color: '#1E86E6'
  },
});

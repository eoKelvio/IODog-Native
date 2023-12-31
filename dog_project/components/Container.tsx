﻿import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import ContainerProps from "../types/containerProps";

export default function Container({ children }: ContainerProps) {
  return (
    <View style={styles.container}>
      {React.Children.map(children, (child) => {
        return child;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#1E86E6',
        width:"100%",
        height:"100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap:20,
        paddingTop:30,
        paddingBottom:10
    }
})
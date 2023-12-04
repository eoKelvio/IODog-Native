﻿import React, { ReactNode } from "react";
import { View, Text, StyleSheet, ViewStyle, ScrollView } from "react-native";
import BotaoEditar from "./BotaoEditar";

interface BoxProps {
  children?: ReactNode;
  direction: "row" | "column"; // Define o tipo específico para direction
}

export default function HoursBox({ children, direction }: BoxProps) {
  const boxStyle: ViewStyle = {
    backgroundColor: "#1E86E6",
    width: "100%",
    maxHeight: "35%",
    height: "auto",
    borderRadius: 30,
  };

  const contentContainerStyle: ViewStyle = {
    flexDirection: direction === "row" ? "row" : "column",
    alignItems: "center", // Alinha o conteúdo centralizado horizontalmente
    justifyContent: "center", // Alinha o conteúdo centralizado verticalmente
    padding: 20,
    gap:10
  };

  return (
    <ScrollView style={boxStyle}>
      <View style={contentContainerStyle}>
        <Text style={styles.defaultText}>Horários programados</Text>
        <View style={styles.gap}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === Text) {
              return React.cloneElement(child, {});
            }
            return child;
          })}
        </View>
        <BotaoEditar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
  gap : {
    display:"flex",
    gap:10
  }
});

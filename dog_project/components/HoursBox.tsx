import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle, ScrollView } from "react-native";
import { Times } from "../components(old)/Times";
import BotaoEditar from "../components(old)/BotaoEditar";

import { fetchHours } from "../API/Hours";

interface BoxProps {
  direction: "row" | "column";
}

interface Hour {
  id: number; // Defina o tipo correto para o ID
  times: string; // Defina o tipo correto para os horários
}

export default function HoursBox({ direction }: BoxProps) {
  const [hours, setHours] = useState<Hour[]>([]);

  useEffect(() => {
    async function fetchAndSetHours() {
      try {
        const extractedHours = await fetchHours();
        setHours(extractedHours);
      } catch (error) {
        console.error("Erro ao buscar os horários:", error);
      }
    }
    fetchAndSetHours();
  }, []);

  const boxStyle: ViewStyle = {
    backgroundColor: "#1E86E6",
    width: "100%",
    maxHeight: "35%",
    height: "auto",
    borderRadius: 30,
  };

  const contentContainerStyle: ViewStyle = {
    flexDirection: direction === "row" ? "row" : "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
  };

  return (
    <ScrollView
      style={boxStyle}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={contentContainerStyle}>
        <Text style={styles.defaultText}>Horários programados</Text>
        <View style={styles.gap}>
          {hours.map((hour) => (
            <Times key={hour.id} id={hour.id}>
              {hour.times}
            </Times>
          ))}
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
  gap: {
    display: "flex",
    gap: 10,
  },
});

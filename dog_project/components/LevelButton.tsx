import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity } from "react-native";

import getFoodLevel from "../API/foodLevel";
import LevelPopUp from "./LevelPopUp";
import { newFoodLevel } from "../API/log";

export default function LevelButton() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
  };

  const UpdateLevel = () => {
    newFoodLevel();
    closePopUp();
  };

  const [foodLevel, setFoodLevel] = useState(0);

  const fetchFoodLevel = async () => {
    try {
      const level = await getFoodLevel();
      setFoodLevel(level);
    } catch (error) {
      console.error("Erro ao obter o nível de ração:", error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchFoodLevel, 1000);
  
    return () => clearInterval(intervalId);
  }, []);


  const boxStyle: ViewStyle = {
    backgroundColor: "#1E86E6",
    width: "100%",
    height: "auto",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  };

  return (
    <View>
      <TouchableOpacity onPress={openPopUp}>
        <View style={[boxStyle]}>
          <View>
            <Image
              style={styles.imagen}
              source={require("../imgs/sacoRacao.png")}
            />
          </View>

          <View style={styles.divisor}>
            <View>
              <Text style={styles.defaultText}>Nível de ração</Text>
            </View>

            <View style={styles.rows}>
              <Text style={styles.altText}>{foodLevel}</Text>
              <Text style={styles.altText}>%</Text>
            </View>
          </View>
        </View>

        <LevelPopUp
          isVisible={isPopUpVisible}
          onClose={closePopUp}
          onSend={UpdateLevel}
          title="Deseja resetar o nível de ração?"
          initialValue=""
          img1={require("../imgs/verifica.png")}
          img2={require("../imgs/cancelar.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imagen: {
    height: 90,
    width: 90,
  },
  defaultText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    textAlignVertical: "bottom",
  },
  altText: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
  },
  divisor: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "50%",
    gap: 10,
  },
  rows: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "center",
    width: "100%",
    gap: 10,
  },
});

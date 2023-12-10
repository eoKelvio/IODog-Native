import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity } from "react-native";

import getFoodLevel from "../API/foodLevel";
import { postLevel } from "../API/log";
import LevelPopUp from "./LevelPopUp";
import { getPortion } from "../API/portion";
import { postFoodLevelAndPortion } from "../API/log";

export default function LevelButton() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [viewValue, setViewValue] = useState<number | undefined>();

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
  };

  const [foodLevel, setFoodLevel] = useState(0);

  useEffect(() => {
    async function fetchFoodLevel() {
      try {
        const level = await getFoodLevel(); // Supondo que getFoodLevel é uma função assíncrona que retorna o nível de ração
        setFoodLevel(level);
      } catch (error) {
        console.error("Erro ao obter o nível de ração:", error);
      }
    }

    fetchFoodLevel();
  }, []);

  const attLevelAndPortion = async () => {
    try {
      // Suponha que você deseja enviar um valor específico, como 100
      const novoNivel = 100;

      // Obter a porção atual
      const porcaoAtual = await getPortion();

      // Chama a função para enviar os dados para a API
      await postFoodLevelAndPortion(novoNivel, porcaoAtual);

      // Atualiza o estado local com o novo valor de ração
      setFoodLevel(novoNivel);

      // Fecha o popup
      closePopUp();

      console.log("Dados enviados para a API com sucesso.");
    } catch (error) {
      console.error("Erro ao enviar dados para a API:", error);
    }
  };


  useEffect(() => {
    fetchPortion();
  }, []);

  const fetchPortion = async () => {
    try {
      const portionValue = await getPortion();
      // setViewValue(portionValue);
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching portion:", error);
    }
  };

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
          onSend={attLevelAndPortion}
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

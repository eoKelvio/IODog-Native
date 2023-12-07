import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
} from "react-native";

import { foodLevelProps } from "../types/foodLevelProps";

export default function FoodLevel({ food_level }: foodLevelProps) {
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
          <Text style={styles.altText}>{food_level}</Text>
          <Text style={styles.altText}>%</Text>
        </View>

      </View>
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

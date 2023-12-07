import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  Image,
  TouchableOpacity,
} from "react-native";

import PortionPopUp from "./portionPopUp";

import { getPortion } from "../API/portion";

export default function PortionButton() {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [viewValue, setViewValue] = useState<number | undefined>();

  useEffect(() => {
    fetchPortion();
  }, []);

  const fetchPortion = async () => {
    try {
      const portionValue = await getPortion();
      setViewValue(portionValue);
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching portion:", error);
    }
  };

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
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
              source={require("../imgs/racao.png")}
            />
          </View>

          <View style={styles.divisor}>
            <View>
              <Text style={styles.defaultText}>Porções</Text>
            </View>

            <View style={styles.rows}>
              <Text style={styles.altText}>{viewValue}</Text>
              <Text style={styles.defaultText}>Und</Text>
            </View>
          </View>
        </View>

        <PortionPopUp
          isVisible={isPopUpVisible}
          onClose={closePopUp}
          onSend={fetchPortion}
          title="Definir Porção"
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

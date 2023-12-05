// Index.tsx
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "./components/CustomButton";
import HoursBox from "./components/HoursBox";
import { Times } from "./components/Times";
import Container from "./components/Container";
import Board from "./components/Board";
import PortionButton from "./components/PortionButton";
import FoodLevel from "./components/FoodLevel";

import fetchHours from "./scripts/fecthHours";
import { getNumberFromAPI } from "./scripts/getPortion";

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

interface Hour {
  id: number; // Replace 'number' with the correct type of your ID
  times: string; // Replace 'string' with the correct type of your times
  // Add other properties if present
}

export default function Index({ navigation }: IndexProps) {
  const [hours, setHours] = useState<Hour[]>([]);
  const [portion, setPortion] = useState<number | null>(null); // Estado para armazenar o valor da porção

  useEffect(() => {
    async function fetchData() {
      try {
        const portionFromAPI = await getNumberFromAPI();
        setPortion(portionFromAPI);
      } catch (error) {
        // Trate o erro aqui, se necessário
        console.error(error);
      }
    }

    fetchData();
    fetchHours(setHours);
  }, []);

  return (
    <Container>
      <Board tittle="IODog">
        <HoursBox direction="column">
          {hours.length > 0 ? (
            hours.map((hour) => (
              <Times key={hour.id} id={hour.id}>
                {hour.times}
              </Times>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </HoursBox>

        <PortionButton real_portion={portion}></PortionButton>

        <FoodLevel></FoodLevel>
      </Board>

      <CustomButton
        title="Relatorios e informações"
        img_source={require("./imgs/log.png")}
        onPress={() => navigation.navigate("Log")}
      ></CustomButton>
    </Container>
  );
}

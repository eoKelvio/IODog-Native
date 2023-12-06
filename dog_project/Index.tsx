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
import getFoodLevel from "./scripts/getFoodLevel"

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

interface Hour {
  id: number;
  times: string;
}

export default function Index({ navigation }: IndexProps) {
  const [hours, setHours] = useState<Hour[]>([]);
  const [portion, setPortion] = useState<number | null>(null);
  const [foodLevel, setFoodLevel] = useState<string | null>(null); // Estado para armazenar o valor do food_level

  useEffect(() => {
    async function fetchData() {
      try {
        const portionFromAPI = await getNumberFromAPI();
        setPortion(portionFromAPI);

        const foodLevelFromAPI = await getFoodLevel();
        setFoodLevel(foodLevelFromAPI);
      } catch (error) {
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

        
        {portion !== null ? (
          <PortionButton real_portion={portion}></PortionButton>
        ) : (
          <Text>Loading food level...</Text>
        )}

        {foodLevel !== null ? (
          <FoodLevel food_level={foodLevel}></FoodLevel>
        ) : (
          <Text>Loading food level...</Text>
        )}
      </Board>

      <CustomButton
        title="Relatorios e informações"
        img_source={require("./imgs/log.png")}
        onPress={() => navigation.navigate("Log")}
      ></CustomButton>
    </Container>
  );
}

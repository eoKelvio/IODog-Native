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
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchHours(setHours, setError);
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

        <PortionButton></PortionButton>

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

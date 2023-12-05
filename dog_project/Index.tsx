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
import { getNumberFromAPI } from "./scripts/fecthPortion";

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

export default function Index({ navigation }: IndexProps) {
  const [hours, setHours] = useState([]);
  const [error, setError] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  
  useEffect(() => {
    // Fetch hours data
    fetchHours(setHours, setError);

    // Fetch number data from the API
    const fetchNumberFromAPI = async () => {
      try {
        const numberFromAPI = await getNumberFromAPI();
        setApiResponse(`Número da API: ${numberFromAPI}`);
      } catch (error:any) {
        setApiResponse(`Erro ao obter número da API: ${error.message}`);
      }
    };

    fetchNumberFromAPI();
  }, []);

  return (
    <Container>

      <Board tittle="IODog">

        <HoursBox direction="column">
        {hours.length > 0 ? (
          hours.map((hours) => (
            <Times>{hours.times}</Times>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
        </HoursBox>


        <PortionButton apiResponse={apiResponse}></PortionButton>

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

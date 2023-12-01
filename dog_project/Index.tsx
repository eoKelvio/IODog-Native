// Index.tsx
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "./components/CustomButton";
import HoursBox from "./components/HoursBox";
import { Times } from "./components/Times";
import Container from "./components/Container";
import Board from "./components/Board";
import PortionButton from "./components/PortionButton";
import FoodLevel from "./components/FoodLevel";

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

export default function Index({ navigation }: IndexProps) {
  return (
    <Container>
      <Board tittle="IODog">

        <HoursBox direction="column">
          <Times>10:00</Times>
          <Times>10:00</Times>
          <Times>10:00</Times>
          <Times>10:00</Times>
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

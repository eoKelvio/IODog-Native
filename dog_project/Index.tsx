// Index.tsx
import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "./components/CustomButton";
import Box from "./components/Box";
import { Times } from "./components/Times";
import PopupEditar from "./components/BotaoEditar";
import Container from "./components/Container";
import Board from "./components/Board";
import BotaoEditar from "./components/BotaoEditar";
import PortionButton from "./components/PortionButton";

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
      <Board>
        <Box direction="column">
          <Text>Horários programados</Text>
            <Times>10:00</Times>
            <Times>11:00</Times>
            <Times>12:00</Times>
            <BotaoEditar></BotaoEditar>
        </Box>

        <PortionButton>
          <Text>2</Text>
        </PortionButton>
        
        <Box direction="row">
          <Text>1</Text>
          <Text>1</Text>
        </Box>
      </Board>

      <CustomButton title="Relatorios e informações" onPress={() => navigation.navigate("Log")}></CustomButton>
    </Container>
  );
}



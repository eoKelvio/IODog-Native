import React, { useEffect, useState } from "react";
import { IndexProps } from "./types/types";

import NavigationButton from "./components/NavButton";
import Container from "./components/Container";
import Board from "./components/Board";
import PortionButton from "./components/PortionButton";
import FoodLevel from "./components/FoodLevel";

export default function Index({ navigation }: IndexProps) {
  return (
    <Container>
      <Board tittle="IODog" direction="column">
        <PortionButton />

        <FoodLevel food_level="80" />
      </Board>

      <NavigationButton
        title="Relatorios e informações"
        img_source={require("./imgs/log.png")}
        onPress={() => navigation.navigate("Log")}
      />
    </Container>
  );
}

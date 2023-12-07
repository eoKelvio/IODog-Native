import React, { useEffect, useState } from "react";
import { IndexProps } from "./types/types";

import NavigationButton from "./components/NavButton";
import Container from "./components/Container";
import Board from "./components/Board";
import PortionButton from "./components/PortionButton";
import FoodLevel from "./components/FoodLevel";
import HoursBox from "./components/HoursBox";

export default function Index({ navigation }: IndexProps) {
  return (
    <Container>
      <Board tittle="IODog" direction="column">
        <HoursBox direction="column" />

        <PortionButton />

        <FoodLevel />
      </Board>

      <NavigationButton
        title="Relatorios"
        img_source={require("./imgs/log.png")}
        onPress={() => navigation.navigate("Log")}
      />
    </Container>
  );
}

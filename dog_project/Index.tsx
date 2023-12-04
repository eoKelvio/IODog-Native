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

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

export default function Index({ navigation }: IndexProps) {
  const [hours, setHours] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchHours = async () => {
    try {
      const response = await fetch(
        "https://eokelvio.pythonanywhere.com/hours/"
      );

      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json)) {
          const extractedHours = json.map((item) => item.times);
          setHours(extractedHours);
        } else {
          setError(true);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHours();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError(false);
    fetchHours();
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Container>
      <Board tittle="IODog">
        <HoursBox direction="column">
          {hours.map((time, index) => (
            <Times key={index}>{time}</Times>
          ))}
          <CustomButton
            title="Refresh  "
            img_source={require("./imgs/log.png")}
            onPress={handleRefresh}
          ></CustomButton>
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

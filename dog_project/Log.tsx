// Log.tsx
import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import Board from "./components/Board";
import { Text, ScrollView, StyleSheet } from "react-native";
import fetchLogs from "./scripts/fecthLogs";
import LogBox from "./components/LogBox";
import { FetchLogsProps } from "./types/types";

import { LogProps } from "./types/types";
import NavigationButton from "./components/NavButton";

export default function Log({ navigation }: LogProps) {
  const [logs, setLogs] = useState<FetchLogsProps[]>([]);

  useEffect(() => {
    fetchLogs(setLogs);
  }, []);

  return (
    <Container>
      <Board tittle="Relatórios">
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {logs.length > 0 ? (
            logs.map((log) => (
              <LogBox
                key={log.id}
                id={log.id}
                food_liberation={log.food_liberation}
                portions={log.portions}
                food_level={log.food_level}
                created_at={log.created_at}
              />
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </ScrollView>
      </Board>

      <NavigationButton
        title="Menu Principal"
        img_source={require("./imgs/relogio.png")}
        onPress={() => navigation.navigate("Index")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: 4.4 * (100 + 16),
    maxHeight: "100%",
  },
});

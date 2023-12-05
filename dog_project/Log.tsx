// Log.tsx
import React, { useState, useEffect,  } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';
import Container from './components/Container';
import Board from './components/Board';
import { Text, ScrollView, StyleSheet } from 'react-native';
import fetchLogs from './scripts/fecthLogs';
import LogBox from './components/LogBox';
import { FetchLogsProps } from './types/types';

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type LogProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Log'>;
};

export default function Log({ navigation }: LogProps) {
  const [logs, setLogs] = useState<FetchLogsProps[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLogs(setLogs);
  }, []);

  return (
    <Container>
      <Board tittle='Relatórios'>
      <ScrollView style={styles.scrollView}>
        {logs.length > 0 ? (
            logs.map((log) => (
              <LogBox
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
      <CustomButton
        title="Menu principal"
        img_source={require('./imgs/relogio.png')}
        onPress={() => navigation.navigate("Index")}
      ></CustomButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    height: 4 * ( 100 + 16),
    maxHeight: '100%'
  },
})

// Log.tsx
import React, { useState, useEffect,  } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';
import Container from './components/Container';
import Board from './components/Board';
import { Text, View } from 'react-native';

import fetchLogs from './scripts/fecthLogs';

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type LogProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Log'>;
};

export default function Log({ navigation }: LogProps) {
  const [hours, setLogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchLogs(setLogs, setError);
  }, []);

  return (
    <Container>
      <Board tittle='Relatórios'>
        {hours.length > 0 ? (
          hours.map((log) => (
            <View key={log.id}>
              <Text>ID: {log.id}</Text>
              <Text>Food Liberation: {log.food_liberation ? 'Yes' : 'No'}</Text>
              <Text>Portions: {log.portions}</Text>
              <Text>Food Level: {log.food_level}</Text>
              <Text>Created At: {log.created_at}</Text>
              {/* Renderize outros campos conforme necessário */}
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </Board>
      <CustomButton
        title="Menu principal"
        img_source={require('./imgs/relogio.png')}
        onPress={() => navigation.navigate("Index")}
      ></CustomButton>
    </Container>
  );
}

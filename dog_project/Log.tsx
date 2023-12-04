// Log.tsx
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';
import Container from './components/Container';
import Board from './components/Board';

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type LogProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Log'>;
};

export default function Log ({ navigation }: LogProps) {
  return (
    <Container>
      <Board tittle='Relatórios'>

      </Board>
      <CustomButton
        title="Menu principal"
        img_source={require('./imgs/relogio.png')}
        onPress={() => navigation.navigate("Index")}
      ></CustomButton>
    </Container>
  );
};


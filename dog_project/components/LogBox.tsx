// LogBox.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface LogBoxProps{
    id: number;
    created_at: string;
    portions: number;
    food_liberation: boolean;
    food_level: string;
}

export default function LogBox({id, created_at, portions, food_liberation, food_level}: LogBoxProps) {     
   
  // Simulação de dados da API
  return (
        <View key={id} style={styles.card}>
          <Text>Horário: {created_at}</Text>
          <Text>Quantidade de Porções: {portions}</Text>
          <Text>Nível de Comida: {food_level}%</Text>
          <View style={styles.checkboxContainer}>
            <Text>Liberado:</Text>
            <View style={styles.checkbox}>
              {food_liberation && <View style={styles.checkedBox} />}
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 12,
    height: 12,
    borderColor: '#000',
    borderWidth: 1,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    width: 8,
    height: 8,
    backgroundColor: '#00695c',
    },
});
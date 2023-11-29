// Log.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomButton from './components/CustomButton';

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type LogProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Log'>;
};

export default function Log ({ navigation }: LogProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bord}>
        <Text>Log Page</Text>
        <CustomButton
          title="Go to Index"
          onPress={() => navigation.navigate('Index')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#1E86E6',
    borderWidth: 30,
    borderTopWidth:50,
    backgroundColor: '#1E86E6',
    height: '100%',
    width: '100%',
  },
  bord: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: '#ffffff',
    borderWidth: 30,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
});


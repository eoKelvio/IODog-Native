// Index.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CustomButton from "./components/CustomButton";
import Box from "./components/Box";
import { Times } from "./components/Times";
import PopupEditar from "./components/BotaoEditar";

type RootStackParamList = {
  Index: undefined;
  Log: undefined;
};

type IndexProps = {
  navigation: StackNavigationProp<RootStackParamList, "Index">;
};

export default function Index ({ navigation }: IndexProps) {
  return (
    <View style={styles.container}>
      <View style={styles.bord}>
        <Text style={styles.title}>IODog</Text>
        <Box>
          <Text>Horários Programados</Text>
          <View style={styles.times}>
            <Times>09:00</Times>
            <Times>18:00</Times>
            <Times>22:00</Times>
          </View>
          <View>
            <PopupEditar/>
          </View>
        </Box>
        <Box>
          <View style={styles.div}>
            <View style={styles.imgView}>
              <Image source={require("./imgs/racao.png")} style={styles.icon} />
            </View>
            <View style={styles.divText}>
              <Text style={styles.textTitle}>Porções</Text>
              <View style={styles.divPortion}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.und}>Und.</Text>
              </View>
            </View>
          </View>
        </Box>
        <Box>
        <View style={styles.div}>
            <View style={styles.imgView}>
              <Image source={require("./imgs/sacoRacao.png")} style={styles.icon} />
            </View>
            <View style={styles.divText}>
              <Text style={styles.rationLvl}>Nivel de Ração</Text>
              <View style={styles.divPortion}>
                <Text style={styles.number}>75</Text>
                <Text style={styles.und}>%</Text>
              </View>
            </View>
          </View>
        </Box>
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          title="Informações e Relatórios"
          onPress={() => navigation.navigate("Log")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderColor: "#1E86E6",
    borderWidth: 30,
    borderTopWidth:50,
    backgroundColor: "#1E86E6",
    height: "100%",
    width: "100%",
  },
  bord: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#ffffff",
    borderWidth: 20,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "85%",
    gap: 33,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#1E86E6",
  },
  buttonView: {
    paddingTop: "10%",
    width: "100%",
  },
  times: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    gap: 5,
  },
  div: {
    flexDirection: "row",
    width: "auto",
    height: "auto",
  },
  icon: {
    width: 90,
    height: 90,
  },
  imgView: {
    display: 'flex',
    width: "50%",
    height: "auto",
  },
  divText: {
    display: 'flex',
    width: "50%",
    height: "auto",
    alignItems: 'center',
    gap: 10,
    paddingTop: 8, 
  },
  textTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600'
  },
  divPortion: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  und: {
    color: 'white',
    fontWeight: '600'
  },
  rationLvl: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});



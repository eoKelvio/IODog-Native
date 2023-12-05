import React, { ReactNode, useState } from 'react';
import { View, Text, StyleSheet, ViewStyle, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import PopUpPortion from './PopUpPortion';

import { getNumberFromAPI, sendToAPI } from '../scripts/fecthPortion';

interface PortionButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  image?: any;
  real_portion: any;
}

export default function PortionButton({ children, image, real_portion, ...restProps }: BoxProps) {
  const [isPopUpVisible, setPopUpVisible] = useState(false);
  const [apiResponse, setApiResponse] = useState('');

  const openPopUp = () => {
    setPopUpVisible(true);
  };

  const closePopUp = () => {
    setPopUpVisible(false);
  };

  const boxStyle: ViewStyle = {
    backgroundColor: '#1E86E6',
    width: '100%',
    height: 'auto',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  };

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const dataFromAPI = await getNumberFromAPI();
        // Set the result of the GET request to the state
        setApiResponse(`Número da API: ${dataFromAPI}`);
      } catch (error:any) {
        setApiResponse(`Erro ao obter número da API: ${error.message}`);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleSendDataToAPI = async (data: any) => {
    try {
      await sendToAPI(data);
      // After successful POST request, update the state with the result of the subsequent GET request
      const newDataFromAPI = await getNumberFromAPI();
      setApiResponse(`Número da API: ${newDataFromAPI}`);
    } catch (error:any) {
      console.error('Erro ao enviar dados para a API:', error.message);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={openPopUp}>
        <View style={boxStyle}>
          <View>
            <Image style={styles.imagen} source={require('../imgs/racao.png')} />
          </View>
          <View style={styles.divisor}>
            <View>
              <Text style={styles.defaultText}>Porções</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.altText}>{real_portion}</Text>
              <Text style={styles.defaultText}>Und</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* PopUpPortion component */}
      <PopUpPortion
        isVisible={isPopUpVisible}
        onClose={closePopUp}
        title="Definir Porção"
        initialValue="0"
        img1={require('../imgs/verifica.png')}
        img2={require('../imgs/cancelar.png')}
        handleSendDataToAPI={handleSendDataToAPI} // Adiciona a função de envio para o PopUp
      />
    </View>
  );
}


const styles = StyleSheet.create({
  imagen: {
    height: 90,
    width: 90,
  },
  defaultText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    textAlignVertical: 'bottom',
  },
  altText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '500',
  },
  divisor: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    gap: 10,
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
});

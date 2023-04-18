import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Box, Text, Center} from 'native-base';
import globalStyles from '../styles/global';
import firebase from '../firebase';
import Countdown from 'react-countdown';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Context de pedido
import PedidoContext from '../context/pedidos/pedidosContext';


const ProgresoPedido = () => {

    const [tiempo, guardarTiempo] = useState(0)

    const {idPedido} = useContext(PedidoContext);

    useEffect(() => {
      const obtenerProducto = () => {
        firebase.db.collection('ordenes')
            .doc(idPedido)
            .onSnapshot(function(doc){
                guardarTiempo(doc.data().tiempoEntrega)
            })
      }
      obtenerProducto()
    }, [])
    
    //Muestra el contdown en pantalla
    const renderer = ({minutes, seconds}) => {
        return (
            <Text fontSize={60}>
                {minutes}:{seconds}
            </Text>
        )
    }

    return (
        <Box style={globalStyles.contenedor}>
            <View style={[globalStyles.contenido, { marginTop:50 } ]}>

                {tiempo === 0 && (
                    <Center>
                        <Text bold>Hemos recibido tu orden...</Text>
                        <Text bold>Estamos calculando el tiempo de entrega</Text>
                    </Center>
                )}

                {tiempo > 0 && (
                    <Center>
                        <Text bold>Su orden estará lista en: </Text>
                        <Countdown
                            date={ Date.now() + tiempo * 60000}
                            renderer={ renderer }
                        />
                    </Center>
                )}
            </View>
        </Box>
     );
}
 
export default ProgresoPedido;
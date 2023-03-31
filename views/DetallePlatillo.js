import React, { useContext } from 'react'
import { Image, Text, Heading, Box, VStack, View} from 'native-base';
import globalStyles from '../styles/global';
import { StyleSheet } from 'react-native';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

const DetallePlatillo = () => {

    // Context de pedidos
    const { platillo } = useContext(PedidoContext);

    const {nombre, descripcion, precio, imagen, categoria} = platillo;

    return ( 
        
        <Box style={globalStyles.contenedor}>
            <Box style={globalStyles.contenido}>
                <Heading style={globalStyles.titulo}>{nombre}</Heading>

                <VStack style={globalStyles.card}>
                    <View>
                        <Image style={globalStyles.imagen} source={{uri: imagen}} alt={nombre}/>
                        <Text mt='5'>{descripcion}</Text>
                        <Text color='dark.500'>{categoria}</Text>
                        <Text bold fontSize={18} mt='3'>Precio: $ {precio}</Text>
                    </View>
                </VStack>
            </Box>
        </Box>
        
     );
}
 
export default DetallePlatillo;
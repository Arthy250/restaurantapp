import React, { useContext, useEffect} from 'react'
import { Heading, HStack, Box, VStack, Text, Image, Divider, ScrollView} from 'native-base';
import { StyleSheet, Alert } from 'react-native';

//Estilos
import globalStyles from '../styles/global';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

//Navigation
import { useNavigation } from '@react-navigation/native';

const ResumenPedido = () => {

    //Context de pedido
    const {pedido} = useContext(PedidoContext);

    return ( 
        <Box style={globalStyles.contenedor}>
            <Box style={globalStyles.contenido}>
                
                <Heading style={globalStyles.titulo}>Resumen pedido</Heading>

                <ScrollView>
                { pedido.map( (platillo, index) => {
                    const {nombre, cantidad, imagen, precio} = platillo;

                    return (
                        <Box key={index}>
                        
                            <HStack p={2} alignItems='center'>
                                
                                <Image size='100px' source={{uri: imagen}} alt={nombre}/>
                                
                                <VStack px={2}>
                                    <Text bold fontSize={16}>{nombre}</Text>
                                    <Text>Cantidad: {cantidad}</Text>
                                    <Text bold fontSize={16}>Precio: $ {precio}</Text>
                                </VStack>
                                
                            </HStack>
                            
                            <Divider bg="dark.500"/>
                        
                        </Box>
                    )
                })}
                </ScrollView>

                <Heading style={[globalStyles.titulo, {fontWeight: 'bold'}]}>Total a pagar: $</Heading>

            </Box>
        </Box>
     );
}
 
export default ResumenPedido;
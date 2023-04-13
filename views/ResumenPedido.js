import React, { useContext, useEffect} from 'react'
import { Heading, HStack, Box, VStack, Text, Image, Divider, ScrollView, Button, Center} from 'native-base';
import { StyleSheet, Alert } from 'react-native';

//Estilos
import globalStyles from '../styles/global';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

//Navigation
import { useNavigation } from '@react-navigation/native';

const ResumenPedido = () => {

    //Context de pedido
    const {pedido, total, mostrarTotal} = useContext(PedidoContext);

    useEffect(() => {
        calcularTotal();
    }, []);

    const calcularTotal = () => {
        
        let nuevoTotal = 0;
        // reduce para sumar todos los numeros del arreglo
        nuevoTotal = pedido.reduce( ( nuevoTotal, articulo ) => nuevoTotal + articulo.total, 0);

        mostrarTotal(nuevoTotal)
    }

    // Navegación al menu
    const navegacion = useNavigation();
    

    return ( 
        <Box style={globalStyles.contenedor}>
            
            <Heading style={globalStyles.titulo}>Resumen pedido</Heading>
            
            <ScrollView>
                

                <Box>
                { pedido.map( (platillo, i) => {
                    const {nombre, cantidad, imagen, precio} = platillo;

                    return (
                        <Box key={i}>
                        
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
                </Box>

                
            </ScrollView>
            <Box mb={7}>
                <Heading style={[globalStyles.titulo, {fontWeight: 'bold'}]}>Total a pagar: ${total}</Heading>
                <Center>
                    <HStack space={2} direction='column'>
                    
                    <Button 
                        bg='darkBlue.900'
                        onPress = { () => navegacion.navigate('Menu')}
                        minW='90%'
                        _pressed={{
                            backgroundColor:'darkBlue.900'
                        }}
                        >
                        <Text style={[globalStyles.botonTexto, {color:'#fff'}]}>Seguir pidiendo</Text>
                    </Button>

                    <Button 
                        style={globalStyles.boton} 
                        onPress = { () => navegacion.navigate('ProgresoPedido')}
                        minW='90%'
                        >
                        <Text style={globalStyles.botonTexto}>Ordenar</Text>
                    </Button>

                    </HStack>
                </Center>
            </Box>
        </Box>
     );
}
 
export default ResumenPedido;
import React, { useContext, useEffect} from 'react'
import { Heading, HStack, Box, VStack, Text, Image, Divider, ScrollView, Button, Center} from 'native-base';
import { Alert } from 'react-native';

//Estilos
import globalStyles from '../styles/global';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

//Navigation
import { useNavigation } from '@react-navigation/native';

// Iconos
import Icon from 'react-native-vector-icons/dist/Ionicons';

const ResumenPedido = () => {

    //Context de pedido
    const {pedido, total, mostrarTotal, eliminarProducto} = useContext(PedidoContext);

    useEffect(() => {
        calcularTotal();
    }, [pedido]);

    const calcularTotal = () => {
        
        let nuevoTotal = 0;
        // reduce para sumar todos los numeros del arreglo
        nuevoTotal = pedido.reduce( ( nuevoTotal, articulo ) => nuevoTotal + articulo.total, 0);

        mostrarTotal(nuevoTotal)
    }

    // Navegación al menu
    const navegacion = useNavigation();
    
    const progresoPedido = () => {
        Alert.alert(
            'Verifica tu pedido',
            '¿Olvidas ordenar algo más?',
            [
                {
                    text: 'Confirmar',
                    onPress: () => {
                        navegacion.navigate('ProgresoPedido')
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    //Eliminar productos del pedido
    const eliminarProductoPedido = id => {
        Alert.alert(
            'Eliminar producto',
            '¿Deseas eliminar este producto?',
            [
                {
                    text:'Eliminar',
                    onPress: () => {

                        //Eliminar del state
                        eliminarProducto(id);

                        //Recaulcular total
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'cancel'
                }
            ]
        )
    }

    return ( 
        <Box style={globalStyles.contenedor}>
            
            <Heading style={globalStyles.titulo}>Resumen pedido</Heading>
            
            <ScrollView>
                

                <Box>
                { pedido.map( (platillo, i) => {
                    const {nombre, cantidad, imagen, precio, id} = platillo;

                    return (
                        <Box key={id + i}>
                        
                            <HStack p={2} alignItems='center' justifyContent='space-around'>
                                
                                <HStack alignItems='center'>
                                    <Image size='100px' source={{uri: imagen}} alt={nombre}/>
                                    
                                    <VStack px={2}>
                                        <Text bold fontSize={16}>{nombre}</Text>
                                        <Text>Cantidad: {cantidad}</Text>
                                        <Text bold fontSize={16}>Precio: $ {(precio)}</Text>
                                    </VStack>
                                </HStack>
                                
                                <Button
                                    bg='error.700'
                                    colorScheme='error.700'
                                    style={{height: 50, justifyContent:'center'}}
                                    onPress = { () => eliminarProductoPedido(id)}
                                >
                                    <Icon name="close-outline" size={30} color="#fff"/>
                                </Button>
                                
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
                        onPress = { () => progresoPedido()}
                        shadow={1}
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
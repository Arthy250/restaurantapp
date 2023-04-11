import React, {useState, useContext, useEffect} from 'react'
import { Heading, Box, VStack, Button, HStack, Input, FormControl, Center, Text} from 'native-base';
import { Alert } from 'react-native';

//Estilos
import globalStyles from '../styles/global';

// Iconos
import Icon from 'react-native-vector-icons/dist/Ionicons';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

//Navigation
import { useNavigation } from '@react-navigation/native';

const FormularioPedido = () => {

    //State para cantidades
    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0)

    // Context de pedidos
    const { platillo, guardarPedido } = useContext(PedidoContext);
    const {precio} = platillo;

    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar);
    }

    const calcularCantidad = (cantidad) => {
        guardarCantidad(cantidad)
    }

    const incrementarUno = () => {
        const nuevaCantidad = parseInt(cantidad) + 1
        guardarCantidad(nuevaCantidad);
    }

    const decrementarUno = () => {
        if(cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) - 1
            guardarCantidad(nuevaCantidad);
        }
    }

    useEffect(() => {
      calcularTotal();
    }, [cantidad])
    
    //redireccionar al menu
    const navegacion = useNavigation();
    
    //Confirmar si la orden es correcta
    const confirmarOrden = () => {
        Alert.alert(
            'Confirmar pedido', 
            '¿Desea confirmar su pedido?',
        [
            {
                text:'OK',
                onPress: () => {
                    //Almacenar el pedido
                    const pedido = {
                        ...platillo,
                        cantidad,
                        total
                    } 
                    guardarPedido(pedido);

                    //Navegar hacia el resumen del pedido
                    navegacion.navigate('ResumenPedido');
                }},
            {
                text:'CANCELAR', 
                style:'cancel'
            },
        ])
    }


    return (
        <Box style={globalStyles.contenedor}>
            <Box style={globalStyles.contenido}>
                <FormControl>
                    <Heading style={globalStyles.titulo}>Cantidad</Heading>
                    <HStack space={10} justifyContent='space-around' alignItems='center'>
                        
                        <VStack width='33%'>
                            <Button
                                bg='black'
                                colorScheme='coolGray'
                                style={{height: 50, justifyContent:'center'}}
                                onPress={ () => decrementarUno() }
                            >
                                <Icon name="remove" size={30} color="#fff"/>
                            </Button>
                        </VStack>
                        
                        <VStack width='33%'>
                            <Input 
                                value={cantidad.toString()}
                                onChangeText={ cantidad => calcularCantidad(cantidad) }
                                keyboardType='numeric'
                                width='100%'
                                variant="unstyled"
                                style={{ fontSize:20, textAlign:'center' }}/>
                        </VStack>

                        <VStack width='33%'>
                            <Button
                                bg='black'
                                colorScheme='coolGray'
                                style={{height: 50, justifyContent:'center'}}
                                onPress={ () => incrementarUno() }
                            >
                                <Icon name="add" size={30} color="#fff"/>
                            </Button>
                        </VStack>

                    </HStack>
                        <Heading style={[globalStyles.titulo, {fontWeight:'bold'}]}>Subtotal: ${total}</Heading>
                </FormControl>
            </Box>
            
            <Box safeAreaBottom={6} width='100%' alignSelf='center'>
       
                <HStack>
                    <Button rounded={0} flex={1} style={{backgroundColor:'#FFDA00'}}
                            onPress= { () => confirmarOrden()}>
                        <Center>
                            <Text color='black' fontSize='16' bold textTransform='uppercase'>Agregar al pedido</Text>
                        </Center>
                    </Button>
                </HStack>
                
            </Box>

        </Box>
     );
}
 
export default FormularioPedido;
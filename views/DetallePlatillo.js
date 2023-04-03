import React, { useContext } from 'react'
import { Image, Text, Heading, Box, VStack, View, Button, HStack, Center} from 'native-base';
import globalStyles from '../styles/global';
import { StyleSheet } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';

const DetallePlatillo = () => {

    const navigation = useNavigation();

    // Context de pedidos
    const { platillo } = useContext(PedidoContext);

    const {nombre, descripcion, precio, imagen, categoria} = platillo;

    const [selected, setSelected] = React.useState(1);

    return ( 
        
        <Box style={globalStyles.contenedor}>
            <Box style={globalStyles.contenido}>
                <Heading style={globalStyles.titulo}>{nombre}</Heading>

                <VStack style={globalStyles.card}>
                    <View>
                        <Image style={globalStyles.imagen} source={{uri: imagen}} alt={nombre}/>
                        <Text mt='5'>{descripcion}</Text>
                        <Text color='dark.500'>{categoria}</Text>
                        <Text bold fontSize='2xl' mt='3'>Precio: $ {precio}</Text>
                    </View>
                </VStack>
            </Box>

            <Box safeAreaBottom={6} width='100%' alignSelf='center'>
       
                <HStack>
                    <Button rounded={0} flex={1} style={{backgroundColor:'#FFDA00'}}
                    onPress={ () => navigation.navigate('FormularioPedido')}
                    >
                        <Center>
                            <Text color='black' fontSize='16' bold>Ordenar platillo</Text>
                        </Center>
                    </Button>
                </HStack>
            </Box>
        </Box>
        
     );
}
 
export default DetallePlatillo;
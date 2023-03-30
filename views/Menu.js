import React, {useContext, useEffect, Fragment} from 'react';
import { StyleSheet } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

import { 
    Image,
    Text,
    FlatList,
    Box,
    HStack,
    VStack,
    Pressable,
    Divider
} from 'native-base';
import globalStyles from '../styles/global';

// Context
import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';

const Menu = () => {

    // Context de Firebase
    const { menu, obtenerproductos } = useContext(FirebaseContext);

    // Context de pedidos
    const { seleccionarPlatillo } = useContext(PedidoContext);

    // Redireccionar
    const navigation = useNavigation();

    useEffect(() => {
      obtenerproductos();
    }, []);

    const mostrarHeading = (categoria, i) => {

        if ( i > 0 ) {
            const categoriaAnterior = menu[ i - 1 ].categoria;

                if(categoriaAnterior !== categoria){
                    return(
                        <Box bgColor='dark.50' p={2}>
                            <Text style={styles.separadorTexto}>{categoria}</Text>
                        </Box>
                    )
                } 
        } else {
            return(
                <Box bgColor='dark.50' p={2}>
                    <Text style={styles.separadorTexto}>{categoria}</Text>
                </Box>
            )
        }
        
    }
    
    return ( 
        <FlatList 
            data={menu}
            renderItem={ ({ item, index }) => 

            <Pressable onPress={ () => {
                
                //Eliminar propiedades que no se van a utilizar
                const {existencia, ...platillo2} = item;

                seleccionarPlatillo(platillo2);
                navigation.navigate('DetallePlatillo');
            }}>
                
            {({ isPressed }) => {

                return <Box bg={isPressed ? "dark.700" : "dark.900"}>
            
                { mostrarHeading (item.categoria, index) }
            
                <HStack p={2} alignItems='center'>

                    <Image size='100px' source={{uri:item.imagen}} alt={item.nombre}/>
                    
                    <VStack style={globalStyles.contenido} px={2}>
                        <Text bold fontSize={16}>{item.nombre}</Text>
                        <Text noOfLines={2} isTruncated color='dark.400'>{item.descripcion}</Text>
                        <Text bold fontSize={16}>Precio: $ {item.precio}</Text>
                    </VStack>
                    
                </HStack>
                
                <Divider bg="dark.700"/>
                </Box>

            }}
            </Pressable>
        } 
            keyExtractor={item => item.id} />
     );
}

const styles = StyleSheet.create({
    separadorTexto:{
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Menu;
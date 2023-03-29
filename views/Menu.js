import React, {useContext, useEffect, Fragment} from 'react';
import { StyleSheet } from 'react-native';
import FirebaseContext from '../context/firebase/firebaseContext';
import { 
    Image,
    Text,
    FlatList,
    Box,
    HStack,
    VStack
} from 'native-base';
import globalStyles from '../styles/global';

const Menu = () => {

    // Context de Firebase
    const { menu, obtenerproductos } = useContext(FirebaseContext);

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

            <Fragment>
            
                { mostrarHeading (item.categoria, index) }
            
                <HStack borderBottomWidth={1} borderColor="dark.700" p={2} alignItems='center'>

                    <Image size={100} source={{uri:item.imagen}} alt={item.nombre}/>
                    
                    <VStack style={globalStyles.contenido} px={2}>
                        <Text bold fontSize={16}>{item.nombre}</Text>
                        <Text noOfLines={2} isTruncated color='dark.400'>{item.descripcion}</Text>
                        <Text bold fontSize={16}>Precio: $ {item.precio}</Text>
                    </VStack>
                    
                </HStack>
            </Fragment>
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
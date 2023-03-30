import React, { useContext } from 'react'
import { Image, View, Text, Heading } from 'native-base';

//Context
import PedidoContext from '../context/pedidos/pedidosContext';


const DetallePlatillo = () => {

    // Context de pedidos
    const { platillo } = useContext(PedidoContext);

    const {nombre, descripcion, precio, imagen, categoria} = platillo;

    return ( 
        <View>
            <Image width='full' height={300} source={{uri:imagen}} alt={nombre} />
            <View p={3}>
                <Heading>{nombre}</Heading>
                <Text>{categoria}</Text>
                <Text textAlign='justify'>{descripcion}</Text>
                <Text bold>Precio: $ {precio}</Text>
            </View>
        </View>
     );
}
 
export default DetallePlatillo;
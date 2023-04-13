import React, { useContext } from 'react'
import { Heading, HStack, Box, VStack, Text, Image, Divider, ScrollView, Button, Center} from 'native-base';

// Context de pedido
import PedidoContext from '../context/pedidos/pedidosContext';


const ProgresoPedido = () => {

    const {pedido, total} = useContext(PedidoContext);

    return ( 
        <Text>Desde progreso pedido</Text>
     );
}
 
export default ProgresoPedido;
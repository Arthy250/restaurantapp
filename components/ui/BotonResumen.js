import React, { useContext } from 'react';
import { Button, Text } from 'native-base';
import globalStyles from '../../styles/global';

//Navigation
import { useNavigation } from '@react-navigation/native';

//Context
import PedidoContext from '../../context/pedidos/pedidosContext';


const BotonResumen = () => {
    
    //Navegacion
    const navegacion = useNavigation();

    //Leer el objeto del pedido
    const {pedido} = useContext(PedidoContext);

    if (pedido.length === 0) return null;

    return (
        <Button
            onPress={ () => navegacion.navigate('ResumenPedido')}
            style={globalStyles.boton}
            >
            <Text style={globalStyles.botonTexto}>Ir a pedido</Text>
        </Button>
    )
}

export default BotonResumen;
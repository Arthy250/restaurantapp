import React, {useReducer} from 'react'

import pedidosReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'

// Types
import { 
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO,
    MOSTRAR_TOTAL_PEDIDO
} from '../../types'


const PedidoState = (props) => {

    // Crear state inicial
    const initialState = {
        pedido: [],
        platillo: null,
        total: 0
    }

    // useReucer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(pedidosReducer, initialState)

    // Selecciona el producto que el usuario desea ordenar
    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }

    //Cuando el usuario confirma un pedido
    const guardarPedido = pedido => {
        dispatch({
            type: CONFIRMAR_ORDENAR_PLATILLO,
            payload:pedido
        })
    }

    //Muestra el total en el resumen
    const mostrarTotal = total => {
        dispatch({
            type: MOSTRAR_TOTAL_PEDIDO,
            payload: total
        })
    } 

    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                seleccionarPlatillo,
                guardarPedido,
                mostrarTotal
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
import React, {useReducer} from 'react'

import pedidosReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'

// Types
import { 
    SELECCIONAR_PRODUCTO,
    CONFIRMAR_ORDENAR_PLATILLO,
    MOSTRAR_TOTAL_PEDIDO,
    ELIMINAR_PRODUCTO,
    PEDIDO_ORDENADO
} from '../../types'


const PedidoState = (props) => {

    // Crear state inicial
    const initialState = {
        pedido: [],
        platillo: null,
        total: 0,
        idPedido:''
    }

    // useReucer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(pedidosReducer, initialState);

    // Selecciona el producto que el usuario desea ordenar
    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }

    //Cuando el usuario confirma un pedido
    const guardarPedido = pedido => {

        //Verificar si el platillo se encuentra en el pedido
        const platilloExistente = state.pedido.find( articulo => articulo.id === pedido.id );

        if(platilloExistente){
            platilloExistente.cantidad = platilloExistente.cantidad + pedido.cantidad
            platilloExistente.total = platilloExistente.total + pedido.total
        } else {
            dispatch({
                type: CONFIRMAR_ORDENAR_PLATILLO,
                payload:pedido
            })
        }

    }

    //Muestra el total en el resumen
    const mostrarTotal = total => {
        dispatch({
            type: MOSTRAR_TOTAL_PEDIDO,
            payload: total
        })
    }

    //Elimina un producto del pedido
    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    //Pasar el pedido al cliente
    const pedidoRealizado = id => {
        dispatch({
            type: PEDIDO_ORDENADO,
            payload: id
        })
    }

    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                total: state.total,
                idPedido: state.idPedido,
                seleccionarPlatillo,
                guardarPedido,
                mostrarTotal,
                eliminarProducto,
                pedidoRealizado
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
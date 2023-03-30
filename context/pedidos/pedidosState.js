import React, {useReducer} from 'react'

import pedidosReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'

// TYPES
import { SELECCIONAR_PRODUCTO } from '../../types'


const PedidoState = (props) => {

    // Crear state inicial
    const initialState = {
        pedido: [],
        platillo: null
    }

    // useReucer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(pedidosReducer, initialState)

    // Selecciona el producto que el usuario desea ordenar
    const seleccionarPlatillo = (platillo) => {
        dispatch({
            type: SELECCIONAR_PRODUCTO,
            payload: platillo
        })
    }

    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
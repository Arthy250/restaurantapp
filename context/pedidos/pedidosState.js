import React, {useReducer} from 'react'

import pedidosReducer from './pedidosReducer'
import PedidoContext from './pedidosContext'



const PedidoState = (props) => {

    // Crear state inicial
    const initialState = {
        pedido: []
    }

    // useReucer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(pedidosReducer, initialState)

    return(
        <PedidoContext.Provider 
            value={{
                pedido: state.pedido
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )
}

export default PedidoState;
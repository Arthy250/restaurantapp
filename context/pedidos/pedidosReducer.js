// TYPES
import { 
    SELECCIONAR_PRODUCTO, 
    CONFIRMAR_ORDENAR_PLATILLO,
    MOSTRAR_TOTAL_PEDIDO,
    ELIMINAR_PRODUCTO, 
    PEDIDO_ORDENADO} from '../../types'

export default (state, action) => {
    switch (action.type) {

        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                platillo: action.payload
            }
        
        case CONFIRMAR_ORDENAR_PLATILLO:
            return{
                ...state,
                pedido: [...state.pedido, action.payload]
            }

        case MOSTRAR_TOTAL_PEDIDO:
            return{
                ...state,
                total: action.payload
            }
        
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                pedido: state.pedido.filter( articulo => articulo.id !== action.payload )
            }

        case PEDIDO_ORDENADO:
            return{
                ...state,
                pedido: [],
                total: 0,
                idPedido: action.payload
            }

        default:
            return state;
    }
}
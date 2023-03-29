import React, {useReducer} from 'react'

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import { OBTENER_PRODUCTOS_EXITO } from '../../types'

// Lodash para ordenar/filtrar los productos
import _ from 'lodash';

const FirebaseState = (props) => {

    // Crear state inicial
    const initialState = {
        menu: []
    }

    // useReucer con dispatch para ejecutar las funciones
    const [state, dispatch] = useReducer(FirebaseReducer, initialState);

    // Función que se ejecuta para traer los productos
    const obtenerproductos = () => {

        //Consulta a la bd en firebase
        firebase.db
                .collection('productos')
                .where('existencia', '==' ,true) // traer solo los que se encuentren en existencia
                .onSnapshot(manejarSnapshot);
        
        function manejarSnapshot(snapshot){
            let platillos = snapshot.docs.map( doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            } );

        //Ordenar por categorias con lodash
        platillos = _.sortBy(platillos, 'categoria');

        // asignar los resultados de la base de datos

        dispatch({
            type: OBTENER_PRODUCTOS_EXITO,
            payload: platillos
        });

        }
    }

    return(
        <FirebaseContext.Provider 
            value={{
                menu: state.menu,
                firebase,
                obtenerproductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;
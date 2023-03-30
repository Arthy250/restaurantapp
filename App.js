import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Vistas
import NuevaOrden from './views/NuevaOrden';
import Menu from './views/Menu';
import DetallePlatillo from './views/DetallePlatillo';
import FormularioPedido from './views/FormuarioPlatillo';
import ResumenPedido from './views/ResumenPedido';
import ProgresoPedido from './views/ProgresoPedido';

// Importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidosState';

// Native base
import { NativeBaseProvider } from 'native-base';


const Stack = createStackNavigator()

const App = () => {

  return (
    <NativeBaseProvider>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle:{
                  backgroundColor: '#FFDA00'
                },
                headerTitleStyle:{
                  fontWeight: 'bold'
                },
                headerTintColor: '#000'
              }}
            >
              
              <Stack.Screen name='NuevaOrden' component={NuevaOrden} options={{ title: 'Nueva Orden' }}/>

              <Stack.Screen name='Menu' component={Menu} options={{ title: 'Nuestro menu' }}/>

              <Stack.Screen name='DetallePlatillo' component={DetallePlatillo} options={{ title: 'Detalle del platillo' }}/>

              <Stack.Screen name='FormularioPedido' component={FormularioPedido} options={{ title: 'Ordenar platillo' }}/>

              <Stack.Screen name='ResumenPedido' component={ResumenPedido} options={{ title: 'Resumen pedido' }}/>
              
              <Stack.Screen name='ProgresoPedido' component={ProgresoPedido} options={{ title: 'Progreso pedido' }}/>
            
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </NativeBaseProvider>
  );
}



export default App;

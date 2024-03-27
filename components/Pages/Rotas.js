import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import CadMusica from './CadMusica';
import AlterarMusica from './AlterarMusica';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTintColor: '#9ac234' }}
        />
        <Stack.Screen
          name="CadMusica"
          component={CadMusica}
          options={{ headerTintColor: '#9ac234', title: 'Cadastro de Música' }}
        />
        <Stack.Screen
          name="AlterarMusica"
          component={AlterarMusica}
          options={{ headerTintColor: '#9ac234', title: 'Alterar Música' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/components/Introduction/Welcome';
import Formulary from './src/components/Introduction/Formulary';
import Person from './src/components/Main/Person';
import History1 from './src/components/History/History1';
import History2 from './src/components/History/History2';
import History3 from './src/components/History/History3';
import History4 from './src/components/History/History4';
import History5 from './src/components/History/History5';
import History6 from './src/components/History/History6';
import History7 from './src/components/History/History7';
import Photos from './src/components/History/Photos';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Formulary" component={Formulary} />
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="History1" component={History1} />
        <Stack.Screen name="History2" component={History2} />
        <Stack.Screen name="History3" component={History3} />
        <Stack.Screen name="History4" component={History4} />
        <Stack.Screen name="History5" component={History5} />
        <Stack.Screen name="History6" component={History6} />
        <Stack.Screen name="History7" component={History7} />
        <Stack.Screen name="Photos" component={Photos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react'

import {Text,View} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/home/Home';
import Login from './src/screens/login/Login';
import SignUp from './src/screens/signup/SignUp';
import AddEntries from './src/screens/AddEntries/AddEntries';
import EditEntries from './src/screens/EditEntries/EditEntries';

import AppNavigator from './src/navigation/appNavigator';
import AppContainer from './src/navigation/index';


const Stack = createNativeStackNavigator();

function App()
{
  return(
    <>
      <AppContainer/>

      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name="AddEntries" component={AddEntries} options={{headerShown:false}}/>
        <Stack.Screen name="EditEntries" component={EditEntries} options={{headerShown:false}}/>
      
        
      </Stack.Navigator> */}
   </>
  )
}
export default App;
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEntries from '../screens/AddEntries/AddEntries';
import EditEntries from '../screens/EditEntries/EditEntries';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/SignUp';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

function AuthNavigator (){
  return(

    <Stack.Navigator> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      
    </Stack.Navigator>

  )
}    

export default AuthNavigator 
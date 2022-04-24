import React from 'react'



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEntries from '../screens/AddEntries/AddEntries';
import EditEntries from '../screens/EditEntries/EditEntries';
import Home from '../screens/home/Home';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return(

    <Stack.Navigator> 
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="AddEntries" component={AddEntries} options={{headerShown:false}}/>
      <Stack.Screen name="EditEntries" component={EditEntries} options={{headerShown:false}}/>  
    </Stack.Navigator>

  )
}    

export default AppNavigator 
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';


// import navigators
import AppNavigator from './appNavigator';
import AuthNavigator from './authNavigator';

// firebase auth
import auth from '@react-native-firebase/auth';

export default AppContainer = () => {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

   // Handle user state changes
    function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '302448787211-47vtpjhmq78hh88d43vmjmabct8dn34l.apps.googleusercontent.com',
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

    return(
        <NavigationContainer>
            { user ? <AppNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}
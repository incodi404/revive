import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/stacks/RootStack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID } from './constant';

const App = () => {

  // OAuth Setup would go here
  GoogleSignin.configure({
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });

  return (
   <>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
   </>
  )
}

export default App
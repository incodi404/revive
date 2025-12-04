import { View, Text } from 'react-native';
import React from 'react';
import Signin from '../screens/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootStack;

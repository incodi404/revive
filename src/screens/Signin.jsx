import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Signin = () => {

  const signinWithGoogle = async () => {
    // Google Signin logic would go here
    try {
      // Ensure play services are available
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the user ID token
      const userInfo = await GoogleSignin.signIn();
      console.log('User Info --> ', userInfo);
      Alert.alert('Success', 'Google Signin successful');
    } catch (error) {
      console.log('Google Signin Error', Object.keys(error).map(key => error[key]).join(', '));
      Alert.alert('Error', 'Google Signin failed');
    }
  }

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
          onPress={signinWithGoogle}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>
            Google Signin
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signin;

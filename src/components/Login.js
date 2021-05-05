import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../images/logo.png')}/>
      </View>
      <View style={styles.formContainer}>
       <LoginForm/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(35,131,195)',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  },
  formContainer: {

  }
});

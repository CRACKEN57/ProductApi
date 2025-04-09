
import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Iniciar sesión" }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: "Registrarse"}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lista de productos"}} />
    </Stack.Navigator> 
  )
}

export default StackNavigator
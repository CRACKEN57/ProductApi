import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginStyles } from '../styles/Login.styles';

const LoginScreen = ({ navigation }: any) => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const manejarLogin = async () => {
    if (!correo || !password) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    try {
      const data = await AsyncStorage.getItem('usuarios');
      const usuarios = data ? JSON.parse(data) : [];

      const usuario = usuarios.find((u: any) => u.email === correo &&
       u.password === password);

      if (usuario) {
        await AsyncStorage.setItem('usuarioActivo', JSON.stringify(usuario));
        navigation.replace('Home', { user: usuario.nombre });
      } else {
        Alert.alert('Error', 'Credenciales incorrectas');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo validar el usuario');
    }
  };

  return (
    <View style={LoginStyles.container}>
      <Text style={LoginStyles.text}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Correo"
        style={LoginStyles.input}
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={LoginStyles.input}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Ingresar" onPress={manejarLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={LoginStyles.registerText}>¿No tienes cuenta? Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
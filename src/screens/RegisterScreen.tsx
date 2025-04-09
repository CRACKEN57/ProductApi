import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { RegisterStyles } from '../styles/Register.styles'

const RegisterScreen = ({ navigation }: any) => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const manejarRegistro = async () => {
        if (!nombre || !email || !pass) {
            Alert.alert('Error', 'Campos obligatorios');
            return;
        }

        try {
            const data = await AsyncStorage.getItem('usuarios');
            const usuarios = data ? JSON.parse(data) : [];
            const existe = usuarios.find((u: any) => u.email === email);
            if (existe) {
                Alert.alert('Error', 'El correo ya existe');
                return;
            }
            const nuevoUsuario = { nombre, email, password: pass };
            usuarios.push(nuevoUsuario); //Agregar el nuevo usuario al arreglo
            await AsyncStorage.setItem('usuarios', JSON.stringify(usuarios)); //Guardar el arreglo actualizado en AsyncStorage
            Alert.alert('Éxito', 'Registro Compleatado')
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error', 'Error al guardar el usuario')
        }
    }
    return (
        <View style={RegisterStyles.container}>
            <Text style={RegisterStyles.text}>Registrarse</Text>

            <TextInput placeholder='Nombre' style={RegisterStyles.input}
                value={nombre} onChangeText={setNombre}></TextInput>
            <TextInput placeholder='Correo' style={RegisterStyles.input}
                value={email} onChangeText={setEmail}></TextInput>
            <TextInput placeholder='Contraseña' secureTextEntry style={RegisterStyles.input}
                value={pass} onChangeText={setPass}></TextInput>

            <Button title='Crear Cuenta' onPress={manejarRegistro}></Button>

        </View>
    )
}

export default RegisterScreen
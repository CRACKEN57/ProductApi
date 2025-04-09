import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { ActivityIndicator, View,Text } from 'react-native';
import { SplashStyles } from '../styles/Splash.styles';


const SplashScreen = ({ navigation }: any) => {
    useEffect(() => {
        const verifyLoginUser = async () => {
            try {
                const user = await AsyncStorage.getItem("LoginUser");
                setTimeout(() => {
                    if (user) {
                        navigation.replace("Home");
                    } else {
                        navigation.replace("Login");
                    }
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        };
        verifyLoginUser();
    }, [navigation]);

    return (
        <View style={SplashStyles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

export default SplashScreen;
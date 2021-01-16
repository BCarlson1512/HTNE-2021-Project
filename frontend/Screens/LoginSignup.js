import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, Alert, Box, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import background from '../assets/wallpaper.jpeg';




function LoginSignup(props) {
    return (
        <ImageBackground source={background} style={styles.backgroundContainer}>
            <Text style={styles.titleText}>Welcome! {'\n'} Sign in below!</Text>
            <TextInput style={styles.inputField}
                placeholder={'Email Address'}
                placeholderTextColor={"white"}
                textAlign={"center"}
            />

            <TextInput style={styles.passwordField}
                placeholder={'Password'}
                placeholderTextColor={"white"}
                textAlign={"center"}
            />

            <View style={styles.container}>
                <Text style={styles.buttonText}>Login</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    container: {
        backgroundColor: "rgba(229,121,5,1)",
        borderRadius: 30,
        width: 215,
        height: 78,
        marginTop:20
      },

    titleText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    
    inputField: {
        width: 250,
        height: 40,
        borderRadius: 45,
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        color: 'rgba(255, 255, 255, 0.75)',
        
    },

    passwordField: {
        width: 250,
        height: 40,
        borderRadius: 45,
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        color: 'rgba(255, 255, 255, 0.75)',
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 180
    },

    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },

      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})

export default LoginSignup;
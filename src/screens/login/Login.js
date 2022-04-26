import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import styles from './login.style';
import { Auth } from '../../services';
const Login = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Sign In</Text>
                <Text style={styles.lowerText}>sign in to continue!</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.textStyle}>Email</Text>
                <TextInput
                    value={email}
                    style={[styles.textInputStyle, { textTransform: 'lowercase' }]}
                    placeholder="Enter Company Email"
                    placeholderTextColor={'#c2c1c9'}
                    keyboardType={"email-address"}
                    autoCapitalize={"none"}
                    onChangeText={(value) => setEmail(value)}
                >

                </TextInput>
                <Text style={styles.textStyle}>Password</Text>
                <TextInput

                    style={styles.textInputStyle}
                    placeholder="Enter Password"
                    placeholderTextColor={'#c2c1c9'}
                    keyboardType={"default"}
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                >
                </TextInput>
                <TouchableOpacity
                    style={[styles.touchableStyle,{backgroundColor:'lightblue'}]}
                    onPress={() => Auth.signIn(email, password)}>
                    <Text style={styles.signInButton}>SignIn with Email</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchableStyle,{top:47,backgroundColor:'#E74C3C'}]}
                    onPress={() => Auth.googleLogin()}>
                    <Text style={[styles.signInButton]}> SignIn with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchableStyle,{top:50,}]}
                    onPress={() => Auth.facebookSignIn()}>
                    <Text style={[styles.signInButton]}>SignIn with Facebook</Text>
                </TouchableOpacity>
                <Text style={styles.before}>Don't have an account?</Text>
                <TouchableOpacity
                    style={{top:'6.3%',left:24
                    }}
                    onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default Login;

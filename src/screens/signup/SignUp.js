import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import styles from './SignUp.style';
import { Auth } from '../../services';
const SignUp = ({ navigation }) => {
    const [fullName, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Sign Up</Text>
                <Text style={styles.lowerText}>sign up to join!</Text>
            </View>
            <View style={styles.inputView}>
                <Text style={styles.textStyle}>Name</Text>
                <TextInput
                    value={fullName}
                    style={styles.textInputStyle}
                    placeholder="Enter Full Name"
                    placeholderTextColor={'#c2c1c9'}
                    keyboardType={"default"}
                    autoCapitalize={"none"}
                    onChangeText={(value) => setName(value)}
                >
                </TextInput>
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
                    style={styles.touchableStyle}
                    onPress={ () => Auth.signUp(fullName, email, password)}>
                    <Text style={styles.signUpButton}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.before}>Already have an account?</Text>
                <TouchableOpacity
                    style={{
                        top: '2%'
                    }}
                    onPress={ () =>navigation.navigate("Login")}>
                         {/*  */}
                    <Text style={styles.signUp}>Sign In</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    );
}
export default SignUp;

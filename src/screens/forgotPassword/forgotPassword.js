import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    SafeAreaView
   
} from 'react-native';
import { Card } from 'react-native-paper';
import styles from './AddEntries.style';

const forgotPassword = ({ navigation }) => {
  
    const [email, setEmail] = useState()
   

    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Add Entries</Text>
                
            </View>
            <View style={styles.entries}>
           
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
            
               
                <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.addEntryButton}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default forgotPassword;
// const styles = StyleSheet.create(
//     {
//         mainView: {
//             flex: 1
//         },
//         headerView: {
//             backgroundColor: 'dodgerblue', flexDirection: 'row', flex: 0.30
//         },
//         entries: {
//             flex: 4
//         },
//         headerText: {
//             fontSize: 23, fontWeight: 'bold', marginLeft: '2%', top: 6, color: 'black'
//         },
      
     
//         textInputStyle: {
//             borderColor: 'black',
//             borderWidth: 1,
//             borderRadius: 10,
//             margin: 20,
//             padding: 5,
//             color: "black"
//         },
       
//         textStyle: {
//             fontSize: 20, color: 'black', fontWeight: 'bold', left: '5%', top: '3%'
//         },
      
//         touchableStyle: {
//             alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30,
//             marginLeft: '7%', marginRight: '7%', height: '8%', top: '5%'
//         },
//         addEntryButton: {
//             fontSize: 20, color: 'black', fontWeight: 'bold'
//         },
//     }
// );

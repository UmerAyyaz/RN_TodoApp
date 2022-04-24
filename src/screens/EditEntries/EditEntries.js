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
import styles from './EditEntries.style';


const EditEntries = ({ navigation }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [currentProject, setcurrentProject] = useState()
    const [jobTitle, setjobTitle] = useState()

    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Edit Entries</Text>
                
            </View>
            <View style={styles.entries}>
            <Text style={styles.textStyle}>Name</Text>
                <TextInput
                    value={name}
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
                <Text style={styles.textStyle}>Current Project Title</Text>
                <TextInput
                    value={currentProject}
                    style={styles.textInputStyle}
                    placeholder="Enter Project Name"
                    placeholderTextColor={'#c2c1c9'}
                    keyboardType={"default"}
                    autoCapitalize={"none"}
                    onChangeText={(value) => setcurrentProject(value)}
                >
                </TextInput>
                <Text style={styles.textStyle}>Job title</Text>
                <TextInput
                    value={jobTitle}
                    style={styles.textInputStyle}
                    placeholder="Enter Job Title"
                    placeholderTextColor={'#c2c1c9'}
                    keyboardType={"default"}
                    autoCapitalize={"none"}
                    onChangeText={(value) => setjobTitle(value)}
                >
                </TextInput>
               
                <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.addEntryButton}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchableStyle,{top:'6%'}]}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.addEntryButton}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchableStyle,{top:'7%'}]}
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.addEntryButton}>Back</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
export default EditEntries;



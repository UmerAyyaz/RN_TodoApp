import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';
import { Card } from 'react-native-paper';
import styles from './home.style';
import { Auth } from '../../services';
const data = [
    //just for designing
    { id: 1, txt: 'Entry 1' },
    { id: 2, txt: 'Entry 2' },
    { id: 3, txt: 'Entry 3' },
];
const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Home</Text>
                <ImageBackground source={require('../../assets/plus_icon.png')} style={styles.plusIcon}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddEntries')}>
                        <Text style={styles.ct}></Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.entries}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Card style={{ margin: 5 }}>
                            <View style={styles.card1}>
                                <View
                                    style={{
                                        flexDirection: 'column',
                                        flex: 1,
                                        justifyContent: 'space-between',

                                    }}>
                                    <TouchableOpacity
                                        style={{}}
                                        onPress={() => navigation.navigate('EditEntries')}>
                                        <Text style={styles.entriesText}>{item.txt}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <ImageBackground source={require('../../assets/del1.png')} style={styles.contact1}>
                                        <TouchableOpacity
                                            style={{ top: 20 }}
                                            onPress={async () => {

                                                alert('Are you sure  you want to delete ?')
                                            }}>
                                            <Text style={styles.ct}></Text>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </View>
                        </Card>
                    )}
                />
            </View>

            <TouchableOpacity
                    style={styles.touchableStyle}
                    onPress={() => Auth.signOut()}>
                    <Text style={styles.signUpButton}>Sign Out</Text>
                </TouchableOpacity>
        </SafeAreaView>
    );
}
export default Home;


import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import { Card } from 'react-native-paper';
import styles from './home.style';
import { Auth } from '../../services';
import { Product } from '../../services';
const data = [
    //just for designing
    { id: 1, txt: 'Entry 1' },
    { id: 2, txt: 'Entry 2' },
    { id: 3, txt: 'Entry 3' },
];
const Home = ({ navigation }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Product.getProduct()
        .then( prod => 
            setProducts(prod),
            
            setLoading(false),
            console.log(products)
        )
        .catch( err =>alert(err.code, err.message))
    })

    if(loading){
        return <ActivityIndicator 
                    color= {'red'}
                    size= 'large'
                />
    }
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
                    data={products}
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
                                        <Text style={styles.entriesText}>{item.name}</Text>
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


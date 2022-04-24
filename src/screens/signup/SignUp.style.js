import {StyleSheet} from 'react-native'
const styles = StyleSheet.create(
    {
        mainView: {
            flex: 2,
        },
        topView: {
            flex: 1
        },
        inputView: {
            flex: 9,
            top: '17%',
        },
        topText: {
            color: 'black',
            fontSize: 39,
            fontWeight: 'bold',
            top: '70%',
            left: '3%'
        },
        lowerText: {
            color: 'gray',
            top: '70%',
            left: '3%'
        },
        buttonView: {
            flex: 3,
            backgroundColor: 'lightyellow'
        },
        textInputStyle: {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            margin: 20,
            padding: 5,
            color: "black"
        },
        ct: {
        },
        textStyle: {
            fontSize: 20, color: 'black', fontWeight: 'bold', left: '5%', top: '3%'
        },
        before: {
            color: 'gray', top: '6%', left: '10%'
        },
        signUp: {
            color: 'blue', top: '4%', left: '55%', fontSize: 15, fontWeight: '800'
        },
        touchableStyle: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30,
            marginLeft: '7%', marginRight: '7%', height: '8%', top: '3%'
        },
        signUpButton: {
            fontSize: 20, color: 'black', fontWeight: 'bold'
        },

    }
);
export default styles;
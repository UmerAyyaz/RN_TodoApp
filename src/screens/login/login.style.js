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
            flex: 7,
            top: '10%',
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
        buttonTouch: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30, marginLeft: '5%',
            marginRight: '5%', height: '12%', top: '25%'
        },
        buttonTouch1: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30, marginLeft: '5%',
            marginRight: '5%', height: '12%', top: '26%'
        },
        ct: {
            fontSize: 20, color: 'white', fontWeight: 'bold'
        },
        textStyle: {
            fontSize: 20, color: 'black', fontWeight: 'bold', left: '5%', top: '3%'
        },
        before: {
            color: 'gray', top: '10%', left: '17%'

        },
        signUp: {
            color: 'blue', left: '57%', fontSize: 15, fontWeight: '800'
        },
        signInButton: {
            fontSize: 18, color: 'black', fontWeight: 'bold'
        },
        touchableStyle: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30,
            marginLeft: '7%', marginRight: '7%', height: '8%', top: '8%'
        }

    }
);
export default styles;
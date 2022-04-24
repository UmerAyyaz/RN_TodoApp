import {StyleSheet} from 'react-native'
const styles = StyleSheet.create(
    {
        mainView: {
            flex: 1
        },
        headerView: {
            backgroundColor: 'dodgerblue', flexDirection: 'row', flex: 0.30
        },
        entries: {
            flex: 4
        },
        headerText: {
            fontSize: 23, fontWeight: 'bold', marginLeft: '2%', top: 6, color: 'black'
        },
        plusIcon: {
            flex: 0.17, left: '450%', width: '90%', height: '90%', top: '1%'
        },
        ct: {
            fontSize: 20, color: 'white', fontWeight: 'bold'
        },
        card1: {
            padding: 10,
            margin: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'black',
        }, contact1: {
            flex: 1, width: 40, height: 40, marginLeft: 23
        },
        entriesText:{
            color: 'white', fontWeight: '600', fontSize: 18 
        },
        signUpButton: {
            fontSize: 20, color: 'black', fontWeight: 'bold'
        },
        touchableStyle: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30,
            marginLeft: '7%', marginRight: '7%', height: '8%'
        },
    }
);
export default styles;
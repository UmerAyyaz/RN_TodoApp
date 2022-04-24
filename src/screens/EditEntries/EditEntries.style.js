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
      
     
        textInputStyle: {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            margin: 20,
            padding: 5,
            color: "black"
        },
       
        textStyle: {
            fontSize: 20, color: 'black', fontWeight: 'bold', left: '5%', top: '3%'
        },
      
        touchableStyle: {
            alignItems: 'center', padding: 10, backgroundColor: 'dodgerblue', borderRadius: 30,
            marginLeft: '7%', marginRight: '7%', height: '8%', top: '5%'
        },
        addEntryButton: {
            fontSize: 20, color: 'black', fontWeight: 'bold'
        },
       
    }
);
export default styles;
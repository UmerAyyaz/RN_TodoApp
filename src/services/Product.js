import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

// name,email,currentProject,jobTitle

const addProduct = (name,email,currentProject,jobTitle) => {
    if(!name || !email || !currentProject || !jobTitle){
        Alert.alert('Error', 'Please enter all fields')
    }
    
    return firestore()
    .collection('products')
    .doc()
    .set({
        name,email,currentProject,jobTitle
    })
    .catch(err => err)
}

const getProduct = () => {
    return firestore()
    .collection('products')
    .get()
    .then( snap => {
        const products = []
        snap.forEach( product => products.push(product.data()))
        return products;
    })
    .catch( err => err)
}

export default Product = {
    addProduct,
    getProduct
}
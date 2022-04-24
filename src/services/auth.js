import auth from '@react-native-firebase/auth';

// signup handling
const signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        })

        return uid
    })
    .then( uid => createUserInDb(uid, fullName, email))
    .catch(
        err => alert(err.code, err.message)
    )
}

const signIn = (email, password) => {
    if(!email || !password){
        alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => alert(err.code, err.message)
    )
}

// const forgetPassword = (email) => {
//     if(!email){
//         Alert.alert('Error', 'Please enter email')
//     }

//     return auth().sendPasswordResetEmail(email)
// }

const signOut = () => {
    return auth().signOut()
}
const Auth = {
    signUp,
    signIn,
  
    signOut,
   
}

export default Auth

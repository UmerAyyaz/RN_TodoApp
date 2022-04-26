import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';


// Google sign in
const googleLogin = async() => {
    // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

// facebook sign in
const facebookSignIn = async() => {
    // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}


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
    facebookSignIn,
    signOut,
    googleLogin,
   
}

export default Auth

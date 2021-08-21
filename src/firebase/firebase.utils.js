import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAxmGEQVgK9nuYwKhQQa1v0NA0NStl4b2I",
    authDomain: "messenger-nw.firebaseapp.com",
    projectId: "messenger-nw",
    storageBucket: "messenger-nw.appspot.com",
    messagingSenderId: "758321851235",
    appId: "1:758321851235:web:d76006a2d76f73b5a48156",
    measurementId: "G-H7NL4WJYD9"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return 

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get() 
    
    if(!snapshot.exists) {
        const { displayName, email } = userAuth 
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData 
            })
        } catch (error) {
            console.log("error creating data", error.messsage)
        }
    }

    return userRef 
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase 

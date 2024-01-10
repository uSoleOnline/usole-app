import { initializeApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCKr0y5QOd5jvyEE5c3Rz8RJaNU962ciiM',
    authDomain: 'usole-31d9b.firebaseapp.com',
    projectId: 'usole-31d9b',
    storageBucket: 'usole-31d9b.appspot.com',
    messagingSenderId: '428625662526',
    appId: '1:428625662526:web:528d102a2e7ac7b87d376f'
}
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export var firesotre = getFirestore(app)
export var storage = getStorage(app)
export var auth = getAuth(app)
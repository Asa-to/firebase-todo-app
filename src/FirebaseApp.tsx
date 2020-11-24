import React, { FC, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseContext, UserContext } from './contexts';

const FirebaseApp: FC = ({children}) => {
    const defaultUser = 'freeUser';
    const [user, setUser] = useState(defaultUser);
    const auth = firebase.auth();
    const db = firebase.firestore();

    auth.onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            if(user === defaultUser){
                setUser(firebaseUser.uid);
            } 
        } else {
            setUser(defaultUser);
        }
    });

    return (
        <FirebaseContext.Provider value={{auth, db}}>
            <UserContext.Provider value={{ user }}>
                {children}
            </UserContext.Provider>
        </FirebaseContext.Provider>
    )
}

export default FirebaseApp;
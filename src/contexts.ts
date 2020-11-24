import firebase from 'firebase/app';

import { createContext } from 'react';

type FirebaseContextValue = {
    auth: firebase.auth.Auth | null;
    db: firebase.firestore.Firestore | null;
}

export const FirebaseContext = createContext<FirebaseContextValue>({
    auth: null,
    db: null,
});

type UserContextValue = {
    user: string;
}

export const UserContext = createContext<UserContextValue>({
    user: 'freeUser'
});
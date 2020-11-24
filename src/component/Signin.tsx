import React, { FC, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { FirebaseContext } from '../contexts';


const SignInScreen: FC = () => {
    const { auth } = useContext(FirebaseContext);
    const history = useHistory();
    const uiConfig: firebaseui.auth.Config = {
        signInFlow: 'popup',
        signInOptions: [
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                customParameters: { lang: 'ja' },
            }
        ],
        callbacks: {
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                const dest = redirectUrl || '/';
                history.replace(dest);

                return false;
            }
        }
    };

    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    )
}

export default SignInScreen;
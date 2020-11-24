import React, { FC, useContext } from 'react';

import SigninScreeen from './Signin';
import { UserContext } from '../contexts';
import { defaultUser } from './../models/user';
import Singout from './Signout';

const SigninControl: FC = () => {
    const user = useContext(UserContext);
    return user.user === defaultUser ? <SigninScreeen /> : <Singout />;
}

export default SigninControl;
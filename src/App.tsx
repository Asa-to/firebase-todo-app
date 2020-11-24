import React, { FC } from 'react';
import { Switch, Route } from 'react-router';

import FirebaseApp from './FirebaseApp';
import TodoManager from './TodoManager';
import SignInScreen from './component/Signin';

const App: FC = () => {
    
    return (
        <FirebaseApp>
            <Switch>
                <Route exact path='/auth'>
                    <SignInScreen />
                </Route>
                <Route path="*">
                    <TodoManager />
                </Route>
            </Switch>
        </FirebaseApp>
    )
}

export default App;
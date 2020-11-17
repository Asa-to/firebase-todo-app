import React, { FC } from 'react';
import { Switch, Route } from 'react-router';

import TodoManager from './TodoManager';

const App: FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <TodoManager />
            </Route>
            <Route path="*">
                <TodoManager />
            </Route>
        </Switch>
    )
}

export default App;
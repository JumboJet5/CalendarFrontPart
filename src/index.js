import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import './css/index.css';
import './css/main.css';
// import Page from './Page';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Switch} from 'react-router-dom';
import SignIn from './SignIn';

const history = createHistory();
export const store = configureStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                {/*<Route path='/' component={Page}/>*/}
                <Route exact path='/' component={SignIn}/>
                <Route exact path='/:eventLevel' component={SignIn}/>
                <Route exact path='/:eventLevel/:id' component={SignIn}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
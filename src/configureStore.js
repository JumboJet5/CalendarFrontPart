import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import fetchMiddleware from './fetchMiddleware';

export default function configureStore(history) {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk, fetchMiddleware, routerMiddleware(history)),
    );

    if (module.hot) {
        module.hot.accept('./reducers/index', () => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}
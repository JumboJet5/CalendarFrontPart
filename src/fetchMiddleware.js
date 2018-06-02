import 'whatwg-fetch';
// import {FETCH_ACTION} from 'constants'

const fetchMiddleware = store => next => action => {
    if (!action || !action.fetchConfig) {
        console.log(action);
        return next(action)
    }

    let dispatch = store.dispatch;
    let config = action.fetchConfig;

    // const serverDomain = 'http://7b0b18de.ngrok.io';
    // const serverDomain = 'http://10.1.4.147:8080';
    const serverDomain = 'http://192.168.43.195:8080';
    // const path = serverDomain + (config.path || '/');
    const path = new URL((config.path || '/'),serverDomain);
    if(config.params) Object.keys(config.params).forEach(key => path.searchParams.append(key, config.params[key]));
    const method = config.method || 'GET';
    const headers = config.headers;
    const mode = 'cors';
    const crossDomain = true;
    const body = config.body;
    const successHandler = config.success;
    const failureHandler = config.failure;

    console.log(path);
    console.log(method);
    console.log(headers);
    console.log(body);

    fetch(path, {
        method: method,
        mode: mode,
        crossDomain: crossDomain,
        headers: headers,
        body: JSON.stringify(body),
        credentials: 'omit'
    })
        .then( response => response.json() )
        .then( json => {dispatch(successHandler(json))} )
        .catch( error => {dispatch(failureHandler(error))} )

};

export default fetchMiddleware  
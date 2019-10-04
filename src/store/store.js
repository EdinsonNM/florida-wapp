import {createStore, createTypedHooks} from 'easy-peasy';
import {logger} from 'redux-logger';

import Main from './main';

let middlewares = [];
const state = {
    Main
};
const {useActions, useStore, useDispatch} = createTypedHooks();
if (process.env.NODE_ENV === 'development') middlewares.push(logger);

const customMiddleWare = store => next => action => {
    console.log('Middleware triggered:', action);
    next(action);
};
middlewares.push(customMiddleWare);
const store = createStore(state, {middleware: middlewares});

export {useActions, useDispatch, useStore};
export default store;

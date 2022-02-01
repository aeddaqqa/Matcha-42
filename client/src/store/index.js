import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// export const store = createStore(reducer);

const userFromLocalStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

const initialState = {
    user: userFromLocalStorage,
};

export const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

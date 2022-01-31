import { createStore } from 'redux';
import reducer from './reducers/rootReducer';

// export const store = createStore(reducer);

export const store = createStore(
    reducer /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

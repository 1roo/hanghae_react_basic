import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from '../modules/counter';
import { configureStore } from '@reduxjs/toolkit';

//AS-IS : 일반 리듀서
// const rootReducer = combineReducers({
//     counter,
// });
// const store = createStore(rootReducer);

//TO-DO : Redux Toolkit
const store = configureStore({
    reducer: {
        counter: counter,
    }
});


export default store;
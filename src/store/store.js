import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../feactres/authSlice'


export const store = configureStore({
    reducer: authReducer
});



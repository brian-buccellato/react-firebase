import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { authReducer } from './authReducer';
import { projectReducer } from './projectReducer';
import { firebaseReducer } from 'react-redux-firebase';

export const rootReducer = combineReducers({
    auth: authReducer,
    proj: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

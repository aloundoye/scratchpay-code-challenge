import { usersReducer } from "./users/users.reducer";

import {combineReducers} from 'redux';


export const rootReducer = combineReducers({
    users: usersReducer
})
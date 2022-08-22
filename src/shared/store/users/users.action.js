import { USERS_ACTION_TYPES } from "./users.types"

export const addUser = (user)=>{
    return {type: USERS_ACTION_TYPES.ADD_USER, payload: user}
}

export const editUser = (user) => {
    return {type: USERS_ACTION_TYPES.EDIT_USER, payload: user}
}

export const deleteUser = (user) =>{
    return {type: USERS_ACTION_TYPES.DELETE_USER, payload: user}
}


import { ActionTypes } from './action-types';

/// payload: the object which is assigned to this property contains the data which are sent
/// to the store
export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        payload: user
    }
}
export const getUsers = (users) => {
    return {
        type: ActionTypes.GET_USERS,
        payload: users
    }
}
export const getUser = (user) => {
    return {
        type: ActionTypes.GET_USER,
        payload: user

    }
}
export const updateUser = () => {
    return {
        type: ActionTypes.UPDATE_USER,

    }
}

export const deleteUser = () => {
    return {
        type: ActionTypes.DELETE_USER,
    }
}


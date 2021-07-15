import { ActionTypes } from "../actions/action-types";
/// this function takes the current state of the application and 
/// an action object and returns  a new state of the application
const initialState = {
    users: [],
    loading: false,
    setLoading: false,
    pageNumber: 0,
};



export const userReducers = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.GET_USERS:
            ///the three dots are ES6 syntax(spraed operator), it allows you to create copy of an abject

            return {
                ///make a copy of `state`
                ...state,
                /// update the copy with the new value
                users: action.payload, loading: false
            }
        case ActionTypes.GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ActionTypes.ADD_USER:
            return { ...state, user: action.payload }
        case ActionTypes.UPDATE_USER:
            return { ...state, id: action.payload }
        case ActionTypes.DELETE_USER:
            return { ...state }
        default:
            // otherwise return the existing state unchanged
            return state
    }
}

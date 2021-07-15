

import { addUser, getUser, getUsers, deleteUser, updateUser } from './actions';

import axios from 'axios';


/// add a new user
export const addUserAction = (user) => {
    return (dispatch) => {
        /// axios is a library used to make request to an API, 
        /// return data and manipulate the data .
        axios.post('https://ti-react-test.herokuapp.com/users', user)
            .then(response => {
                console.log(response);
                dispatch(addUser(response.data))
            })
            .catch(error => {
                console.log("eror", error);
            });
    }
}

/// fetch data of a single user  basedin id
export const getUserAction = (id) => {
    return (dispatch) => {
        axios.get(`https://ti-react-test.herokuapp.com/users/${id}`)
            .then(response => {
                console.log(response);
                dispatch(getUser(response.data)
                );
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// fetch all users 
export const getUsersAction = () => {
    return (dispatch) => {
        axios.get('https://ti-react-test.herokuapp.com/users')
            .then(response => {
                console.log(response);
                /// dispatch function dispatches an action which triggers state changes in the store
                dispatch(getUsers(response.data)
                );

            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// delete a user
export const deleteUserAction = (id) => {
    return (dispatch) => {
        axios.delete(`https://ti-react-test.herokuapp.com/users/${id}`)
            .then(response => {
                console.log(response);
                dispatch(deleteUser());
                dispatch(getUsersAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// update the existing data of a user
export const updateUserAction = (user, id) => {
    return (dispatch) => {
        axios.put(`https://ti-react-test.herokuapp.com/users/${id}`, user)
            .then(response => {
                console.log(response);
                dispatch(updateUser());
                dispatch(getUsersAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}
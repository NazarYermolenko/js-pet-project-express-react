import * as actionTypes from './constants'

export function logIn(user){
    return{
        type: actionTypes.LOG_IN,
        payload: {
            user,
            authenticated: true
        }
    }
}

export function logOut(user){
    return {
        type: actionTypes.LOG_OUT,
        payload: {
            user,
            authenticated: false
        }
    }
}


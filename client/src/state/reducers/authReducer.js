import * as actionTypes from '../actions/auth/constants';

const initialState = {
    user_auth: {
        user: {},
        authenticated: false
    }
}

const authReducer = (state = initialState, action) => {
    switch (action) {
        case actionTypes.LOG_IN:
            return {
                ...state,
                user_auth: {
                    user: action.payload.user,
                    authenticated: action.payload.authenticated
                }
            };
        case actionTypes.LOG_OUT:
            return {
                ...state,
                user_auth: {
                    user: action.payload.user,
                    authenticated: action.payload.authenticated
                }
            };
        default:
            return state;
    }
}

export default authReducer
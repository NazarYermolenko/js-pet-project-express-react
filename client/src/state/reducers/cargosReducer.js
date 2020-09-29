import * as actionTypes from '../actions/cargos/constants';

const initialState = {
    cargos: {},
}

const cargosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CARGOS_RECEIVED:
            return {
                ...state,
                cargos: action.payload.cargos
            };
        case actionTypes.CARGOS_DELETED:
            const cargos = state.cargos
            return {
                ...state,
                cargos: cargos.filter((cargo) => { return cargo._id !== action.payload.cargo_id })
            }
        default:
            return state
    }
}

export default cargosReducer
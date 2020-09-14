import * as actionTypes from '../actions/constants';

const initialState = {
    cargos: {},
}

const cargosStorage = (state = initialState, action) => {
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

export default cargosStorage
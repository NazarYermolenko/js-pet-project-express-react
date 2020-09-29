import * as actionTypes from './constants';

export function cargosReceive(cargos) {
    return {
        type: actionTypes.CARGOS_RECEIVED,
        payload: {
            cargos
        }
    }
}

export function cargoDelete(cargo_id) {
    return {
        type: actionTypes.CARGOS_DELETED,
        payload: {
            cargo_id
        }
    }
}
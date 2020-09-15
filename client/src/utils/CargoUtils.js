const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const endpoint = "/cargos"

function getCargos() {
    return fetch(endpoint, {
        method: "GET",
        headers
    }).then((response) => {
        return response.json()
    })
}

function getCargo(id) {
    return fetch(`${endpoint}/${id}`, {
        method: "GET",
        headers
    }).then((response) => {
        return response.json()
    })
}

function deleteCargo(id) {
    return fetch(`${endpoint}/${id}`, {
        method: "DELETE",
        headers
    }).then((response) => {
        return response.json()
    })
}

function createCargo(cargo) {
    return fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(cargo)
    }).then((response) => {
        return response.json()
    })
}

function updateCargo(cargo) {
    return fetch(`${endpoint}/${cargo._id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(cargo)
    }).then((response) => {
        return response.json()
    })
}

module.exports = {
    getCargos,
    getCargo,
    deleteCargo,
    createCargo,
    updateCargo
}
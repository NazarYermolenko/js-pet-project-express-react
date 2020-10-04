const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const endpoint = "/api/cargos"

function getCargos(token) {
    return fetch(endpoint, {
        method: "GET",
        headers: { ...headers, token }
    }).then((response) => {
        return response.json()
    })
}

function getCargo(id, token) {
    return fetch(`${endpoint}/${id}`, {
        method: "GET",
        headers: { ...headers, token }
    }).then((response) => {
        return response.json()
    })
}

function deleteCargo(id, token) {
    return fetch(`${endpoint}/${id}`, {
        method: "DELETE",
        headers: { ...headers, token }
    }).then((response) => {
        return response.json()
    })
}

function createCargo(cargo, token) {
    return fetch(endpoint, {
        method: "POST",
        headers: { ...headers, token },
        body: JSON.stringify(cargo)
    }).then((response) => {
        return response.json()
    })
}

function updateCargo(cargo, token) {
    return fetch(`${endpoint}/${cargo._id}`, {
        method: "PUT",
        headers: { ...headers, token },
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
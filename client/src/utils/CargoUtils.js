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

function editCargo(cargo) {
    return fetch(endpoint, {
        method: "PUT",
        headers,
        body: JSON.stringify(cargo)
    }).then((response) => {
        return response.json()
    })
}

module.exports = {
    getCargos,
    deleteCargo,
    createCargo,
    editCargo
}
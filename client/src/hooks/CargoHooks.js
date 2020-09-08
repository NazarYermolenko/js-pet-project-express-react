const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

function getCargos() {
    return fetch("/cargos", {
        method: "GET",
        headers
    }).then((response) => {
        return response.json()
    })
}

function deleteCargo(id) {
    return fetch(`/cargos/${id}`, {
        method: "DELETE",
        headers
    }).then((response) => {
        return response.json()
    })
}

function createCargo(cargo) {
    return fetch(`/cargos`, {
        method: "POST",
        headers,
        body: JSON.stringify(cargo)
    }).then((response) => {
        return response.json()
    })
}

module.exports = {
    getCargos,
    deleteCargo,
    createCargo
}
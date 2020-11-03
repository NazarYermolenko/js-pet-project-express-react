const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

function sendLogin(email, password) {
    return fetch("/api/auth/login", {
        headers,
        method: "POST",
        body: JSON.stringify({ email, password })
    }).then((response) => {
        const json = response.json()
        return new Promise((resolve => {
            const status = response.status
            resolve({ json, status })
        }))
    })
}


function checkLogin(token) {
    return fetch("/api/auth/login", {
        headers: { ...headers, token },
        method: "GET"
    }).then((response) => {
        const json = response.json()
        return new Promise((resolve => {
            const status = response.status
            resolve({ json, status })
        }))
    })
}

function sendRegister(email, password) {
    return fetch("/api/auth/register", {
        headers,
        method: "POST",
        body: JSON.stringify({ email, password })
    }).then((response) => {
        const json = response.json()
        return new Promise((resolve => {
            const status = response.status
            resolve({ json, status })
        }))
    })
}

module.exports = {
    sendLogin,
    checkLogin,
    sendRegister
}
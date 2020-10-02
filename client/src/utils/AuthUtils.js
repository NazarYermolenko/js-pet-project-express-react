const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

function sendLogin(email, password) {
    return fetch("/auth/login", {
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


function checkMe(token) {
    return fetch("/auth/me", {
        headers: { ...headers, token },
        method: "POST"
    }).then((response) => {
        const json = response.json()
        return new Promise((resolve => {
            const status = response.status
            resolve({ json, status })
        }))
    })
}

function sendRegister(email, password) {
    return fetch("/auth/register", {
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
    checkMe,
    sendRegister
}
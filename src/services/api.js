const API_URL = 'https://swapi.co/api'

const swapi = async (path, params) => {
    let response = await fetch(`${API_URL}/${path}${params ? `?${params}` : ''}`)
    let json = await response.json()
    return json
}

export {
    swapi
}
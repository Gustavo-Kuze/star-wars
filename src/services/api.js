const API_URL = 'https://swapi.co/api'

const swapi = async (path, params) => {
    let response = await fetch(`${API_URL}/${path}${params ? `?${params}` : ''}`)
    let json = await response.json()
    return json
}

const extractPathFromUrl = url => {
    let rgx = /(https?:\/\/\w+\.\w+\/api\/)/g
    let extractedPath = url
    if(rgx.test(url)){
        extractedPath = url.replace(rgx, '')
    }
    return extractedPath
}

export {
    swapi, extractPathFromUrl
}
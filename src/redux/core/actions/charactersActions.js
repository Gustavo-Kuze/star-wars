import types from './types/charactersTypes'

export const loadCharacters = urlPath => ({
    type: types.LOAD_CHARACTERS_SAGA,
    payload: urlPath
})

export const setIsLoadingChars = () => ({
    type: types.IS_LOADING
})
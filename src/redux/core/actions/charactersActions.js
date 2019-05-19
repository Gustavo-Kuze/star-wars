import types from './types/charactersTypes'

export const loadCharacters = urlPath => ({
    type: types.LOAD_CHARACTERS_SAGA,
    payload: urlPath
})

export const setIsLoadingChars = () => ({
    type: types.IS_LOADING
})

export const setNextUrl = (url) => ({
    type: types.SET_NEXT,
    payload: url
})

export const setPreviousUrl = (url) => ({
    type: types.SET_PREVIOUS,
    payload: url
})
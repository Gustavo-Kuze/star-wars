import types from '../actions/types/charactersTypes'

const STATE = {
    characters: {},
    isLoading: false
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_CHARACTERS:
            return { characters: action.payload, isLoading: false }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}
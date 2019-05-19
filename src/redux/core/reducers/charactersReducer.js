import types from '../actions/types/charactersTypes'

const STATE = {
    characters: {},
    isLoading: false,
    nextUrl: '',
    previousUrl: '',
}

export default (state = STATE, action) => {
    switch (action.type) {
        case types.SET_CHARACTERS:
            return {
                characters: action.payload,
                isLoading: false,
                nextUrl: action.payload.next ? action.payload.next : '',
                previousUrl: action.payload.previous ? action.payload.previous : '',
            }
        case types.IS_LOADING:
            return { ...state, isLoading: true }
        default:
            return state
    }
}
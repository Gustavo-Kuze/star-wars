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
        case types.SET_NEXT:
            return { ...state, nextUrl: action.payload }
        case types.SET_PREVIOUS:
            return { ...state, previousUrl: action.payload }
        default:
            return state
    }
}
import { SEARCH, BRAND_FILTER, SONG_FILTER } from '../actions/ActionTypes';

const initialState = {
    keyword: '',
    brandFilter: 0,
    typeFilter: 0,
    songs: [[[], []], [[], []]]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, keyword: action.text };
        case BRAND_FILTER:
            return { ...state, brandFilter: action.id }
        case SONG_FILTER:
            return { ...state, typeFilter: action.id }
        default:
            return state;
    }
}

export default reducer;
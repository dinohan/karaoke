import { SEARCH, BRAND_FILTER, SONG_FILTER } from '../actions/ActionTypes';

const initialState = {
    keyword: '',
    brandFilter: 0,
    typeFilter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, keyword: action.payload };
        case BRAND_FILTER:
            return { ...state, brandFilter: action.payload };
        case SONG_FILTER:
            return { ...state, typeFilter: action.payload };
        default:
            return state;
    }
}

export default reducer;
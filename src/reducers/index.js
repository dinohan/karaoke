import { SEARCH, BRAND_FILTER, SONG_FILTER, ADD_FAV, DEL_FAV } from '../actions/ActionTypes';

const initialState = {
    keyword: '',
    brandFilter: 0,
    typeFilter: 0,
    favSongs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return { ...state, keyword: action.payload };
        case BRAND_FILTER:
            return { ...state, brandFilter: action.payload };
        case SONG_FILTER:
            return { ...state, typeFilter: action.payload };
        case ADD_FAV:
            let newSongs = state.favSongs.filter(song => song.no !== action.payload.no);
            newSongs.push(action.payload);
            return { ...state, favSongs: newSongs }
        case DEL_FAV:
            return {
                ...state,
                favSongs: state.favSongs.filter(song =>
                    song.no !== action.payload
                )
            }
        default:
            return state;
    }
}

export default reducer;
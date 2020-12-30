import { createReducer } from '@reduxjs/toolkit';
import {
    INIT_STATE,
    SEARCH,
    BRAND_FILTER,
    SONG_FILTER,
    ADD_FAV,
    DEL_FAV
} from '../actions/ActionTypes';

const initialState = {
    keyword: '',
    brandFilter: 0,
    typeFilter: 0,
    favSongs: [],
};

const reducer = createReducer(initialState, {
    [INIT_STATE]: (state, action) => action.payload,
    [SEARCH]: (state, action) => { return { ...state, keyword: action.payload }; },
    [BRAND_FILTER]: (state, action) => { return { ...state, brandFilter: action.payload }; },
    [SONG_FILTER]: (state, action) => { return { ...state, typeFilter: action.payload }; },
    [ADD_FAV]: (state, action) => {
        let newSongs = state.favSongs.filter(song => song.no !== action.payload.no);
        newSongs.push(action.payload);
        return { ...state, favSongs: newSongs }
    },
    [DEL_FAV]: (state, action) => {
        return {
            ...state,
            favSongs: state.favSongs.filter(song =>
                song.no !== action.payload
            )
        }
    }
})

export default reducer;
import {
    SEARCH,
    BRAND_FILTER,
    SONG_FILTER,
    ADD_FAV,
    DEL_FAV,
    INIT_STATE
} from './ActionTypes';

const initState = (localState) => {
    return {
        type: INIT_STATE,
        payload: localState
    }
}

const changeKeyword = (text) => {
    return {
        type: SEARCH,
        payload: text
    }
}
const changeBrandFilter = (id) => {
    return {
        type: BRAND_FILTER,
        payload: id
    }
}
const changeTypeFilter = (id) => {
    return {
        type: SONG_FILTER,
        payload: id
    }
}

const addFavoriteSong = (song) => {
    return {
        type: ADD_FAV,
        payload: song
    }
}
const deleteFavoriteSong = (songNo) => {
    return {
        type: DEL_FAV,
        payload: songNo
    }
}

export const actionCreators = {
    changeKeyword,
    changeBrandFilter,
    changeTypeFilter,
    addFavoriteSong,
    deleteFavoriteSong,
    initState
}
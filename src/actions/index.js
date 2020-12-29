import { SEARCH, BRAND_FILTER, SONG_FILTER, GET_SONGS } from './ActionTypes';

const updateKeyword = (text) => {
    return {
        type: SEARCH,
        text
    }
}
const changeBrandFilter = (id) => {
    return {
        type: BRAND_FILTER,
        id
    }
}
const changeSongFilter = (id) => {
    return {
        type: SONG_FILTER,
        id
    }
}

const getSearchSongs = (songs) => {
    return {
        type: GET_SONGS,
        songs
    }
}

export const actionCreators = {
    updateKeyword,
    changeBrandFilter,
    changeSongFilter,
    getSearchSongs
}
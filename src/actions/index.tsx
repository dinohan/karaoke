import {
    SEARCH,
    BRAND_FILTER,
    SONG_FILTER,
    ADD_FAV,
    DEL_FAV,
    INIT_STATE,
    OPEN_DETAIL,
    CLOSE_DETAIL
} from './ActionTypes';

//import { createAction } from '@reduxjs/toolkit';
import { SongType, State } from '../Interface';

//const initState = createAction(INIT_STATE);
const initState = (localState: State) => ({
    type: INIT_STATE,
    payload: localState
});
const changeKeyword = (key: string) => ({
    type: SEARCH,
    payload: key
});
const changeBrandFilter = (brand: number) => ({
    type: BRAND_FILTER,
    payload: brand
});
const changeTypeFilter = (type: number) => ({
    type: SONG_FILTER,
    payload: type
});
const addFavoriteSong = (song: SongType) => ({
    type: ADD_FAV,
    payload: song
});
const deleteFavoriteSong = (songNo: number) => ({
    type: DEL_FAV,
    payload: songNo
});
const openDetail = (song: SongType) => ({
    type: OPEN_DETAIL,
    payload: song
});
const closeDetail = () => ({
    type: CLOSE_DETAIL
});

export const actionCreators = {
    initState,
    changeKeyword,
    changeBrandFilter,
    changeTypeFilter,
    addFavoriteSong,
    deleteFavoriteSong,
    openDetail,
    closeDetail
}
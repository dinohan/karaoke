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

import { createAction } from '@reduxjs/toolkit';

const initState = createAction(INIT_STATE);
const changeKeyword = createAction(SEARCH);
const changeBrandFilter = createAction(BRAND_FILTER);
const changeTypeFilter = createAction(SONG_FILTER);
const addFavoriteSong = createAction(ADD_FAV);
const deleteFavoriteSong = createAction(DEL_FAV);
const openDetail = createAction(OPEN_DETAIL);
const closeDetail = createAction(CLOSE_DETAIL);

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
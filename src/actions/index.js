import {
    SEARCH,
    BRAND_FILTER,
    SONG_FILTER,
    ADD_FAV,
    DEL_FAV,
    INIT_STATE
} from './ActionTypes';

import { createAction } from '@reduxjs/toolkit';

const initState = createAction(INIT_STATE);
const changeKeyword = createAction(SEARCH);
const changeBrandFilter = createAction(BRAND_FILTER);
const changeTypeFilter = createAction(SONG_FILTER);
const addFavoriteSong = createAction(ADD_FAV);
const deleteFavoriteSong = createAction(DEL_FAV);

export const actionCreators = {
    changeKeyword,
    changeBrandFilter,
    changeTypeFilter,
    addFavoriteSong,
    deleteFavoriteSong,
    initState
}
import { SEARCH, BRAND_FILTER, SONG_FILTER } from './ActionTypes';

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

/*
const getSearchSongs = (keyword) => async dispatch => {
    let songs = [[[], []], [[], []]];

    let brand = 0;
    let type = 0;
    let link = 'https://api.manana.kr/karaoke/' +
        (type === 0 ? 'song' : 'singer') + '/' +
        keyword + '.json?brand=' +
        (brand === 0 ? 'tj' : 'kumyoung');
    const { data00 } = await axios.get(link);
    songs[0][0] = data00;

    type = 1;
    link = 'https://api.manana.kr/karaoke/' +
        (type === 0 ? 'song' : 'singer') + '/' +
        keyword + '.json?brand=' +
        (brand === 0 ? 'tj' : 'kumyoung');
    const { data01 } = await axios.get(link);
    songs[0][1] = data01;

    brand = 1;
    type = 0;
    link = 'https://api.manana.kr/karaoke/' +
        (type === 0 ? 'song' : 'singer') + '/' +
        keyword + '.json?brand=' +
        (brand === 0 ? 'tj' : 'kumyoung');
    const { data10 } = await axios.get(link);
    songs[1][0] = data10;

    type = 1;
    link = 'https://api.manana.kr/karaoke/' +
        (type === 0 ? 'song' : 'singer') + '/' +
        keyword + '.json?brand=' +
        (brand === 0 ? 'tj' : 'kumyoung');
    const { data11 } = await axios.get(link);
    songs[1][1] = data11;


    //... 곡 가져오기
    return {
        type: GET_SONGS,
        songs
    }
}
*/
export const actionCreators = {
    changeKeyword,
    changeBrandFilter,
    changeTypeFilter
}
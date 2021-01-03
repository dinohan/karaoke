export interface Action {
    type: string;
    payload: any;
}

export interface SongType {
    no: number;
    brand: string;
    singer: string;
    title: string;
    release: string;

    composer: string;
}

export interface State {
    keyword: string;
    brandFilter: number;
    typeFilter: number;
    favSongs: Array<SongType>;
    detailOpened: boolean;
    detailSong: SongType;
}
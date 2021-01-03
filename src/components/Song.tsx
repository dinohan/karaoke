import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import './Song.css';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { SongType, State } from '../Interface';

interface SongProps {
    key: number;
    song: SongType;
    favSongs: Array<SongType>;
    addFavoriteSong: Function;
    deleteFavoriteSong: Function;
    openDetail: Function;
}

function Song({ song, favSongs, addFavoriteSong, deleteFavoriteSong, openDetail }: SongProps) {
    function isFavorite() {
        for (let favSong of favSongs) {
            if (favSong.no === song.no)
                return true;
        }
        return false;
    }

    function favClick() {
        if (isFavorite()) {
            const message = `'${song.title}'을(를) 즐겨찾기에서 삭제할까요?`;
            if (window.confirm(message))
                deleteFavoriteSong(song.no);
        }
        else
            addFavoriteSong(song);
    }

    function detailClick() {
        openDetail(song);
    }

    return (<div className='song'>
        <button className='song-index' onClick={favClick}
            style={{ cursor: 'pointer' }}>
            {isFavorite() ? (
                <AiFillStar
                    size='2.2em'
                    className='fav-button'
                />
            ) : (
                    <AiOutlineStar
                        size='2.2em'
                        className='fav-button'
                    />
                )}
        </button>
        <div className='song-upper'>
            <div className='song-title'>
                {song.title}
            </div>
            <div className='song-no'>
                {song.no}
            </div>
        </div>
        <div className='song-lower'>
            <div className='song-singer'>
                {song.singer}
            </div>
            <div className='detail-button' onClick={detailClick}
                style={{ cursor: 'pointer' }}>
                <BiMessageSquareDetail size='1.4em' />
            </div>
        </div>
    </div >)
}

function mapStateToProps(state: State) {
    return {
        favSongs: state.favSongs
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        addFavoriteSong: (song: SongType) => dispatch(actionCreators.addFavoriteSong(song)),
        deleteFavoriteSong: (no: number) => dispatch(actionCreators.deleteFavoriteSong(no)),
        openDetail: (song: SongType) => dispatch(actionCreators.openDetail(song))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
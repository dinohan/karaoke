import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import './Song.css';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Song({ song, favSongs, addFavoriteSong, deleteFavoriteSong }) {
    function isFavorite() {
        for (let favSong of favSongs) {
            if (favSong.no === song.no)
                return true;
        }
        return false;
    }

    function handleClick() {
        if (isFavorite()) {
            const message = `'${song.title}'을(를) 즐겨찾기에서 삭제할까요?`;
            if (window.confirm(message))
                deleteFavoriteSong(song.no);
        }
        else
            addFavoriteSong(song);
    }

    return (<div className='song'>
        <div className='song-upper'>
            <button className='song-index' onClick={handleClick}
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
            <div className='song-no'>
            </div>
        </div>
    </div >)
}

Song.propTypes = {
    song: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return { favSongs: state.favSongs }
}

function mapDispatchToProps(dispatch) {
    return {
        addFavoriteSong: (text) => dispatch(actionCreators.addFavoriteSong(text)),
        deleteFavoriteSong: (text) => dispatch(actionCreators.deleteFavoriteSong(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
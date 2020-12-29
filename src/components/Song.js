import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import './Song.css';

function Song({ no, title, singer, page, addFavoriteSong, deleteFavoriteSong }) {
    function handleClick() {
        const song = {
            no,
            title,
            singer
        }
        if (page === 'favorite')
            deleteFavoriteSong(song.no);
        else
            addFavoriteSong(song);
    }

    return (<div className='song'>
        <div className='song-upper'>
            <div className='song-index'>
                <button onClick={handleClick}>+</button>
            </div>
            <div className='song-title'>
                {title}
            </div>
            <div className='song-no'>
                {no}
            </div>
        </div>
        <div className='song-lower'>
            <div className='song-singer'>
                {singer}
            </div>
            <div className='song-no'>
            </div>
        </div>
    </div >)
}

Song.propTypes = {
    idx: PropTypes.number.isRequired,
    no: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        addFavoriteSong: (text) => dispatch(actionCreators.addFavoriteSong(text)),
        deleteFavoriteSong: (text) => dispatch(actionCreators.deleteFavoriteSong(text))
    };
}

export default connect(null, mapDispatchToProps)(Song);
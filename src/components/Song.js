import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import './Song.css';

function Song({ idx, brand, no, title, singer, composer, lyricist, release }) {

    return (<div className='song'>
        <div className='song-upper'>
            <div className='song-index'>
                {idx + 1}
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

export default Song;
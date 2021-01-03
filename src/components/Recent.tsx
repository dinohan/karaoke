import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';
import './Recent.css';
import { SongType } from '../Interface';

interface RecentProps {
    songs: Array<SongType>;
    brand: string;
}

function Recent({ songs, brand }: RecentProps) {
    return <div className='recent'>
        <h2 className='brand'>{brand} 최신곡</h2>
        {
            songs.map((song) => {
                return <Song
                    key={song.no}
                    song={song}
                />
            })
        }
    </div>
}

Recent.propTypes = {
    songs: PropTypes.arrayOf(PropTypes.object).isRequired,
    brand: PropTypes.string.isRequired
}

export default Recent;
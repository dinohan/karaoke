import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import Song from '../components/Song';
import { SongType, State } from '../Interface';
import './Favorite.css';

interface FavoriteProps {
    favSongs: Array<SongType>;
}

function Favorite({ favSongs }: FavoriteProps) {
    return (<div id="favorites">
        <h1 id="favorite-title">즐겨찾기</h1>
        {favSongs.map((song: SongType) => {
            return <Song
                key={song.no}
                song={song}
            />
        })}
    </div>)
}

function mapStateToProps(state: State) {
    return { favSongs: state.favSongs }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        deleteFavoriteSong: (no: number) => dispatch(actionCreators.deleteFavoriteSong(no))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

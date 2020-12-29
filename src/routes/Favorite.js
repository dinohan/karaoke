import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import Song from '../components/Song';
import './Favorite.css';

function Favorite({ state, deleteFavoriteSong }) {
    return (<div id="favorites">
        <h1 id="favorite-title">즐겨찾기</h1>
        {state.favSongs.map(song => {
            return <Song
                key={song.no}
                song={song}
            />
        })}
    </div>)
}

function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteFavoriteSong: (text) => dispatch(actionCreators.deleteFavoriteSong(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);

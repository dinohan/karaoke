import React from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import Song from '../components/Song';

function Favorite({ state, deleteFavoriteSong }) {
    return (<div>
        {state.favSongs.map(song => {
            return <Song
                key={song.no}
                no={song.no}
                title={song.title}
                singer={song.singer}
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
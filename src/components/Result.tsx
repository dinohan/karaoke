import React, { useEffect, useState } from 'react';
import Song from './Song';
import './Result.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { SongType, State } from '../Interface';

interface ResultProps {
    state: State;
}

function Result({ state }: ResultProps) {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        async function getSongs() {
            let link = 'https://api.manana.kr/karaoke/' +
                (state.typeFilter === 0 ? 'song' : 'singer') + '/' +
                state.keyword + '.json?brand=' +
                (state.brandFilter === 0 ? 'tj' : 'kumyoung');
            let { data } = await axios.get(link);
            setSongs(data);
        }
        if (state.keyword)
            getSongs();
    }, [state.keyword, state.brandFilter, state.typeFilter]);

    return (
        <div id="result">
            {
                state.keyword ? <div>
                    <h2 id="result-title">'{state.keyword}' 검색결과</h2>
                    {
                        songs.map((song: SongType) => {
                            return <Song
                                key={song.no}
                                song={song}
                            />
                        })
                    }
                </div> : <div>
                        <h2 id="result-title">검색어를 입력해주세요</h2>
                    </div>
            }
        </div>);
}

function mapStateToProps(state: State) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Result)
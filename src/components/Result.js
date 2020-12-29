import React, { useEffect, useState } from 'react';
import Song from '../components/Song';
import './Result.css';
import { connect } from 'react-redux';
import axios from 'axios';

function Result({ state }) {
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
                        songs.map((song) => {
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

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Result)

/*
class Result extends React.Component {
    state = {
        songs: [],
        keyword: '',
        brand: '',
        type: ''
    }

    getSongs = async (keyword, brand, type) => {
        const link = 'https://api.manana.kr/karaoke/' +
            (type === 'song' ? 'song' : 'singer') + '/' +
            keyword + '.json?brand=' +
            (brand === 'tj' ? 'tj' : 'kumyoung');
        const { data } = await axios.get(link);
        this.setState({ keyword: keyword, brand: brand, type: type, songs: data });
    }

    componentDidMount() {
        const { keyword, brand, type } = this.props;
        this.setState({})
        this.getSongs(keyword, brand, type);
    }

    componentDidUpdate() {
    }

    render() {
        const { keyword, brand, type } = this.props;
        const { songs } = this.state;

        if (this.props.brand !== this.state.brand ||
            this.props.type !== this.state.type ||
            this.props.keyword !== this.state.keyword) {
            this.getSongs(keyword, brand, type);
        }

        return (
            <div id="result">
                <h2 id="result-title">'{keyword}' 검색결과</h2>
                {
                    songs.map((song, index) => {
                        return <Song
                            key={song.no}
                            no={song.no}
                            title={song.title}
                            singer={song.singer}
                            idx={index}
                        />
                    })
                }
            </div>
        )
    }
}

export default Result;
*/
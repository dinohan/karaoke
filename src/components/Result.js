import React from 'react';
import axios from 'axios';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { Link, withRouter } from "react-router-dom";
import Song from '../components/Song';
import './Result.css';

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
        console.log('mount')
        const { keyword, brand, type } = this.props;
        this.setState({})
        this.getSongs(keyword, brand, type);
    }

    componentDidUpdate() {
        console.log('update')
    }

    render() {
        const { keyword, brand, type } = this.props;
        const { songs } = this.state;
        /* 
        console.log('props')
        console.log(this.props)
        console.log('state')
        console.log(this.state) */

        if (this.props.brand !== this.state.brand ||
            this.props.type !== this.state.type ||
            this.props.keyword !== this.state.keyword) {
            this.getSongs(keyword, brand, type);
        }

        return (
            <div>
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
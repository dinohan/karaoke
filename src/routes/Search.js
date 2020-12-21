import React from 'react';
import axios from 'axios';
import Selector from '../components/Selector';
import './Search.css';
import Result from '../components/Result';

class Search extends React.Component {

    async getSongs(keyword, brand, type) {
        const link = 'https://api.manana.kr/karaoke/' +
            (type === 'song' ? 'song' : 'singer') + '/' +
            keyword + '.json?brand=' +
            (brand === 'tj' ? 'tj' : 'kumyoung');
        const { data } = await axios.get(link);
        return data;
    }

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const key = params.get('key');
        const brand = params.get('brand');
        const type = params.get('type');

        return (<div>
            <Selector
                choices={['tj', 'ky']}
                selected={
                    brand === 'tj' ? 0 : 1
                }
            />
            <Selector
                choices={['song', 'singer']}
                selected={
                    type === 'song' ? 0 : 1
                }
            />
            <div>
                <Result
                    keyword={key}
                    brand={brand}
                    type={type}
                />
            </div>
        </div>)
    }
}
/* 
function SearchList({ keyword, songs }) {
    return (<div id='search_result' >
        <h2 id='info'>'{keyword}' 검색결과</h2>
        <div>
            {
                songs.map((song, index) => {
                    return <Song
                        key={song.no}
                        no={song.no}
                        song={song.song}
                        idx={index}
                    />
                })
            }
        </div>
    </div>)
} */

export default Search;
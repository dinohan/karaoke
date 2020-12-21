import React from 'react';
import axios from 'axios';
import Recent from '../components/Recent';
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        tj_index: [],
        ky_index: [],
        search_keyword: '',
        search_result: []
    };

    getTjIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=tj';
        const { data } = await axios.get(link);
        this.setState({ tj_index: data })
    }
    getKyIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=kumyoung';
        const { data } = await axios.get(link);
        this.setState({ ky_index: data })
    }

    getSongs = async () => {
        this.setState({ isLoading: true });
        this.getTjIndex();
        this.getKyIndex();
        this.setState({ isLoading: false });
    }

    componentDidMount() {
        this.getSongs();
    }

    render() {
        const { tj_index, ky_index } = this.state;

        return (<div>
            <div id='recent_list'>
                <Recent
                    songs={tj_index}
                    brand={'tj'}
                />
                <Recent
                    songs={ky_index}
                    brand={'ky'}
                />
            </div>

        </div>)
    }
}

export default Home;


/*
class Home extends React.Component {
    state = {
        isLoading: true,
        tj_index: [],
        ky_index: [],
        search_keyword: '',
        search_result: []
    };

    getTjIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=tj';
        const { data } = await axios.get(link);
        this.setState({ tj_index: data })
    }
    getKyIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=kumyoung';
        const { data } = await axios.get(link);
        this.setState({ ky_index: data })
    }

    getSongs = async () => {
        this.setState({ isLoading: true });
        this.getTjIndex();
        this.getKyIndex();
        this.setState({ isLoading: false });
    }

    getSearch = async (keyword) => {
        const link = 'https://api.manana.kr/karaoke/song/'
            + keyword
            + '.json?brand=tj';
        const { data } = await axios.get(link);
        this.setState({
            search_result: data
        })
    }

    searchPress = async (e) => {
        let keyword = e.target.value;
        this.setState({
            search_keyword: keyword
        })
        this.getSearch(keyword);
    }

    searchChange = async (e) => {
        let keyword = e.target.value;
        this.setState({
            search_keyword: keyword
        })
        this.getSearch(keyword);
    }

    componentDidMount() {
        this.getSongs();
    }

    render() {
        const { tj_index, ky_index, search_keyword, search_result } = this.state;
        return (
            <div>
                <div id='home'>
                    <a href='/'>
                        Home
          </a>
                </div>
                <input
                    id='search'
                    type="search"
                    placeholder='곡 검색하기 (곡명, 가수명)'
                    onKeyPress={this.searchPress}
                    onChange={this.searchChange}
                />
                {
                    search_keyword ? (
                        <Search
                            keyword={search_keyword}
                            songs={search_result}
                        />
                    ) : (
                            <div id='recent_list'>
                                <Recent
                                    songs={tj_index}
                                    brand={'tj'}
                                />
                                <Recent
                                    songs={ky_index}
                                    brand={'ky'}
                                />
                            </div>
                        )}

            </div >)
    }
} */
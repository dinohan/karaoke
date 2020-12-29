import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Recent from '../components/Recent';
import './Home.css';

function Home() {
    const [tjIndex, setTjIndex] = useState([]);
    const [kyIndex, setKyIndex] = useState([]);

    const getTjIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=tj';
        const { data } = await axios.get(link);
        setTjIndex(data)
    }
    const getKyIndex = async () => {
        const link = 'https://api.manana.kr/karaoke.json?brand=kumyoung';
        const { data } = await axios.get(link);
        setKyIndex(data)
    }

    useEffect(() => {
        getTjIndex();
        getKyIndex();
    }, []);

    return (<div>
        <div id='recent_list'>
            <Recent
                songs={tjIndex}
                brand={'tj'}
            />
            <Recent
                songs={kyIndex}
                brand={'ky'}
            />
        </div>
    </div>)
}

export default Home;

/*
class Home extends React.Component {
    state = {
        tj_index: [],
        ky_index: []
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
*/
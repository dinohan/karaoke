import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import YouTube from 'react-youtube';
//import axios from 'axios';

import { API_KEY } from '../config';
import { actionCreators } from '../actions'

import { GrFormClose } from 'react-icons/gr';
import { FiCopy } from 'react-icons/fi';
import tjImg from '../assets/tj.png';
import kyImg from '../assets/ky.png';
import './Detail.css';
import { SongType, State } from '../Interface';
import axios from 'axios';

interface DetailProps {
    detailOpened: boolean;
    detailSong: SongType;
    closeDetail: Function;
}

function Detail({ detailOpened, detailSong, closeDetail }: DetailProps) {
    const modal = useRef<HTMLDivElement>(null);
    const background = useRef<HTMLDivElement>(null);

    const { addToast } = useToasts()


    const handleClickOutside = ({ target }: MouseEvent) => {

        if (modal.current && background.current)
            if (detailOpened &&
                !modal.current.contains(target as Node) &&
                background.current.contains(target as Node)) {
                closeDetail();
            }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, []);

    function copy() {
        addToast(`Copied '${detailSong.title}' to clipboard`, {
            appearance: 'success',
            autoDismiss: true,
        })
    }

    function close() {
        closeDetail();
    }

    const [youtbeId, setYoutubeId] = useState('');
    useEffect(() => {
        async function getYoutubeId() {
            const youtubeKeyword = `${detailSong.title}%20${detailSong.singer}`;
            const youtubeLink = `https://www.googleapis.com/youtube/v3/search?part=id&regionCode=KR&q=${youtubeKeyword}&key=${API_KEY}`;
            const { data: { items } } = await axios.get(youtubeLink);
            setYoutubeId(items[0].id.videoId);
        }
        getYoutubeId();
        // eslint-disable-next-line
    }, [])

    return (<div id="detail" ref={background} >
        <div id="modal" ref={modal}>
            <div id='close-button' onClick={close}>
                <GrFormClose size='2em' />
            </div>
            <div id="modal-top">
                <h1>{detailSong.no}</h1>
                <img id="brand-img"
                    alt={detailSong.brand === 'tj' ? '태진' : '금영'}
                    src={detailSong.brand === 'tj' ? tjImg : kyImg}

                />
            </div>
            <div id="modal-mid">
                <div id='mid-title'>
                    <h2 id='detail-title'>{detailSong.title}</h2>
                    <CopyToClipboard text={detailSong.title}>
                        <FiCopy
                            id='copy-button'
                            size='1.4em'
                            onClick={copy} />
                    </CopyToClipboard>
                </div>
                <div>{detailSong.singer}</div>
                <div id='detail-release'>{detailSong.release}</div>
                <div id='detail-video'>
                    <YouTube
                        videoId={youtbeId}
                        opts={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </div>
            </div>
        </div>
    </div >)
}

function mapStateToProps(state: State) {
    return {
        detailOpened: state.detailOpened,
        detailSong: state.detailSong
    }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        closeDetail: () => dispatch(actionCreators.closeDetail())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

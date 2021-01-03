import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { connect } from 'react-redux';

import { actionCreators } from '../actions';
import "./Navigation.css";

import { AiFillHome, AiFillStar } from 'react-icons/ai';
import { State } from "../Interface";

interface NavigationProps {
    state: State;
    changeKeyword: Function;
}

function Navigation({ state, changeKeyword }: NavigationProps) {

    const [text, setText] = useState(state.keyword);

    function onChange(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    const history = useHistory();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        changeKeyword(text);
        const search = `key=${text}&brand=${(state.brandFilter === 0) ? 'tj' : 'ky'}&type=${state.typeFilter === 0 ? 'song' : 'singer'}`;
        history.push({
            pathname: 'search',
            search
        });
    }
    function clickHome() {
        console.log(history.location.pathname);
        if (history.location.pathname)
            window.scrollTo(0, 0);
    }

    return (
        <div>
            <div className="nav">
                <Link id="home-button" to="/" onClick={clickHome}>
                    <AiFillHome
                        size='1.5em'
                    />
                </Link>
                <Link id="favorite-button" to="/favorite">
                    <AiFillStar
                        size='1.5em'
                    />
                </Link>
            </div>
            <div id="placehold"></div>
            <div>
                <form
                    id="search-box"
                    onSubmit={handleSubmit}
                >
                    <input
                        id="search-text"
                        type="search"
                        placeholder="검색어를 입력하세요"
                        value={text}
                        onChange={onChange}
                    />
                    <button id="search-button">검색</button>
                </form>
            </div>
        </div>
    );
}

function mapStateToProps(state: State) {
    return { state: state }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        changeKeyword: (keyword: string) => dispatch(actionCreators.changeKeyword(keyword))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
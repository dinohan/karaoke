import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import "./Navigation.css";

function Navigation({ state, changeKeyword, getSearchSongs }) {
    const history = useHistory();

    const [text, setText] = useState(state.keyword);

    function onChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        changeKeyword(text);
        const search = `key=${text}&brand=${(state.brandFilter === 0) ? 'tj' : 'ky'}&type=${state.typeFilter === 0 ? 'song' : 'singer'}`;
        history.push({
            pathname: 'search',
            search
        });
    }
    return (
        <div>
            <div className="nav">
                <Link id="home-button" to="/">노래방 검색</Link>
            </div>
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

function mapStateToProps(state) {
    return { state: state }
}

function mapDispatchToProps(dispatch) {
    return {
        changeKeyword: (text) => dispatch(actionCreators.changeKeyword(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

/*
class Navigation extends React.Component {
    state = {
        path: '/home',
        brand: 'tj',
        type: 'song'
    }
    handleSubmit = (e) => {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const brand = params.get('brand');
        const type = params.get('type');
        if (e.key === 'Enter') {
            var link = '/search?key=' + e.target.value
                + '&brand=' + (brand === null ? 'tj' : brand)
                + '&type=' + (type === null ? 'song' : type);
            this.props.history.push(link);
        }
    }

    render() {
        return (
            <div>
                <div className="nav">
                    <Link id="home-button" to="/">노래방 검색</Link>
                </div>
                <div>
                    <form onSubmit={onSubmit}>
                        <input
                            id="search-box"
                            type="search"
                            placeholder="검색어를 입력하세요"
                        />
                        <button>검색</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Navigation);

*/
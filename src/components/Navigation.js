import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.css";

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
                    <input
                        id="search-box"
                        type="search"
                        placeholder="검색어를 입력하세요"
                        onKeyPress={this.handleSubmit}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Navigation);
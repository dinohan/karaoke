import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { actionCreators } from '../actions';
import './Selector.css'

function Selector({ state, changeBrandFilter, changeTypeFilter }) {

    const history = useHistory();

    function updateHistory(keyword, brand, type) {
        const search = `key=${keyword}&brand=${(brand === 0) ? 'tj' : 'ky'}&type=${type === 0 ? 'song' : 'singer'}`;
        history.push({
            pathname: 'search',
            search
        });
    }

    function selectTJ() {
        changeBrandFilter(0);
        updateHistory(state.keyword, 0, state.typeFilter);
    }
    function selectKY() {
        changeBrandFilter(1);
        updateHistory(state.keyword, 1, state.typeFilter);
    }
    function selectSong() {
        changeTypeFilter(0);
        updateHistory(state.keyword, state.brandFilter, 0);
    }
    function selectSinger() {
        changeTypeFilter(1);
        updateHistory(state.keyword, state.brandFilter, 1);
    }

    const { brandFilter, typeFilter } = state;
    return (<>
        <div>
            <div className="buttons" >
                <button
                    onClick={selectTJ}
                    className={"button left " + (brandFilter === 0 ? "selected" : "")}>
                    TJ
                </button>
                <button
                    onClick={selectKY}
                    className={"button right " + (brandFilter === 1 ? "selected" : "")}>
                    KY
                </button>
            </div>
        </div >
        <div>
            <div className="buttons" >
                <button
                    onClick={selectSong}
                    className={"button left " + (typeFilter === 0 ? "selected" : "")}>
                    곡명
                </button>
                <button
                    onClick={selectSinger}
                    className={"button right " + (typeFilter === 1 ? "selected" : "")}>
                    가수명
                </button>
            </div>
        </div >
    </>)
}

function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return {
        changeBrandFilter: (id) => dispatch(actionCreators.changeBrandFilter(id)),
        changeTypeFilter: (id) => dispatch(actionCreators.changeTypeFilter(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);

/*
class Selector extends React.Component {

    redirect = (flag) => {
        const { choices, selected } = this.props;
        const pathname = this.props.location.pathname;
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const key = params.get('key');
        const brand = params.get('brand');
        const type = params.get('type');

        if (flag === selected) {
            return pathname + search;
        } else {
            var link = '/search?key=' + key;
            if (choices[0] === 'tj') {
                link += '&brand=' + choices[flag]
                    + '&type=' + type;
            } else {
                link += '&brand=' + brand
                    + '&type=' + choices[flag];
            }
            return link;
        }
    }

    handleClick = (e) => {
        const className = e.target.className;
        var flag;
        if (className.includes('left')) {
            flag = 0;
        } else {
            flag = 1;
        }
        this.redirect(flag);
    }

    getLinks = () => {
        return [this.redirect(0), this.redirect(1)]
    }

    display = (name) => {
        switch (name) {
            case 'tj':
                return 'TJ'
            case 'ky':
                return 'KY'
            case 'song':
                return '곡명'
            case 'singer':
                return '가수명'
            default:
                return ''
        }
    }

    render() {
        const { choices, selected } = this.props;
        const links = this.getLinks();
        return (
            <div>
                <div className="buttons" >
                    <Link to={links[0]}>
                        <button className={"button left " + (selected === 0 ? "selected" : "")}>
                            {this.display(choices[0])}
                        </button>
                    </Link>
                    <Link to={links[1]}>
                        <button className={"button right " + (selected === 1 ? "selected" : "")}>
                            {this.display(choices[1])}
                        </button>
                    </Link>
                </div>
            </div >)
    }
}

export default withRouter(Selector);

*/
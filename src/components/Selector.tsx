import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { actionCreators } from '../actions';
import { State } from '../Interface';
import './Selector.css'

interface SelectorProps {
    state: State;
    changeBrandFilter: Function;
    changeTypeFilter: Function;
}

function Selector({ state, changeBrandFilter, changeTypeFilter }: SelectorProps) {

    const history = useHistory();

    function updateHistory(keyword: string, brand: number, type: number) {
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

function mapStateToProps(state: State) {
    return { state }
}

function mapDispatchToProps(dispatch: Function) {
    return {
        changeBrandFilter: (id: number) => dispatch(actionCreators.changeBrandFilter(id)),
        changeTypeFilter: (id: number) => dispatch(actionCreators.changeTypeFilter(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
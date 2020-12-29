import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string'
import { connect } from 'react-redux';

import { actionCreators } from '../actions'
import Selector from '../components/Selector';
import Result from '../components/Result';
import './Search.css';

function Search({ changeKeyword, changeBrandFilter, changeTypeFilter }) {
    const location = useLocation();
    const searchURI = decodeURI(location.search);
    const query = queryString.parse(searchURI);
    useEffect(() => {
        changeKeyword(query.key);
        changeBrandFilter(query.brand === 'ky' ? 1 : 0)
        changeTypeFilter(query.type === 'singer' ? 1 : 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, []);
    return (<div>
        <Selector />
        <Result />
    </div>)
}

function mapDispatchToProps(dispatch) {
    return {
        changeKeyword: (text) => dispatch(actionCreators.changeKeyword(text)),
        changeBrandFilter: (id) => dispatch(actionCreators.changeBrandFilter(id)),
        changeTypeFilter: (id) => dispatch(actionCreators.changeTypeFilter(id))
    };
}

export default connect(null, mapDispatchToProps)(Search); 
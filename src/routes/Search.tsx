import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string'
import { connect } from 'react-redux';

import { actionCreators } from '../actions'
import Selector from '../components/Selector';
import Result from '../components/Result';

interface SearchProps {
    changeKeyword: Function;
    changeBrandFilter: Function;
    changeTypeFilter: Function;
}

function Search({ changeKeyword, changeBrandFilter, changeTypeFilter }: SearchProps) {
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

function mapDispatchToProps(dispatch: Function) {
    return {
        changeKeyword: (keyword: string) => dispatch(actionCreators.changeKeyword(keyword)),
        changeBrandFilter: (id: number) => dispatch(actionCreators.changeBrandFilter(id)),
        changeTypeFilter: (id: number) => dispatch(actionCreators.changeTypeFilter(id))
    };
}

export default connect(null, mapDispatchToProps)(Search); 
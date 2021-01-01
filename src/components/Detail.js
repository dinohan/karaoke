import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../actions'
import './Detail.css';

function Detail({ state, closeDetail }) {
    const modal = useRef();
    const [closeCount, setCount] = useState(0);
    const handleClickOutside = ({ target }) => {
        if (state.detailOpened && !modal.current.contains(target)) {
            console.log('hi');
            setCount(closeCount + 1);
            console.log(closeCount);
            if (closeCount > 1) {
                console.log('close');
                closeDetail();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps	
    }, []);

    return (<div id="detail" >
        <div id="modal" ref={modal}>
            detail
        </div>
    </div>)
}

function mapStateToProps(state) {
    return { state: state }
}

function mapDispatchToProps(dispatch) {
    return {
        closeDetail: () => dispatch(actionCreators.closeDetail())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

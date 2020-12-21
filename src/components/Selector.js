import React from 'react';
import { Link, withRouter } from "react-router-dom";
import './Selector.css'

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
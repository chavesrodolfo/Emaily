import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h2>
                    <a href="/">Landing</a> |
                    <a href="/surveys"> Dashboard</a> |
                    <a href="/surveys/new"> New Survey</a>
                </h2>
            </div>
        );
    }
}

export default Header;
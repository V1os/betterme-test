// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Catcher from 'components/Catcher';
import Search from 'components/Search';

// Instruments

export default @hot(module) class App extends Component {
    constructor () {
        super();

        this.state = {
            _logout: this._logout,
        };
    }

    _login = () => {
        this.setState({
            isAuthenticated: true,
        });
    };

    _logout = () => {
        this.setState({
            isAuthenticated: false,
        });
    };

    render () {
        return (
            <Catcher>
                <Search />
            </Catcher>
        );
    }
}

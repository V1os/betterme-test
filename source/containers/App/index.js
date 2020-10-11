// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import Catcher from 'components/Catcher';
import Search from 'components/Search';
import Spinner from 'components/Spinner';

const App = () => {
    return (
        <Catcher>
            <Spinner />
            <Search />
        </Catcher>
    );
};

export default hot(module)(App);

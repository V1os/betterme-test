// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import { store } from './init/store';

// Theme
import './theme/init';

// App
import App from './containers/App';

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>,
    document.getElementById('app')
);

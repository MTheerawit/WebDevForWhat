import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const AppwithRouter = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
)
ReactDOM.render(<AppwithRouter />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/components/Header/Header'

const AppwithRouter = () => (
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>

)
ReactDOM.render(<AppwithRouter />, document.getElementById('root'));

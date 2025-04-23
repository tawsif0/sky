import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router basename="/">
        <App />
    </Router>
);

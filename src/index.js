import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Waddle from './components/Waddle';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(<Router><Waddle /></Router>, document.getElementById('root'));

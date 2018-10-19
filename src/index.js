import React from 'react';
import ReactDOM from 'react-dom';
import RouterView from './routes/index';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <RouterView />
), document.getElementById('root'));
registerServiceWorker();
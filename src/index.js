import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './router/Routes.js';
import 'antd/dist/antd.css';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

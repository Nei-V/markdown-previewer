import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reduxStore from './store';

ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();



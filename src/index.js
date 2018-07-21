import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import marked from 'marked';
import reduxStore from './store';

ReactDOM.render(
<Provider store={reduxStore}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

document.getElementById('test-marked').innerHTML=marked('# Marked in the browser\n\nRendered by **marked**.');

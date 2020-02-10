import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots } from './reducer';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render( 
                <Provider store={store}>
                    <App  />
                </Provider>, document.getElementById('root'));
registerServiceWorker();

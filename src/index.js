import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './icomoon/icomoon.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import EnterpriseProvider from "../src/components/Context/EnterpriseProvider"

ReactDOM.render(
    <EnterpriseProvider>
        <App />
    </EnterpriseProvider>
    , document.getElementById('root'));

serviceWorker.unregister();

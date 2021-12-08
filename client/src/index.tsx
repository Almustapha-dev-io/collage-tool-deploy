import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { HashRouter } from 'react-router-dom';

import 'index.scss';
import App from 'App';
import reportWebVitals from 'reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                closeOnClick
                pauseOnHover
                draggable
                bodyClassName="App__Toast"
                theme="dark"
            />
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

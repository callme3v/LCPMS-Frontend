require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap';
import {App} from './App.jsx';
import './App.scss';
import {store} from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux"

const appElement = document.getElementById('app');
const root = createRoot(appElement)

root.render(<ReduxProvider store={store}>
    <App/>
</ReduxProvider>);

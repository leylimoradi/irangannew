import React, { Component, Fragment } from 'react'
import ReactDOM from "react-dom";
import 'swiper/swiper-bundle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Route, Switch } from "react-router-dom";
import '../../src/styles.css';

import Head from '../../src/components/header.js';
import Main from '../../src/components/main.js';
import ProviderWrapper from '../../src/app';
import '../../src/stylesheets/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <ProviderWrapper />
    </React.StrictMode>,
    document.getElementById('root')
);







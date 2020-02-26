// import React, { Component } from 'react';
// import React, { useState } from 'react';

import Main from './components/Main';
import JBItem from './components/JBItem';

(function () {

    console.log("App.jsx");

    let app = {};

    app.Main = React.createRef();

    app.init = function () {

        const root = document.getElementById('app-root');

        if (root) {
            ReactDOM.render(<Main />, root);
        }

        const jb = document.getElementById('json-builder');

        if (jb) {
            ReactDOM.render(<JBItem isRoot={1} />, jb);
        }

    };

    window.theThing = app;
    window.theThing.init();

}());
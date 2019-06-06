// import React, { Component } from 'react';
// import React, { useState } from 'react';

import Main from './components/Main';

(function () {

    let app = {};

    app.Main = React.createRef();

    app.init = function () {

        const root = document.getElementById('app-root');

        if (root) {
            ReactDOM.render(<Main />, root);
        }
    };

    window.theThing = app;
    window.theThing.init();

}());
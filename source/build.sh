#!/bin/bash

if [ "$1" = "-i" ]; then
    npm i --save-dev jest babel-jest @babel/core @babel/preset-env
    npm i webpack
    npm i -D webpack-cli
fi

npm run build_js
npm test

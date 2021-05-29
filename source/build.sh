#!/bin/bash

if [ "$1" = "-i" ]; then
    npm i -D jest
    npm i webpack
    npm i -D webpack-cli
fi

npm run build_js
npm run build_test
npm test

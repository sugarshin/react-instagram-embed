#!/bin/bash

set -eu

REPO=https://github.com/sugarshin/react-instagram-embed.git
COMMIT=$(git rev-parse --short HEAD)
DIR=build

npm run clean:build
mkdir -p $DIR
curl https://sugarshin.net/favicon.ico > $DIR/favicon.ico
npm run build:demo
node_modules/.bin/gh-pages -x -m "Update demo $COMMIT [ci skip]" -d $DIR -r $REPO

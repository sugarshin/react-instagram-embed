#!/bin/bash -eu

PACKAGE_NAME=`node -p "require('./package.json').name"`
NEW_VERSION=`node -p "require('./package.json').version"`
LATEST_VERSION=`npm v ${PACKAGE_NAME} version 2>/dev/null || exit 0`

if [[ "$LATEST_VERSION" = "$NEW_VERSION" ]]; then
  echo "${NEW_VERSION} exists. It was skip publishing."
else
  npm publish
  TAG=v${NEW_VERSION}
  git tag $TAG
  git push origin $TAG
fi

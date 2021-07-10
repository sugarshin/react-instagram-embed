#!/bin/bash -eu

PACKAGE_NAME=$(cat < ./package.json | jq .name -r)
NEW_VERSION=$(cat < ./package.json | jq .version -r)
LATEST_VERSION=$(npm v "${PACKAGE_NAME}" version 2>/dev/null || exit 0)

if [[ "$LATEST_VERSION" = "$NEW_VERSION" ]]; then
  echo "${NEW_VERSION} exists. It was skip publishing."
else
  npm publish
  TAG=v${NEW_VERSION}
  git tag "${TAG}"
  git push origin "${TAG}"
fi

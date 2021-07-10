#!/bin/bash -eu

main() {
  local -r dir=build
  npm run clean:build
  mkdir -p "${dir}"
  curl https://sugarshin.net/favicon.ico > "${dir}"/favicon.ico
  webpack
}

main

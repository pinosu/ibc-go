#!/bin/bash

set -eou pipefail

# build_wasm_image extracts the correct libwasm version and checksum
# based on the go.mod and builds a docker image with the provided tag.
function build_wasm_image(){
  docker build . -t "${1}" -f modules/light-clients/08-wasm/Dockerfile
}

# default to latest if no tag is specified.
TAG="${1:-ibc-go-wasm-simd:latest}"

build_wasm_image "${TAG}"

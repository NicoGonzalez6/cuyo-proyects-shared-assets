#!/usr/bin/env bash
node ./src/scripts/generate-codepoints.js \
&& shx mkdir ./dist/icons/font \
&& fantasticon --config ./src/configs/fantasticonrc.js \
&& rm -R dist/icons/svg

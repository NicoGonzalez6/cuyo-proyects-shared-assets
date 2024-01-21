#!/usr/bin/env bash
npm run prebuild \
&& shx mkdir dist/ \
&& sh ./src/scripts/build-svg.sh \
&& sh ./src/scripts/build-icons-font.sh \


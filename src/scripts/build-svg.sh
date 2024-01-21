#!/usr/bin/env bash

shx mkdir dist/icons \
&& cp -R src/icons dist/icons/svg \
&& svgo -f dist/icons/svg --config ./src/configs/svgo-icons.config.js \


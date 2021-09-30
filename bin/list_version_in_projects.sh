#!/bin/bash
find .. -maxdepth 2 -name package.json -not -path '../eslint-config-koket/*' \
  -exec grep -r '@tv4/koket-utils' {} \;

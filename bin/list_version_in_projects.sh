#!/bin/bash
grep -r 'eslint-config-koket' ../ --exclude '*node_modules*' --exclude '*eslint-config-koket*' --include 'package.json'


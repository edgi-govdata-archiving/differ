#!/usr/bin/env node

var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var config = JSON.parse(babelrc);
require('babel-register')(config);

//This file isn'y transpiled, so must use common js and ES5

//Register  babel to transpire

require('babel-register')();

//disable webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
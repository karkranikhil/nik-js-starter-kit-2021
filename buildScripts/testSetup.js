// this file isn't transpiled so must use commonJs and ES5

// register babel too transpile before our tests run

require('@babel/register')();

//disable webpack features that Mocha doesn't understand

require('module')._extensions['.css'] = function(){};



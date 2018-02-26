#!/usr/bin/env node
var scan = require('./');

scan(function(error, devices) {
  if(error) {
    return console.error('Found no devices!')
  }
  console.log('Found one device!')
  console.log(devices[0])
}, true);

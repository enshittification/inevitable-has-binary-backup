
var hasBinary = require('./');
var assert = require('better-assert');
var fs = require('fs');

describe('has-binarydata', function(){

  it('should work with buffer', function(){
    assert(hasBinary(fs.readFileSync('./test.js')));
  });

  it('should work with an array that contains a buffer', function() {
    var arr = [1, new Buffer('asdfasdf', 'utf8'), 2];
    assert(hasBinary(arr));
  })

});

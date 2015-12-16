var through = require('through');
var jade = require('react-jade');
module.exports = function(file) {
  var inputString = '';
  var write = function(buf) {return inputString += buf;};
  var end = function() {
    var ret = "module.exports = " + jade.compileClient(inputString, {globalReact: true});
    this.queue(ret);
    this.queue(null)
  }
  return through(write, end);
}

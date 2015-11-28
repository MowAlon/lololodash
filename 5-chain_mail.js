var _ = require("lodash");

var worker = function(words) {
  return _.chain(words)
    .sort()
    .map(function(word) {
      return (word + 'chained').toUpperCase();
    });
};

module.exports = worker;

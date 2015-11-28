var _ = require("lodash");

var worker = function(cities) {
  var hot_cities = [];
  var warm_cities = [];

  function isHot(temp) {
    return temp > 19;
  }

  _.forEach(cities, function(temps, city){

    if (_.every(temps, function(temp) {
        return isHot(temp)
    })) {
        hot_cities.push(city);
    } else if (_.some(temps, function(temp) {
        return isHot(temp)
    })) {
      warm_cities.push(city);
    }
  });

  return { hot: hot_cities, warm: warm_cities }
};

module.exports = worker;

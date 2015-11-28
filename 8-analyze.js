var _ = require("lodash");

var worker = function(incomes) {

  incomes = _.sortBy(incomes, 'income')

  var average = _.reduce(incomes, function(sum, record){
    return sum + record.income
  },0) / _.size(incomes)

  var underperform = _.filter(incomes, function(record){
    return record.income <= average
  })

  var overperform = _.filter(incomes, function(record){
    return record.income > average
  })

  return {average, underperform, overperform}
};

module.exports = worker;

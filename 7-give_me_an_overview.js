var _ = require("lodash");

var worker = function(articles) {

  var counts = _.reduce(articles, function(result, sale){
    if (result[sale.article] == null) {result[sale.article] = 0}
    result[sale.article] = result[sale.article] + sale.quantity
    return result
  },{})

  counts = _.map(counts, function(quantity, article){
    return {article: Number(article), total_orders: quantity}
  }
  return _.sortBy(counts, 'quantity').reverse()
};

module.exports = worker;

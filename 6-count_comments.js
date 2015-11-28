var _ = require("lodash");

var worker = function(comments) {
  var users = _.groupBy(comments, 'username');
  var comment_counts = _.map(users, function(data, username){
    return {username, comment_count: _.size(data)};
    })
  return _.sortBy(comment_counts, 'comment_count').reverse();
};

module.exports = worker;

exports.require = function (doc, fieldlist) {
  fieldlist.forEach(function (elem) {
    var message = elem + ' is required';
    if(!doc[elem]) {
      throw({ 'forbidden': message });
    }
  });
}

exports.word = function (values,connection, mycallbackFunc) {
  var output = "";
  connection.query(
    "SELECT definition FROM entries where word='"+values+"'",
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      output = result;
       mycallbackFunc(result);
    }
  );
};
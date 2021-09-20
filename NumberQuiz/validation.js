var database = require("./database.js");
exports.check = function (count, query) {
    if (parseInt(database.questions()[count].ans) === parseInt(query.ansID)) return true;
    else return false;
};
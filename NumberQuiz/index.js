
exports.main = function (req, res, count, score) {
    var database = require("./database");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write('<head><meta charset="utf-8"/>');
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Number Quiz</h1> ");
    res.write("<p>your current score is :");
    res.write(String(score));
    res.write("</p> ");
    if (count < 5) {
        res.write("<p> Guess the number sequence is </p>");
        res.write("<p>");
        res.write(String(database.questions()[count].question));
        res.write("</p>");
        res.write('<form action="http://localhost:8080/validation.js" >');
        res.write("<label>your answer is</label>");
        res.write('<input type="text" name="ansID"/>');
        res.write("<button>Submit</button>");
        res.write("</form>");
    } else {
        res.write("<p>You have completed the number quiz, with a score of ");
        res.write(String(score));
        res.write(" out of ");
        res.write(String(count));
        res.write("</p>");
    }
    res.write("</body>");
    res.write("</html>");
    return res.end();
};
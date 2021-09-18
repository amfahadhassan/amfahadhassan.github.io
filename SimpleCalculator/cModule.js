exports.calc = function (req, res, vals) {
    var operation = vals.operation;
    var result = 0;
    console.log(operation + " first --" + vals.first + "second" + vals.second);
    if (operation == "add") {
        result = parseInt(vals.first) + parseInt(vals.second);
        console.log(result);
    } else if (operation == "subtract") {
        result = parseInt(vals.first) - parseInt(vals.second);
    } else if (operation == "multiply") {
        result = parseInt(vals.first) * parseInt(vals.second);
    } else {
        result = parseInt(vals.first) / parseInt(vals.second);
    }
    console.log(result);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write('<head><meta charset="utf-8"/>');
    res.write("<title>Simple Calculator</title>");
    res.write('<link href="style.css" type="text/css" rel="stylesheet"/>');
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Answer is: ");
    res.write(String(result));
    res.write("</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};
var express = require("express"),
tuio = require("tuio");



tuio.init({
        oscPort: 3333,
        oscHost: "0.0.0.0",
        socketPort: 5000
});

app = express();
app.use(express["static"](__dirname + "/public"));
app.listen(5040);
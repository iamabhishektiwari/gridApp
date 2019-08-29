let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
let herodata = require("./data/herodata.json")
let app = express();

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
app.use(cors());
app.get("/data",function (request,response) {
    console.log(request.url);
    response.send(herodata);
});
app.get("/",function (request,response) {
    console.log(request.url);
    response.sendFile(__dirname+"./public/index.html");
});

// app.post("/data",function (request,response) {
    
// })

app.listen(3000);
console.log("web server is live now");
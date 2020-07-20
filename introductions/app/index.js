// import choo
var choo = require("choo");
var html = require("choo/html");

// initialize choo
var app = choo();

var storePromise = require("./store.js");

storePromise.then((store) => {
app.use(store);

// import a template
var main = require("./main.js");

app.route("/introductions", main);

// start app
app.mount("div");  
})

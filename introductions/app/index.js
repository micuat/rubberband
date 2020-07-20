// import choo
var choo = require("choo");
var html = require("choo/html");

// initialize choo
var app = choo();

app.use(function(state, emitter) {
  state.number = 1;

  emitter.on("prev", function() {
    state.number--;
    emitter.emit("render");
  });
  emitter.on("next", function() {
    state.number++;
    emitter.emit("render");
  });

  // initialize state
  state.animals = [
    { type: "lion", x: 200, y: 100 },
    { type: "crocodile", x: 50, y: 300 }
  ];

  // add animal
  emitter.on("addAnimal", function() {
    var obj = { type: "lion", x: 100, y: 200 };
    state.animals.push(obj);

    emitter.emit("render");
  });
});

// import a template
var main = require("./main.js");

app.route("/introductions", main);

// start app
app.mount("div");

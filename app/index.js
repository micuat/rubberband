// import choo
var choo = require("choo");
var html = require("choo/html");

// initialize choo
var app = choo();

// app.route('/*', notFound);
// function notFound () {
//   return html`
//     <div>
//       <a href="https://hydra-meetup-0.glitch.me/">
//         404 with love ❤ back to top!
//       </a>
//     </div>
//   `
// }

var storePromise = require("./store.js");

storePromise.then(store => {
  app.use(store);

  // import a template
  var main = require("./main.js");
  var introduction = require("./introduction.js");

  app.route("/", main);
  app.route("/introductions/:profile", introduction);

  // start app
  app.mount("div");
});

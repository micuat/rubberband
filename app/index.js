// import choo
var choo = require("choo");
var html = require("choo/html");
const store = require("./store.js");
// initialize choo
var app = choo({ hash: true });

app.route("/*", notFound);


function notFound() {
  return html`
    <div>
      <a href="https://hydra-meetup-2.glitch.me/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

var storePromise = require("./store.js");


//storePromise.then(store => {
app.use(store);

// import a template
var main = require("./main.js");
var info = require("./info.js");
var introduction = require("./introduction.js");

app.route("/", main);
app.route("#info", info);
app.route("#introductions/:profile", introduction);

// start app
app.mount("#choomount");
// main = document.getElementsByClassName("main")[0]

console.log('!main', main)
//});

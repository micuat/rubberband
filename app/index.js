// import choo
var choo = require("choo");
var html = require("choo/html");
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

// import a template
var main = require("./main.js");

app.route("/", main);

// start app
app.mount("#choomount");

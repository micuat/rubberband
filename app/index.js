// import choo
const choo = require("choo");
const html = require("choo/html");
// initialize choo
const app = choo({ hash: true });

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
const main = require("./main.js");

app.route("/", main);

// start app
app.mount("#choomount");

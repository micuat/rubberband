// import choo
import choo from "choo";
import html from "choo/html";

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
import main from "./main.js";

app.route("/", main);

// start app
app.mount("#choomount");

app.emitter.on("DOMContentLoaded", () => {
  osc(30,0.1,1.5).out()
});



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

app.state.schedule = require("./schedule.js")();

const counter = [];
for (const s of app.state.schedule) {
  const types = [...s.type, "all"];
  for (const t of types) {
    const c = counter.find(el => el.t == t);
    if (c == undefined) {
      counter.push({ t, count: 1 });
    } else {
      c.count++;
    }
  }
}

console.log(counter)
app.state.types = counter.sort((a, b) => {
  if(a.count < b.count) {
    return 1;
  }
  if(a.count == b.count) {
    return 0;
  }
  return -1;
});

// import a template
const main = require("./main.js");

app.route("/", main);

// start app
app.mount("#choomount");

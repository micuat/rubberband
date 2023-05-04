// import choo
const choo = require("choo");
const html = require("choo/html");

const scrollIntoView = require('scroll-into-view');

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


const AirtableLoader = require("./airtable-loader.js");
const airdata = [];
let airtableLoader = new AirtableLoader("key1S3rtGoYU17uqC", "appkzmGcC7NR7yR24");
airtableLoader.load(
  // every
  (r) => {
    for (const el of r) {
      if (el.enabled) {
        airdata.push(el);
      }
    }
  },
  // done
  () => {
    app.state.schedule = require("./schedule.js")(app.state, airdata);
    app.emit('render')
    
    if (app.state.query.auto) {
      document.querySelector("body").style = "cursor: none"
      setInterval(() => {
        let N = airdata.length + 5;
        let index = (Math.random() * N) | 0;
        if (index < airdata.length) {
          // document.getElementById(`section-${index}`).scrollIntoView({behavior:"smooth"});
          scrollIntoView(document.getElementById(`section-${index}`), { time: 3000 })
        }
        else {
          scrollIntoView(document.getElementById(`container`), { time: 3000 })
        }
      }, 3000);
    }

  }
);



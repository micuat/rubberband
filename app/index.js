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

const airdata = [];
let airtableLoader = new require("./AirtableLoader.js")("key1S3rtGoYU17uqC", "appkzmGcC7NR7yR24");
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
    app.state.schedule = require("./schedule.js")(airdata);

//     const counter = [];
//     for (const s of app.state.schedule) {
//       const types = [...s.type, "all"];
//       for (const t of types) {
//         const c = counter.find(el => el.t == t);
//         if (c == undefined) {
//           counter.push({ t, count: 1 });
//         } else {
//           c.count++;
//         }
//       }
//     }

//     console.log(counter)
//     app.state.types = counter.sort((a, b) => {
//       if(a.count < b.count) {
//         return 1;
//       }
//       if(a.count == b.count) {
//         return 0;
//       }
//       return -1;
//     });

    // import a template
    const main = require("./main.js");

    app.route("/", main);

    // start app
    app.mount("#choomount");

    const urlParams = new URLSearchParams(window.location.search);
    const autoMode = urlParams.get("auto") !== null;

    if (autoMode) {
      document.querySelector("body").style = "cursor: none"
      setInterval(() => {
        let N = airdata.length + 5;
        let index = (Math.random() * N) | 0;
        if (index < airdata.length) {
          document.getElementById(`section-${index}`).scrollIntoView({behavior:"smooth"});
        }
        else {
          document.getElementById(`container`).scrollIntoView({behavior:"smooth"});
        }
      }, 3000);
    }

  }
);



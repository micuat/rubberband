// import choo
const choo = require("choo");
const html = require("choo/html");
// initialize choo
const app = choo({ hash: true });
const contents = require("./contents.js");

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



const Airtable = require("../node_modules/airtable/lib/airtable.js");


class AirtableLoader {
  constructor(key, baseName) {
    this.elements = [];
    this.base = new Airtable({ apiKey: key }).base(baseName);
  }
  load(loadCallback, doneCallback) {
    let first = true;

    this.base("Table 1")
    .select({
      pageSize: 100,
      view: "Gallery",
    })
    .eachPage(
      (records, fetchNextPage) => {
        // records.forEach((record) => {
        //   console.log(record.fields);
        // });

        const r = records.map((e) => {
          const el = {};
          el.id = e.id;
          // el.name = e.fields.Name;
          // // el.created = new Date(e.fields.Created);
          // el.notes = e.fields.Notes === undefined ? "" : e.fields.Notes;

          // el.youtube = e.fields.Youtube;
          for (const key of Object.keys(e.fields)) {
            el[key.toLocaleLowerCase()] = e.fields[key] === undefined ? "" : e.fields[key];
          }
          el.attachment = "";
          if (e.fields.Attachments) {
            for (let i = 0; i < e.fields.Attachments.length; i++) {
              el.attachmentType = e.fields.Attachments[i].type;
              el.attachment = e.fields.Attachments[i].url;
              if (e.fields.Attachments[i].thumbnails !== undefined) {
                if (e.fields.Attachments[i].thumbnails.large) {
                  el.attachment = e.fields.Attachments[i].thumbnails.large.url;
                  break;
                }
              }
            }
          }
          console.log(el)
          return el;
        });
        this.elements.push(...r);
        if (loadCallback !== undefined) {
          loadCallback(r);
        }

        // emitter.emit("tablePageLoaded")
        if (first) {
          first = false;
        }
        fetchNextPage();
      },
      (err) => {
        if (doneCallback !== undefined) {
          doneCallback();
        }
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  }
}

const airdata = [];
let airtableLoader = new AirtableLoader("key1S3rtGoYU17uqC", "appkzmGcC7NR7yR24");
airtableLoader.load(
  // every
  (r) => {
    for (const el of r) {
      console.log(el.attachments[0].thumbnails.large.url, el.notes, el.name, el.year)
      airdata.push(el);
    }
  },
  // done
  () => {
    app.state.schedule = require("./schedule.js")(airdata);
    console.log(app.state.schedule)

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
      setInterval(() => {
        let N = contents.length;
        let index = (Math.random() * N) | 0;
        document.getElementById(`section-${index}`).scrollIntoView({behavior:"smooth"});
      }, 3000);
    }

  }
);



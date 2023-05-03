const Airtable = require("airtable.js");

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

module.exports = AirtableLoader;

// const html = require("choo/html");
// var sc = [
//   {
//     start: new Date("March 1, 2022"),
//     title: "nail.glitches.me",
//     type: ["mixed media"],
//     topic: [""],
//     collab: ["Naoto Hieda"],
//     venue: "",
//     image: "https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/IMG_9025.jpeg?v=1682930416921",
//     links: [],
//     desc: html`
//     `
//   },
//   {
//     start: new Date("March 1, 2023"),
//     title: "origami.glitches.me",
//     type: ["installation"],
//     topic: [""],
//     collab: ["Naoto Hieda"],
//     venue: "",
//     image: "https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/IMG_9024.jpeg?v=1682930416189",
//     links: [],
//     desc: html`
//     `
//   },
//   {
//     start: new Date("March 1, 2022"),
//     title: "watch.glitches.me",
//     type: ["installation"],
//     topic: [""],
//     collab: ["Naoto Hieda"],
//     venue: "",
//     image: "https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/IMG_9020.jpeg?v=1682930411602",
//     links: [],
//     desc: html`
//     `
//   },
//   {
//     start: new Date("March 1, 2023"),
//     title: "soup.glitches.me",
//     type: ["installation"],
//     topic: [""],
//     collab: ["Naoto Hieda"],
//     venue: "",
//     image: "https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/IMG_9023.jpeg?v=1682930415187",
//     links: [],
//     desc: html`
//     `
//   },
//   {
//     start: new Date("March 1, 2023"),
//     title: "Every Kitchen Has to Fit",
//     type: ["installation"],
//     topic: [""],
//     collab: ["Naoto Hieda"],
//     venue: "",
//     image: "https://cdn.glitch.global/94071be9-32ff-4e53-9cde-593c4e7bf2cd/IMG_9021.jpeg?v=1682930413682",
//     links: [],
//     desc: html`
//     `
//   },

// ];

// module.exports = sc;
// // window.contents = sc;

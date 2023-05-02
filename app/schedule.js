const html = require("choo/html");
const contents = require("./contents.js");
// const contents = window.contents;

const Airtable = require("airtable");


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

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  
//   this.airtableLoader = new AirtableLoader("key1S3rtGoYU17uqC", "appkzmGcC7NR7yR24");
//   this.airtableLoader.load(
//     // every
//     (r) => {
//       for (const el of r) {
//         console.log(el)
//       }
//     },
//     // done
//     () => {
//     }
//   );
  
  
  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < contents.length; i++) {
    const s = contents[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const dateYear = s.start.toLocaleDateString(undefined, {
      year: "numeric"
    });
    let { title, topic, desc, type, image, yt, collab, venue, links } = s;
    //   console.log("oi", title, desc.parentNode)
    // if(desc.parentNode !== undefined && desc.parentNode !== null) {
    //   desc = desc.parentNode.removeChild(desc);
    // }

    let types = [];
    for (let i = 0; i < type.length; i++) {
      let del = i < type.length - 1 ? ', ' : '';
      types.push(type[i] + del);
    }
    let topics = [];
    for (let i = 0; i < topic.length; i++) {
      let del = i < topic.length - 1 ? ', ' : '';
      topics.push(topic[i] + del);
    }
    
    let link = [];
    if (yt != undefined) {
      link.push(html`<a target="_blank" href="https://youtu.be/${yt}">Video</a>`);
    }
    for (let i = 0; links !== undefined && i < links.length; i++) {
      let num = i + 1;
      if(links.length == 1) {
        num = "";
      }
      link.push(html`<div><a target="_blank" href="${links[i]}">Link ${num}</a></div>`);
    }
    
    let collabs = [];
    if (collab != undefined) {
      let i = 0;
      for (const c of collab) {
        collabs.push(`${c}`);
        if (i == collab.length - 2) {
          collabs.push(` and `);
        }
        else if (i < collab.length - 1) {
          collabs.push(`, `);
        }
        i++;
      }
    }
    let venueElt;
    if (venue != undefined) {
      let prefix = "";
      venueElt = html`
        ${prefix} ${venue}
      `;
    }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img style="object-fit: cover;aspect-ratio: 1/1" src="${image}" loading="lazy" />
      `;
    } else {
      imageElt = html`<p>The image is currently on loan</p>`
    }
              // <div class="collabs">${collabs}</div>
              // <div class="type">${types} ${topics}</div>

    dates.push(
      {type, title, dateYear, dom: html`
        <section id="section-${i}">
          <div class="thumbnail">${imageElt}</div>
          <div class="caption-holder">
            <div class="caption">
              <div><span class="title">${title}</span></div>
              <div><span class="date">${dateYear}</span></div>
              <div class="type">Mixed media</div>
              <p class="desc">${desc}</p>
            </div>
          </div>
        </section>
      `
      });
  }

  return dates;
};

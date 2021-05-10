var html = require("choo/html");
var sc = require("./contents.js");

module.exports = filter => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const dateYear = s.start.toLocaleDateString(undefined, {
      year: "numeric"
    });
    const { title, topic, desc, type, image, yt, collab, venue } = s;

    if (filter != undefined) {
      if (filter.tag != undefined) {
        if (filter.tag != "all" && type.indexOf(filter.tag) < 0) continue;
      }
      if (filter.year != undefined) {
        if (filter.year != "all time" && dateYear != filter.year) continue;
      }
    }

    // console.log(desc)
    
    let types = [];
    for (const t of type) {
      types.push(
        html`
          <p class="${t}">${t}</p>
        `
      );
    }
    let topics = [];
    for (const t of topic) {
      topics.push(
        html`
          <p class="${t}">${t}</p>
        `
      );
    }
    let collabs = [];
    if (collab != undefined) {
      if (collab.length > 0) collabs.push("with ");
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
      if (venue != "online") prefix = "at";
      venueElt = html`
        ${prefix} ${venue}
      `;
    }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img src="${image}" loading="lazy" />
      `;
    }
    let ytElt;
    if (yt != undefined && false) {
      // leave out videos for now
      ytElt = html`
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${yt}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `;
    }
    dates.push(
      html`
        <section>
          <div class="thumbnail">${imageElt}</div>
          <div class="clearer"></div>
          <div class="caption">
            <div class="collabs">${collabs}</div>
            <div class="venue">${venueElt}</div>
            <div class="clearer"></div>
            <div><span class="title">${title}</span>, <span class="date">${date}</span></div>
            <div class="clearer"></div>
            <div class="type">${types}</div>
            <div class="topic">${topics}</div>
            <div class="clearer"></div>
            <p class="desc">${desc}</p>
            <div class="clearer"></div>
            ${ytElt}
          </div>
        </section>
      `
    );
  }

  return dates;
};

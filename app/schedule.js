var html = require("choo/html");
var sc = require("./contents.js");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const { title, topic, desc, type, image, yt, collab, venue } = s;
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
    if(collab != undefined) {
      if(collab.length > 0) collabs.push("with ");
      let i = 0;
      for (const c of collab) {
        collabs.push(`${c}`);
        if(i < collab.length - 1) {
          collabs.push(`, `);
        }
        i++;
      }
    }
    let venueElt;
    if (venue != undefined) {
      let prefix = "";
      if(venue != "online") prefix = "at";
      venueElt = html`${prefix} ${venue}`;
    }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img src="${image}" />
      `;
    }
    let ytElt;
    if (yt != undefined && false) { // leave out videos for now
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
        <li>
          <p class="schedule">${date}</p>
          <div class="type">${types}</div>
          <div class="topic">${topics}</div>
          <div class="clearer"></div>
          <p class="title">${title}</p>
          <div class="clearer"></div>
          <div class="thumbnail">${imageElt}</div>
          <div class="clearer"></div>
          <div class="collabs">${collabs}</div>
          <div class="clearer"></div>
          <div class="venue">${venueElt}</div>
          <div class="clearer"></div>
          <p class="desc">${desc}</p>
          ${ytElt}
        </li>
      `
    );
  }

  return { timezone, dates };
};

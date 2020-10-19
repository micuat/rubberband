var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const sc = [
      {
      start: new Date("October 2, 2020 17:30:00 UTC"),
      title: "Creative Code Stammtisch",
      orgs: html`
        <a href="https://www.meetup.com/creativeCodeBerlin/"
          >Creative Code Berlin</a
        >
      `,
      type: ["meetup"],
      topic: [],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fmdj.jpg?v=1601470887536",
      desc: html`
        *this event is hosted by
        <a href="https://www.meetup.com/creativeCodeBerlin/"
          >Creative Code Berlin</a
        >*<br />Naoto gives a brief introduction of this project at the
        Stammtisch.
        <a
          href="https://www.meetup.com/creativeCodeBerlin/events/skjgrrybcnbdb/"
          >More info here.</a
        >
      `
    },
  ];

  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric"
    });
    const start = s.start.toLocaleTimeString([], dateOptions);
    const { title, orgs, desc, type, topic, image, openin } = s;
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
      if (t != "food")
        topics.push(
          html`
            <p class="${t}">${t}</p>
          `
        );
    }

    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img src="${image}">
      `;
    }
    dates.push(
      html`
        <li>
          <p class="schedule">${date}</p>
          <p class="schedule">${start}</p>
          <div class="type">${types}</div>
          <div class="topic">${topics}</div>
          <div class="clearer"></div>
          <p class="title">${title}</p>
          <div class="clearer"></div>
          <div class="thumbnail">${imageElt}</div>
          <p>${openin != undefined ? openin : ""}</p>
          <p class="desc">${desc}</p>
        </li>
      `
    );
  }

  return { timezone, dates };
};

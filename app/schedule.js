var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const sc = [
    {
      start: new Date("January 24, 2021 20:00:00 UTC"),
      title: "CCFest: Introduction to Hydra",
      type: ["workshop"],
      topic: ["hydra"],
      image:
        "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2Fccfest-desc.jpg?v=1610919339745",
      desc: html`
      A workshop - register <a href="https://ccfest.rocks/register">here</a>!<br>
      Material can be found <a href="https://ccfest-2021-glitchme.glitch.me/">here</a>.
      `
    },
    {
      start: new Date("December 18, 2020"),
      title: "GlitchMe",
      type: ["performance"],
      topic: [],
      desc: html`
        lecture performance
      `
    },
    {
      start: new Date("November 21, 2020"),
      title: "Hydra Exhibition",
      type: ["net art"],
      topic: [],
      desc: html`
        net art
      `
    },
    {
      start: new Date("October 23, 2020"),
      title: "Tech is Nonbinary",
      type: ["performance"],
      topic: [],
      desc: html`
        live coding performance
      `
    },
    // {
    //   start: new Date("June 11, 2020 22:00:00 UTC"),
    //   title: "Second stuff",
    //   type: ["performance"],
    //   topic: ["zoom", "jitsi", "miro", "scratch", "hubs"],
    //   image:
    //     "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200611ccov.jpg?v=1603140228336",
    //   desc: html`
    //     second stuff
    //   `
    // },
  ];

  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric"
    });
    const { title, topic, desc, type, image } = s;
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
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img src="${image}" />
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
          <p class="desc">${desc}</p>
        </li>
      `
    );
  }

  return { timezone, dates };
};

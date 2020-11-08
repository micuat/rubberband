var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const sc = [
    {
      start: new Date("October 7, 2020 18:30:00 UTC"),
      title: "First stuff",
      type: ["performance"],
      topic: ["hubs", "miro", "green screen"],
      image:
        "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F201007node.png?v=1603140395893",
      desc: html`
        here's the first stuff. you can embed a video too
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/g5Hd_5rKggA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
    },
    {
      start: new Date("June 11, 2020 22:00:00 UTC"),
      title: "Second stuff",
      type: ["performance"],
      topic: ["zoom", "jitsi", "miro", "scratch", "hubs"],
      image:
        "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200611ccov.jpg?v=1603140228336",
      desc: html`
        second stuff
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
          <p class="schedule">${start}</p>
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

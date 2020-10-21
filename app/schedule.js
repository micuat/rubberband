var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const sc = [
    {
      start: new Date("October 7, 2020 18:30:00 UTC"),
      title: "Multidimensional Journey",
      type: ["performance"],
      image: "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F201007node.png?v=1603140395893",
      desc:
        html`At NODE20, Nien Tzu Weng and Naoto Hieda share online tools for interdisciplinary collaborations from the recent online residencies. We open the room for participants to experiment with the tools. No experience required.
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/g5Hd_5rKggA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    },
    {
      start: new Date("June 11, 2020 22:00:00 UTC"),
      title: "Sortie de résidence #4 at CCOV",
      type: ["performance"],
      image: "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200611ccov.jpg?v=1603140228336",
      desc:
        html`Nien Tzu Weng and Naoto Hiéda, working in Montreal and Germany respectively, were the last artists to take part in a CCOV Residency at a distance. On Thursday, June 11, at 4PM (EDT), you are invited to join them in a Zoom room as they discuss the outcomes of their work, the difficulties met on the way, their strategies for creating remotely, and much more! <a href="https://www.facebook.com/events/903037330168173/">facebook link</a>`
    },
    {
      start: new Date("June 1, 2020 16:00:00 UTC"),
      title: "CCOV",
      type: ["residency"],
      image: "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200601residence.png?v=1603140134648",
      desc:
        html`<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/HL6CTlNuzak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    },
    {
      start: new Date("May 12, 2020 16:00:00 UTC"),
      title: "Miro",
      type: ["meeting"],
      image: "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200512miro.png?v=1603140133851",
      desc:
        html`test`
    },
    {
      start: new Date("April 29, 2020 16:00:00 UTC"),
      title: "CCOV",
      type: ["meeting"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fmdj.jpg?v=1601470887536",
      desc:
        html`wild space`
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
    const { title, desc, type, image } = s;
    let types = [];
    for (const t of type) {
      types.push(
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

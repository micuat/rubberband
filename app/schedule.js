const html = require("choo/html");
const Hydra = require('./hydra-canvas.js')

module.exports = (state, contents) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < contents.length; i++) {
    const s = contents[i];
    let image;
    if (s.attachments) {
      image = s.attachments[0].thumbnails.full.url;
    }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img style="object-fit: cover;aspect-ratio: 1/1" src="${image}" loading="lazy" />
      `;
    } else if (s.name == "You") {
      imageElt = state.cache(Hydra, 'my-hydra').render()//html`<p>The image is currently on loan</p>`
    }
    dates.push(
      {dom: html`
        <section id="section-${i}">
          <div class="thumbnail">${imageElt}</div>
          <div class="caption-holder">
            <div class="caption">
              <div><span class="title">${s.name}</span></div>
              <div><span class="date">${s.year}</span></div>
              <div class="type">Mixed media</div>
              <p class="desc">${s.notes}</p>
            </div>
          </div>
        </section>
      `
      });
  }

  return dates;
};

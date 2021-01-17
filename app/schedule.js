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
      start: new Date("December 20, 2020 20:00:00 UTC"),
      title: "TidalClub Solstice",
      type: ["performance"],
      topic: ["hydra", "livelab", "tidalcycles"],
      image:
        "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2F201220-tidal.jpg?v=1608503105807",
      desc: html`
      A performance at TidalClub Solstice Marathon.
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gN9DHCetfBE"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
    },
    {
      start: new Date("December 18, 2020 20:00:00 UTC"),
      title: "GlitchMe Performance-Presentation",
      type: ["performance"],
      topic: ["hydra", "livelab"],
      image:
        "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2F201218-codame.jpg?v=1608479114980",
      desc: html`
      A performance-presentation at CODAME.
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Fas_pGA2tvk"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
    },
    {
      start: new Date("December 6, 2020"),
      title: "Processing Community Hangout Japan 05",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup https://pchj05.peatix.com/
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
      start: new Date("November 6, 2020"),
      title: "Sharing at Theater Dortmund",
      type: ["exhibition"],
      topic: [],
      desc: html`
        A project with Vivian Lu
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
    {
      start: new Date("October 7, 2020 18:30:00 UTC"),
      title: "Multidimensional Journey",
      type: ["performance"],
      topic: ["hubs", "miro", "green screen"],
      image:
        "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F201007node.png?v=1603140395893",
      desc: html`
        At NODE20, Nien Tzu Weng and Naoto Hieda share online tools for
        interdisciplinary collaborations from the recent online residencies. We
        open the room for participants to experiment with the tools. No
        experience required.
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
      start: new Date("October 8, 2020 14:00:00 UTC"),
      end: new Date("October 8, 2020 14:15:00 UTC"),
      title: "Distant Movements",
      type: ["performance"],
      topic: ["dance"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fdm.jpg?v=1601460566624",
      desc: html`
        Distant Movements is a project by Annie Abrahams (FR/NL), Daniel
        Pinheiro (PT) and Muriel Piqué (FR). They develop an experimental,
        performative approach to examine what «dancing together» could mean in
        an environment where bodies are entangled with machines. Questions like:
        “Under what conditions can we dance together online?, “How will a dance
        practice in an artificial environment differ from a «normal» dance
        practice?”, “Can the emergence of dance in bodies that are both distant
        and together become visible and if so how?”, guide the project, which is
        also a concrete example of a remotely activated multilingual
        collaborative artistic research. DM comes to NODE20 as a one-off
        welcoming everyone.<br />
        15-min performance. The session will take place on
        <a href="https://zoom.us/j/99499279292?pwd=cnJWb1B6anN6bC96Vk5xZjZLQmZlZz09">Zoom</a> and
        streamed to <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">GreenHouse NAXOS</a>. Please arrive on time
        if you are going to participate.
      `
    },
    {
      start: new Date("October 7, 2020 11:30:00 UTC"),
      end: new Date("October 7, 2020 12:30:00 UTC"),
      title: "Best Practices - Discussion",
      type: ["discussion"],
      topic: ["dance", "hydra", "tidalcycles"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-08-20-best-practices-session.png?v=1601461265057",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat2.jpg?v=1601470552916",
      desc:
        html`Jorge Guevara and Naoto Hieda discuss what they call Best Practices in Contemporary Dance. The session will be unstructured; they will initiate discussion about their experiences but everyone is welcome to join the conversation. In this discussion, the duo reflects on the “Best Practice” session that happens the day before (6th of October 2020).
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/YZfMBoFWFZY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    },
    {
      start: new Date("October 6, 2020 19:00:00 UTC"),
      end: new Date("October 6, 2020 20:00:00 UTC"),
      title: "Best Practices in Contemporary Dance",
      type: ["performance"],
      topic: ["dance", "hydra", "tidalcycles"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-09-03-best-practices-session.png?v=1601461259001",
      desc:
        html`Naoto Hieda and Jorge Guevara practice “Best Practices in Contemporary Dance” at NODE20. While they practice with their bodies, videos and glitches, everyone is invited to watch, to intervene and to participate in the session.
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/wxXguzTYt_I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/OBtI1qSLyVQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/V427wRGGCZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    },
    {
      start: new Date("October 5, 2020 11:30:00 UTC"),
      end: new Date("October 5, 2020 12:30:00 UTC"),
      title: "Best Practices - Discussion",
      type: ["discussion"],
      topic: ["dance", "hydra", "tidalcycles"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201005chat.jpg?v=1601987022036",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat1.jpg?v=1601470552575",
      desc:
        html`Jorge Guevara and Naoto Hieda discuss what they call Best Practices in Contemporary Dance. The session will be unstructured; they will initiate discussion about their experiences but everyone is welcome to join the conversation. Based on expertise in contemporary dance and media art, the duo talks about what they expect in the “Best Practice” session coming up on 6th of October.
<div class="youtube-container"><iframe class="youtube-video" width="560" height="315" src="https://www.youtube.com/embed/0-YILmKxVhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`
    },
    {
      start: new Date("October 4, 2020 17:00:00 UTC"),
      title: "Hydra meetup #2",
      type: ["meetup"],
      topic: ["hydra"],
      image:
        "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fhydra.jpg?v=1601986689294",
      desc: html`
        Hydra meetup #2 made an intervention at NODE20!
        <a href="hydra.ojack.xyz">Hydra</a>
        is a live-coding environment inspired by analog video synthesizer.
        Olivia Jack, the creator of Hydra, Flor de Fuego and Naoto Hieda hosted
        a meetup starting in Zoom and then a live-coding jam in GreenHouse NAXOS
        (around 20:45 CEST). Everyone with or without experiences in Hydra is
        welcome!
        <a href="https://hydra-meetup-2.glitch.me/">More info here.</a>
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xTL0BjtBq5k"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7ioV6D_OStY"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
    },
    {
      start: new Date("October 4, 2020 09:30:00 UTC"),
      end: new Date("October 4, 2020 11:30:00 UTC"),
      title: "TDSW x PCJ Vernissage",
      type: ["meetup", "exhibition"],
      topic: ["touchdesigner", "processing"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fvernissage.jpg?v=1601987505096",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200419harada2.png?v=1601461542248",
      desc: html`
        Tokyo Developers Study Weekend (TDSW) and Processing Community Japan
        (PCJ) invite you to present your artworks at an exhibition, where
        everyone can virtually hang their works in the GreenHouse exhibition
        space. Be respectful to each other and let’s make a collective
        exhibition! The hosts will present in Japanese and English. <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">Access here!</a><br />
        <a href="https://tdswxpcj.peatix.com/">peatix ページはこちら</a><br /><a
          href="https://paper.dropbox.com/doc/TDSWxPCJ-howto--A8hx~MmXMO3P8s5_UboiQC75AQ-KgJQH4Ai8FQHHZ9QZ55lu"
          >Hubs の使い方はこちら</a
        >
      `
    },
    {
      start: new Date("October 3, 2020 10:30:00 UTC"),
      end: new Date("October 3, 2020 11:30:00 UTC"),
      talque:
        "https://20.nodeforum.org/program/?lectureId=fIT3yhH7pfPvnpLyMrWl",
      title: "Low Frequency Skies",
      type: ["lunch"],
      topic: ["food"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200430lfs1.png?v=1601460993064",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs1.jpg?v=1601469763915",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201003-02.jpg?v=1601728591081",
      desc:
        html`Low Frequency Skies is a lunch session run by Raphaël de Courville during quarantine to open a virtual space for his friends to eat and chat together. The legendary lunch session comes back during NODE20 at GreenHouse NAXOS – bring your friends and have breakfast, lunch or dinner together, depending on your time zone!`,
    },
    {
      start: new Date("October 2, 2020"),
      title: "NODE20: Choreographic Coding Labs Online",
      type: ["curation"],
      topic: [],
      desc: html`
        NODE20
      `
    },
    {
      start: new Date("August 30, 2020"),
      title: "Processing Community Hangout Japan 03",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup
      `
    },
    {
      start: new Date("August 19, 2020"),
      title: "Tidal Club: New Moon Marathon",
      type: ["performan"],
      topic: [],
      desc: html`
        Japanese Processing meetup
      `
    },
    {
      start: new Date("August 1, 2020 18:00:00 UTC"),
      title: "Hydra meetup #1",
      type: ["meetup"],
      topic: ["hydra"],
      image:
        "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2Fhydra-meetup1.png?v=1604872115474",
      desc: html`
        The first hydra meetup was held online on 1st August (Saturday) 18:00
        UTC (20:00 CEST / 14:00 EDT).
        <a href="https://hydra-meetup-0.glitch.me/">More info here.</a>
      `
    },
    {
      start: new Date("July 5, 2020"),
      title: "Processing Community Hangout Japan 02",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup https://pchj02.peatix.com/
      `
    },
    {
      start: new Date("June 11, 2020 22:00:00 UTC"),
      title: "Sortie de résidence #4 at CCOV",
      type: ["performance"],
      topic: ["zoom", "jitsi", "miro", "scratch", "hubs"],
      image:
        "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200611ccov.jpg?v=1603140228336",
      desc: html`
        Nien Tzu Weng and Naoto Hiéda, working in Montreal and Germany
        respectively, were the last artists to take part in a CCOV Residency at
        a distance. On Thursday, June 11, at 4PM (EDT), you are invited to join
        them in a Zoom room as they discuss the outcomes of their work, the
        difficulties met on the way, their strategies for creating remotely, and
        much more!
        <a href="https://www.facebook.com/events/903037330168173/"
          >facebook link</a
        >
      `
    },
    {
      start: new Date("June 1, 2020 16:00:00 UTC"),
      title: "CCOV Residency at a Distance",
      type: ["residency"],
      topic: ["jitsi", "miro", "cooking"],
      image:
        "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200601residence.png?v=1603140134648",
      desc: html`
        Quarantine time confines a body in a limited space surrounded by flat
        walls and urges us to have a fixed routine at home that ends up in
        flatness of time. The physical world becomes stiff and tasteless.
        Meanwhile, in a digital space, time is not linear as there is no
        constant rhythm - by interrupting and confusing the network, the
        accelerated miscommunication can lead us to another channel of
        communication.
        <div class="youtube-container">
          <iframe
            class="youtube-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HL6CTlNuzak"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      `
    },
    {
      start: new Date("May 16, 2020"),
      title: "Processing Community Hangout Japan 01",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup https://pchj01.peatix.com/
      `
    },
    {
      start: new Date("February 1, 2020"),
      title: "Processing Community Day Tokyo 2020",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup
      `
    },
    {
      start: new Date("February 2, 2019"),
      title: "Processing Community Day Tokyo 2019",
      type: ["meetup"],
      topic: [],
      desc: html`
        Japanese Processing meetup
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
      day: "numeric",
      year: "numeric",
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

var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const naoto = html`
    <a href="https://naotohieda.com">Naoto Hieda</a>
  `;

  const lfsdesc = html`
    Low Frequency Skies is a lunch session run by Raphaël de Courville during
    quarantine to open a virtual space for his friends to eat and chat together.
    The legendary lunch session comes back during NODE20 at GreenHouse NAXOS –
    bring your friends and have breakfast, lunch or dinner together, depending
    on your time zone!<b></b>
  `;
  const lfsorgs = html`
    <a href="https://twitter.com/sableraph">Raphaël de Courville</a>,
    <a href="https://twitter.com/tarumuh">Taru Muhonen</a> and
    ${naoto.cloneNode(true)}
  `;

  const bporgs = html`
    <a href="https://twitter.com/J_Guevara_L">Jorge Guevara</a> and
    ${naoto.cloneNode(true)}
  `;
  
  const hubs = html`<a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">join in hubs!</a>`;
  const lfsjitsi = html`<a href="https://meet.jit.si/LowFrequencySkies">join in jitsi!</a>`;
  const hydrazoom = html`<a href="https://us02web.zoom.us/j/82123778943?pwd=TzlvZHlLRlAwdWV4ZkRLTWFiN1loUT09">join in zoom!</a>`;
  const dmjitsi = html`<a href="https://zoom.us/j/99499279292?pwd=cnJWb1B6anN6bC96Vk5xZjZLQmZlZz09">join in Zoom!</a>`;

  const sc = [

    {
      start: new Date("October 6, 2020 19:00:00 UTC"),
      end: new Date("October 6, 2020 20:00:00 UTC"),
      title: "Best Practices in Contemporary Dance",
      talque:
        "https://20.nodeforum.org/program/?lectureId=Aic70Y0uVbHBtMpYmDgE",
      orgs: bporgs.cloneNode(true),
      type: ["performance"],
      topic: ["dance", "hydra", "tidalcycles"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-09-03-best-practices-session.png?v=1601461259001",
      openin: hubs.cloneNode(true),
      desc:
        html`Naoto Hieda and Jorge Guevara practice “Best Practices in Contemporary Dance” at NODE20. While they practice with their bodies, videos and glitches, everyone is invited to watch, to intervene and to participate in the session. <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">Access here!</a>`
    },
    {
      start: new Date("October 7, 2020 10:30:00 UTC"),
      end: new Date("October 7, 2020 11:30:00 UTC"),
      title: "Low Frequency Skies",
      talque:
        "https://20.nodeforum.org/program/?lectureId=O8BUqlsMy8Xz6QIZaI0j",
      orgs: lfsorgs.cloneNode(true),
      type: ["lunch"],
      topic: ["food"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200514lfs.png?v=1601460983648",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs4.jpg?v=1601469762978",
      openin: lfsjitsi.cloneNode(true),
      desc: lfsdesc.cloneNode(true)
    },
    {
      start: new Date("October 7, 2020 11:30:00 UTC"),
      end: new Date("October 7, 2020 12:30:00 UTC"),
      title: "Best Practices - Discussion",
      talque:
        "https://20.nodeforum.org/program/?lectureId=i07cQKeIdkEPGK7O1ssc",
      orgs: bporgs.cloneNode(true),
      type: ["discussion"],
      topic: ["dance", "hydra", "tidalcycles"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-08-20-best-practices-session.png?v=1601461265057",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat2.jpg?v=1601470552916",
      openin: hubs.cloneNode(true),
      desc:
        html`Jorge Guevara and Naoto Hieda discuss what they call Best Practices in Contemporary Dance. The session will be unstructured; they will initiate discussion about their experiences but everyone is welcome to join the conversation. In this discussion, the duo reflects on the “Best Practice” session that happens the day before (6th of October 2020). <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">Access here!</a>`
    },
    {
      start: new Date("October 7, 2020 18:30:00 UTC"),
      end: new Date("October 7, 2020 19:30:00 UTC"),
      title: "Multidimensional Journey",
      talque:
        "https://20.nodeforum.org/program/?lectureId=dhehVbNzOgzfFdY6Q7Lb",
      orgs: html`
        <a href="https://www.nientzuweng.com/">Nien Tzu Weng</a> and
        ${naoto.cloneNode(true)}
      `,
      type: ["performance"],
      topic: ["dance"],
      // image: "https://cdn.glitch.com/4ca2dec5-7e57-49b4-9f3c-1a1e74fa2e48%2Fa0.gif?v=1591302475810",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fmdj.jpg?v=1601470887536",
      openin: hubs.cloneNode(true),
      desc:
        html`Nien Tzu Weng, a dancer/choreographer based in Montreal, and Naoto Hieda share online tools for interdisciplinary collaborations from the recent online residencies. We open the room for participants to experiment with the tools. No experience required. <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">Access here!</a>`
    },
    {
      start: new Date("October 8, 2020 10:30:00 UTC"),
      end: new Date("October 8, 2020 11:30:00 UTC"),
      title: "Low Frequency Skies",
      talque:
        "https://20.nodeforum.org/program/?lectureId=owtuJSws3Q9rT005QqRj",
      orgs: lfsorgs.cloneNode(true),
      type: ["lunch"],
      topic: ["food"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200519lfs.png?v=1601460978858",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs5.jpg?v=1601469763598",
      openin: lfsjitsi.cloneNode(true),
      desc: lfsdesc.cloneNode(true)
    },
    {
      start: new Date("October 8, 2020 14:00:00 UTC"),
      end: new Date("October 8, 2020 14:15:00 UTC"),
      title: "Distant Movements",
      talque:
        "https://20.nodeforum.org/program/?lectureId=H3LLol0HIwTrMCuqOlY3",
      orgs: html`
        <a href="https://twitter.com/annieabrahams">Annie Abrahams</a>,
        <a href="https://twitter.com/dannyblueboy">Daniel Pinheiro</a> and
        Muriel Piqué
      `,
      type: ["performance"],
      topic: ["dance"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fdm.jpg?v=1601460566624",
      openin: dmjitsi,
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
      start: new Date("October 2, 2020 17:30:00 UTC"),
      end: new Date("October 2, 2020 19:00:00 UTC"),
      title: "Creative Code Stammtisch",
      orgs: html`
        <a href="https://www.meetup.com/creativeCodeBerlin/"
          >Creative Code Berlin</a
        >
      `,
      type: ["meetup"],
      topic: [],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200501ccs.png?v=1601460981486",
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
    {
      start: new Date("October 3, 2020 10:30:00 UTC"),
      end: new Date("October 3, 2020 11:30:00 UTC"),
      talque:
        "https://20.nodeforum.org/program/?lectureId=fIT3yhH7pfPvnpLyMrWl",
      title: "Low Frequency Skies",
      orgs: lfsorgs.cloneNode(true),
      type: ["lunch"],
      topic: ["food"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200430lfs1.png?v=1601460993064",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs1.jpg?v=1601469763915",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201003-02.jpg?v=1601728591081",
      openin: hubs.cloneNode(true),
      desc:
        html`Low Frequency Skies is a lunch session run by Raphaël de Courville during quarantine to open a virtual space for his friends to eat and chat together. The legendary lunch session comes back during NODE20 at GreenHouse NAXOS – bring your friends and have breakfast, lunch or dinner together, depending on your time zone!`,
    },
    {
      start: new Date("October 4, 2020 09:30:00 UTC"),
      end: new Date("October 4, 2020 11:30:00 UTC"),
      title: "TDSW x PCJ Vernissage",
      talque:
        "https://20.nodeforum.org/program/?lectureId=lj3AGNPXP6Mm4MxHeQa0",
      orgs: html`
        <a href="https://twitter.com/chimanaco">Yasushi Harada</a> (TDSW),
        <a href="https://twitter.com/narumin256/">Yuki Narumi</a> (TDSW),
        <a href="https://twitter.com/takawo">Shunsuke Takawo</a> (PCJ) and
        ${naoto.cloneNode(true)} (PCJ)
      `,
      type: ["meetup", "exhibition"],
      topic: ["touchdesigner", "processing"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fvernissage.jpg?v=1601987505096",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200419harada2.png?v=1601461542248",
      openin: hubs.cloneNode(true),
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
      start: new Date("October 4, 2020 17:00:00 UTC"),
      end: new Date("October 4, 2020 19:00:00 UTC"),
      title: "Hydra meetup #2",
      talque:
        "https://20.nodeforum.org/program/?lectureId=84WjEDuHHRr3ERNosLO0",
      orgs: html`
        <a href="https://twitter.com/flordefuego4">Flor de Fuego</a>,
        <a href="https://twitter.com/_ojack_">Olivia Jack</a> and
        ${naoto.cloneNode(true)}
      `,
      type: ["meetup", "performance"],
      topic: ["hydra"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fhydra.jpg?v=1601460305745",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fhydra.jpg?v=1601986689294",
      openin: hydrazoom,
      desc: html`
        Hydra meetup #2 makes an intervention at NODE20! <a href="hydra.ojack.xyz">Hydra</a>
        is a live-coding environment inspired by analog video synthesizer.
        Olivia Jack, the creator of Hydra, Flor de Fuego and Naoto Hieda host a
        meetup starting in Zoom and then a live-coding jam in GreenHouse NAXOS
        (around 20:45 CEST). Everyone with or without experiences in Hydra is
        welcome!
        <a href="https://hydra-meetup-2.glitch.me/">More info here.</a>
<iframe width="560" height="315" src="https://www.youtube.com/embed/7ioV6D_OStY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `
    },
    {
      start: new Date("October 5, 2020 10:30:00 UTC"),
      end: new Date("October 5, 2020 11:30:00 UTC"),
      title: "Low Frequency Skies",
      talque:
        "https://20.nodeforum.org/program/?lectureId=he2MXkruZpJzHnhCLN4e",
      orgs: lfsorgs.cloneNode(true),
      type: ["lunch"],
      topic: ["food"],
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200506lfs.png?v=1601460984957",
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs2.jpg?v=1601469764520",
      openin: hubs.cloneNode(true),
      desc: lfsdesc.cloneNode(true)
    },
    {
      start: new Date("October 5, 2020 11:30:00 UTC"),
      end: new Date("October 5, 2020 12:30:00 UTC"),
      title: "Best Practices - Discussion",
      talque:
        "https://20.nodeforum.org/program/?lectureId=3qdrcstgZQaBYZDKdXE5",
      orgs: bporgs.cloneNode(true),
      type: ["discussion"],
      topic: ["dance", "hydra", "tidalcycles"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201005chat.jpg?v=1601987022036",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat1.jpg?v=1601470552575",
      openin: hubs.cloneNode(true),
      desc:
        html`Jorge Guevara and Naoto Hieda discuss what they call Best Practices in Contemporary Dance. The session will be unstructured; they will initiate discussion about their experiences but everyone is welcome to join the conversation. Based on expertise in contemporary dance and media art, the duo talks about what they expect in the “Best Practice” session coming up on 6th of October. <iframe width="560" height="315" src="https://www.youtube.com/embed/0-YILmKxVhY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    },
    {
      start: new Date("October 6, 2020 10:30:00 UTC"),
      end: new Date("October 6, 2020 11:30:00 UTC"),
      title: "Low Frequency Skies",
      talque:
        "https://20.nodeforum.org/program/?lectureId=MLRv9CIiqYALHf0H1DcK",
      orgs: lfsorgs.cloneNode(true),
      type: ["lunch"],
      topic: ["food"],
      image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201006lfs.jpg?v=1601986689773",
      // image: "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Flfs3.jpg?v=1601469762672",
      openin: hubs.cloneNode(true),
      desc: lfsdesc.cloneNode(true)
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
    const end = s.end.toLocaleTimeString([], dateOptions);
    const { title, orgs, desc, type, topic, image, talque, openin } = s;
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
    let talqueLink;
    if (talque != undefined) {
      talqueLink = html`
        <a href="${talque}">view on NODE20</a>
      `;
    }
    dates.push(
      html`
        <li>
          <p class="schedule">${date}</p>
          <p class="schedule">${start} - ${end}</p>
          <div class="type">${types}</div>
          <div class="topic">${topics}</div>
          <div class="clearer"></div>
          <p class="title">${title}</p>
          <p class="talque">${talqueLink}</p>
          <div class="clearer"></div>
          <p class="orgs">by ${orgs}</p>
          <div class="thumbnail">${imageElt}</div>
          <p>${openin != undefined ? openin : ""}</p>
          <p class="desc">${desc}</p>
        </li>
      `
    );
  }

  return { timezone, dates };
};

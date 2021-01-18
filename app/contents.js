var html = require("choo/html");
const sc = [
  {
    start: new Date("January 24, 2021 20:00:00 UTC"),
    title: "CCFest: Introduction to Hydra",
    type: ["workshop"],
    topic: ["hydra"],
    collab: ["Flor de Fuego"],
    venue: "CCFest (online)",
    image:
      "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2Fccfest-desc.jpg?v=1610919339745",
    desc: html`
      A workshop - register
      <a href="https://ccfest.rocks/register">here</a>!<br />
      Material can be found
      <a href="https://ccfest-2021-glitchme.glitch.me/">here</a>.
    `
  },
  {
    start: new Date("December 20, 2020 20:00:00 UTC"),
    title: "TidalClub Solstice",
    type: ["performance"],
    topic: ["hydra", "livelab", "tidalcycles"],
    collab: ["Flor de Fuego"],
    venue: "TidalClub (online)",
    image:
      "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2F201220-tidal.jpg?v=1608503105807",
    yt: "gN9DHCetfBE",
    desc: html`
      A performance at TidalClub Solstice Marathon using GlitchMe with Flor de
      Fuego.
    `
  },
  {
    start: new Date("December 18, 2020 20:00:00 UTC"),
    title: "GlitchMe Performance-Presentation",
    type: ["performance", "net art"],
    topic: ["hydra", "livelab"],
    collab: ["Flor de Fuego"],
    venue: "CODAME (online)",
    image:
      "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2F201218-codame.jpg?v=1608479114980",
    yt: "Fas_pGA2tvk",
    desc: html`
      A performance-presentation at CODAME with Flor de Fuego.
    `
  },
  {
    start: new Date("December 12, 2020"),
    title: "Hydra meetup #3",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Ritsche", "Olivia Jack"],
    venue: "online",
    desc: html`
      hydra meetup
    `
  },
  {
    start: new Date("December 6, 2020"),
    title: "Processing Community Hangout Japan 05",
    type: ["meetup"],
    collab: ["Takawo"],
    topic: ["processing", "japan"],
    venue: "online",
    desc: html`
      Japanese Processing meetup https://pchj05.peatix.com/
    `
  },
  {
    start: new Date("November 21, 2020"),
    title: "Hydra Exhibition",
    type: ["net art"],
    topic: ["hydra", "vr"],
    venue: "online",
    desc: html`
      net art
    `
  },
  {
    start: new Date("November 6, 2020"),
    title: "Showing",
    type: ["exhibition"],
    topic: ["openFrameworks"],
    collab: ["Vivian Lu"],
    venue: "Theater Dortmund",
    desc: html`
      A project with Vivian Lu
    `
  },
  {
    start: new Date("October 23, 2020"),
    title: "Tech is Nonbinary",
    type: ["performance"],
    topic: ["hydra", "dance"],
    venue: "Creative Commons Global Summit (online)",
    desc: html`
      live coding performance
    `
  },
  {
    start: new Date("October 7, 2020 18:30:00 UTC"),
    title: "Multidimensional Journey",
    type: ["performance"],
    topic: ["hubs", "miro", "green screen"],
    collab: ["Nien Tzu Weng"],
    venue: "NODE20 (online)",
    image:
      "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F201007node.png?v=1603140395893",
    yt: "g5Hd_5rKggA",
    desc: html`
      At NODE20, Nien Tzu Weng and Naoto Hieda share online tools for
      interdisciplinary collaborations from the recent online residencies. We
      open the room for participants to experiment with the tools. No experience
      required.
    `
  },
  {
    start: new Date("October 8, 2020 14:00:00 UTC"),
    end: new Date("October 8, 2020 14:15:00 UTC"),
    title: "Distant Movements",
    type: ["performance"],
    topic: ["dance"],
    collab: ["Annie Abrahams", "Daniel Pinheiro", "Muriel Piqué"],
    venue: "NODE20 (online)",
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fdm.jpg?v=1601460566624",
    desc: html`
      Distant Movements is a project by Annie Abrahams (FR/NL), Daniel Pinheiro
      (PT) and Muriel Piqué (FR). They develop an experimental, performative
      approach to examine what «dancing together» could mean in an environment
      where bodies are entangled with machines. Questions like: “Under what
      conditions can we dance together online?, “How will a dance practice in an
      artificial environment differ from a «normal» dance practice?”, “Can the
      emergence of dance in bodies that are both distant and together become
      visible and if so how?”, guide the project, which is also a concrete
      example of a remotely activated multilingual collaborative artistic
      research. DM comes to NODE20 as a one-off welcoming everyone.<br />
      15-min performance. The session will take place on
      <a
        href="https://zoom.us/j/99499279292?pwd=cnJWb1B6anN6bC96Vk5xZjZLQmZlZz09"
        >Zoom</a
      >
      and streamed to
      <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage"
        >GreenHouse NAXOS</a
      >. Please arrive on time if you are going to participate.
    `
  },
  {
    start: new Date("October 7, 2020 11:30:00 UTC"),
    end: new Date("October 7, 2020 12:30:00 UTC"),
    title: "Best Practices - Discussion",
    type: ["discussion"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    venue: "NODE20 (online)",
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat2.jpg?v=1601470552916",
    yt: "YZfMBoFWFZY",
    desc: html`
      Jorge Guevara and Naoto Hieda discuss what they call Best Practices in
      Contemporary Dance. The session will be unstructured; they will initiate
      discussion about their experiences but everyone is welcome to join the
      conversation. In this discussion, the duo reflects on the “Best Practice”
      session that happens the day before (6th of October 2020).
    `
  },
  {
    start: new Date("October 6, 2020 19:00:00 UTC"),
    end: new Date("October 6, 2020 20:00:00 UTC"),
    title: "Best Practices in Contemporary Dance",
    type: ["performance"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-09-03-best-practices-session.png?v=1601461259001",
    yt: "wxXguzTYt_I",
    // yt: "OBtI1qSLyVQ",
    // yt: "V427wRGGCZQ",
    desc: html`
      Naoto Hieda and Jorge Guevara practice “Best Practices in Contemporary
      Dance” at NODE20. While they practice with their bodies, videos and
      glitches, everyone is invited to watch, to intervene and to participate in
      the session.
    `
  },
  {
    start: new Date("October 5, 2020 11:30:00 UTC"),
    end: new Date("October 5, 2020 12:30:00 UTC"),
    title: "Best Practices - Discussion",
    type: ["discussion"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    venue: "NODE20 (online)",
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201005chat.jpg?v=1601987022036",
    yt: "0-YILmKxVhY",
    desc: html`
      Jorge Guevara and Naoto Hieda discuss what they call Best Practices in
      Contemporary Dance. The session will be unstructured; they will initiate
      discussion about their experiences but everyone is welcome to join the
      conversation. Based on expertise in contemporary dance and media art, the
      duo talks about what they expect in the “Best Practice” session coming up
      on 6th of October.
    `
  },
  {
    start: new Date("October 4, 2020 17:00:00 UTC"),
    title: "Hydra meetup #2",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Olivia Jack"],
    venue: "online",
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fhydra.jpg?v=1601986689294",
    yt: "xTL0BjtBq5k",
    // yt: "7ioV6D_OStY",
    desc: html`
      Hydra meetup #2 made an intervention at NODE20!
      <a href="hydra.ojack.xyz">Hydra</a>
      is a live-coding environment inspired by analog video synthesizer. Olivia
      Jack, the creator of Hydra, Flor de Fuego and Naoto Hieda hosted a meetup
      starting in Zoom and then a live-coding jam in GreenHouse NAXOS (around
      20:45 CEST). Everyone with or without experiences in Hydra is welcome!
      <a href="https://hydra-meetup-2.glitch.me/">More info here.</a>
    `
  },
  {
    start: new Date("October 4, 2020 09:30:00 UTC"),
    end: new Date("October 4, 2020 11:30:00 UTC"),
    title: "TDSW x PCJ Vernissage",
    type: ["meetup", "exhibition"],
    topic: ["touchdesigner", "processing"],
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fvernissage.jpg?v=1601987505096",
    collab: ["Yasushi Harada", "Yuki Narumi", "Takawo"],
    venue: "NODE20 (online)",
    desc: html`
      Tokyo Developers Study Weekend (TDSW) and Processing Community Japan (PCJ)
      invite you to present your artworks at an exhibition, where everyone can
      virtually hang their works in the GreenHouse exhibition space. Be
      respectful to each other and let’s make a collective exhibition! The hosts
      will present in Japanese and English.
      <a href="https://hub.greenhousenaxos.com/tPxg6Vq/stage">Access here!</a
      ><br />
      <a href="https://tdswxpcj.peatix.com/">peatix ページはこちら</a><br /><a
        href="https://paper.dropbox.com/doc/TDSWxPCJ-howto--A8hx~MmXMO3P8s5_UboiQC75AQ-KgJQH4Ai8FQHHZ9QZ55lu"
        >Hubs の使い方はこちら</a
      >
    `
  },
  {
    start: new Date("October 3, 2020 10:30:00 UTC"),
    end: new Date("October 3, 2020 11:30:00 UTC"),
    talque: "https://20.nodeforum.org/program/?lectureId=fIT3yhH7pfPvnpLyMrWl",
    title: "Low Frequency Skies",
    type: ["lunch"],
    topic: ["food"],
    collab: ["Raphaël de Courville", "Taru Muhonen"],
    venue: "NODE20 (online)",
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201003-02.jpg?v=1601728591081",
    desc: html`
      Low Frequency Skies is a lunch session run by Raphaël de Courville during
      quarantine to open a virtual space for his friends to eat and chat
      together. The legendary lunch session comes back during NODE20 at
      GreenHouse NAXOS – bring your friends and have breakfast, lunch or dinner
      together, depending on your time zone!
    `
  },
  {
    start: new Date("October 2, 2020"),
    title: "Choreographic Coding Labs Online",
    type: ["curation"],
    topic: ["hydra", "dance", "food"],
    venue: "NODE20 (online)",
    desc: html`
      NODE20
    `
  },
  {
    start: new Date("August 30, 2020"),
    title: "Processing Community Hangout Japan 03",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Takawo"],
    venue: "online",
    desc: html`
      Japanese Processing meetup
    `
  },
  {
    start: new Date("August 19, 2020"),
    title: "TidalClub: New Moon Marathon",
    type: ["performance"],
    topic: ["tidalcycles"],
    collab: ["vc-study"],
    venue: "TidalClub (online)",
    desc: html`
      https://naotohieda.com/blog/new-moon/
    `
  },
  {
    start: new Date("August 1, 2020 18:00:00 UTC"),
    title: "Hydra meetup #1",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Ritsche", "Olivia Jack"],
    venue: "online",
    image:
      "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2Fhydra-meetup1.png?v=1604872115474",
    desc: html`
      The first hydra meetup was held online on 1st August (Saturday) 18:00 UTC
      (20:00 CEST / 14:00 EDT).
      <a href="https://hydra-meetup-0.glitch.me/">More info here.</a>
    `
  },
  {
    start: new Date("July 6, 2020"),
    title: "Digital Dancing",
    type: ["panel"],
    topic: ["dance"],
    collab: ["Toronto Love-In"],
    venue: "Toronto Love-In (online)",
    desc: html`
      panelist at Toronto Love-In
    `
  },
  {
    start: new Date("July 5, 2020"),
    title: "Processing Community Hangout Japan 02",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Takawo"],
    venue: "online",
    desc: html`
      Japanese Processing meetup https://pchj02.peatix.com/
    `
  },
  {
    start: new Date("July 1, 2020"),
    title: "Virtual Exhibition",
    type: ["net art"],
    topic: ["vr"],
    venue: "online",
    desc: html`
      https://naotohieda.com/blog/virtual-exhibition-007/
    `
  },
  {
    start: new Date("June 11, 2020 22:00:00 UTC"),
    title: "Sortie de résidence #4 at CCOV",
    type: ["performance"],
    topic: ["zoom", "jitsi", "miro", "scratch", "hubs"],
    collab: ["Nien Tzu Weng"],
    venue: "Centre de Création O Vertigo (online)",
    image:
      "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200611ccov.jpg?v=1603140228336",
    desc: html`
      Nien Tzu Weng and Naoto Hiéda, working in Montreal and Germany
      respectively, were the last artists to take part in a CCOV Residency at a
      distance. On Thursday, June 11, at 4PM (EDT), you are invited to join them
      in a Zoom room as they discuss the outcomes of their work, the
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
    collab: ["Nien Tzu Weng"],
    venue: "Centre de Création O Vertigo (online)",
    image:
      "https://cdn.glitch.com/e9f27e4f-87e5-46c9-8645-e03a6aedc236%2F200601residence.png?v=1603140134648",
    yt: "HL6CTlNuzak",
    desc: html`
      Quarantine time confines a body in a limited space surrounded by flat
      walls and urges us to have a fixed routine at home that ends up in
      flatness of time. The physical world becomes stiff and tasteless.
      Meanwhile, in a digital space, time is not linear as there is no constant
      rhythm - by interrupting and confusing the network, the accelerated
      miscommunication can lead us to another channel of communication.
    `
  },
  {
    start: new Date("May 31, 2020"),
    title: "Processing Community Japan 30 Minute Coding 0",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Takawo"],
    venue: "online",
    desc: html`
      Japanese Processing meetup
      https://naotohieda.com/blog/processing-community-japan-30min-coding-0-en/
    `
  },
  {
    start: new Date("May 30, 2020"),
    title: "15s or less Showcase - Stories from HK",
    type: ["net art"],
    topic: ["instagram", "hong kong"],
    venue: "Umanesimo Artificiale (online)",
    desc: html`
      https://naotohieda.com/blog/15s-or-less/
    `
  },
  {
    start: new Date("May 24, 2020"),
    title: "Algorithm | Degeneracy",
    type: ["performance"],
    topic: ["dance", "p-code"],
    venue: "NL_CL / iii (online)",
    desc: html`
      https://naotohieda.com/blog/nl-cl-2-flesh/
    `
  },
  {
    start: new Date("May 16, 2020"),
    title: "Processing Community Hangout Japan 01",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Takawo"],
    venue: "online",
    desc: html`
      Japanese Processing meetup https://pchj01.peatix.com/
    `
  },
  {
    start: new Date("May 9, 2020"),
    title: "Processing Community Hangout 02",
    type: ["meetup"],
    topic: ["processing"],
    collab: ["Saber Khan"],
    venue: "online",
    desc: html`
      Processing meetup
      https://naotohieda.com/blog/processing-community-hangout-2-en/
    `
  },
  {
    start: new Date("April 5, 2020"),
    title: "Processing Community Hangout 01",
    type: ["meetup"],
    topic: ["processing"],
    collab: ["Saber Khan"],
    venue: "online",
    desc: html`
      Processing meetup
      https://naotohieda.com/blog/processing-community-hangout-1-en/
    `
  },
  {
    start: new Date("February 29, 2020"),
    title: "p-code Land",
    type: ["net art"],
    topic: ["p-code"],
    venue: "online",
    desc: html`
      https://naotohieda.com/blog/p-code-land/
    `
  },
  {
    start: new Date("February 22, 2020"),
    title: "Tweet Processing Editor",
    type: ["net art"],
    topic: ["processing"],
    venue: "online",
    desc: html`
      https://naotohieda.com/blog/tweet-processing-editor/
    `
  },
  {
    start: new Date("February 14, 2020"),
    title: "Utopian Council",
    type: ["net art"],
    topic: ["vr"],
    collab: ["Utopian Council at KHM"],
    venue: "Kunsthochschule für Medien Köln",
    desc: html`
      https://naotohieda.com/blog/utopian-council/
    `
  },
  {
    start: new Date("February 11, 2020"),
    title: "Virtual Exhibition 004",
    type: ["net art"],
    topic: ["vr"],
    venue: "online",
    desc: html`
      https://naotohieda.com/blog/virtual-exhibition-004/
      https://blog.glitch.com/post/drag-and-drop-your-art-to-the-virtual-world
    `
  },
  {
    start: new Date("February 5, 2020"),
    title: "Virtual Exhibition 003",
    type: ["performance"],
    topic: ["dance", "p-code"],
    venue: "Kunsthochschule für Medien Köln",
    desc: html`
      Informal presentation https://naotohieda.com/blog/virtual-exhibition-003/
    `
  },
  {
    start: new Date("February 1, 2020"),
    title: "Processing Community Day Tokyo 2020",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["PCD Tokyo"],
    venue: "Yahoo! LODGE (Japan)",
    desc: html`
      Japanese Processing meetup
    `
  },
  {
    start: new Date("January 10, 2020"),
    title: "The Body and the Other~",
    type: ["performance"],
    topic: ["processing", "dance"],
    collab: ["Eleonora Siarava"],
    venue: "tanzhaus nrw (Germany)",
    desc: html`
      Project by Eleonora Siarava https://vimeo.com/463813053
    `
  },
  {
    start: new Date("December 28, 2019"),
    title: "Algorithm | Diversion",
    type: ["lecture"],
    topic: ["autism"],
    desc: html`
      https://naotohieda.com/blog/36c3/
    `
  },
  {
    start: new Date("December 22, 2019"),
    title: "Hydra Book",
    type: ["tutorial"],
    topic: ["hydra"],
    desc: html`
      https://hydra-book.naotohieda.com/
    `
  },
  {
    start: new Date("November 28, 2019"),
    title: "Creative Code Köln",
    type: ["meetup"],
    topic: [],
    venue: "Akkuraum (Germany)",
    desc: html`
      meetup -Feb 27, 2020 https://naotohieda.com/blog/creative-code-koeln-1/
    `
  },
  {
    start: new Date("November 14, 2019"),
    title: "Articulation Hackathon",
    type: ["meetup"],
    topic: ["dance"],
    collab: ["Asaf Bachrach"],
    venue: "CNRS (France)",
    desc: html`
      Paris
    `
  },
  {
    start: new Date("October 11, 2019"),
    title: "Staebetanzen",
    type: ["performance"],
    topic: ["dance", "machine learning", "processing"],
    collab: ["Raphael Hillebrand"],
    venue: "Hong Kong Academy for Performing Arts (Hong Kong)",
    desc: html`
      HKAPA
    `
  },
  {
    start: new Date("September 28, 2019"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv"],
    collab: ["Michael Montanaro"],
    venue: "CHAOSMOSIS mAchInes / University of Toronto(Canada)",
    desc: html`
      https://www.cdtps.utoronto.ca/events/chaosmosis-machines
    `
  },
  {
    start: new Date("September 16, 2019"),
    title: "HKAPA",
    type: ["residency"],
    topic: ["dance", "machine learning", "processing"],
    collab: ["Raphael Hillebrand"],
    venue: "Hong Kong Academy for Performing Arts (Hong Kong)",
    desc: html`
      HKAPA
    `
  },
  {
    start: new Date("September 12, 2019"),
    title: "XM-Profiler Prime",
    type: ["commercial"],
    topic: ["openFrameworks", "ingress"],
    collab: ["Ito-En"],
    venue: "Ito-En (Japan)",
    desc: html`
      Ingress
    `
  },
  {
    start: new Date("September 6, 2019"),
    title: "Walk 4 Me",
    type: ["installation"],
    topic: ["dance", "processing"],
    collab: ["Christopher Matthews"],
    venue: "Dance4 (UK)",
    desc: html`
      Nottingham
    `
  },
  {
    start: new Date("August 30, 2019"),
    title: "Nails | Pixels | Stimming",
    type: ["installation"],
    topic: ["weaving"],
    venue: "Victoria and Albert Museum",
    desc: html`
      V&A Friday Late at Victoria and Albert Museum (UK)
    `
  },
  {
    start: new Date("June 20, 2019"),
    title: "Open, Closed, Open",
    type: ["installation"],
    topic: ["robot", "unity"],
    collab: ["Amir Shpilman", "Liat Grayver", "Yair Kira"],
    venue: "Jewish Museum Berlin",
    desc: html`
      Jewish Museum Berlin
    `
  },
  {
    start: new Date("April 29, 2019"),
    title: "11th Choreographic Coding Lab",
    type: ["meetup"],
    topic: ["dance"],
    collab: [],
    venue: "Motion Bank",
    desc: html`
      CCL
    `
  },
  {
    start: new Date("April 12, 2019"),
    title: "Beyond Time",
    type: ["commercial"],
    topic: ["openFrameworks"],
    collab: ["Shiseido", "R/GA"],
    venue: "S/PARK (Japan)",
    desc: html`
      Shiseido
    `
  },
  {
    start: new Date("February 2, 2019"),
    title: "Processing Community Day Tokyo 2019",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Ayumu Nagamatsu", "Yasuto Nakanishi"],
    venue: "Yahoo! LODGE (Japan)",
    desc: html`
      Japanese Processing meetup
    `
  },
  {
    start: new Date("January 25, 2019"),
    title: "Cosmic Wander",
    type: ["performance"],
    topic: ["dance"],
    collab: ["Choy Ka Fai"],
    venue: "tanzhaus nrw (Germany)",
    desc: html`
      tanzhaus
    `
  },
  {
    start: new Date("January 17, 2019"),
    title: "Dance Clinic Mobile",
    type: ["performance"],
    topic: ["dance", "eeg", "processing"],
    collab: ["Choy Ka Fai"],
    venue: "tanzhaus nrw (Germany)",
    desc: html`
      tanzhaus
    `
  },
  {
    start: new Date("January 15, 2019"),
    title: "Algorithm | Diversion",
    type: ["lecture"],
    topic: ["dance", "autism", "processing"],
    collab: ["Choy Ka Fai"],
    venue: "tanzhaus nrw (Germany)",
    desc: html`
      Technological flesh! at Festival Temps d'Images, tanzhaus nrw
    `
  },
  {
    start: new Date("November 22, 2018"),
    title: "Algorithm/Pattern/Diversity",
    type: ["lecture"],
    topic: ["autism", "processing"],
    venue: "CITEC, Bielefeld University (Germany)",
    desc: html`
      guest talk
    `
  },
  {
    start: new Date("November 7, 2018"),
    title: "IMPACT18 - Matter in Movement",
    type: ["conference"],
    topic: ["autism"],
    venue: "PACT Zollverein (Germany)",
    desc: html`
    participation
    `
  },
  {
    start: new Date("November 1, 2018"),
    title: "XM-Profiler",
    type: ["commercial"],
    topic: ["openFrameworks", "ingress"],
    collab: ["Ito-En"],
    venue: "Ito-En (Japan)",
    desc: html`
      Ingress
    `
  },
  {
    start: new Date("October 1, 2018"),
    title: "Jeux de Rebans",
    type: ["commercial"],
    topic: ["openFrameworks"],
    collab: ["Matilda"],
    venue: "Mikimoto (Japan)",
    desc: html`
      Face morphing
    `
  },
  {
    start: new Date("September 21, 2018"),
    title: "Processing and Generative Art",
    type: ["lecture"],
    topic: ["processing"],
    venue: "Seoul National University of Education (Korea)",
    desc: html`
      guest talk invited by Woosung
    `
  },
  {
    start: new Date("September 14, 2018"),
    title: "Usine 108",
    type: ["performance"],
    topic: ["processing", "machine learning"],
    collab: ["Evelyne Drouin"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
    `
  },
  {
    start: new Date("September 13, 2018"),
    title: "Austistic View",
    type: ["installation"],
    topic: ["openframeworks"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
    an installation with sauna receipts and shots on streets
    `
  },
  {
    start: new Date("August 17, 2018"),
    title: "Mapping Party #3",
    type: ["meetup"],
    topic: ["processing"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
      party with projection mapping
    `
  },
  {
    start: new Date("August 8, 2018"),
    title: "Mapping Party #2",
    type: ["meetup"],
    topic: ["processing"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
      party with projection mapping
    `
  },
  {
    start: new Date("July 24, 2018"),
    title: "Deep Performance Dwelling",
    type: ["installation"],
    topic: ["vvvv"],
    collab: ["Team MTL"],
    venue: "Solar Decathlon (China)",
    desc: html`
    `
  },
  {
    start: new Date("July 19, 2018"),
    title: "Mapping Party #1",
    type: ["meetup"],
    topic: ["processing"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
      party with projection mapping
    `
  },
  {
    start: new Date("July 16, 2018"),
    title: "Call Stack",
    type: ["residency"],
    topic: ["processing"],
    collab: ["Janine Harrington"],
    venue: "Digitale Performance Web Residency / Favoriten Festival (Germany, online)",
    desc: html`
    `
  },
  {
    start: new Date("July 3, 2018"),
    title: "Artist in Residence",
    type: ["residency"],
    topic: ["processing"],
    collab: ["Evelyne Drouin"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    desc: html`
    `
  },
  {
    start: new Date("June 28, 2019"),
    title: "Skin Irony Virtual Screen",
    type: ["commercial"],
    topic: ["openFrameworks"],
    collab: ["Matilda"],
    venue: "Swatch (Japan)",
    desc: html`
      Face morphing
    `
  },
  {
    start: new Date("April 28, 2018"),
    title: "Choreographic Coding Lab + Pathfinder",
    type: ["workshop"],
    topic: ["processing", "pathfinder"],
    collab: ["Christian Mio Loclair"],
    venue: "NOVA Festival / Point (Romania)",
    desc: html`
      
    `
  },
  {
    start: new Date("April 26, 2018"),
    title: "Machine Learning for Artists",
    type: ["translation"],
    topic: ["machine learning"],
    collab: ["Kenichi Yoneda"],
    venue: "online",
    desc: html`
    `
  },
  {
    start: new Date("April 18, 2018"),
    title: "Pecha Kucha at TML #3",
    type: ["meetup"],
    topic: [],
    venue: "Topological Media Lab (Canada)",
    desc: html`
      I organized pecha kucha
    `
  },
  {
    start: new Date("April 4, 2018"),
    title: "Pecha Kucha at TML #2",
    type: ["meetup"],
    topic: [],
    venue: "Topological Media Lab (Canada)",
    desc: html`
      I organized pecha kucha
    `
  },
  {
    start: new Date("March 22, 2018"),
    title: "KUU",
    type: ["installation"],
    topic: ["processing"],
    collab: ["KUU"],
    venue: "SNDO (Netherlands)",
    desc: html`
    `
  },
  {
    start: new Date("March 8, 2018"),
    title: "Pecha Kucha at TML #1",
    type: ["meetup"],
    topic: [],
    venue: "Topological Media Lab (Canada)",
    desc: html`
      I presented at pecha kucha
    `
  },
  {
    start: new Date("March 3, 2018"),
    title: "body_code",
    type: ["performance"],
    topic: ["processing", "dance"],
    collab: ["CCOV", "perte de signal"],
    venue: "Centre de Création O Vertigo (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("February 12, 2018"),
    title: "Machine Learning Literacy",
    type: ["meetup"],
    topic: ["machine learning"],
    venue: "School for Poetic Computation (US)",
    desc: html`
    participation
    `
  },
  {
    start: new Date("January 13, 2018"),
    title: "Performance",
    type: ["performance"],
    topic: ["raspberry pi"],
    collab: ["Evelyne Drouin"],
    venue: "Centre Clark (Canada)",
    desc: html`
    
    `
  },
];

module.exports = sc;

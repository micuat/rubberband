var html = require("choo/html");
const sc = [
  {
    start: new Date("February 20, 2021"),
    title: "Processing Community Day Japan 2021",
    type: ["meetup", "curation"],
    topic: ["processing"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpcd2021ogp.png?v=1612740183557",
    desc: html`poster by hina nakamura`
  },
  {
    start: new Date("February 15, 2021"),
    title: "#spektrum",
    type: ["installation"],
    topic: ["nails"],
    venue: "ctrl+space / Cologne Main Station (Germany)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F210215-spektrum.jpg?v=1611426104304",
    desc: html`
#spektrum is a convolution of identity questions that we face, including, but not only, the gender spectrum and autism spectrum. The fingers as an analog, imperfect medium with a color spectrum of nail polish count binary numbers mimicking a self-stimulatory behavior (stimming) to provoke and to challenge the stigma of "binariness" of autism.`
  },
  {
    start: new Date("February 13, 2021"),
    title: "Hydra meetup #4",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Ritsche", "Olivia Jack"],
    venue: "online",
    image: "https://cdn.glitch.com/ded7bc3b-3878-467c-9524-bce0e27dfc1e%2Fposter4.png?v=1611315261539",
    desc: html`
      hydra meetup / poster by Ritsche
    `
  },
  {
    start: new Date("January 24, 2021"),
    title: "Introduction to Hydra",
    type: ["workshop"],
    topic: ["hydra"],
    collab: ["Flor de Fuego"],
    venue: "CCFest (online)",
    image:
      "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fvlcsnap-2021-01-24-22h54m34s826.png?v=1611525647011",
    desc: html`
      A workshop - register <a href="https://ccfest.rocks/register">here</a>!<br />
      Material can be found <a href="https://ccfest-2021-glitchme.glitch.me/">here</a>.
    `
  },
  {
    start: new Date("December 20, 2020"),
    title: "TidalClub Solstice",
    type: ["performance", "net art"],
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
    start: new Date("December 18, 2020"),
    title: "GlitchMe Performance-Presentation",
    type: ["performance", "lecture", "net art"],
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
    start: new Date("December 15, 2020"),
    title: "Introduction to TidalCycles",
    type: ["workshop"],
    topic: ["tidalcycles"],
    venue: "Kunsthochschule für Medien Köln",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F201215-tidal.jpg?v=1611416016009",
    desc: html`
    Workshop at "Sound und..." seminar
    `
  },
  {
    start: new Date("December 12, 2020"),
    title: "Hydra meetup #3",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Ritsche", "Olivia Jack"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F201212-hydra03.jpg?v=1611416284311",
    desc: html`
      hydra meetup / poster by Flor de Fuego
    `
  },
  {
    start: new Date("December 6, 2020"),
    title: "Processing Community Hangout Japan 05",
    type: ["meetup"],
    collab: ["Takawo"],
    topic: ["processing", "japan"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F201206-pchj05.png?v=1611416208142",
    desc: html`
      Japanese Processing meetup https://pchj05.peatix.com/
    `
  },
  {
    start: new Date("November 21, 2020"),
    title: "Hydra Exhibition",
    type: ["installation", "net art"],
    topic: ["hydra", "vr"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-11-21-hydra-exhibition.png?v=1611415274524",
    desc: html`
      net art
    `
  },
  {
    start: new Date("November 6, 2020"),
    title: "Showing",
    type: ["installation"],
    topic: ["openFrameworks"],
    collab: ["Vivian Lu"],
    venue: "Theater Dortmund",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F201106-theater.jpg?v=1611416466540",
    desc: html`
      A project with Vivian Lu
    `
  },
  {
    start: new Date("October 23, 2020"),
    title: "Tech is Nonbinary",
    type: ["performance", "net art"],
    topic: ["hydra", "dance"],
    venue: "Creative Commons Global Summit (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-10-23-tech-is-nonbinary.png?v=1611415254316",
    desc: html`
      live coding performance
    `
  },
  {
    start: new Date("October 17, 2020"),
    title: "Auf meinen Schultern",
    type: ["performance"],
    topic: ["feedback"],
    collab: ["Raphael Hillebrand"],
    venue: "Deutscher Tanzpreis / Aalto Theater (Germany)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F201017-tanzpreis.png?v=1611415944571",
    desc: html`
    as camera operator
    `
  },
  {
    start: new Date("October 8, 2020"),
    title: "Distant Movements",
    type: ["performance", "net art"],
    topic: ["dance", "zoom"],
    collab: ["Annie Abrahams", "Daniel Pinheiro", "Muriel Piqué"],
    venue: "NODE20 (Germany / online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-10-08-ccl-online.jpg?v=1611415526027",
      // "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fdm.jpg?v=1601460566624",
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
    start: new Date("October 7, 2020"),
    title: "Multidimensional Journey",
    type: ["performance", "net art"],
    topic: ["hubs", "miro", "green screen"],
    collab: ["Nien Tzu Weng"],
    venue: "NODE20 (Germany / online)",
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
    start: new Date("October 7, 2020"),
    title: "Best Practices - Discussion",
    type: ["discussion"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fchat2.jpg?v=1601470552916",
    yt: "YZfMBoFWFZY",
    venue: "NODE20 (Germany / online)",
    desc: html`
      Jorge Guevara and Naoto Hieda discuss what they call Best Practices in
      Contemporary Dance. The session will be unstructured; they will initiate
      discussion about their experiences but everyone is welcome to join the
      conversation. In this discussion, the duo reflects on the “Best Practice”
      session that happens the day before (6th of October 2020).
    `
  },
  {
    start: new Date("October 6, 2020"),
    title: "Best Practices in Contemporary Dance",
    type: ["performance", "net art"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-09-03-best-practices-session.png?v=1601461259001",
    yt: "wxXguzTYt_I",
    // yt: "OBtI1qSLyVQ",
    // yt: "V427wRGGCZQ",
    venue: "NODE20 (Germany / online)",
    desc: html`
      Naoto Hieda and Jorge Guevara practice “Best Practices in Contemporary
      Dance” at NODE20. While they practice with their bodies, videos and
      glitches, everyone is invited to watch, to intervene and to participate in
      the session.
    `
  },
  {
    start: new Date("October 5, 2020"),
    title: "Best Practices - Discussion",
    type: ["discussion"],
    topic: ["dance", "hydra"],
    collab: ["Jorge Guevara"],
    venue: "NODE20 (Germany / online)",
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
    start: new Date("October 4, 2020"),
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
    start: new Date("October 4, 2020"),
    title: "TDSW x PCJ Vernissage",
    type: ["meetup", "net art"],
    topic: ["touchdesigner", "processing", "vvvv"],
    image:
      "https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2Fvernissage.jpg?v=1601987505096",
    collab: ["Yasushi Harada", "Yuki Narumi", "Takawo"],
    venue: "NODE20 (Germany / online)",
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
    start: new Date("October 3, 2020"),
    talque: "https://20.nodeforum.org/program/?lectureId=fIT3yhH7pfPvnpLyMrWl",
    title: "Low Frequency Skies",
    type: ["lunch", "meetup"],
    topic: ["food"],
    collab: ["Raphaël de Courville", "Taru Muhonen"],
    venue: "NODE20 (Germany / online)",
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
    type: ["curation", "meetup"],
    topic: ["hydra", "dance", "food"],
    venue: "NODE20 (Germany / online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fcconline.jpg?v=1611415565194",
    desc: html`
      NODE20
    `
  },
  {
    start: new Date("September 6, 2020"),
    title: "Online Hangs",
    type: ["meetup"],
    topic: [],
    collab: ["Marie Claire LeBlanc Flanagan"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F200906-hangs.jpg?v=1611416834409",
    desc: html`
    online hangs / poster by Marie
    `
  },  {
    start: new Date("August 30, 2020"),
    title: "Processing Community Hangout Japan 03",
    type: ["meetup"],
    topic: ["processing", "japan"],
    collab: ["Takawo"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-08-30-processing-community-hangout-japan-3-neort.jpg?v=1611415232395",
    desc: html`
      Japanese Processing meetup
    `
  },
  {
    start: new Date("August 19, 2020"),
    title: "TidalClub: New Moon Marathon",
    type: ["performance", "net art"],
    topic: ["tidalcycles", "discord"],
    collab: ["vc-study"],
    venue: "TidalClub (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-08-19-new-moon.png?v=1611415196073",
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
    start: new Date("July 21, 2020"),
    title: "Circles",
    type: ["performance"],
    topic: ["web"],
    collab: ["Amir Shpilman"],
    venue: "Die Irritierte Stadt (Germany)",
    desc: html`
      Technical development for a performative web app.
    `
  },
  {
    start: new Date("July 6, 2020"),
    title: "Digital Dancing",
    type: ["lecture"],
    topic: ["dance"],
    collab: ["Toronto Love-In"],
    venue: "Toronto Love-In (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F200706-digitaldancing.jpg?v=1611412694852",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F200705-pchj02.png?v=1611417003823",
    desc: html`
      Japanese Processing meetup https://pchj02.peatix.com/
    `
  },
  {
    start: new Date("July 1, 2020"),
    title: "Virtual Exhibition 007",
    type: ["installation", "net art"],
    topic: ["vr"],
    venue: "nextmuseum.io (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-07-01-virtual-exhibition-007.png?v=1611413239494",
    desc: html`
      https://naotohieda.com/blog/virtual-exhibition-007/
    `
  },
  {
    start: new Date("June 11, 2020 22:00:00 UTC"),
    title: "Sortie de résidence #4 at CCOV",
    type: ["performance", "net art"],
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
    type: ["residency", "net art"],
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-31-processing-community-japan-30min-coding-0-en.png?v=1611415150532",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-30-15s-or-less-filter.png?v=1611415171595",
    desc: html`
    “Stories from HK” focused on protests in Hong Kong by creating a new work and curating works that are related to the digital culture in Hong Kong (but not limited to the protest).
      https://naotohieda.com/blog/15s-or-less/
    `
  },
  {
    start: new Date("May 24, 2020"),
    title: "Algorithm | Degeneracy",
    type: ["performance", "net art"],
    topic: ["dance", "p-code"],
    venue: "NL_CL / iii (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-24-nl-cl-2-flesh.png?v=1611415093981",
    desc: html`
    My movements are exhibited in the virtual gallery space, which is the concept of the performance “Algorithm | Degeneracy”.
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-16-processing-community-hangout-japan-1-1.png?v=1611415042036",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-09-processing-community-hangout-2-46.png?v=1611414960476",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-04-05-processing-community-hangout-1-en.png?v=1611414930358",
    desc: html`
      Processing meetup
      https://naotohieda.com/blog/processing-community-hangout-1-en/
    `
  },
  {
    start: new Date("April 1, 2020"),
    title: "Yoshino Gypsum Art Foundation Fellowship",
    type: ["award"],
    topic: [],
    venue: "Yoshino Gypsum Art Foundation",
    desc: html`
    `
  },
  {
    start: new Date("February 29, 2020"),
    title: "p-code Land",
    type: ["installation", "net art"],
    topic: ["p-code"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-29-p-code-land.jpg?v=1611414784827",
    desc: html`
    p-code Land is an experimental virtual space for collective music live-coding. The syntax is based on <a href="https://github.com/p-code-magazine/p-code">p-code</a> but numbers denote MIDI notes not frequencies, and some features are added.
      https://naotohieda.com/blog/p-code-land/
    `
  },
  {
    start: new Date("February 22, 2020"),
    title: "Tweet Processing Editor",
    type: ["net art"],
    topic: ["processing"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-22-tweet-processing-editor.png?v=1611414830340",
    desc: html`
An editor with preview and minification of a p5.js sketch for Tweet Processing.
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-14-utopian-council.png?v=1611414807270",
    desc: html`
      https://naotohieda.com/blog/utopian-council/
    `
  },
  {
    start: new Date("February 11, 2020"),
    title: "Virtual Exhibition 004",
    type: ["installation", "net art"],
    topic: ["vr"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-11-virtual-exhibition-004.png?v=1611417051165",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-05-virtual-exhibition-003.png?v=1611414757005",
    desc: html`
      Informal presentation https://naotohieda.com/blog/virtual-exhibition-003/
    `
  },
  {
    start: new Date("February 1, 2020"),
    title: "Processing Community Day Tokyo 2020",
    type: ["meetup", "curation"],
    topic: ["processing", "japan"],
    collab: ["PCD Tokyo"],
    venue: "Yahoo! LODGE (Japan)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-02-01-processing-community-day-tokyo-2020-kids.jpg?v=1611414728601",
    desc: html`
      Japanese Processing meetup
    `
  },
  {
    start: new Date("January 10, 2020"),
    title: "The Body and the Other",
    type: ["performance"],
    topic: ["processing", "dance"],
    collab: ["Eleonora Siarava"],
    venue: "Festival Temps d'Images / tanzhaus nrw (Germany)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fthe-body-and-the-other-2048x862.jpg?v=1611417103032",
    desc: html`
      Project by Eleonora Siarava https://vimeo.com/463813053
    `
  },
  {
    start: new Date("December 28, 2019"),
    title: "Algorithm | Diversion",
    type: ["lecture"],
    topic: ["autism"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F191228-ccc.jpg?v=1611417381810",
    desc: html`
      https://naotohieda.com/blog/36c3/
    `
  },
  {
    start: new Date("December 22, 2019"),
    title: "Hydra Book",
    type: ["tutorial"],
    topic: ["hydra"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fhydra-book.png?v=1611426374077",
    desc: html`
      https://hydra-book.naotohieda.com/
    `
  },
  {
    start: new Date("November 28, 2019"),
    title: "Creative Code Köln",
    type: ["meetup"],
    topic: ["processing"],
    venue: "Akkuraum (Germany)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2019-12-05-cck-meetup-intro.jpg?v=1611414668474",
    desc: html`
      meetup -Feb 27, 2020 https://naotohieda.com/blog/creative-code-koeln-1/
    `
  },
  {
    start: new Date("November 14, 2019"),
    title: "Articulation Hackathon",
    type: ["meetup"],
    topic: ["dance", "unity"],
    collab: ["Asaf Bachrach"],
    venue: "CNRS (France)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2019-11-15-articulation.png?v=1611414638191",
    desc: html`
      Participation
    `
  },
  {
    start: new Date("October 11, 2019"),
    title: "Staebetanzen",
    type: ["performance"],
    topic: ["dance", "machine learning", "processing"],
    collab: ["Raphael Hillebrand", "HKAPA Students"],
    venue: "Hong Kong Academy for Performing Arts (Hong Kong)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fhkapa.jpg?v=1611413240992",
    desc: html`
      HKAPA
    `
  },
  {
    start: new Date("September 28, 2019"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv", "processing", "puredata", "raspberry pi", "projection"],
    collab: ["Michael Montanaro", "Tatev Yesayan"],
    venue: "CHAOSMOSIS mAchInes / University of Toronto (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpl.png?v=1611413247644",
    desc: html`
      https://www.cdtps.utoronto.ca/events/chaosmosis-machines
    `
  },
  {
    start: new Date("September 16, 2019"),
    title: "HKAPA",
    type: ["residency", "workshop"],
    topic: ["dance", "machine learning", "processing"],
    collab: ["Raphael Hillebrand"],
    venue: "Hong Kong Academy for Performing Arts (Hong Kong)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-03-01-node-proposal-pathfinder-hkapa.jpg?v=1611414857759",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-03-12-financing-as-an-artist-2020-en.jpg?v=1611425599212",
    desc: html`
      Ingress visualizer installed in Tokyo, Sendai, Kyoto and Osaka
    `
  },
  {
    start: new Date("September 6, 2019"),
    title: "Walk 4 Me",
    type: ["installation"],
    topic: ["dance", "processing"],
    collab: ["Christopher Matthews"],
    venue: "Dance4 (UK)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-03-01-node-proposal-walk4me.jpg?v=1611417219559",
    desc: html`
      Collaborative work on performative video game work
    `
  },
  {
    start: new Date("August 30, 2019"),
    title: "Nails | Pixels | Stimming",
    type: ["installation"],
    topic: ["weaving"],
    venue: "Victoria and Albert Museum",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fnpsw.jpg?v=1611413846212",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F190620-oco.jpg?v=1611417273312",
    desc: html`
      Assistant of robotics with So Kanno / Assistant of interactive visuals
    `
  },
  {
    start: new Date("April 29, 2019"),
    title: "11th Choreographic Coding Lab",
    type: ["meetup"],
    topic: ["dance"],
    collab: [],
    venue: "Motion Bank",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-24-nl-cl-2-flesh-ccl.png?v=1611415120197",
    desc: html`
      Participation
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
      Assistant of visual components
    `
  },
  {
    start: new Date("February 2, 2019"),
    title: "Processing Community Day Tokyo 2019",
    type: ["meetup", "curation", "lecture"],
    topic: ["processing", "japan"],
    collab: ["Ayumu Nagamatsu", "Yasuto Nakanishi"],
    venue: "Yahoo! LODGE (Japan)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpcd2.jpg?v=1611413240902",
    desc: html`
      Organization, curation and talks
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
      participated in work-in-progress creation
    `
  },
  {
    start: new Date("January 17, 2019"),
    title: "Dance Clinic Mobile",
    type: ["performance"],
    topic: ["dance", "eeg", "processing"],
    collab: ["Choy Ka Fai"],
    venue: "Festival Temps d'Images / tanzhaus nrw (Germany)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fdanceclinic.jpg?v=1611431554115",
    desc: html`
      visual, interaction programming / image from tanzhaus nrw
    `
  },
  {
    start: new Date("January 15, 2019"),
    title: "Algorithm | Diversion",
    type: ["lecture"],
    topic: ["dance", "autism", "processing"],
    venue: "Festival Temps d'Images / tanzhaus nrw (Germany)",
    desc: html`
      at symposium "Technological flesh!"
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F181107-impact.jpg?v=1611425497483",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F181101-xmprofiler.jpg?v=1611425554192",
    desc: html`
      Ingress visualizer installed in Tokyo, Sendai, Kyoto and Osaka
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
      Development of face morphing display
    `
  },
  {
    start: new Date("September 21, 2018"),
    title: "Processing and Generative Art",
    type: ["lecture", "workshop"],
    topic: ["processing"],
    venue: "Seoul National University of Education (Korea)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsnue-processing.jpg?v=1611429706839",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsasg2.jpg?v=1611413236868",
    desc: html`
    https://blog.naver.com/sas_g/221428126204
    `
  },
  {
    start: new Date("September 13, 2018"),
    title: "Autistic View",
    type: ["installation"],
    topic: ["openframeworks"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fautistic.png?v=1611425982233",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fmapping-party-3.jpg?v=1611425966652",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fmapping-party-2.jpg?v=1611425950417",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsolar-decathlon.png?v=1611426495269",
    desc: html`
    `
  },
  {
    start: new Date("July 19, 2018"),
    title: "Mapping Party #1",
    type: ["meetup"],
    topic: ["processing"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsasg.png?v=1611413249718",
    desc: html`
      party with projection mapping
    `
  },
  {
    start: new Date("July 16, 2018"),
    title: "Call Stack",
    type: ["residency", "net art"],
    topic: ["processing"],
    collab: ["Janine Harrington"],
    venue: "Digitale Performance Web Residency / Favoriten Festival (Germany, online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fcs.png?v=1611413234621",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fusine.png?v=1611413241153",
    desc: html`
    `
  },
  {
    start: new Date("June 28, 2018"),
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpathrefinder.jpg?v=1611413242207",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpecha-kucha-2.png?v=1611427074334",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpecha-kucha-1.jpg?v=1611427090222",
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
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fbc.png?v=1611413236556",
    desc: html`
    `
  },
  {
    start: new Date("February 12, 2018"),
    title: "Machine Learning Literacy",
    type: ["conference"],
    topic: ["machine learning"],
    venue: "School for Poetic Computation (US)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F180215-sfpc-drawing.jpg?v=1611427045030",
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
    https://medium.com/@naoto_hieda/raspberry-pi-zero-for-interactive-sound-performance-at-centre-clark-8ebe96da1f2a
    `
  },
  {
    start: new Date("December 18, 2017"),
    title: "Artist in Residence",
    type: ["residency"],
    topic: ["dance"],
    collab: ["Nien Tzu Weng"],
    venue: "Studio 303 (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpathrefinder.png?v=1611413251097",
    desc: html`
    
    `
  },
  {
    start: new Date("November 14, 2017"),
    title: "Beatdox",
    type: ["performance"],
    topic: ["dance", "eeg"],
    collab: ["Olivier Lalonde"],
    venue: "RIDM / Cinémathèque Québecoise (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fridm.jpg?v=1611431764686",
    desc: html`
    image from MUSICMOTION website
    `
  },
  {
    start: new Date("November 1, 2017"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    collab: ["Evelyne Drouin"],
    venue: "Cancerto (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fmuse.png?v=1611413236306",
    desc: html`
    `
  },
  {
    start: new Date("October 23, 2017"),
    title: "Mobile Brain-Computer Interface for Dance and Somatic Practice",
    type: ["installation"],
    topic: ["python", "eeg", "openFrameworks"],
    venue: "UIST (Canada)",
    desc: html`
    
    `
  },
  {
    start: new Date("October 14, 2017"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    venue: "NeuroTechTO / TAVES / Toronto Congress Centre (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("October 5, 2017"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv", "processing", "puredata", "raspberry pi", "projection"],
    collab: ["Michael Montanaro", "Tatev Yesayan"],
    venue: "MAPP_MTL Invisible Exhibition Micro-Mapping / Never Apart (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpl.png?v=1611413247644",
    desc: html`
    
    `
  },
  {
    start: new Date("August 10, 2017"),
    title: "Seismic Session",
    type: ["performance"],
    topic: ["dance"],
    collab: ["Doris Uhlich", "others"],
    venue: "ImPulsTanz / Secession (Austria)",
    desc: html`
      participation
    `
  },
  {
    start: new Date("July 9, 2017"),
    title: "Lads",
    type: ["installation"],
    topic: ["dance", "openFrameworks", "max"],
    collab: ["Christopher Matthews"],
    venue: "Villa Empain (Belgium)",
    desc: html`
      
    `
  },
  {
    start: new Date("June 16, 2017"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv", "processing", "puredata", "raspberry pi", "projection"],
    collab: ["Michael Montanaro", "Tatev Yesayan"],
    venue: "InTime / Topological Media Lab (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpl.png?v=1611413247644",
    desc: html`
    
    `
  },
  {
    start: new Date("June 10, 2017"),
    title: "Hack the Brain",
    type: ["meetup"],
    topic: ["dance"],
    venue: "Science Gallery Dublin (Ireland)",
    desc: html`
    hackathon group lead
    `
  },
  {
    start: new Date("May 6, 2017"),
    title: "8th Choreographic Coding Lab",
    type: ["meetup"],
    topic: ["dance"],
    venue: "De Brakke Grond (Netherlands)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Feegccl.jpg?v=1611413244834",
    desc: html`
    
    `
  },
  {
    start: new Date("April 27, 2017"),
    title: "Transenses",
    type: ["performance"],
    topic: ["dance", "max"],
    collab: ["Akiko Kitamura", "Navid Navab"],
    venue: "Tangente (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fts.png?v=1611413246147",
    desc: html`
    
    `
  },
  {
    start: new Date("April 1, 2017"),
    title: "Pola Art Foundation Fellowship",
    type: ["award"],
    topic: [],
    venue: "Pola Art Foundation",
    desc: html`
    `
  },
  {
    start: new Date("March 7, 2017"),
    title: "Chorégraphie Cérébrale",
    type: ["performance"],
    topic: ["dance", "eeg"],
    collab: ["Olivier Lalonde", "Marie-Noëlle De Sève"],
    venue: "Printemps Numeriques / Canadian Centre for Architecture (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fcc.jpg?v=1611413239347",
    desc: html`
    
    `
  },
  {
    start: new Date("March 3, 2017"),
    title: "Performance",
    type: ["performance"],
    topic: ["arduino"],
    collab: ["Evelyne Drouin", "Captain Az!z"],
    venue: "Nuit Blanche / Société des Arts Technologiques (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("February 13, 2017"),
    title: "Scènes Ouvertes",
    type: ["performance"],
    topic: ["scenic", "processing", "arduino"],
    collab: ["Evelyne Drouin"],
    venue: "Société des Arts Technologiques (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fso.jpg?v=1611413239746",
    desc: html`
    
    `
  },
  {
    start: new Date("November 12, 2016"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["openFrameworks"],
    venue: "TEDxMontreal (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("October 2, 2016"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    venue: "World Maker Faire (US)",
    desc: html`
    `
  },
  {
    start: new Date("September 23, 2016"),
    title: "An Intelligent Floor Surface for Foot-based Exploration of Geospatial Data",
    type: ["conference", "lecture"],
    topic: ["haptics"],
    collab: ["Jan Anlauff"],
    venue: "International Workshop on Multimedia Signal Processing (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("August 14, 2016"),
    title: "Showing",
    type: ["performance"],
    topic: ["dance"],
    collab: ["Ainesh Madan"],
    venue: "ImPulsTanz / Leopold Museum (Austria)",
    desc: html`
    `
  },
  {
    start: new Date("July 29, 2016"),
    title: "That Choreographs Us!",
    type: ["performance"],
    topic: ["dance"],
    venue: "ImPulsTanz (Austria)",
    desc: html`
    `
  },
  {
    start: new Date("July 14, 2016"),
    title: "danceWEB",
    type: ["residency", "award"],
    topic: ["dance"],
    venue: "ImPulsTanz (Austria)",
    desc: html`
    `
  },
  {
    start: new Date("May 31, 2016"),
    title: "Composite Particles",
    type: ["installation"],
    topic: ["unity"],
    collab: ["Evelyne Drouin"],
    venue: "IX Symposium (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fcomposite.png?v=1611413241382",
    desc: html`
    `
  },
  {
    start: new Date("May 27, 2016"),
    title: "Workshop on Mobile EEG for Neuroscience",
    type: ["lecture"],
    topic: ["eeg"],
    venue: "BRAMS (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("April 26, 2016"),
    title: "Avian Attractor",
    type: ["installation", "conference"],
    topic: ["openFrameworks"],
    collab: ["Judith Doyle"],
    venue: "CHI Art Exhibition / Works/San José (US)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Favian.png?v=1611413232640",
    desc: html`
    `
  },
  {
    start: new Date("April 30, 2016"),
    title: "Glitch 3D",
    type: ["meetup"],
    topic: ["3D scan", "openFrameworks"],
    venue: "Virtual Reality Hackathon (Canada)",
    desc: html`
    https://devpost.com/software/glitch-3d
    `
  },
  {
    start: new Date("April 22, 2016"),
    title: "Glitch over Emotion Transfer Protocol",
    type: ["meetup"],
    topic: ["face tracking", "openFrameworks"],
    venue: "Hack Day (Canada)",
    desc: html`
    https://vimeo.com/164074864
    `
  },
  {
    start: new Date("April 21, 2016"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    venue: "NeuroTechTO / Bnotions (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("April 12, 2016"),
    title: "Using brain waves to do art",
    type: ["workshop"],
    topic: ["eeg", "python"],
    venue: "NeuroTechMTL (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("February 27, 2016"),
    title: "Composite Particles",
    type: ["installation", "award"],
    topic: ["unity"],
    collab: ["Evelyne Drouin"],
    venue: "Nuit Blanche / Société des Arts Technologiques (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fcomposite.png?v=1611413241382",
    desc: html`
    `
  },
  {
    start: new Date("January 28, 2016"),
    title: "Igloofest",
    type: ["performance"],
    topic: ["openFrameworks"],
    collab: ["Evelyne Drouin", "Captain Az!z"],
    venue: "Igloofest (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Figloofest.png?v=1611413241721",
    desc: html`
    `
  },
  {
    start: new Date("January 25, 2016"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    venue: "TEDxMontreal Cocktail Party (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("November 8, 2015"),
    title: "MINIW",
    type: ["installation"],
    topic: ["unity"],
    venue: "Maker Faire Ottawa (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fminiw.png?v=1611413244674",
    desc: html`
    `
  },
  {
    start: new Date("November 7, 2015"),
    title: "MINIW and Bizarrege (Play)",
    type: ["installation"],
    topic: ["openFrameworks"],
    venue: "TEDxMontreal / Usine C (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FbizarregePlay.png?v=1611413243748",
    desc: html`
    `
  },
  {
    start: new Date("August 27, 2015"),
    title: "4th Choreographic Coding Lab",
    type: ["meetup"],
    topic: ["dance"],
    collab: [],
    venue: "NYU (US)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fccl4smalt.png?v=1611413242798",
    desc: html`
      Cellular Body
    `
  },
  {
    start: new Date("August 14, 2015"),
    title: "Crow Panel",
    type: ["installation", "conference"],
    topic: ["openFrameworks"],
    collab: ["Judith Doyle"],
    venue: "ISEA / Museum of Vancouver (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Ftelus.png?v=1611413235692",
    desc: html`
    `
  },
  {
    start: new Date("August 1, 2015"),
    title: "Bizarrege",
    type: ["installation"],
    topic: ["openFrameworks"],
    venue: "Maker Faire Toronto / Toronto Reference Library (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fbizarrege.png?v=1611413244616",
    desc: html`
    `
  },
  {
    start: new Date("June 10, 2015"),
    title: "Digital Facial Augmentation for Interactive Entertainment",
    type: ["installation", "conference", "lecture"],
    topic: ["openFrameworks"],
    venue: "INTETAIN (Italy)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fintetain.png?v=1611431309761",
    desc: html`
    `
  },
  {
    start: new Date("May 25, 2015"),
    title: "Google Summer of Code",
    type: ["residency"],
    topic: ["opencv"],
    venue: "OpenCV / Google (online)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fgsoc.png?v=1611413237000",
    desc: html`
    `
  },
  {
    start: new Date("April 11, 2015"),
    title: "sharedFace2",
    type: ["installation", "conference", "lecture"],
    topic: ["openFrameworks"],
    venue: "Laval Virtual (France)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FsharedFace2.png?v=1611413246373",
    desc: html`
    `
  },
  {
    start: new Date("February 28, 2015"),
    title: "Mémoire Liquide",
    type: ["installation"],
    topic: ["openFrameworks"],
    collab: ["Marcella França"],
    venue: "Nuit Blanche / Société des Arts Technologiques (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fmemoire.png?v=1611413242700",
    desc: html`
    `
  },
  {
    start: new Date("October 23, 2014"),
    title: "sharedFace",
    type: ["installation", "award"],
    topic: ["openFrameworks"],
    venue: "IVRC (Japan)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FsharedFace.png?v=1611413244019",
    desc: html`
    `
  },
  {
    start: new Date("May 15, 2014"),
    title: "Image Processing with the Microsoft Kinect",
    type: ["workshop", "lecture"],
    topic: ["kinect"],
    venue: "GRAND (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FgrandKinect.png?v=1611413245485",
    desc: html`
    organization and lecture
    `
  },
  {
    start: new Date("May 14, 2014"),
    title: "Kinetic Video Projection for Theatre Lighting",
    type: ["installation"],
    topic: ["openFrameworks"],
    venue: "GRAND (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fgrand2014.jpg?v=1611413235968",
    desc: html`
    `
  },
];

module.exports = sc;

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var html = require("choo/html");
const sc = [
  {
    start: new Date("March 27, 2021"),
    title: "Video Loop of Decolonial Resistance",
    type: ["installation"],
    topic: ["4:56-min video"],
    venue: "K20 (Germany)",
    collab: ["Raphael Hillebrand"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fk20.jpg?v=1620678722784",
    links: ["https://www.instagram.com/p/CBm7isFnACw/"],
    desc: html`Choreography, interpretation and concept: Raphael Hillebrand<br>
    Music: Prolific the Rapper feat. John Trudell, It's not over<br>
    Camera: Naoto Hieda<br>
    Place: Academy of Performing Arts Hong Kong<br>
    Recorded in 2019, exhibited at <a href="https://www.kunstsammlung.de/en/exhibitions/joseph-beuys-jeder-mensch-ist-ein-kuenstler-en">"Everyone Is an Artist" Cosmopolitical Exercises with Joseph Beuys</a> (image on the left)`
  },
  {
    start: new Date("March 12, 2021"),
    title: "TidalCycles Workshop",
    type: ["workshop"],
    topic: ["tidalcycles"],
    venue: "online",
    collab: ["Naoto Hieda"],
    // image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpcd2021ogp.png?v=1612740183557",
    desc: html`Workshop at SUNY`
  },
  {
    start: new Date("February 20, 2021"),
    title: "Processing Community Day Japan 2021",
    type: ["meetup", "curation", "workshop", "lecture"],
    topic: ["processing", "tidalcycles", "hydra"],
    venue: "online",
    collab: ["PCD Tokyo"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpcd2021ogp.png?v=1612740183557",
    desc: html`report and video links <a href="https://naotohieda.com/blog/processing-community-day-japan-2021-en/">here</a><br>
    organization, curation, talk and workshop<br>
    poster by hina nakamura`
  },
  {
    start: new Date("February 15, 2021"),
    title: "#spektrum",
    type: ["installation"],
    topic: ["nails"],
    venue: "ctrl+space / Cologne Main Station (Germany)",
    collab: ["Naoto Hieda"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FNaoto-Hieda.jpg?v=1620718676073",
    desc: html`
#spektrum is a convolution of identity questions that we face, including, but not only, the gender spectrum and autism spectrum. The fingers as an analog, imperfect medium with a color spectrum of nail polish count binary numbers mimicking a self-stimulatory behavior (stimming) to provoke and to challenge the stereotype of "binariness" of autism.`
  },
  {
    start: new Date("February 13, 2021"),
    title: "Hydra meetup #4",
    type: ["meetup"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Ritchse", "Naoto Hieda", "Olivia Jack"],
    venue: "online",
    image: "https://cdn.glitch.com/ded7bc3b-3878-467c-9524-bce0e27dfc1e%2Fposter4.png?v=1611315261539",
    desc: html`
      hydra meetup / poster by Ritchse
    `
  },
  {
    start: new Date("January 24, 2021"),
    title: "Introduction to Hydra",
    type: ["workshop"],
    topic: ["hydra"],
    collab: ["Flor de Fuego", "Naoto Hieda"],
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
    collab: ["Flor de Fuego", "Naoto Hieda"],
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
    collab: ["Flor de Fuego", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Flor de Fuego", "Ritchse", "Naoto Hieda", "Olivia Jack"],
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
    collab: ["Naoto Hieda", "Shunsuke Takawo"],
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
    collab: ["Naoto Hieda"],
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
      Technical assistance
    `
  },
  {
    start: new Date("October 23, 2020"),
    title: "Tech is Nonbinary",
    type: ["performance", "net art"],
    topic: ["hydra", "dance"],
    collab: ["Naoto Hieda"],
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
    collab: ["Nien Tzu Weng", "Naoto Hieda"],
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
    collab: ["Jorge Guevara", "Naoto Hieda"],
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
    collab: ["Jorge Guevara", "Naoto Hieda"],
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
    collab: ["Jorge Guevara", "Naoto Hieda"],
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
    collab: ["Flor de Fuego", "Naoto Hieda", "Olivia Jack"],
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
    collab: ["Yasushi Harada", "Yuki Narumi", "Shunsuke Takawo", "Naoto Hieda"],
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
    collab: ["Raphaël de Courville", "Taru Muhonen", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Marie Claire LeBlanc Flanagan", "Naoto Hieda"],
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
    collab: ["Naoto Hieda", "Shunsuke Takawo"],
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
    collab: ["Flor de Fuego", "Ritchse", "Naoto Hieda", "Olivia Jack"],
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
    collab: ["Naoto Hieda", "Shunsuke Takawo"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Nien Tzu Weng", "Naoto Hieda"],
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
    collab: ["Nien Tzu Weng", "Naoto Hieda"],
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
    collab: ["Naoto Hieda", "Shunsuke Takawo"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-31-processing-community-japan-30min-coding-0-en.png?v=1611415150532",
    desc: html`
      Japanese Processing meetup
      <a href="https://naotohieda.com/blog/processing-community-japan-30min-coding-0-en/">link</a>
    `
  },
  {
    start: new Date("May 30, 2020"),
    title: "15s or less Showcase - Stories from HK",
    type: ["net art"],
    topic: ["instagram", "hong kong"],
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda", "Shunsuke Takawo"],
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
    collab: ["Naoto Hieda", "Saber Khan"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-05-09-processing-community-hangout-2-46.png?v=1611414960476",
    desc: html`
      Processing meetup
      <a href="https://naotohieda.com/blog/processing-community-hangout-2-en/">link</a>
    `
  },
  {
    start: new Date("April 5, 2020"),
    title: "Processing Community Hangout 01",
    type: ["meetup"],
    topic: ["processing"],
    collab: ["Naoto Hieda", "Saber Khan"],
    venue: "online",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2F2020-04-05-processing-community-hangout-1-en.png?v=1611414930358",
    desc: html`
      Processing meetup
      <a href="https://naotohieda.com/blog/processing-community-hangout-1-en/">link</a>
    `
  },
  {
    start: new Date("April 1, 2020"),
    title: "Yoshino Gypsum Art Foundation Fellowship",
    type: ["award"],
    topic: [],
    collab: ["Naoto Hieda"],
    venue: "Yoshino Gypsum Art Foundation",
    desc: html`
    `
  },
  {
    start: new Date("February 29, 2020"),
    title: "p-code Land",
    type: ["installation", "net art"],
    topic: ["p-code"],
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fhydra-book.png?v=1611426374077",
    desc: html`
      https://hydra-book.glitch.com/
    `
  },
  {
    start: new Date("November 28, 2019"),
    title: "Creative Code Köln",
    type: ["meetup"],
    topic: ["processing"],
    collab: ["Naoto Hieda"],
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
    collab: ["Raphael Hillebrand", "Naoto Hieda", "HKAPA Students"],
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
    collab: ["Michael Montanaro", "Naoto Hieda", "Tatev Yesayan"],
    venue: "CHAOSMOSIS mAchInes / University of Toronto (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fpl.png?v=1611413247644",
    desc: html`
      <a href="https://www.cdtps.utoronto.ca/events/chaosmosis-machines">link</a>
    `
  },
  {
    start: new Date("September 16, 2019"),
    title: "HKAPA",
    type: ["residency", "workshop"],
    topic: ["dance", "machine learning", "processing"],
    collab: ["Raphael Hillebrand", "Naoto Hieda"],
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
    collab: ["Christopher Matthews", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Motion Bank"],
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
    collab: ["Ayumu Nagamatsu", "Naoto Hieda", "Yasuto Nakanishi"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["PACT Zollverein"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Evelyne Drouin", "Naoto Hieda"],
    venue: "Seoul Art Space Geumcheon (Korea)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsasg2.jpg?v=1611413236868",
    desc: html`
    <a href="https://blog.naver.com/sas_g/221428126204">review</a>
    `
  },
  {
    start: new Date("September 13, 2018"),
    title: "Autistic View",
    type: ["installation"],
    topic: ["openframeworks"],
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Janine Harrington", "Naoto Hieda"],
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
    collab: ["Evelyne Drouin", "Naoto Hieda"],
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
    collab: ["Christian Mio Loclair", "Naoto Hieda"],
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
    collab: ["Kenichi Yoneda", "Naoto Hieda"],
    venue: "online",
    desc: html`
    `
  },
  {
    start: new Date("April 18, 2018"),
    title: "Pecha Kucha at TML #3",
    type: ["meetup"],
    topic: [],
    collab: ["Topological Media Lab"],
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
    collab: ["Topological Media Lab"],
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
    collab: ["Topological Media Lab"],
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
    collab: "School for Poetic Computation",
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
    collab: ["Evelyne Drouin", "Naoto Hieda"],
    venue: "Centre Clark (Canada)",
    desc: html`
    <a href="https://medium.com/@naoto_hieda/raspberry-pi-zero-for-interactive-sound-performance-at-centre-clark-8ebe96da1f2a">link</a>
    `
  },
  {
    start: new Date("December 18, 2017"),
    title: "Artist in Residence",
    type: ["residency"],
    topic: ["dance"],
    collab: ["Nien Tzu Weng", "Naoto Hieda"],
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
    collab: ["Olivier Lalonde", "Naoto Hieda"],
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
    collab: ["Evelyne Drouin", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    venue: "UIST (Canada)",
    desc: html`
  
    `
  },
  {
    start: new Date("October 14, 2017"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    collab: ["Naoto Hieda"],
    venue: "NeuroTechTO / TAVES / Toronto Congress Centre (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("October 5, 2017"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv", "processing", "puredata", "raspberry pi", "projection"],
    collab: ["Michael Montanaro", "Naoto Hieda", "Tatev Yesayan"],
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
    collab: ["Doris Uhlich"],
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
      as sound programmer
    `
  },
  {
    start: new Date("June 16, 2017"),
    title: "Passing Light",
    type: ["installation"],
    topic: ["vvvv", "processing", "puredata", "raspberry pi", "projection"],
    collab: ["Michael Montanaro", "Jerome Delapierre", "Naoto Hieda", "Tatev Yesayan"],
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
    collab: ["Science Gallery Dublin"],
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
    collab: ["Motion Bank"],
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
    as visual programmer
    `
  },
  {
    start: new Date("April 1, 2017"),
    title: "Pola Art Foundation Fellowship",
    type: ["award"],
    topic: [],
    collab: ["Naoto Hieda"],
    venue: "Pola Art Foundation",
    desc: html`
    `
  },
  {
    start: new Date("March 7, 2017"),
    title: "Chorégraphie Cérébrale",
    type: ["performance"],
    topic: ["dance", "eeg"],
    collab: ["Olivier Lalonde", "Naoto Hieda", "Marie-Noëlle De Sève"],
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
    collab: ["Evelyne Drouin", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    venue: "TEDxMontreal (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("October 2, 2016"),
    title: "EEG Drawing",
    type: ["installation"],
    topic: ["eeg", "openFrameworks"],
    collab: ["Naoto Hieda"],
    venue: "World Maker Faire (US)",
    desc: html`
    `
  },
  {
    start: new Date("September 23, 2016"),
    title: "An Intelligent Floor Surface for Foot-based Exploration of Geospatial Data",
    type: ["conference", "lecture"],
    topic: ["haptics"],
    collab: ["Naoto Hieda", "Jan Anlauff"],
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
    collab: ["Benoit Lachambre"],
    venue: "ImPulsTanz (Austria)",
    desc: html`
    `
  },
  {
    start: new Date("July 14, 2016"),
    title: "danceWEB",
    type: ["residency", "award"],
    topic: ["dance"],
    collab: ["Naoto Hieda"],
    venue: "ImPulsTanz (Austria)",
    desc: html`
    `
  },
  {
    start: new Date("May 31, 2016"),
    title: "Composite Particles",
    type: ["installation"],
    topic: ["unity"],
    collab: ["Evelyne Drouin", "Naoto Hieda"],
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
    collab: ["BRAMS"],
    venue: "BRAMS (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("April 26, 2016"),
    title: "Avian Attractor",
    type: ["installation", "conference"],
    topic: ["openFrameworks"],
    collab: ["Judith Doyle", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    venue: "NeuroTechTO / Bnotions (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("April 12, 2016"),
    title: "Using brain waves to do art",
    type: ["workshop"],
    topic: ["eeg", "python"],
    collab: ["Naoto Hieda"],
    venue: "NeuroTechMTL (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("February 27, 2016"),
    title: "Composite Particles",
    type: ["installation", "award"],
    topic: ["unity"],
    collab: ["Evelyne Drouin", "Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    venue: "TEDxMontreal Cocktail Party (Canada)",
    desc: html`
    `
  },
  {
    start: new Date("November 8, 2015"),
    title: "MINIW",
    type: ["installation"],
    topic: ["unity"],
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Motion Bank"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
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
    collab: ["Naoto Hieda"],
    venue: "GRAND (Canada)",
    image: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fgrand2014.jpg?v=1611413235968",
    desc: html`
    `
  },
];

module.exports = sc;

},{"choo/html":6}],2:[function(require,module,exports){
// import choo
var choo = require("choo");
var html = require("choo/html");
// initialize choo
var app = choo({ hash: true });

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
var main = require("./main.js");

app.route("/", main);

// start app
app.mount("#choomount");

},{"./main.js":3,"choo":7,"choo/html":6}],3:[function(require,module,exports){
// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js");
var sc = require("./contents.js");

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `Naoto Hieda`
  );
  
  const counter = [];
  for(const s of sc) {
    const types = [...s.type, "all"];
    for(const t of types) {
      const c = counter.find(el=>el.t == t);
      if(c == undefined) {
        counter.push({t, count: 0});
      }
      else {
        c.count++;
      }
    }
  }
  
  const types = counter.sort((a, b) => a.count < b.count);
  
  const filters = [];
  if(state.filter == undefined) state.filter = {tag: "all", year: "all time"};

  for(const t of types) {
    const selected = state.filter.tag == undefined ? "" : (state.filter.tag == t.t ? "selected" : "");
    filters.push(html`<p onclick="${filterTag}" class="${t.t} ${selected}">${t.t}</p>`);
  }
  
  filters.push(html`<div class="clearer"></div>`);

  const filtersY = [];
  for(const t of ["all time", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]) {
    const selected = state.filter.year == undefined ? "" : (state.filter.year == t ? "selected" : "");
    filters.push(html`<p onclick="${filterYear}" class="${t} ${selected}">${t}</p>`);
  }

  return html`
<div>
<div class="main">
  <div class="container">
  <header>
    <h1> Works: Naoto Hieda </h1>
    <p>
      <a href="https://naotohieda.com">Naoto Hieda</a> (Japan, 1990-) is one of the most important figures in the field of the Best Practices in Contemporary Dance and has been taking a crucial role in the Best Practices Chat since 2020. This exhibition is an attempt not only to exhibit the important works by Hieda, but also to show early works and sketches to unveil the creativity of Hieda.
    </p>
    <p>
    The exhibition is curated by Naoto Hieda and hosted by glitch.
    </p>

    <div>
    Filter by <div class="type">${filters}</div>
    </div>
    <div class="clearer"></div>
  </header>

  ${schedule(state.filter)}
  </div>
</div>
</div>`;
  
  function filterTag (e) {
    // console.log(e.target.innerText);
    const tag = e.target.innerText;
    state.filter.tag = tag;
    emit('render');
  }
  function filterYear (e) {
    // console.log(e.target.innerText);
    const year = e.target.innerText;
    state.filter.year = year;
    emit('render');
  }
};

},{"./contents.js":1,"./schedule.js":4,"choo/html":6}],4:[function(require,module,exports){
var html = require("choo/html");
var sc = require("./contents.js");

module.exports = filter => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const dates = [];
  const dateOptions = { hour: "2-digit", minute: "2-digit" };
  for (let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const date = s.start.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric"
    });
    const dateYear = s.start.toLocaleDateString(undefined, {
      year: "numeric"
    });
    const { title, topic, desc, type, image, yt, collab, venue, links } = s;

    if (filter != undefined) {
      if (filter.tag != undefined) {
        if (filter.tag != "all" && type.indexOf(filter.tag) < 0) continue;
      }
      if (filter.year != undefined) {
        if (filter.year != "all time" && dateYear != filter.year) continue;
      }
    }

    // console.log(desc)
    
    let types = [];
    for (let i = 0; i < type.length; i++) {
      // topics.push(
      //   html`
      //     <p class="${t}">${t}</p>
      //   `
      // );
      let del = i < type.length - 1 ? ', ' : '';
      types.push(type[i] + del);
    }
    let topics = [];
    for (let i = 0; i < topic.length; i++) {
      // topics.push(
      //   html`
      //     <p class="${t}">${t}</p>
      //   `
      // );
      let del = i < topic.length - 1 ? ', ' : '';
      topics.push(topic[i] + del);
    }
    let link = [];
    for (let i = 0; links !== undefined && i < links.length; i++) {
      let num = i;
      if(links.length == 1) {
        num = "";
      }
      link.push(html`<a href="${links[i]}>link${num}</a>`);
    }
    let collabs = [];
    if (collab != undefined) {
      // if (collab.length > 0) collabs.push("with ");
      let i = 0;
      for (const c of collab) {
        collabs.push(`${c}`);
        if (i == collab.length - 2) {
          collabs.push(` and `);
        }
        else if (i < collab.length - 1) {
          collabs.push(`, `);
        }
        i++;
      }
    }
    let venueElt;
    if (venue != undefined) {
      let prefix = "";
      // if (venue != "online") prefix = "at";
      venueElt = html`
        ${prefix} ${venue}
      `;
    }
    let imageElt;
    if (image != undefined) {
      imageElt = html`
        <img src="${image}" loading="lazy" />
      `;
    } else {
      imageElt = html`<p>The work is currently on loan</p>`
    }
    let ytElt;
    if (yt != undefined && false) {
      // leave out videos for now
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
        <section>
          <div class="thumbnail">${imageElt}</div>
          <div class="caption-holder">
          <div class="caption">
            <div class="collabs">${collabs}</div>
            <div class="clearer"></div>
            <div><span class="title">${title}</span>, <span class="date">${dateYear}</span></div>
            <div class="clearer"></div>
            <div class="type">${types}; ${topics}</div>
            <div class="venue">${venueElt}</div>
            <p class="desc">${desc}</p>
            <p class="links">${link}</p>
            ${ytElt}
          </div>
          </div>
        </section>
      `
    );
  }

  return dates;
};

},{"./contents.js":1,"choo/html":6}],5:[function(require,module,exports){
var assert = require('assert')
var LRU = require('nanolru')

module.exports = ChooComponentCache

function ChooComponentCache (state, emit, lru) {
  assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`')

  assert.equal(typeof state, 'object', 'ChooComponentCache: state should be type object')
  assert.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function')

  if (typeof lru === 'number') this.cache = new LRU(lru)
  else this.cache = lru || new LRU(100)
  this.state = state
  this.emit = emit
}

// Get & create component instances.
ChooComponentCache.prototype.render = function (Component, id) {
  assert.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function')
  assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number')

  var el = this.cache.get(id)
  if (!el) {
    var args = []
    for (var i = 2, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    args.unshift(Component, id, this.state, this.emit)
    el = newCall.apply(newCall, args)
    this.cache.set(id, el)
  }

  return el
}

// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall (Cls) {
  return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
}

},{"assert":11,"nanolru":20}],6:[function(require,module,exports){
module.exports = require('nanohtml')

},{"nanohtml":16}],7:[function(require,module,exports){
var scrollToAnchor = require('scroll-to-anchor')
var documentReady = require('document-ready')
var nanotiming = require('nanotiming')
var nanorouter = require('nanorouter')
var nanomorph = require('nanomorph')
var nanoquery = require('nanoquery')
var nanohref = require('nanohref')
var nanoraf = require('nanoraf')
var nanobus = require('nanobus')
var assert = require('assert')

var Cache = require('./component/cache')

module.exports = Choo

var HISTORY_OBJECT = {}

function Choo (opts) {
  var timing = nanotiming('choo.constructor')
  if (!(this instanceof Choo)) return new Choo(opts)
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'choo: opts should be type object')

  var self = this

  // define events used by choo
  this._events = {
    DOMCONTENTLOADED: 'DOMContentLoaded',
    DOMTITLECHANGE: 'DOMTitleChange',
    REPLACESTATE: 'replaceState',
    PUSHSTATE: 'pushState',
    NAVIGATE: 'navigate',
    POPSTATE: 'popState',
    RENDER: 'render'
  }

  // properties for internal use only
  this._historyEnabled = opts.history === undefined ? true : opts.history
  this._hrefEnabled = opts.href === undefined ? true : opts.href
  this._hashEnabled = opts.hash === undefined ? false : opts.hash
  this._hasWindow = typeof window !== 'undefined'
  this._cache = opts.cache
  this._loaded = false
  this._stores = [ondomtitlechange]
  this._tree = null

  // state
  var _state = {
    events: this._events,
    components: {}
  }
  if (this._hasWindow) {
    this.state = window.initialState
      ? Object.assign({}, window.initialState, _state)
      : _state
    delete window.initialState
  } else {
    this.state = _state
  }

  // properties that are part of the API
  this.router = nanorouter({ curry: true })
  this.emitter = nanobus('choo.emit')
  this.emit = this.emitter.emit.bind(this.emitter)

  // listen for title changes; available even when calling .toString()
  if (this._hasWindow) this.state.title = document.title
  function ondomtitlechange (state) {
    self.emitter.prependListener(self._events.DOMTITLECHANGE, function (title) {
      assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string')
      state.title = title
      if (self._hasWindow) document.title = title
    })
  }
  timing()
}

Choo.prototype.route = function (route, handler) {
  var routeTiming = nanotiming("choo.route('" + route + "')")
  assert.equal(typeof route, 'string', 'choo.route: route should be type string')
  assert.equal(typeof handler, 'function', 'choo.handler: route should be type function')
  this.router.on(route, handler)
  routeTiming()
}

Choo.prototype.use = function (cb) {
  assert.equal(typeof cb, 'function', 'choo.use: cb should be type function')
  var self = this
  this._stores.push(function (state) {
    var msg = 'choo.use'
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg
    var endTiming = nanotiming(msg)
    cb(state, self.emitter, self)
    endTiming()
  })
}

Choo.prototype.start = function () {
  assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node')
  var startTiming = nanotiming('choo.start')

  var self = this
  if (this._historyEnabled) {
    this.emitter.prependListener(this._events.NAVIGATE, function () {
      self._matchRoute(self.state)
      if (self._loaded) {
        self.emitter.emit(self._events.RENDER)
        setTimeout(scrollToAnchor.bind(null, window.location.hash), 0)
      }
    })

    this.emitter.prependListener(this._events.POPSTATE, function () {
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.pushState: href should be type string')
      window.history.pushState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.replaceState: href should be type string')
      window.history.replaceState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    window.onpopstate = function () {
      self.emitter.emit(self._events.POPSTATE)
    }

    if (self._hrefEnabled) {
      nanohref(function (location) {
        var href = location.href
        var hash = location.hash
        if (href === window.location.href) {
          if (!self._hashEnabled && hash) scrollToAnchor(hash)
          return
        }
        self.emitter.emit(self._events.PUSHSTATE, href)
      })
    }
  }

  this._setCache(this.state)
  this._matchRoute(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._tree = this._prerender(this.state)
  assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href)

  this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self._prerender(self.state)
    assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href)

    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  }))

  documentReady(function () {
    self.emitter.emit(self._events.DOMCONTENTLOADED)
    self._loaded = true
  })

  startTiming()
  return this._tree
}

Choo.prototype.mount = function mount (selector) {
  var mountTiming = nanotiming("choo.mount('" + selector + "')")
  if (typeof window !== 'object') {
    assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String')
    this.selector = selector
    mountTiming()
    return this
  }

  assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement')

  var self = this

  documentReady(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self.start()
    if (typeof selector === 'string') {
      self._tree = document.querySelector(selector)
    } else {
      self._tree = selector
    }

    assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector)
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  })
  mountTiming()
}

Choo.prototype.toString = function (location, state) {
  state = state || {}
  state.components = state.components || {}
  state.events = Object.assign({}, state.events, this._events)

  assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser')
  assert.equal(typeof location, 'string', 'choo.toString: location should be type string')
  assert.equal(typeof state, 'object', 'choo.toString: state should be type object')

  this._setCache(state)
  this._matchRoute(state, location)
  this.emitter.removeAllListeners()
  this._stores.forEach(function (initStore) {
    initStore(state)
  })

  var html = this._prerender(state)
  assert.ok(html, 'choo.toString: no valid value returned for the route ' + location)
  assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location)
  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString()
}

Choo.prototype._matchRoute = function (state, locationOverride) {
  var location, queryString
  if (locationOverride) {
    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '')
    if (!this._hashEnabled) location = location.replace(/#.+$/, '')
    queryString = locationOverride
  } else {
    location = window.location.pathname.replace(/\/$/, '')
    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/')
    queryString = window.location.search
  }
  var matched = this.router.match(location)
  this._handler = matched.cb
  state.href = location
  state.query = nanoquery(queryString)
  state.route = matched.route
  state.params = matched.params
}

Choo.prototype._prerender = function (state) {
  var routeTiming = nanotiming("choo.prerender('" + state.route + "')")
  var res = this._handler(state, this.emit)
  routeTiming()
  return res
}

Choo.prototype._setCache = function (state) {
  var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache)
  state.cache = renderComponent

  function renderComponent (Component, id) {
    assert.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function')
    var args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    return cache.render.apply(cache, args)
  }

  // When the state gets stringified, make sure `state.cache` isn't
  // stringified too.
  renderComponent.toJSON = function () {
    return null
  }
}

},{"./component/cache":5,"assert":11,"document-ready":8,"nanobus":12,"nanohref":13,"nanomorph":21,"nanoquery":24,"nanoraf":25,"nanorouter":26,"nanotiming":28,"scroll-to-anchor":30}],8:[function(require,module,exports){
'use strict'

module.exports = ready

function ready (callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser')
  }
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}

},{}],9:[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],10:[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        if (xstate === OPEN) {
          if (reg === '/') {
            p.push([ OPEN, '/', arg ])
            reg = ''
          } else {
            p.push([ OPEN, arg ])
          }
        } else if (xstate === COMMENT && opts.comments) {
          reg += String(arg)
        } else if (xstate !== COMMENT) {
          p.push([ VAR, xstate, arg ])
        }
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            if (parts[i][0] === CLOSE) {
              i--
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      if (opts.createFragment) return opts.createFragment(tree[2])
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN && reg.length) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && c === '/' && reg.length) {
          // no-op, self closing tag without a space <br/>
        } else if (state === OPEN && /\s/.test(c)) {
          if (reg.length) {
            res.push([OPEN, reg])
          }
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else if (x === null || x === undefined) return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":9}],11:[function(require,module,exports){
assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}

},{}],12:[function(require,module,exports){
var splice = require('remove-array-items')
var nanotiming = require('nanotiming')
var assert = require('assert')

module.exports = Nanobus

function Nanobus (name) {
  if (!(this instanceof Nanobus)) return new Nanobus(name)

  this._name = name || 'nanobus'
  this._starListeners = []
  this._listeners = {}
}

Nanobus.prototype.emit = function (eventName) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol')

  var data = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    data.push(arguments[i])
  }

  var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')")
  var listeners = this._listeners[eventName]
  if (listeners && listeners.length > 0) {
    this._emit(this._listeners[eventName], data)
  }

  if (this._starListeners.length > 0) {
    this._emit(this._starListeners, eventName, data, emitTiming.uuid)
  }
  emitTiming()

  return this
}

Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function')

  if (eventName === '*') {
    this._starListeners.push(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(listener)
  }
  return this
}

Nanobus.prototype.prependListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners.unshift(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].unshift(listener)
  }
  return this
}

Nanobus.prototype.once = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function')

  var self = this
  this.on(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.prependOnceListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function')

  var self = this
  this.prependListener(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.removeListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners = this._starListeners.slice()
    return remove(this._starListeners, listener)
  } else {
    if (typeof this._listeners[eventName] !== 'undefined') {
      this._listeners[eventName] = this._listeners[eventName].slice()
    }

    return remove(this._listeners[eventName], listener)
  }

  function remove (arr, listener) {
    if (!arr) return
    var index = arr.indexOf(listener)
    if (index !== -1) {
      splice(arr, index, 1)
      return true
    }
  }
}

Nanobus.prototype.removeAllListeners = function (eventName) {
  if (eventName) {
    if (eventName === '*') {
      this._starListeners = []
    } else {
      this._listeners[eventName] = []
    }
  } else {
    this._starListeners = []
    this._listeners = {}
  }
  return this
}

Nanobus.prototype.listeners = function (eventName) {
  var listeners = eventName !== '*'
    ? this._listeners[eventName]
    : this._starListeners

  var ret = []
  if (listeners) {
    var ilength = listeners.length
    for (var i = 0; i < ilength; i++) ret.push(listeners[i])
  }
  return ret
}

Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
  if (typeof arr === 'undefined') return
  if (arr.length === 0) return
  if (data === undefined) {
    data = eventName
    eventName = null
  }

  if (eventName) {
    if (uuid !== undefined) {
      data = [eventName].concat(data, uuid)
    } else {
      data = [eventName].concat(data)
    }
  }

  var length = arr.length
  for (var i = 0; i < length; i++) {
    var listener = arr[i]
    listener.apply(listener, data)
  }
}

},{"assert":11,"nanotiming":28,"remove-array-items":29}],13:[function(require,module,exports){
var assert = require('assert')

var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/
var protocolLink = /^[\w-_]+:/

module.exports = href

function href (cb, root) {
  assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist')

  root = root || window.document

  assert.equal(typeof cb, 'function', 'nanohref: cb should be type function')
  assert.equal(typeof root, 'object', 'nanohref: root should be type object')

  window.addEventListener('click', function (e) {
    if ((e.button && e.button !== 0) ||
      e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
      e.defaultPrevented) return

    var anchor = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a' || node.href === undefined) {
        return traverse(node.parentNode)
      }
      return node
    })(e.target)

    if (!anchor) return

    if (window.location.protocol !== anchor.protocol ||
        window.location.hostname !== anchor.hostname ||
        window.location.port !== anchor.port ||
      anchor.hasAttribute('data-nanohref-ignore') ||
      anchor.hasAttribute('download') ||
      (anchor.getAttribute('target') === '_blank' &&
        safeExternalLink.test(anchor.getAttribute('rel'))) ||
      protocolLink.test(anchor.getAttribute('href'))) return

    e.preventDefault()
    cb(anchor)
  })
}

},{"assert":11}],14:[function(require,module,exports){
'use strict'

var trailingNewlineRegex = /\n[\s]+$/
var leadingNewlineRegex = /^\n[\s]+/
var trailingSpaceRegex = /[\s]+$/
var leadingSpaceRegex = /^[\s]+/
var multiSpaceRegex = /[\n\s]+/g

var TEXT_TAGS = [
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
]

var VERBATIM_TAGS = [
  'code', 'pre', 'textarea'
]

module.exports = function appendChild (el, childs) {
  if (!Array.isArray(childs)) return

  var nodeName = el.nodeName.toLowerCase()

  var hadText = false
  var value, leader

  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      appendChild(el, node)
      continue
    }

    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      typeof node === 'function' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }

    var lastChild = el.childNodes[el.childNodes.length - 1]

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node

      // We didn't have a text node yet, create one
      } else {
        node = el.ownerDocument.createTextNode(node)
        el.appendChild(node)
        lastChild = node
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' '
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, leader)
            .replace(leadingSpaceRegex, ' ')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

    // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        // Trim the child nodes but preserve the appropriate whitespace
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingSpaceRegex, ' ')
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName
      if (_nodeName) nodeName = _nodeName.toLowerCase()

      // Append the node to the DOM
      el.appendChild(node)
    }
  }
}

},{}],15:[function(require,module,exports){
'use strict'

module.exports = [
  'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default',
  'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden',
  'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline',
  'readonly', 'required', 'reversed', 'selected'
]

},{}],16:[function(require,module,exports){
module.exports = require('./dom')(document)

},{"./dom":18}],17:[function(require,module,exports){
'use strict'

module.exports = [
  'indeterminate'
]

},{}],18:[function(require,module,exports){
'use strict'

var hyperx = require('hyperx')
var appendChild = require('./append-child')
var SVG_TAGS = require('./svg-tags')
var BOOL_PROPS = require('./bool-props')
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = require('./direct-props')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var COMMENT_TAG = '!--'

module.exports = function (document) {
  function nanoHtmlCreateElement (tag, props, children) {
    var el

    // If an svg tag, it needs a namespace
    if (SVG_TAGS.indexOf(tag) !== -1) {
      props.namespace = SVGNS
    }

    // If we are using a namespace
    var ns = false
    if (props.namespace) {
      ns = props.namespace
      delete props.namespace
    }

    // If we are extending a builtin element
    var isCustomElement = false
    if (props.is) {
      isCustomElement = props.is
      delete props.is
    }

    // Create the element
    if (ns) {
      if (isCustomElement) {
        el = document.createElementNS(ns, tag, { is: isCustomElement })
      } else {
        el = document.createElementNS(ns, tag)
      }
    } else if (tag === COMMENT_TAG) {
      return document.createComment(props.comment)
    } else if (isCustomElement) {
      el = document.createElement(tag, { is: isCustomElement })
    } else {
      el = document.createElement(tag)
    }

    // Create the properties
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        var key = p.toLowerCase()
        var val = props[p]
        // Normalize className
        if (key === 'classname') {
          key = 'class'
          p = 'class'
        }
        // The for attribute gets transformed to htmlFor, but we just set as for
        if (p === 'htmlFor') {
          p = 'for'
        }
        // If a property is boolean, set itself to the key
        if (BOOL_PROPS.indexOf(key) !== -1) {
          if (String(val) === 'true') val = key
          else if (String(val) === 'false') continue
        }
        // If a property prefers being set directly vs setAttribute
        if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) {
          el[p] = val
        } else {
          if (ns) {
            if (p === 'xlink:href') {
              el.setAttributeNS(XLINKNS, p, val)
            } else if (/^xmlns($|:)/i.test(p)) {
              // skip xmlns definitions
            } else {
              el.setAttributeNS(null, p, val)
            }
          } else {
            el.setAttribute(p, val)
          }
        }
      }
    }

    appendChild(el, children)
    return el
  }

  function createFragment (nodes) {
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] == null) continue
      if (Array.isArray(nodes[i])) {
        fragment.appendChild(createFragment(nodes[i]))
      } else {
        if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i])
        fragment.appendChild(nodes[i])
      }
    }
    return fragment
  }

  var exports = hyperx(nanoHtmlCreateElement, {
    comments: true,
    createFragment: createFragment
  })
  exports.default = exports
  exports.createComment = nanoHtmlCreateElement
  return exports
}

},{"./append-child":14,"./bool-props":15,"./direct-props":17,"./svg-tags":19,"hyperx":10}],19:[function(require,module,exports){
'use strict'

module.exports = [
  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

},{}],20:[function(require,module,exports){
module.exports = LRU

function LRU (opts) {
  if (!(this instanceof LRU)) return new LRU(opts)
  if (typeof opts === 'number') opts = {max: opts}
  if (!opts) opts = {}
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
  this.max = opts.max || 1000
  this.maxAge = opts.maxAge || 0
}

Object.defineProperty(LRU.prototype, 'keys', {
  get: function () { return Object.keys(this.cache) }
})

LRU.prototype.clear = function () {
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
}

LRU.prototype.remove = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]
  delete this.cache[key]
  this._unlink(key, element.prev, element.next)
  return element.value
}

LRU.prototype._unlink = function (key, prev, next) {
  this.length--

  if (this.length === 0) {
    this.head = this.tail = null
  } else {
    if (this.head === key) {
      this.head = prev
      this.cache[this.head].next = null
    } else if (this.tail === key) {
      this.tail = next
      this.cache[this.tail].prev = null
    } else {
      this.cache[prev].next = next
      this.cache[next].prev = prev
    }
  }
}

LRU.prototype.peek = function (key) {
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return
  return element.value
}

LRU.prototype.set = function (key, value) {
  if (typeof key !== 'string') key = '' + key

  var element

  if (this.cache.hasOwnProperty(key)) {
    element = this.cache[key]
    element.value = value
    if (this.maxAge) element.modified = Date.now()

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value
    this._unlink(key, element.prev, element.next)
  } else {
    element = {value: value, modified: 0, next: null, prev: null}
    if (this.maxAge) element.modified = Date.now()
    this.cache[key] = element

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict()
  }

  this.length++
  element.next = null
  element.prev = this.head

  if (this.head) this.cache[this.head].next = key
  this.head = key

  if (!this.tail) this.tail = key
  return value
}

LRU.prototype._checkAge = function (key, element) {
  if (this.maxAge && (Date.now() - element.modified) > this.maxAge) {
    this.remove(key)
    return false
  }
  return true
}

LRU.prototype.get = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return

  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next
      this.cache[this.tail].prev = null
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev

    // Element is the new head
    this.cache[this.head].next = key
    element.prev = this.head
    element.next = null
    this.head = key
  }

  return element.value
}

LRU.prototype.evict = function () {
  if (!this.tail) return
  this.remove(this.tail)
}

},{}],21:[function(require,module,exports){
var assert = require('nanoassert')
var morph = require('./lib/morph')

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree, options) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')

  if (options && options.childrenOnly) {
    updateChildren(newTree, oldTree)
    return oldTree
  }

  assert.notEqual(
    newTree.nodeType,
    11,
    'nanomorph: newTree should have one root node (which is not a DocumentFragment)'
  )

  return walk(newTree, oldTree)
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

function getComponentId (node) {
  return node.dataset ? node.dataset.nanomorphComponentId : undefined
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}

},{"./lib/morph":23,"nanoassert":11}],22:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],23:[function(require,module,exports){
var events = require('./events')
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  // The "indeterminate" property can not be set using an HTML attribute.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  if (newNode.indeterminate !== oldNode.indeterminate) {
    oldNode.indeterminate = newNode.indeterminate
  }

  // Persist file value since file inputs can't be changed programatically
  if (oldNode.type === 'file') return

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}

},{"./events":22}],24:[function(require,module,exports){
var reg = /([^?=&]+)(=([^&]*))?/g
var assert = require('assert')

module.exports = qs

function qs (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')

  var obj = {}
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    var value = decodeURIComponent(a3)
    var key = decodeURIComponent(a1)
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) obj[key].push(value)
      else obj[key] = [obj[key], value]
    } else {
      obj[key] = value
    }
  })

  return obj
}

},{"assert":11}],25:[function(require,module,exports){
'use strict'

var assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  if (!raf) raf = window.requestAnimationFrame
  var redrawScheduled = false
  var args = null

  return function frame () {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false

        var length = args.length
        var _args = new Array(length)
        for (var i = 0; i < length; i++) _args[i] = args[i]

        render.apply(render, _args)
        args = null
      })
    }

    args = arguments
  }
}

},{"assert":11}],26:[function(require,module,exports){
var assert = require('assert')
var wayfarer = require('wayfarer')

// electron support
var isLocalFile = (/file:\/\//.test(
  typeof window === 'object' &&
  window.location &&
  window.location.origin
))

/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
var protocol = '^(http(s)?(:\/\/))?(www\.)?'
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
var qs = '[\?].*$'
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron)
var prefix = new RegExp(protocol + domain)
var normalize = new RegExp('#')
var suffix = new RegExp(qs)

module.exports = Nanorouter

function Nanorouter (opts) {
  if (!(this instanceof Nanorouter)) return new Nanorouter(opts)
  opts = opts || {}
  this.router = wayfarer(opts.default || '/404')
}

Nanorouter.prototype.on = function (routename, listener) {
  assert.equal(typeof routename, 'string')
  routename = routename.replace(/^[#/]/, '')
  this.router.on(routename, listener)
}

Nanorouter.prototype.emit = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.emit(routename)
}

Nanorouter.prototype.match = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.match(routename)
}

// replace everything in a route but the pathname and hash
function pathname (routename, isElectron) {
  if (isElectron) routename = routename.replace(stripElectron, '')
  else routename = routename.replace(prefix, '')
  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'))
}

},{"assert":11,"wayfarer":31}],27:[function(require,module,exports){
var assert = require('assert')

var hasWindow = typeof window !== 'undefined'

function createScheduler () {
  var scheduler
  if (hasWindow) {
    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true)
    scheduler = window._nanoScheduler
  } else {
    scheduler = new NanoScheduler()
  }
  return scheduler
}

function NanoScheduler (hasWindow) {
  this.hasWindow = hasWindow
  this.hasIdle = this.hasWindow && window.requestIdleCallback
  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout
  this.scheduled = false
  this.queue = []
}

NanoScheduler.prototype.push = function (cb) {
  assert.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function')

  this.queue.push(cb)
  this.schedule()
}

NanoScheduler.prototype.schedule = function () {
  if (this.scheduled) return

  this.scheduled = true
  var self = this
  this.method(function (idleDeadline) {
    var cb
    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
      cb = self.queue.shift()
      cb(idleDeadline)
    }
    self.scheduled = false
    if (self.queue.length) self.schedule()
  })
}

NanoScheduler.prototype.setTimeout = function (cb) {
  setTimeout(cb, 0, {
    timeRemaining: function () {
      return 1
    }
  })
}

module.exports = createScheduler

},{"assert":11}],28:[function(require,module,exports){
var scheduler = require('nanoscheduler')()
var assert = require('assert')

var perf
nanotiming.disabled = true
try {
  perf = window.performance
  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark
} catch (e) { }

module.exports = nanotiming

function nanotiming (name) {
  assert.equal(typeof name, 'string', 'nanotiming: name should be type string')

  if (nanotiming.disabled) return noop

  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER
  var startName = 'start-' + uuid + '-' + name
  perf.mark(startName)

  function end (cb) {
    var endName = 'end-' + uuid + '-' + name
    perf.mark(endName)

    scheduler.push(function () {
      var err = null
      try {
        var measureName = name + ' [' + uuid + ']'
        perf.measure(measureName, startName, endName)
        perf.clearMarks(startName)
        perf.clearMarks(endName)
      } catch (e) { err = e }
      if (cb) cb(err, name)
    })
  }

  end.uuid = uuid
  return end
}

function noop (cb) {
  if (cb) {
    scheduler.push(function () {
      cb(new Error('nanotiming: performance API unavailable'))
    })
  }
}

},{"assert":11,"nanoscheduler":27}],29:[function(require,module,exports){
'use strict'

/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

  var len = length - removeCount

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount]
  }

  arr.length = len
}

},{}],30:[function(require,module,exports){
module.exports = scrollToAnchor

function scrollToAnchor (anchor, options) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor)
      if (el) el.scrollIntoView(options)
    } catch (e) {}
  }
}

},{}],31:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var assert = require('assert')
var trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  var _default = (dft || '').replace(/^\//, '')
  var _trie = trie()

  emit._trie = _trie
  emit.on = on
  emit.emit = emit
  emit.match = match
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      var node = _trie.create(route)
      node.cb = cb
      node.route = route
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    var matched = match(route)

    var args = new Array(arguments.length)
    args[0] = matched.params
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    return matched.cb.apply(matched.cb, args)
  }

  function match (route) {
    assert.notEqual(route, undefined, "'route' must be defined")

    var matched = _trie.match(route)
    if (matched && matched.cb) return new Route(matched)

    var dft = _trie.match(_default)
    if (dft && dft.cb) return new Route(dft)

    throw new Error("route '" + route + "' did not match")
  }

  function Route (matched) {
    this.cb = matched.cb
    this.route = matched.route
    this.params = matched.params
  }
}

},{"./trie":32,"assert":11}],32:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var assert = require('assert')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> obj
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  var routes = route.replace(/^\//, '').split('/')

  function createNode (index, trie) {
    var thisRoute = (has(routes, index) && routes[index])
    if (thisRoute === false) return trie

    var node = null
    if (/^:|^\*/.test(thisRoute)) {
      // if node is a name match, set name and append to ':' node
      if (!has(trie.nodes, '$$')) {
        node = { nodes: {} }
        trie.nodes.$$ = node
      } else {
        node = trie.nodes.$$
      }

      if (thisRoute[0] === '*') {
        trie.wildcard = true
      }

      trie.name = thisRoute.replace(/^:|^\*/, '')
    } else if (!has(trie.nodes, thisRoute)) {
      node = { nodes: {} }
      trie.nodes[thisRoute] = node
    } else {
      node = trie.nodes[thisRoute]
    }

    // we must recurse deeper
    return createNode(index + 1, node)
  }

  return createNode(0, this.trie)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  var routes = route.replace(/^\//, '').split('/')
  var params = {}

  function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    var thisRoute = routes[index]
    if (thisRoute === undefined) return trie

    if (has(trie.nodes, thisRoute)) {
      // match regular routes first
      return search(index + 1, trie.nodes[thisRoute])
    } else if (trie.name) {
      // match named routes
      try {
        params[trie.name] = decodeURIComponent(thisRoute)
      } catch (e) {
        return search(index, undefined)
      }
      return search(index + 1, trie.nodes.$$)
    } else if (trie.wildcard) {
      // match wildcards
      try {
        params.wildcard = decodeURIComponent(routes.slice(index).join('/'))
      } catch (e) {
        return search(index, undefined)
      }
      // return early, or else search may keep recursing through the wildcard
      return trie.nodes.$$
    } else {
      // no matches found
      return search(index + 1)
    }
  }

  var node = search(0, this.trie)

  if (!node) return undefined
  node = Object.assign({}, node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  var split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    var head = split.join('/')
    key = split[0]
    node = this.create(head)
  }

  Object.assign(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    Object.assign(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

function has (object, property) {
  return Object.prototype.hasOwnProperty.call(object, property)
}

},{"assert":11}]},{},[2]);

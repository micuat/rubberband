var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  const naoto = html`<a href="https://naotohieda.com">Naoto Hieda</a>`;

  const lfsdesc = html`Lunch session. URL coming soon.`;
  const lfsorgs = html`<a href="https://twitter.com/sableraph">Raphaël de Courville</a>, <a href="https://twitter.com/tarumuh">Taru Muhonen</a> and ${naoto.cloneNode(true)}`;
  
  const bporgs = html`<a href="https://twitter.com/J_Guevara_L">Jorge Guevara</a> and ${naoto.cloneNode(true)}`;

  const sc = [
    {start: new Date("October 2, 2020 17:30:00 UTC"), end: new Date("October 2, 2020 19:00:00 UTC"), title: "Creative Code Stammtisch", orgs: html`Creative Code Berlin`, desc: html`*this event is hosted by <a href="https://www.meetup.com/creativeCodeBerlin/">Creative Code Berlin</a>*<br>Naoto gives a brief introduction at the Stammtisch. <a href="https://www.meetup.com/creativeCodeBerlin/events/skjgrrybcnbdb/">More info here.</a>`},
    {start: new Date("October 3, 2020 10:30:00 UTC"), end: new Date("October 3, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc.cloneNode(true)},
    {start: new Date("October 4, 2020 09:30:00 UTC"), end: new Date("October 4, 2020 11:30:00 UTC"), title: "TDSW x PCJ Vernissage", orgs: html`Yasushi Harada, Yuki Narumi, Shunsuke Takawo and ${naoto.cloneNode(true)}`, desc: html`Tokyo Developers Study Weekend and Processing Community Japan going to occupy GreenHouse NAXOS. URL coming soon. <a href="https://tdswxpcj.peatix.com/">peatix ページはこちら</a>・<a href="https://paper.dropbox.com/doc/TDSWxPCJ-howto--A8hx~MmXMO3P8s5_UboiQC75AQ-KgJQH4Ai8FQHHZ9QZ55lu">Hubs の使い方はこちら</a>`},
    {start: new Date("October 4, 2020 17:00:00 UTC"), end: new Date("October 4, 2020 19:00:00 UTC"), title: "Hydra meetup #2", orgs: html`Flor de Fuego, Olivia Jack and ${naoto.cloneNode(true)}`, desc: html`The event will start in Zoom and partially streamed to GreenHouse NAXOS. <a href="https://hydra-meetup-2.glitch.me/">More info here.</a>`},
    {start: new Date("October 5, 2020 10:30:00 UTC"), end: new Date("October 5, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs.cloneNode(true), desc: lfsdesc.cloneNode(true)},
    {start: new Date("October 5, 2020 11:30:00 UTC"), end: new Date("October 5, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", orgs: bporgs.cloneNode(true), desc: "discussion"},
    {start: new Date("October 5, 2020 14:00:00 UTC"), end: new Date("October 5, 2020 14:30:00 UTC"), title: "TBA", orgs: html`${naoto.cloneNode(true)}`, desc: "TBA"},
    {start: new Date("October 6, 2020 10:30:00 UTC"), end: new Date("October 6, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs.cloneNode(true), desc: lfsdesc.cloneNode(true)},
    {start: new Date("October 6, 2020 19:00:00 UTC"), end: new Date("October 6, 2020 20:00:00 UTC"), title: "Best Practices", orgs: bporgs.cloneNode(true), desc: "Performing practice. URL coming soon."},
    {start: new Date("October 7, 2020 10:30:00 UTC"), end: new Date("October 7, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs.cloneNode(true), desc: lfsdesc.cloneNode(true)},
    {start: new Date("October 7, 2020 11:30:00 UTC"), end: new Date("October 7, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", orgs: bporgs.cloneNode(true), desc: "discussion"},
    {start: new Date("October 7, 2020 18:30:00 UTC"), end: new Date("October 7, 2020 19:30:00 UTC"), title: "Multidimensional Journey", orgs: html`Nien Tzu Weng and ${naoto.cloneNode(true)}`, desc: "performative journey. URL coming soon."},
    {start: new Date("October 8, 2020 10:30:00 UTC"), end: new Date("October 8, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs.cloneNode(true), desc: lfsdesc.cloneNode(true)},
    {start: new Date("October 8, 2020 14:00:00 UTC"), end: new Date("October 8, 2020 14:15:00 UTC"), title: "Distant Movements", orgs: html`Annie Abrahams, Daniel Pinheiro and Muriel Piqué`, desc: html`15-min performance. The session will take place on <a href="https://meet.jit.si/ChoreographicCodingOnline">jitsi</a>. Please arrive in advance if you are going to participate.`},
  ]
  
  const dates = [];
  const dateOptions = {hour: '2-digit', minute:'2-digit'};
  for(let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const start = s.start.toLocaleDateString(undefined, { month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' });
    const end = s.end.toLocaleTimeString([], dateOptions);
    const {title, orgs, desc} = s;
    dates.push(html`<li><p class="schedule">${start} - ${end}</p><p class="title">${title}</p><p class="orgs">by ${orgs}</p><p class="desc">${desc}</p></li>`);
  }

  return { timezone, dates };
};

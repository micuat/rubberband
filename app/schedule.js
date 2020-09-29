var html = require("choo/html");

module.exports = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lfsdesc = html`Lunch session. URL coming soon.`;
  const lfsorgs = html`Raphaël de Courville, Taru Muhonen and Naoto Hieda`;
  
  const bporgs = html`Jorge Guevara and Naoto Hieda`;
  
  const sc = [
    {start: new Date("October 2, 2020 17:30:00 UTC"), end: new Date("October 2, 2020 19:00:00 UTC"), title: "Creative Code Stammtisch", orgs: html`Creative Code Berlin`, desc: html`*this event is hosted by <a href="https://www.meetup.com/creativeCodeBerlin/">Creative Code Berlin</a>*<br>Naoto gives a brief introduction at the Stammtisch. <a href="https://www.meetup.com/creativeCodeBerlin/events/skjgrrybcnbdb/">More info here.</a>`},
    {start: new Date("October 3, 2020 10:30:00 UTC"), end: new Date("October 3, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc},
    {start: new Date("October 4, 2020 09:30:00 UTC"), end: new Date("October 4, 2020 11:30:00 UTC"), title: "TDSW x PCJ Vernissage", orgs: html``, desc: html`Tokyo Developers Study Weekend and Processing Community Japan going to occupy GreenHouse NAXOS. <a href="https://tdswxpcj.peatix.com/">日本語の情報はこちら</a>`},
    {start: new Date("October 4, 2020 17:00:00 UTC"), end: new Date("October 4, 2020 19:00:00 UTC"), title: "Hydra meetup #2", orgs: html``, desc: html`The event will start in Zoom and partially streamed to GreenHouse NAXOS. <a href="https://hydra-meetup-2.glitch.me/">More info here.</a>`},
    {start: new Date("October 5, 2020 10:30:00 UTC"), end: new Date("October 5, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc},
    {start: new Date("October 5, 2020 11:30:00 UTC"), end: new Date("October 5, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", orgs: bporgs, desc: "oi"},
    {start: new Date("October 6, 2020 10:30:00 UTC"), end: new Date("October 6, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc},
    {start: new Date("October 6, 2020 19:00:00 UTC"), end: new Date("October 6, 2020 20:00:00 UTC"), title: "Best Practices", orgs: bporgs, desc: "oi"},
    {start: new Date("October 7, 2020 10:30:00 UTC"), end: new Date("October 7, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc},
    {start: new Date("October 7, 2020 11:30:00 UTC"), end: new Date("October 7, 2020 12:30:00 UTC"), title: "Best Practices - Discussion", orgs: bporgs, desc: "oi"},
    {start: new Date("October 7, 2020 18:30:00 UTC"), end: new Date("October 7, 2020 19:30:00 UTC"), title: "Multidimensional Journey", orgs: html``, desc: "oi"},
    {start: new Date("October 8, 2020 10:30:00 UTC"), end: new Date("October 8, 2020 11:30:00 UTC"), title: "Low Frequency Skies", orgs: lfsorgs, desc: lfsdesc},
    {start: new Date("October 8, 2020 14:00:00 UTC"), end: new Date("October 8, 2020 14:15:00 UTC"), title: "Distant Movements", orgs: html``, desc: "oi"},
  ]
  
  const dates = [];
  const dateOptions = {hour: '2-digit', minute:'2-digit'};
  for(let i = 0; i < sc.length; i++) {
    const s = sc[i];
    const start = s.start.toLocaleDateString(undefined, { month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' });
    const end = s.end.toLocaleTimeString([], dateOptions);
    const {title, orgs, desc} = s;
    dates.push(html`<li><p>${start} - ${end}</p><p><b>${title}</b></p><p>by ${orgs}</p><p>${desc}</p></li>`);
  }

  return { timezone, dates };
};

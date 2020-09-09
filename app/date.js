var html = require("choo/html");

module.exports = () => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateObjs = [
    new Date("October 4, 2020 17:00:00 UTC"),
    new Date("October 4, 2020 17:30:00 UTC"),
    new Date("October 4, 2020 18:30:00 UTC")
  ];
  const dateDescs = [
    "Introduction",
    "Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone!",
    "Breakout rooms to discuss specific topics and ask hydra questions",
  ];
  
  const dates = [];
  for(let i = 0; i < dateObjs.length; i++) {
    const start = dateObjs[i].toLocaleTimeString();
    const end = i == dateObjs.length - 1 ? "end" : dateObjs[i+1].toLocaleTimeString();
    dates.push(html`<li>${start} - ${end}: ${dateDescs[i]}</li>`);
  }

  return { timezone, dates, startDate: dateObjs[0] };
};

// <li>${date0.toLocaleTimeString()} - ${date1.toLocaleTimeString()}: Introduction</li>
// <li>${date1.toLocaleTimeString()} - ${date2.toLocaleTimeString()}: Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
// <li>${date2.toLocaleTimeString()} - end: Breakout rooms to discuss specific topics and ask hydra questions</li>

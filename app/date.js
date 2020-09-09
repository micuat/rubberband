var html = require("choo/html");

module.exports = () => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateObjs = [
    new Date("October 4, 2020 17:00:00 UTC"),
    new Date("October 4, 2020 17:30:00 UTC"),
    new Date("October 4, 2020 18:30:00 UTC")
  ];
  
  const dates = [];
  for(let i = 0; i < dateObjs.length; i++) {
    dates.push();
  }

  return { timezone, dates };
};

// <li>${date0.toLocaleTimeString()} - ${date1.toLocaleTimeString()}: Introduction</li>
// <li>${date1.toLocaleTimeString()} - ${date2.toLocaleTimeString()}: Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
// <li>${date2.toLocaleTimeString()} - end: Breakout rooms to discuss specific topics and ask hydra questions</li>

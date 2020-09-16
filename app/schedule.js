var html = require("choo/html");

module.exports = () => {
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dateObjs = [
    new Date("October 4, 2020 17:00:00 UTC"),
    new Date("October 4, 2020 17:30:00 UTC"),
    new Date("October 4, 2020 18:00:00 UTC"),
    new Date("October 4, 2020 18:30:00 UTC")
  ];
  const dateDescs = [
    "Introduction",
    "Show and tell (see below)",
    "Short presentations. Presenters to be announced",
    "Pixeljam in Mozilla Hubs!",
  ];
  
  const dates = [];
  for(let i = 0; i < dateObjs.length; i++) {
    const start = dateObjs[i].toLocaleTimeString();
    const end = i == dateObjs.length - 1 ? "end" : dateObjs[i+1].toLocaleTimeString();
    dates.push(html`<li>${start} - ${end}: ${dateDescs[i]}</li>`);
  }

  return { timezone, dates, startDate: dateObjs[0] };
};

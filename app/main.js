// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `Choreographic Coding Online @ NODE`
  );
  
  return html`
<div>
<div class="main">
<div class="container">
    <h1> hydra meetup #2! </h1>
    <p>
      Thanks to all who joined the <a href="https://hydra-meetup-0.glitch.me/">hydra meetup last month.</a> The next meetup will be held online on <b>${schedule.startDateString}</b> in ${schedule.timezone}<br>
(4th October (Sunday) 17:00 UTC)
    </p>
     <h4>Schedule (time in ${schedule.timezone})</h4>
    <ul>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

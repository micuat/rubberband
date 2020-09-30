// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `Choreographic Coding Lab Online @ NODE`
  );
  
  return html`
<div>
<div class="main">
<div class="container">
    <h1> Choreographic Coding Lab Online in NODE! </h1>
    <p>
Choreographic Coding Lab Online is a series of events organized and curated by Naoto Hieda as an official unconference at <a href="https://20.nodeforum.org/">NODE20</a>.
    </p>
    <div class="thumbnail">
    <img src="https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F200829_Naoto_CCO_GreenHouseNAXOS_small.jpg">
    </div>
    <ul>
      <li><b>Schedule (time in ${schedule.timezone})</b></li>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

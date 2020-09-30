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
    <h1> Choreographic Coding Lab Online @ NODE! </h1>
    <p>
Choreographic Coding Lab Online is a series of events organized and curated by Naoto Hieda as an official unconference at <a href="https://20.nodeforum.org/">NODE20</a>.
    </p>

<div class="rowimg">
    <img src="https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2FScreenshot_2020-09-30%20Choreographic%20Coding%20Lab%20Online%20%E2%80%93%20NODE20.jpg?v=1601486588650">
      <a href="https://20.nodeforum.org/program-items/choreographic-coding-lab-online/" target="_blank">
        <div class="imgcaption"><p>View the program on "official" website</p></div>
      </a>
    </div>

    <ul>
      <li><b>Schedule (time in ${schedule.timezone})</b></li>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

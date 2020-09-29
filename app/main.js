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
yo
    </p>
     <h4>Schedule (time in ${schedule.timezone})</h4>
    <ul>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

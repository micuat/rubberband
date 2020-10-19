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
    <h1> Chikula_lab </h1>
    <p>
Chikula_lab is an artist duo of Nien Tzu Weng and Naoto Hieda.
    </p>

    <ul>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

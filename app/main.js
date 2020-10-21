// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `Chikula_lab`
  );
  
  return html`
<div>
<div class="main">
<div class="container">
    <h1> Chikula_lab </h1>
    <p>
Chikula_lab is an artist duo of <a href="https://www.nientzuweng.com/">Nien Tzu Weng</a> and <a href="https://naotohieda.com/">Naoto Hieda</a>.
    </p>

    <ul>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `easy portfolio`
  );
  
  return html`
<div>
<div class="main">
  <div class="container">
    <h1> easy portfolio </h1>
    <p>
      here comes the description!
    </p>

    <ul>
      ${schedule.dates}
    </ul>
  </div>
</div>
</div>`;
};

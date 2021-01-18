// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js");

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `Naoto Hieda`
  );
  
  let tag = "all";

  return html`
<div>
<div class="main">
  <div class="container">
    <h1> Works by Naoto Hieda </h1>
    <p>
      This is an attempt to make an archive of my works.
    </p>

    <div>
    Filter by <button onclick="filter">installations</button>
    </div>

    <ul>
      ${schedule(tag)}
    </ul>
  </div>
</div>
</div>`;
  
  function add () {
    tag = "installation"
    emit('render');
  }
};

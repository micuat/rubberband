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
  
  if(state.schedule == undefined) {
    state.schedule = schedule(tag);
  }
  
  const filters = [];
  const types = ["installation", "lecture"];
  for(const t of types) {
    filters.push(html`<div onclick="${filter}">installation</div>`);
  }

  return html`
<div>
<div class="main">
  <div class="container">
    <h1> Works by Naoto Hieda </h1>
    <p>
      This is an attempt to make an archive of my works.
    </p>

    <div>
    Filter by ${filters}
    </div>

    <ul>
      ${state.schedule}
    </ul>
  </div>
</div>
</div>`;
  
  function filter () {
    tag = "installation"
    state.schedule = schedule(tag);
    emit('render');
  }
};

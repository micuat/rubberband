// import choo's template helper
var html = require("choo/html");
var schedule = require("./schedule.js");
var sc = require("./contents.js");

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
  
  const counter = [];
  for(const s of sc) {
    const types = [...s.type, "all"];
    for(const t of types) {
      const c = counter.find(el=>el.t == t);
      if(c == undefined) {
        counter.push({t, count: 0});
      }
      else {
        c.count++;
      }
    }
  }
  
  const types = counter.sort((a, b) => a.count < b.count);
  
  const filters = [];
  // const types = ["all", "performance", "net art", "installation", "meetup", "workshop", "lecture", "conference"];
  for(const t of types) {
    filters.push(html`<p onclick="${filter}" class="${t.t}">${t.t}</p>`);
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
    Filter by <div class="type">${filters}</div>
    </div>
    <div class="clearer"></div>

    <ul>
      ${state.schedule}
    </ul>
  </div>
</div>
</div>`;
  
  function filter (e) {
    // console.log(e.target.innerText);
    tag = e.target.innerText;
    state.schedule = schedule(tag);
    emit('render');
  }
};

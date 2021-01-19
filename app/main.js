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
  if(state.filter == undefined) state.filter = {tag: "all"};

  for(const t of types) {
    const selected = state.filter.tag == undefined ? "" : (state.filter.tag == t.t ? "selected" : "");
    filters.push(html`<p onclick="${filterTag}" class="${t.t} ${selected}">${t.t}</p>`);
  }
  
  filters.push(html`<div class="clearer"></div>`);

  const filtersY = [];
  for(const t of ["all time", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014"]) {
    const selected = state.filter.year == undefined ? "" : (state.filter.year == t ? "selected" : "");
    filters.push(html`<p onclick="${filterYear}" class="${t} ${selected}">${t}</p>`);
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
      ${schedule(state.filter)}
    </ul>
  </div>
</div>
</div>`;
  
  function filterTag (e) {
    // console.log(e.target.innerText);
    const tag = e.target.innerText;
    state.filter.tag = tag;
    emit('render');
  }
  function filterYear (e) {
    // console.log(e.target.innerText);
    const year = e.target.innerText;
    state.filter.year = year;
    emit('render');
  }
};

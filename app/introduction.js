// import choo's template helper
var html = require("choo/html");

// import template
var profile = require("./profile.js");

// export module
module.exports = function(state, emit) {
  if (state.profiles.length == 0) {
    return html`
      <div class="container">
        loading .... :)
      </div>
    `;
  }
  console.log(state.params.profile);
  var page = 1;
  if (state.params.profile !== undefined) {
    if (state.params.profile == "random") {
      var N = state.profiles.length;
      page = (Math.floor(Math.random() * N) % N) + 1;
      emit("replaceState", `/${page}`);
    } else {
      page = parseInt(state.params.profile);
    }
  }

  emit(
    "DOMTitleChange",
    `hydra meetup 2: ${state.profiles[page - 1]["Your name"]}`
  );

  return html`
    <div class="introduction-container">
      <div class="introduction-nav"> 
         <div>
          <a href="/">back to top</a>
          <a href="./#introductions/${prev(page)}">＜</a>
          <a href="./#introductions/${next(page)}">＞</a>
          <span>${page} / ${state.profiles.length}</span>
          <a href="./#introductions/${randomize(page)}">random!</a>
          
        </div>
        </div>
      ${profile(state.profiles[page - 1])}
    </div>
  `;
  // <button onclick=${prev}>＜</button><button onclick=${next}>＞</button>
  function prev(page) {
    return ((page - 2 + state.profiles.length) % state.profiles.length) + 1;
  }
  function next(page) {
    return (page = (page % state.profiles.length) + 1);
  }
  function randomize(page) {
    var index = 1;
    if(state.profiles.length > 1) {
      do {
        index = Math.floor(Math.random() * state.profiles.length) + 1;
      } while(index == page)
    }
    return index;
  }
};

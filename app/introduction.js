// import choo's template helper
var html = require("choo/html");

// import template
var profile = require("./profile.js");

// export module
module.exports = function(state, emit) {
  if (state.profiles.length == 0) {
    return html`
      <div class="container">
        no profiles yet!!!
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
    `hydra meetup 1: ${state.profiles[page - 1]["Your name"]}`
  );

  return html`
    <div class="container">
      <div style="padding:1em;background-color:#fff"> <div style="display:inline-block"> hydra meetup #1! </div>
         <div style="display:inline-block; float:right">  
          <a href="./${prev(page)}">＜</a>
          <a href="./${next(page)}">＞</a>
          <span>${page} / ${state.profiles.length}</span>
          <a href="./${randomize(page)}">random!</a>
          
        </div>
        </div>
      ${profile(state.profiles[page - 1])}
      <div>
        
       
        <!---<div><a href="/">back to top</a></div>--->
      </div>
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

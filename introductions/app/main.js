// import choo's template helper
var html = require("choo/html");

// import template
var profile = require("./profile.js");

// export module
module.exports = function(state, emit) {
  console.log(state.params.profile);
  var page = parseInt(state.params.profile);

  return html`
    <div class="container">
      ${profile(state.profiles[page])}
      <div>
        <a href="./${prev(page)}">＜</a> <a href="./${next(page)}">＞</a>
      </div>
      <div>${page + 1} / ${state.profiles.length}</div>
      <div><a href="https://hydra-meetup-0.glitch.me/">back to top</a></div>
    </div>
  `;
  // <button onclick=${prev}>＜</button><button onclick=${next}>＞</button>
  function prev(page) {
    return (page - 1 + state.profiles.length) % state.profiles.length;
  }
  function next(page) {
    page = (page + 1) % state.profiles.length;
  }
};

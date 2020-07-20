// import choo's template helper
var html = require('choo/html')

// import template
var profile = require('./profile.js')

// export module
module.exports = function (state, emit) {
  return html`
<div class="container">
  ${profile(state.profiles[state.page])}
  <div>
    <button onclick=${prev}>＜</button><button onclick=${next}>＞</button>
  </div>
  <div>${state.page + 1} / ${state.profiles.length}</div>
  <div><a href="https://hydra-meetup-0.glitch.me/">back to top</a></div>
</div>
`
  function prev () {
    emit('prev')
  }
  function next () {
    emit('next')
  }
}
// import choo's template helper
var html = require('choo/html')

// import template
var profile = require('./profile.js')

// export module
module.exports = function (state, emit) {
  return html`
<div class="container">
  ${profile(state.profiles[state.page])}
  <div>${state.page} / ${state.profiles.length}</div>
  <button onclick=${prev}>＜</button><button onclick=${next}>＞</button>
</div>
`
  function prev () {
    emit('prev')
  }
  function next () {
    emit('next')
  }
}
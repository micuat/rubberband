// import choo's template helper
var html = require('choo/html')

// import template
var profile = require('./profile.js')

// export module
module.exports = function (state, emit) {
  var type = state.animals.type
  var x = state.animals.x
  var y = state.animals.y
  return html`
<div class="container">
  <iframe></iframe>
  <h2>name</h2>
  <div>email</div>
  <div>twitter</div>
  <div>instagram ${state.number}</div>
  <div>comments ${state.animals.map(profile)}</div>
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
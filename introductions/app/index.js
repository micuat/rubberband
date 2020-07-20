// import choo
var choo = require('choo')
var html = require('choo/html')

var profile = require('./profile.js')

// initialize choo
var app = choo()

app.use(function (state, emitter) {
  // initialize state
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ]

  // add animal
  emitter.on('addAnimal', function () {
    var obj = {type: 'lion', x: 100, y: 200}
    state.animals.push(obj)

    emitter.emit('render')
  })
})

// create a template
var main = function (state, emit) {
  var type = state.animals.type
  var x = state.animals.x
  var y = state.animals.y
  return html`
<div class="container" onclick=${add}>
  <iframe></iframe>
  <h2>name</h2>
  <div>email</div>
  <div>twitter</div>
  <div>instagram</div>
  <div>comments ${state.animals.map(profile)}</div>
  <button onclick=${back}>＜</button><button onclick=${next}>＞</button>
</div>
`
  function back () {
    emit('addAnimal')
  }
  function back () {
    emit('addAnimal')
  }
  // return html`<div>choo animals</div>`
}

app.route('/introductions', main)

// start app
app.mount('div')
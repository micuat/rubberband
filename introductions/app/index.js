// import choo
var choo = require('choo')
var html = require('choo/html')

// initialize choo
var app = choo()

// create a template
var main = function () {
  return html`<div>choo animals</div>`
}

app.route('/introductions', main)

// start app
app.mount('div')
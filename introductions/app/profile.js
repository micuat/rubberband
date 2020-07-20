// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (animal) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  // create html template
  return html`
    ${type} ${x}px; top: ${y}px;">
  `
}
// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (profile) {
  var type = profile.type
  var x = profile.x
  var y = profile.y

  // create html template
  return html`
    <div>${type} ${x} ${y}</div>
  `
}
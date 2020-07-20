// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (profile) {
  var {name, twitter, instagram } = profile;

  // create html template
  return html`
<iframe></iframe>
  <h2>${name}</h2>
  <div>email</div>
  <div>${twitter}</div>
  <div>${instagram} ${state.page}</div>
  <div>comments </div>

    <div>  </div>
  `
}
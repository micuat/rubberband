// import choo's template helper
var html = require('choo/html')

// export module
module.exports = function (profile) {
  // var {name, twitter, instagram } = profile;
  var name = profile["Your name"];
  var email = profile["Email address"];
  var twitter = profile["Twitter account"];
  var instagram = profile["Instagram account"];
  var url = profile["URL of what you want to share"];
  var availability = profile["can you make it to the meetup on August 1?"];
  var comments = profile["A few words about you"];

  // create html template
  return html`
<iframe src="${url}" width="800" height="600"></iframe>
<h2>${name}</h2>
<div>email: ${email}</div>
<div>tw: ${twitter}</div>
<div>ig: ${instagram}</div>
<div>can you make it to the meetup? ${availability}</div>
<div>${comments}</div>
`
}
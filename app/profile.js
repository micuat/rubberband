// import choo's template helper
var html = require("choo/html");

function showEmbedIfNotEmpty(link) {
  if (link !== undefined && link.length > 0)
    return html`
      <iframe src="${link}" width="800" height="600"></iframe>
    `;
  else return html`
      <div style="width:800px; height:600px;border: 2px solid white;">no link provided</div>
    `;
}

function showEmailIfNotEmpty(link) {
  if (link !== undefined && link.length > 0)
    return html`
      <div>email: <a href="mailto:${link}">${link}</a></div>
    `;
  else return "";
}

function showLinkIfNotEmpty(text, prefix, link) {
  if (link !== undefined && link.length > 0)
    return html`
      <div>${text}: <a href="${prefix}${link}" target="_blank">${link}</div>
    `;
  else return "";
}

function showQIfNotEmpty(text, yn) {
  if (yn !== undefined && yn.length > 0)
    return html`
      <div>${text} ${yn}</div>
    `;
  else return "";
}

// export module
module.exports = function(profile) {
  // var {name, twitter, instagram } = profile;
  var name = profile["Your name"];
  var email = profile["Email address"];
  var twitter = profile["Twitter account"];
  var instagram = profile["Instagram account"];
  var url = profile["URL of what you want to share"];
  var availability = profile["can you make it to the meetup on August 1?"];
  var breakout = profile["Which breakout room do you want to join?"];
  var comments = profile["A few words about you"];

  // create html template
  return html`
    ${showEmbedIfNotEmpty(url)}
    <h2>${name}</h2>
    ${showEmailIfNotEmpty(email)}
    ${showLinkIfNotEmpty("tw", "https://twitter.com/", twitter)}
    ${showLinkIfNotEmpty("ig", "https://instagram.com/", instagram)}
    ${showQIfNotEmpty("can you make it to the meetup?", availability)}
    ${showQIfNotEmpty("Which breakout room do you want to join?", breakout)}
    <div>${comments}</div>
  `;
};

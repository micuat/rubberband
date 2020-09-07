// import choo's template helper
var html = require("choo/html");

function showEmbedIfNotEmpty(link) {
  if (link !== undefined && link.length > 0)
    return html`
      <iframe src="${link}" width="800" height="600" frameBorder="0" allow="camera *;microphone *" style="width:100%;height:75%"></iframe>
    `;
  // else return html`
  //     <div style="width:800px; height:600px;border: 2px solid white;" >no link provided</div>
  //   `;
  else return ''
}

function showEmailIfNotEmpty(link) {
  if (link !== undefined && link.length > 0)
    return html`
      <span style="display:inline-block"><a href="mailto:${link}">${link}</a></span>
    `;
  else return "";
}

function showLinkIfNotEmpty(text, prefix, link) {
  if (link !== undefined && link.length > 0)
    return html`
      <span>${text}: <a href="${prefix}${link}" target="_blank">${link}</span>
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
  var twitter = profile["Twitter account"].replace(/@/, '').replace(/.*\//, '');
  var instagram = profile["Instagram account"].replace(/@/, '').replace(/.*\//, '');
  var url = profile["URL of what you want to share"];
  var comments = profile["A few words about you"];

  // create html template
  return html`
 
    
    <div class="profile-info">
      <h2>${name}</h2>
        <div style="display:inline-block">
          ${showEmailIfNotEmpty(email)} |
          ${showLinkIfNotEmpty("tw", "https://twitter.com/", twitter)} |
          ${showLinkIfNotEmpty("ig", "https://instagram.com/", instagram)}
          
        </div>
      <div>${comments}</div>
    </div>
    ${url ? html`<a href="${url}" target="_blank">${url}</a>` : ''}
    ${showEmbedIfNotEmpty(url)}
  `;
};

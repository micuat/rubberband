// import choo's template helper
var html = require("choo/html");
var Hydra = require('./hydra-canvas.js')
var schedule = require("./schedule.js")();

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `hydra meetup 2: info`
  );
  
  return html`
<div>
${state.cache(Hydra, 'my-hydra').render()}
<div class="main ${state.isMobile ? "" : "hydra-mode"}">
<div class="container">

    <h1>
      hydra meetup #2!
    </h1>
<p>Thank you for joining the 1st hydra meetup and we are excited to announce the second hydra meetup! For the meetup, we are using Zoom, and here is the important info:</p>
<ul>
<li>date/time: October 4th,17:00 UTC</li>
<li>check the starting time in your timezone <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=hydra+meetup+%232&iso=20201004T19&p1=37&ah=2" target="_blank">here</a></li>
<li>zoom link: <a href="https://us02web.zoom.us/j/82123778943?pwd=TzlvZHlLRlAwdWV4ZkRLTWFiN1loUT09" target="_blank">https://us02web.zoom.us/j/82123778943?pwd=TzlvZHlLRlAwdWV4ZkRLTWFiN1loUT09</a></li>
</ul>
<p>Again for the 2nd meetup, we want to make sure that everyone has a chance to share and to see what other people are working on. With that in mind we are organizing the meetup into three sections:</p>
<p>
time in ${schedule.timezone}
</p>
<ul>
${schedule.dates}
</ul>

<h2 class="info" id="introductions">Introductions</h2>
<p>In order to keep everything quick, we created this page to share links and images ahead of time for the meetup. Please add whatever you would like to share by editing this spreadsheet (don’t edit the header, and be respectful to each other!)</p>
<p><a href="https://docs.google.com/spreadsheets/d/1sAqoc9ZYAwpxjTb4xX5UubTcbVHN_wLv-hn3dZofnx8/edit#gid=0" target="_blank">here</a></p>
<p>it will be automatically applied to this meetup page:</p>
<p><a href="https://hydra-meetup-2.glitch.me/">https://hydra-meetup-2.glitch.me/</a></p>

<h2 class="info" id="communication">Communication</h2>
<p>We use hydra-meetup channel on toplap chat for the communication before/during/after the event! Please sign up if you haven’t done yet:</p>
<p><a href="https://chat.toplap.org/channel/hydra-meetup" target="_blank">https://chat.toplap.org/channel/hydra-meetup</a></p>

<h2 class="info" id="code-of-conduct">Code of Conduct</h2>
<p>For everyone to enjoy the meetup, we follow Berlin Code of Conduct. Please take a look before the event (it has translations in several language, for example, in Spanish) </p>
<p><a href="https://berlincodeofconduct.org/" target="_blank">https://berlincodeofconduct.org/</a></p>
<p>We are hoping to make this a monthly meetup and continuously evolve. If you have any questions, let us know on toplap chat or the organizers’ social media.</p>
<p>Flor de Fuego, Naoto Hieda, Ritchse &amp; Olivia Jack</p>
<a href="/">go to main page</a>
  </div>
</div>
</div>`;
};

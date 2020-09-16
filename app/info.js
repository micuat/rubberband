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
<p>Thank you for joining the 1st hydra meetup, and we are excited to announce the second hydra meetup! Here is the important info:</p>
<ul>
<li>date/time: <b>${schedule.startDateString}</b> in ${schedule.timezone}</li>
<!-- <li>check the starting time in your timezone <a href="https://www.timeanddate.com/worldclock/fixedtime.html?msg=hydra+meetup+%232&iso=20201004T19&p1=37&ah=2" target="_blank">here</a></li> -->
<li>zoom link: <a href="https://us02web.zoom.us/j/82123778943?pwd=TzlvZHlLRlAwdWV4ZkRLTWFiN1loUT09" target="_blank">https://us02web.zoom.us/j/82123778943?pwd=TzlvZHlLRlAwdWV4ZkRLTWFiN1loUT09</a></li>
</ul>
<p>
time in ${schedule.timezone}:
</p>
<ul>
${schedule.dates}
</ul>

<h2 class="info" id="introductions">Show and tell + skillshare</h2>

<p>Everyone has 1-2 minutes (to be decided, depending on the number of attendees) to present! In order to keep everything quick, we created <a href="https://docs.google.com/spreadsheets/d/1sAqoc9ZYAwpxjTb4xX5UubTcbVHN_wLv-hn3dZofnx8/edit#gid=0" target="_blank">this spreadsheet</a> to share links and videos ahead of time for the meetup. Please add whatever you would like to share by editing this spreadsheet (be respectful to each other!) <br>
it will be automatically applied to <a href="https://hydra-meetup-2.glitch.me/">this meetup page</a>.</p>

<p>Some suggestions for things to share in this space:</p>
<ul>
<li>introduce yourself (if you haven’t already)</li>
<li>share a current or past project you are working on, or an idea you have </li>
<li>skillshare: show a tip or trick for working with hydra, or for integrating it in other projects </li>
</ul>

<p>The most flexible way to share something is to add it to a basic html page, such as on <a href="https://glitch.com/" target="_blank">glitch.com</a>, and share the link in the spreadsheet. <a href="https://basic-website.glitch.me/" target="_blank">Here is a tutorial on glitch.</a></p>

<p>Here are some examples that we have made which you can copy and remix:</p>
<ul>
<li><a href="https://glitch.com/~meetup-2-embed" target="_blank">https://glitch.com/~meetup-2-embed</a> </li>
<li><a href="https://glitch.com/~hydra-test-flor" target="_blank">https://glitch.com/~hydra-test-flor</a> </li>
<li><a href="https://glitch.com/~hydra-meetup-2-naoto" target="_blank">https://glitch.com/~hydra-meetup-2-naoto</a></li>
</ul>

<p>Another option is to add a link to a video hosted on youtube or internet archive. <br>
Feel free to ask in the forum if you have any questions about editing the page :)</p>

<h2 class="info" id="code-of-conduct">Code of Conduct</h2>

<p>For everyone to enjoy the meetup, we follow Berlin Code of Conduct. Please take a look beforehand and be nice to each other! (it has translations in several language, for example, in Spanish)</p>

<p><a href="https://berlincodeofconduct.org/" target="_blank">https://berlincodeofconduct.org/</a></p>

<h2 class="info" id="communication">Communication</h2>
<p>We use hydra-meetup channel on toplap chat for the communication before/during/after the event! Please sign up if you haven't done yet:</p>
<p><a href="https://chat.toplap.org/channel/hydra-meetup" target="_blank">https://chat.toplap.org/channel/hydra-meetup</a></p>

<p>We are keeping this a regular meetup and continuously evolve. If you have any questions or be part of the organizers, let us know on toplap chat or the organizers’ social media!</p>
<p>Flor de Fuego, Naoto Hieda, Ritchse & Olivia Jack</p>
<a href="/">go to main page</a>
  </div>
</div>
</div>`;
};

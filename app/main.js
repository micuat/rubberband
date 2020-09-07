// import choo's template helper
var html = require("choo/html");

// export module
module.exports = function(state, emit) {


  emit(
    "DOMTitleChange",
    `hydra meetup 2`
  );
  
  return html`
<div class="container">
    <h1> hydra meetup #2! </h1>
    <p>
       The first hydra meetup will be held online on <b>4th October (Sunday) 17:00 UTC (19:00 CEST / 13:00 EDT)</b>
    </p>
     <h4>Schedule</h4>
    <ul>
      <li>17:00 - 17:30: Introduction</li>
      <li>17:30 - 18:30: Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
      <li>18:30 - end: Breakout rooms to discuss specific topics and ask hydra questions</li>
    </ul>
    <p>
      Please join the <a href="https://chat.toplap.org/channel/hydra-meetup" target="_blank">hydra-meetup channel</a> on toplap for up-to-date info, as well as communication before/during/after the event. 
    </p>

    <p>
      Make your own webpage! Templates by
      <a href="https://glitch.com/~meetup-2-embed" target="_blank">Olivia</a> | 
      <!-- <a href="https://glitch.com/~crocus-puffy-caption" target="_blank">Flor</a> | -->
      <a href="https://glitch.com/~hydra-meetup-2-naoto" target="_blank">Naoto</a>
    </p>


    <div><a href="#info">more info here</a></div>
    <div>
      <h4>Participants</h4>
      <p class="participants">${state.profiles.map((profile, i) => html`
        <span class="participant ${profile["organizer"] === "y" ? "organizer" : "normal"}"><a href="/#introductions/${i+1}">${profile["Your name"]}</a></span>
      `)}</p>
    </div>
</div>`;
};

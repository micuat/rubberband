// import choo's template helper
var html = require("choo/html");

// export module
module.exports = function(state, emit) {
  if (state.profiles.length == 0) {
    return html`
      <div class="container">
        no profiles yet!!!
      </div>
    `;
  }
  
  var participants = [];
  for(var i = 0; i < state.profiles.length; i++) {
    var profile = state.profiles[i];
    var badge = profile["organizer"] === "y" ? "organizer" : "normal";
    participants.push(html`<span class="participant ${badge}"><a href="/introductions/${i+1}" style="background-color:hsl(${Math.floor(360* i/state.profiles.length)}, 100%, 60%)">${profile["Your name"]}</a></span> `);
  }

  emit(
    "DOMTitleChange",
    `hydra meetup 1`
  );
  
  return html`
<div class="container">
    <h1> hydra meetup #1! </h1>
    <p>
       The first hydra meetup will be held online on <b>1st August (Saturday) 18:00 UTC (20:00 CEST / 14:00 EDT)</b>
    </p>
     <h4>Schedule</h4>
    <ul>
      <li>18:00 - 18:30: Introduction</li>
      <li>18:30 - 19:30: Show and tell. Say hi, and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
      <li>19:30 - end: Breakout rooms to discuss specific topics and ask hydra questions</li>
    </ul>
    <p>
      Please join the <a href="https://chat.toplap.org/channel/hydra-meetup">hydra-meetup channel</a> on toplap for up-to-date info, as well as communication before/during/after the event. 
    </p>
    <!---<div><a href="/info">more info here</a></div>--->
    <div>
      <h4>Participants</h4>
      <p class="participants">${participants}</p>
    </div>
</div>`;
};

    // <div>
    //   directory:
    // <ul>
    //   <li><a href="/timetable"> timetable</a></li>
    //   <li><a href="/links"> useful links</a></li>
    // </ul>
    // </div>

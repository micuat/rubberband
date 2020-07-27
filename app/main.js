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
  return html`
<div class="container">
    <p>
       1st August (Saturday) 18:00 UTC (20:00 CEST / 14:00 EDT)
    </p>
    <ul>
      <li>18:00 - 18:30: Introduction from Olivia + words from organizers</li>
      <li>18:30 - 19:30: Show and tell. Say hi and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone! </li>
      <li>19:30 - end: Breakout rooms to discuss specific topics and ask hydra questions</li>
    </ul>
    <div>
      Participants: 
    <ul>
      <li><a href="/introductions"> introductions</a></li>
      <li><a href="/timetable"> timetable</a></li>
      <li><a href="/links"> useful links</a></li>
    </ul>
    </div>
    <ul>
      <li><a href="/introductions"> introductions</a></li>
      <li><a href="/timetable"> timetable</a></li>
      <li><a href="/links"> useful links</a></li>
    </ul>
</div>`;
};

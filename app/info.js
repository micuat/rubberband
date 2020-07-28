// import choo's template helper
var html = require("choo/html");

// export module
module.exports = function(state, emit) {
  emit(
    "DOMTitleChange",
    `hydra meetup 1: info`
  );
  
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
Thank you for signing up to the first hydra meetup! This time we are using Zoom, and here is the important info:
</div>
<div><br>
<b>Date/Time: <em>August 1st, 18:00 UTC</em> </b> <br>
Check the starting time in your timezone here: <br>
https://www.timeanddate.com/worldclock/fixedtime.html?msg=hydra+meetup+%231&iso=20200801T20&p1=37&ah=2
Zoom link: https://us02web.zoom.us/j/87997962006
</div>
<div>
We received so many responses and are so excited about all of the ideas, projects, questions. For the 1st meetup, we want to make sure that everyone who wants to has a chance to share and to see what other people are working on. With that in mind we are organizing the meetup into three sections:
</div>
<div>
<em>(following times are in UTC)</em>
18:00 - 18:30: Introduction from Olivia + words from organizers
18:30 - 19:30: Show and tell! Say hi and share one thing you are interested in or working on. Please keep it to 2 minutes max so we have time to hear from everyone!
19:30 - 20:00: Breakout rooms to discuss specific topics and ask hydra questions
</div>
<div>
<b>Introductions:</b>
In order to keep everything quick, we created this page to share links and images ahead of time for the meetup. Please add whatever you would like to share by editing this spreadsheet (don’t edit the header, and be respectful to each other!)
https://docs.google.com/spreadsheets/d/140ghrVXD_7DrWGC71i9ych6h-Rg7p9ZGn9eW1V6-Rso/edit?usp=sharing
</div>
<div>
it will be automatically applied to the meetup page:
https://hydra-meetup-0.glitch.me/
</div>
<div>
<b>Communication:</b>
We use hydra-meetup channel on toplap chat for the communication before/during/after the event! Please sign up if you haven’t done yet:
https://chat.toplap.org/channel/hydra-meetup
</div>
<div>
<b>Code of Conduct:</b>
For everyone to enjoy the meetup, we follow Berlin Code of Conduct. Please take a look before the event (it has translations in several language, for example, in Spanish) https://berlincodeofconduct.org/
</div>
<div>
We are hoping to make this a monthly meetup and continuously evolve. If you have any questions, let us know on toplap chat or the organizers’ social media.
</div>
<div>
Flor de Fuego, Naoto Hieda, Ritchse & Olivia Jack
    </div>
    <div><a href="/">back to top</a></div>
</div>`;
};

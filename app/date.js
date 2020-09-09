var html = require("choo/html");

module.exports = (state, emit) => {
  console.log('state is', state)
  
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const dates = [new Date('October 4, 2020 17:00:00 UTC'),
    new Date('October 4, 2020 17:30:00 UTC'),
    new Date('October 4, 2020 18:30:00 UTC')];

  return {timezone, dates}
}
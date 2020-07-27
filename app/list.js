var html = require("choo/html");

module.exports = (state, emit) => {
  console.log('state is', state)
  return html`<div>list will go here</div>`
}
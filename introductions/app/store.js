const gsheets = require('./google-sheets/js')()

module.exports = (state, emitter) => {
  state.links = []
}
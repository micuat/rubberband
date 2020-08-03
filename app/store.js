const gsheets = require("./google-sheets.js");

// module.exports = (state, emitter) => {
//   state.links = []
// }
// module.exports = gsheets.then((data) => {
//   return function(state, emitter) {
//     state.page = 0;

//     emitter.on("prev", function() {
//       state.page =
//         (state.page - 1 + state.profiles.length) % state.profiles.length;
//       emitter.emit("render");
//     });
//     emitter.on("next", function() {
//       state.page = (state.page + 1) % state.profiles.length;
//       emitter.emit("render");
//     });

//     // initialize state
//     state.profiles = data;
//     // console.log(data);
//   };
// });

module.exports = (state, emitter) => {
    state.page = 0;

    emitter.on("prev", function() {
      state.page =
        (state.page - 1 + state.profiles.length) % state.profiles.length;
      emitter.emit("render");
    });
    emitter.on("next", function() {
      state.page = (state.page + 1) % state.profiles.length;
      emitter.emit("render");
    });
  
    state.profiles = []

    // initialize state
    gsheets.then((data) => { 
      state.profiles = data; 
      emitter.emit("render")
    })
    // console.log(data);
  };

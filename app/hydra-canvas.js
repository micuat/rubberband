var html = require("choo/html");
var Component = require("choo/component");
const Hydra = require("hydra-synth");

module.exports = class extends Component {
  constructor(id, state, emit) {
    super(id);
    this.local = state.components[id] = {};
    this.state = state;
  }

  load(element) {
    console.log("loading", element, this.canvas);
    // create a new hydra-synth instance
    const hydraCanvas = this.canvas;
    hydraCanvas.width = 600;
    hydraCanvas.height = 600;

    // create canvas for drawing text
    const canvas = document.createElement("canvas");
    canvas.width = hydraCanvas.width;
    canvas.height = hydraCanvas.height;
    canvas.style = "max-width: 100%;"

    if (this.state.hydra == undefined) {
      var hydra = new Hydra({
        canvas: this.canvas,
        detectAudio: false
        //width: 400,
        //height: 400
      });
      this.state.hydra = hydra;
    } else {
      hydra = this.state.hydra;
    }
    // osc().out()


  }

  update() {
    return false;
  }

  createElement(center) {
    if (this.state.canvas == undefined) {
      this.canvas = html`
        <canvas></canvas>
      `;
      this.state.canvas = this.canvas;
    } else {
      this.canvas = this.state.canvas;
    }
    return html`
      <div style="max-width: 100%; " id="hydra-holder">
        ${this.canvas}
      </div>
    `;
  }
};

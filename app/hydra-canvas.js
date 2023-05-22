import html from "choo/html";
import Component from "choo/component";
import Hydra from "hydra-synth";

module.exports = class Map extends Component {
  constructor(id, state, emit) {
    super(id);
    this.local = state.components[id] = {};
    this.state = state;
  }

  load(element) {
    console.log("loading hydra", element, this.canvas);
    const isMobile = this.state.isMobile;
    if (isMobile) {
      console.log("is mobile");
      document.getElementById("hydra-holder").style.visibility = "hidden";
    }
    // create a new hydra-synth instance
    if (isMobile == false) {
      const hydraCanvas = this.canvas;
      hydraCanvas.width = window.innerWidth;
      hydraCanvas.height = window.innerHeight;

      if (this.state.hydra == undefined) {
        this.state.hydra = new Hydra({
          canvas: this.canvas,
          detectAudio: false,
          width: hydraCanvas.width,
          height: hydraCanvas.height
        });
        // this.state.hydra = hydra;
      } else {
        hydra = this.state.hydra;
      }

      // speed = 0.0001
      // hydra code
      osc().out()
    }
  }

  update() {
    return false;
  }

  createElement(center) {
    if (this.state.canvas == undefined) {
      this.canvas = html`
        <canvas class="hydra-canvas"></canvas>
      `;
      this.state.canvas = this.canvas;
    } else {
      this.canvas = this.state.canvas;
    }
    return html`
      <div id="hydra-holder">
        ${this.canvas}
      </div>
    `;
  }
};

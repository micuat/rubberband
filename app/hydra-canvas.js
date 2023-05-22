import html from "choo/html";
import Component from "choo/component";
import Hydra from "hydra-synth";
import { css } from "@emotion/css";

const mainCss = css`
position: absolute;
top: 0px;
left: 0px;
`;

export default class Map extends Component {
  constructor(id, state, emit) {
    super(id);
    this.local = state.components[id] = {};
    this.state = state;
  }

  load(element) {
    console.log("loading hydra", element, this.canvas);

    // create a new hydra-synth instance
    const hydraCanvas = element.querySelector("canvas");
    hydraCanvas.width = 400//window.innerWidth;
    hydraCanvas.height = 400//window.innerHeight;

    if (this.state.hydra == undefined) {
      this.state.hydra = new Hydra({
        canvas: this.canvas,
        detectAudio: false,
        width: hydraCanvas.width,
        height: hydraCanvas.height
      });
    } else {
      // hydra = this.state.hydra;
    }
  }

  update() {
    return false;
  }

  createElement(center) {
    return html`
      <div class="hydra-holder">
        <canvas class="hydra-canvas ${ mainCss }"></canvas>
      </div>
    `;
  }
};

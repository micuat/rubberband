import html from "choo/html";
import Component from "choo/component";

import p5 from "p5";

export default class extends Component {
  constructor(id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.state = state
    this.emit = emit
  }

  load(element) {
    const p = this.sketch();
    this.state.p5 = p;
    p.chooState = this.state;
    // BAD
    const polling = () => {
      if (p.canvas === undefined) {
        console.log("canvas not found, retrying");
        setInterval(polling, 1000);
      }
      else {
        element.appendChild(p.canvas);
        // p.resizeCanvas(400, 400);
        p.parentElement = element;
        // p.canvas.style = "";
      }
    }
    polling();
  }
  
  sketch() {
    const s = ( p ) => {
      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
      };

      p.draw = () => {
        p.clear();
        p.fill("crimson");
        p.text("test", 50,50);
      };
    };

    return new p5(s);
  }

  update(center) {
    return false
  }

  createElement({ width = window.innerWidth, height = window.innerHeight } = {}) {

    return html`
      <div class="relative z-0 w-screen h-screen">
      </div>
    `
  }
}
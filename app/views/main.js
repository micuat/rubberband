// import choo's template helper
import html from "choo/html";
import { css } from "@emotion/css";

import HydraCanvas from "../components/hydra-canvas.js";

const mainCss = css`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  div.msg {
    color: pink;
    background-color: white;
    font-size: 1.3em;
    border: solid black;
    text-align: center;
    padding: 5px;
    &:hover {
      background-color: lightgrey;
      color: black;
    }
  }
  .hydra-holder {
    z-index: -1;
  }
`;

// export module
export default function(state, emit) {
  let msg = state.hover ? "hello beautiful people" : "hover over me"
  return html`
    <div class=${ mainCss }>
      <div class="msg" onmouseover=${ hoverin } onmouseout=${ hoverout }>
        ${ msg }
      </div>
      ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
    </div>
  `;
  
  function hoverin(ev) {
    src(o0).modulate(
      osc(6,0,1.5).brightness(-.5).modulate(noise(3).sub(gradient()),1),0.01)
      .out()
    state.hover = true;
    emit("render");
  }
  function hoverout(ev) {
    osc(30,0.1,1.5).out()
    state.hover = false;
    emit("render");
  }
};

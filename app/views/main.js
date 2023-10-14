// import choo's template helper
import html from "choo/html";
import { css } from "@emotion/css";

import HydraCanvas from "../components/hydra-canvas.js";

const mainCss = css`
  width: 100%;
  height: 100vh;
  .hydra-holder {
    z-index: -1;
  }
`;

// export module
export default function(state, emit) {
  return html`
    <div class=${ mainCss }>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
    </div>
  `;
};

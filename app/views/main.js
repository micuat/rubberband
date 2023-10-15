// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 w-full h-full z-10 flex items-center justify-center">
        <div class="text-4xl font-bold bg-white/80">
          ${ state.prompt }
        </div>
      </div>
      ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
    </div>
  `;
};

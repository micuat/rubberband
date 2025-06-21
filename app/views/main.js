// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="w-full flex flex-col items-center justify-center">
        <div class="text-4xl font-bold bg-white/80">
          ${ state.currentAsset.name }
        </div>
        ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
      </div>
      <button class="border-2 border-black" onclick=${ next }>next</button>
    </div>
  `;

  function next() {
    emit("next asset");
  }
};

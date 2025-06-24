// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import DrawerElement from "../components/drawer.js";

// export module
export default function(state, emit) {
  
  return html`
    <div class="absolute left-0 top-0 w-screen h-screen">
      <div class="absolute left-0 top-0 z-[-2] w-screen h-screen">
        ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
      </div>
      <div class="absolute left-0 top-0 z-[-1] w-screen h-screen">
        ${ state.cache(DrawerElement, 'my-draw').render(state, emit) }
      </div>
      <div class="w-full flex flex-col items-center text-center justify-end h-screen">
        <div class="text-4xl font-bold bg-white/80 mb-24 uppercase">
          ${ state.currentAsset.name }
        </div>
      </div>
    </div>
  `;
//   <div class="relative w-[400px] z-0">
//   ${ state.cache(HydraCanvas, 'my-hydra').render(state, emit) }
// </div>
// <div class="relative w-[400px] z-0">
//   ${ state.cache(DrawerElement, 'my-draw').render(state, emit) }
// </div>

{/* <button class="border-2 border-black" onclick=${ next }>next</button> */}

  function next() {
    emit("next asset");
  }
};

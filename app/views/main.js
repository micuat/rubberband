// import choo's template helper
import html from "choo/html";

import HydraCanvas from "../components/hydra-canvas.js";
import DrawerElement from "../components/drawer.js";
import TextTweenElement from "../components/text-tween-element.js";

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
      <button class="absolute left-2 top-2 text-xl" onclick=${ question }>ℹ️</button>
      <div class="w-full flex flex-col items-center text-center justify-end h-screen">
        <div class="text-4xl font-bold bg-white/80 mb-24 uppercase">
          ${ state.cache(TextTweenElement, 'my-text').render(state, emit) }
        </div>
      </div>
      <div class="absolute left-0 top-0 z-10 border-2 border-black bg-white m-2 p-2 ${ state.showModal ? "" : "hidden" }">
        <button class="text-xl" onclick=${ hideModal }>❎</button>
        <div class="font-bold">Rubber Band Tensions</div>
        <div>Drag the blobby body to explore tensions :)</div>
        <div class="font-bold">Content by:</div>
        <div><a href="https://annabrynskov.com/" target="_blank">Anna Brynskov</a></div>
        <div><a href="https://joanachicau.com/" target="_blank">Joana Chicau</a></div>
        <div>Sophie Grimme</div>
        <div><a href="https://naotohieda.com" target="_blank">Naoto Hieda</a></div>
        <div class="font-bold">Web version by:</div>
        <div><a href="https://naotohieda.com" target="_blank">Naoto Hieda</a></div>
        <div class="font-bold">Made at:</div>
        <div><a href="https://bodypoliticschi.wordpress.com/" target="_blank">Body Politics Workshop 2025</a></div>
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
  function question(e) {
    e.preventDefault();
    state.showModal = !state.showModal;
    emit("render");
  }
  function hideModal(e) {
    if (state.showModal) {
      state.showModal = false;
      emit("render");
    }
  }
};

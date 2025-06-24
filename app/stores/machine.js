import TextTweenElement from "../components/text-tween-element.js";

export default function(state, emitter) {
  state.prompt = "hola"
  state.centroid = {x: 0, y: 0};
  state.showModal = true;
  
  state.assets = [
    {
      color: "/0_IMG_5996.JPG",
      edge: "/e0_IMG_5996.JPG",
      name: "pool tension",
    },
    {
      color: "/1_IMG_6022.JPG",
      edge: "/e1_IMG_6022.JPG",
      name: "quadruple tension",
    },
    {
      color: "/2_IMG_5991.JPG",
      edge: "/e2_IMG_5991.JPG",
      name: "disturbed tension",
    },
    {
      color: "/3_IMG_6010.JPG",
      edge: "/e3_IMG_6010.JPG",
      name: "grounded tension",
    },
    {
      color: "/5_IMG_6019.JPG",
      edge: "/e5_IMG_6019.JPG",
      name: "classic tension",
    },
    {
      color: "/4_IMG_6013.JPG",
      edge: "/e4_IMG_6013.JPG",
      name: "kinky tension",
    },
    {
      color: "/6_IMG_6005.JPG",
      edge: "/e6_IMG_6005.JPG",
      name: "clean double tension",
    },
    {
      color: "/7_IMG_6012.JPG",
      edge: "/e7_IMG_6012.JPG",
      name: "rubberband tension",
    },
    {
      color: "/8_IMG_6004.JPG",
      edge: "/e8_IMG_6004.JPG",
      name: "intension",
    },
  ]

  let curIndex = 0;
  state.currentAsset = state.assets[curIndex];

  emitter.on("next asset", () => {
    curIndex = (curIndex + 1) % state.assets.length;
    state.currentAsset = state.assets[curIndex];
    state.cache(TextTweenElement, 'my-text').textTween(state.currentAsset.name);
    emitter.emit("render");
    renderHydra();
  });

  emitter.on("set asset", (i) => {
    curIndex = i % state.assets.length;
    state.currentAsset = state.assets[curIndex];
    state.cache(TextTweenElement, 'my-text').textTween(state.currentAsset.name);
    emitter.emit("render");
    renderHydra();
  });

  function renderHydra() {
    s0.initImage(state.currentAsset.color);
    s1.initImage(state.currentAsset.edge);

    src(o1).blend(s0,0.03).out(o1)
    src(o2).blend(s1,0.03).out(o2)

    src(o1).layer(src(o2).saturate(0)).layer(
      src(s1).invert().luma(0.4).invert()
      .mask(shape(4,0,0.7)
      //.mult(osc(10,-0.1).thresh(.5,.4).kaleid(999)
        .modulate(solid(()=>-state.centroid.x, ()=>-state.centroid.y), 1))
      //)
      .modulate(
        osc(6,0,1.6).modulate(noise(.1,0.01).sub(gradient()),1)
        .mult(osc(10,-0.1).thresh(.5,.4).kaleid(999).modulate(solid(()=>-state.centroid.x, ()=>-state.centroid.y), 1)),0.1
      )
    )
    .scale(1, ()=>window.innerHeight/window.innerWidth)
    .out()
  }

  emitter.on("DOMContentLoaded", () => {
    renderHydra();
  });
}
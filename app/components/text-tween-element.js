import html from "choo/html";
import Component from "choo/component";

export default class extends Component {
  constructor(id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.state = state
    this.emit = emit
  }

  load(element) {
    this.span = element.querySelector("span");
    // this.state.emitter.on("new prompt", ({ prompt }) => {
    //   this.span.innerText = prompt;
    // });
  }

  update({ prompt, fontSize }) {
    // if (prompt === undefined) prompt = "";
    // // this.span.innerText = prompt;
    // this.textTween(prompt);
    // if (fontSize != undefined) {
    //   this.span.style.fontSize = fontSize;
    // }
    return false;
  }

  createElement({ prompt, fontSize = "1em" } = {}) {
    this.prompt = prompt;
    return html`<div style="font-size: ${ fontSize }">
    <span></span>
    </div>`
  }

  textTween(target, { fontSize, fontFamily, rotate, posY } = {}) {
    let safetySwitch = false;
    if (this.tweening == true) {
      safetySwitch = true;
      this.state.killSwitch = true;
      // return;
    }
    
    const org = this.span.innerText;
    let text = org;
    // if (org == target) {
    //   return;
    // }
  
    this.tweening = true;
    let state = "delete";
    const step = () => {
      if (safetySwitch != true && this.state.killSwitch) {
        this.state.killSwitch = false;
        this.tweening = false;
        return;
      }
      if (state === "delete") {
        text = text.substring(0, text.length - 1);
        if (text.length == 0
            // || target.startsWith(text)
           ) {
          if (fontSize) {
            this.span.style.fontSize = fontSize;
          }
          // if (fontFamily) {
          //   this.span.style.fontFamily = fontFamily;
          // }
          if (rotate) {
            if (posY == "bottom") {
              this.span.style.transform = `translate(0, 50vh) translate(0, -${ fontSize }) translate(-50%, -50%) rotate(${ rotate })`;
            }
            else if (posY == "top") {
              this.span.style.transform = `translate(0, -50vh) translate(0, ${ fontSize }) translate(-50%, -50%) rotate(${ rotate })`;
            }
            else {
              this.span.style.transform = `translate(-50%, -50%) rotate(${ rotate })`;
            }
          }
          state = "type";
          if (target.length == 0) {
            state = "done";
            this.tweening = false;
            if (this.doneCallback) {
              this.doneCallback();
            }
          }
        }
      } else if (state === "type") {
        text = text + target[text.length];
        if (text.length == target.length) {
          state = "done";
          this.tweening = false;
          if (this.doneCallback) {
            this.doneCallback();
          }
        }
      }
      this.span.innerText = text;
      this.emit("DOMTitleChange", text.length ? text : "　");
      if (state !== "done") {
        setTimeout(step, state === "type" ? 50 : 20);
      }
    }
    setTimeout(step, 30);
  }
}

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// to do:
// automatically convert links to links

// read info from spreadsheet and parse into json object
// spreadsheet url: https://docs.google.com/spreadsheets/d/e/2PACX-1vTfz0q6_b45MXaiHO0CXOXu3i_mfTeC0r5ISlB8VR0gShJ57tNhks6KllNM95BqWoE5dStNm37lKfNc/pubhtml
// https://docs.google.com/spreadsheets/d/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/edit?usp=sharing

// json api:
// https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json


const columns = [];
fetch(
  "https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json"
)
  .then(response => response.json())
  .then(data => init(data.feed.entry));
// .then(() => console.log(columns));

const links = [];
let slideIndex = 0;
const iframe = document.createElement("iframe");
iframe.width = 800;
iframe.height = 600;

const info = document.createElement("div");
const slideNumber = document.createElement("div");
const customHTML = document.createElement("div");

document.body.appendChild(iframe);
document.body.appendChild(customHTML);
document.body.appendChild(info);
document.body.appendChild(slideNumber);

const init = data => {
  data.forEach(entry => {
    const cell = entry["gs$cell"];
    if (cell.row === "1") {
      columns.push(cell.inputValue);
    } else {
      const slideIndex = parseFloat(cell.row) - 2;
      const col = parseFloat(cell.col) - 1;
      console.log("col", col);
      if (!links[slideIndex]) {
        links[slideIndex] = {};
        columns.forEach((column) => links[slideIndex][column] = "")
      }
      links[slideIndex][columns[col]] = cell.inputValue;
    }
  });
  // info.innerHTML = `A sentence about me with a link https://ojack.xyz`

  const showSlide = () => {
    iframe.src = links[slideIndex].URL0;
    info.innerText = links[slideIndex].TEXT0;
    slideNumber.innerHTML = `${slideIndex + 1}/${links.length}`;
    customHTML.innerHTML = links[slideIndex].HTML
  };

  const showNext = () => {
    slideIndex++;
    if (slideIndex >= links.length) slideIndex = 0;
    showSlide();
  };

  const showPrevious = () => {
    slideIndex--;
    if (slideIndex < 0) slideIndex = links.length - 1;
    showSlide();
  };

  showSlide()

  

  const previousButton = document.createElement("button");
  previousButton.innerHTML = "<";
  document.body.appendChild(previousButton);
  previousButton.onclick = showPrevious;

  const nextButton = document.createElement("button");
  nextButton.innerHTML = ">";
  document.body.appendChild(nextButton);
  nextButton.onclick = showNext;

 
};



},{}]},{},[1]);

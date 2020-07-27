// read info from spreadsheet and parse into json object
// spreadsheet url: https://docs.google.com/spreadsheets/d/e/2PACX-1vTfz0q6_b45MXaiHO0CXOXu3i_mfTeC0r5ISlB8VR0gShJ57tNhks6KllNM95BqWoE5dStNm37lKfNc/pubhtml
// https://docs.google.com/spreadsheets/d/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/edit?usp=sharing

// json api:
// https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json
const SHEET =
  // olivia's original sheet
  // "https://spreadsheets.google.com/feeds/cells/16BgHLLN8qBLNxHXj1ArapXdBB0W_FsHL3-pi_HS2TfM/1/public/full?alt=json";
  // form response
  "https://spreadsheets.google.com/feeds/cells/1q1P03MrBkqlWDjZ5ZI2z85wcgJNzpQ_scZAIGD-tzPc/1/public/full?alt=json";
const columns = [];
const links = [];
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
        columns.forEach(column => (links[slideIndex][column] = ""));
      }
      links[slideIndex][columns[col]] = cell.inputValue;
    }
  });
  return links;
};

module.exports = fetch(SHEET)
  .then(response => response.json())
  .then(data => init(data.feed.entry))
  // .then(()=>links);

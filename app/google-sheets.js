// read info from spreadsheet and parse into json object

const SHEET =
  "https://spreadsheets.google.com/feeds/cells/1sAqoc9ZYAwpxjTb4xX5UubTcbVHN_wLv-hn3dZofnx8/1/public/full?alt=json";
const columns = [];
const links = [];
const baseRow = 7;
const init = data => {
  data.forEach(entry => {
    const cell = entry["gs$cell"];
    if (parseInt(cell.row) == baseRow) {
      // console.log(cell.inputValue);
      columns.push(cell.inputValue);
    } else if (parseInt(cell.row) > baseRow) {
      const slideIndex = parseFloat(cell.row) - baseRow - 1;
      const col = parseFloat(cell.col) - 1;
      // console.log("col", col);
      if (!links[slideIndex]) {
        links[slideIndex] = {};
        columns.forEach(column => (links[slideIndex][column] = ""));
      }
      // console.log(cell.inputValue);
      links[slideIndex][columns[col]] = cell.inputValue;
    }
  });
  return links;
};

module.exports = fetch(SHEET)
  .then(response => response.json())
  .then(data => init(data.feed.entry))
  // .then(()=>links);

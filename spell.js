let j = JSON.parse(localStorage.getItem("j"));
let y = {};

const wordlize = (str) =>
  str.replaceAll(" ", "").replaceAll(",", "").replaceAll("\n", "").trim();

Object.keys(j).forEach((g) => (y[wordlize(j[g])] = g));

function getTitle() {
  return wordlize(
    document.querySelector(`.current > .card-top > div > div > div > div`)
      .innerText
  );
}

let running = true;
function solve() {
  if (!running) return;
  document.querySelector(
    `.current > .card-bottom > div > div > div > div:nth-child(2) > input`
  ).value = y[getTitle()];

  document
    .querySelector(
      "#wrapper-learn > div.cc-table.fill-parent-h.middle.m-center > div > div.study-bottom > div.normal-btns > div.btn-text.btn-down-cover-box > a"
    )
    ?.click();
  document
    .querySelector(
      "#wrapper-learn > div.cc-table.fill-parent-h.middle.m-center > div > div.study-bottom.down > div.normal-btns > div.btn-text.btn-next-box > a"
    )
    ?.click();
  setTimeout(solve, 1350);
}

solve();

let j = JSON.parse(localStorage.getItem("j"));
const a = (idx) => {
  return wordlize(
    document.querySelector(
      `.card-quest-item[data-idx="${idx}"] > .card-quest-list > div`
    ).innerText
  );
};

const wordlize = (str) => str.replaceAll(" ", "").replaceAll(",", "").trim();

let currentDiv = ".current";
let title = `${currentDiv} > .card-top > div > div > div > .text-normal > *`;

function getTitle() {
    return wordlize(j[document.querySelector(title).innerText]);
}

function getItem(idx) {
    return wordlize(document.querySelector(`.current > .card-quest > div[data-idx="${idx}"] > div:nth-child(2) > div`).innerText)
}

let running = true;

function solve() {
    if(!running) return;
    for(let i = 0;i < 4;i++){
    if(getItem(i) == getTitle()) document.querySelector(`.current > .card-quest > div[data-idx="${i}"]`).click();
}
    setTimeout(solve, 1000);
}

solve()

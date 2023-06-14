const a = () => document.querySelector("#wrapper-learn > div.cc-table.fill-parent-h.middle.m-center > div > div.study-bottom > div.btn-text.btn-down-cover-box > a")?.click();
const b = () => document.querySelector("#wrapper-learn > div.cc-table.fill-parent-h.middle.m-center > div > div.study-bottom.down > div.btn-text.btn-know-box > a")?.click();

let running = true;

const ac = () => {
    if(!running) return;
    a();
    setTimeout(bc, 300);
}

const bc = () => {
    if(!running) return;
    b();
    setTimeout(ac, 300);
}

ac()

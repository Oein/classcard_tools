let jx = JSON.parse(localStorage.getItem("j"))
let running = true;
function get(t,i){
    return document.querySelector(`#${t}_card_${i} > .flip-card-inner > .flip-card-front > div > div:first-child`)
}
function findOnR(t) {
    for(let i = 0;i < 4;i++){
        let y = get("right",i).innerText.trim().replace(/\n/gi,"");
        console.log(y,t,y==t)
        if(y == t) {
            return get("right",i);
        }
    }
    return null;
}
function x(){
for(let i = 0;i < 4;i++){
    let lc = get("left",i);
    if(!lc) return;
    let g = findOnR(jx[lc.innerText.trim().replace(/\n/gi,"")])
    if(!g) continue;
    lc.click();
    g.click();
    break;
}}

function yasd(){
    x();
    if(running) setTimeout(yasd,1250);
}
yasd()

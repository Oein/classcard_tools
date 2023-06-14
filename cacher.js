let wordsContainer = document.querySelector("#tab_set_all > div.flip-body.word-set.m-t-md.m-b-md")
let json = {};
for(let i = 0;i < wordsContainer.children.length;i++) {
    let wordsDiv = wordsContainer.children[i];
    let eng = wordsDiv.children[0].innerText.trim().replace(/\n/gi,"");
    let kor = wordsDiv.children[1].innerText.trim().replace(/\n/gi,"");

    json[eng] = kor;
}
localStorage.setItem("j",JSON.stringify(json))

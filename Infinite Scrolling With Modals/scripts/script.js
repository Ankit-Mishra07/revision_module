


// ========================= INFINITE SCROLLING ===================================
let scroll__box = document.querySelector(".scroll__box");
let count = 1
const addItems = () => {
    for(let i = 0; i < 25; i++){
        let div = document.createElement("div");
        div.setAttribute("class", "element")
        div.innerText = `Masai Student ${count++}`
        div.addEventListener("click", () => {
            onOpenModal(count);
        })
        scroll__box.append(div)
    }
}

addItems()


scroll__box.addEventListener("scroll", () => {
    if(scroll__box.scrollTop + scroll__box.clientHeight >= scroll__box.scrollHeight){
        addItems();
    }
})

const scrollToTop = () => {
    scroll__box.scrollTop = 0;
}



// ================= MODAL ===========================

let modal_box = document.createElement("div");    
modal_box.setAttribute("class", "modal")
modal_box.innerHTML = `
<div>Ankit Mishra  <button onclick="onCloseModal()">X</button></div>
<button onclick="onCloseModal()">Continue</button>
`
document.querySelector("body").append(modal_box)
function onOpenModal() {
    modal_box.style.display = "block"
}

function onCloseModal() {
    modal_box.style.display = "none"
}
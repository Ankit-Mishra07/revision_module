const Allalphabets = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

let vowels = ["A", "E", "I", "O", "U"];
let consonants = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const game__container = document.querySelector(".game__container");

let timer = document.querySelector(".timer");
let time = 99;
let int = setInterval(() => {
  time--;
  timer.innerText = time;
  if (time <= 0) {
    clearInterval(int);
    let score = document.querySelector(".score").innerText;
    alert(`Time up, \n Your Score is : ${score}`);
    window.location.href = "index.html";
  }
}, 1000);

const matrix = [[], [], [], []];
function createArrays() {
  consonants = consonants.sort(() => Math.random() - 0.5);
  let random1 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let random2 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let random3 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let random4 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let random5 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  let arr1 = vowels.sort(() => Math.random() - 0.5);
  let arr2 = consonants.slice(0, 5).sort(() => Math.random() - 0.5);
  let arr3 = consonants.slice(5, 10).sort(() => Math.random() - 0.5);
  let arr4 = consonants.slice(10, 15).sort(() => Math.random() - 0.5);
  let arr5 = consonants.slice(15, 20).sort(() => Math.random() - 0.5);
  matrix[0].push(arr1.slice(0, random1));
  matrix[1].push(arr2.slice(0, random2));
  matrix[2].push(arr3.slice(0, random3));
  matrix[3].push(arr4.slice(0, random4));
}

for (let i = 0; i < 5; i++) {
  createArrays();
}
let moves = 10;
function getMatLength() {
  // let getlength = matrix.flat(2).length;
  let tile_left = document.querySelector(".tile_left");
  tile_left.innerText = moves--;
  if (moves < 0) {
    let score = document.querySelector(".score").innerText;
    alert(`No Moves left, \n Your Score is : ${score}`);
    window.location.href = "index.html";
  }
}
getMatLength();

function displayData() {
  let alpha_container = document.querySelector(".alpha_container");
  alpha_container.innerHTML = null;

  matrix.forEach((element, index1) => {
    console.log("element", element);
    let div = document.createElement("div");
    div.setAttribute("class", "alpha_row");
    element.forEach((el, index2) => {
      let elDiv = document.createElement("div"); // iske ander alphabets
      let elDivMain = document.createElement("div");
      elDiv.setAttribute("class", "elDiv");
      elDivMain.setAttribute("class", "elDivMain");
      el.forEach((item, i) => {
        let alphaDiv = document.createElement("div");
        alphaDiv.setAttribute("class", "alphaDiv");
        alphaDiv.innerText = item;
        alphaDiv.addEventListener("click", () => {
          RemoveAndSave(index1, index2, i, item);
        });
        if (i !== 0 && item) {
          let line = document.createElement("div");
          line.setAttribute("class", "line");
          elDiv.append(alphaDiv);
          elDivMain.appendChild(elDiv);
          elDivMain.appendChild(line);
        } else {
          elDiv.append(alphaDiv);
          elDivMain.append(elDiv);
        }

        // alphaDiv.append(line);
      });
      div.append(elDivMain);
      console.log("el", el);
    });
    alpha_container.append(div);
  });
}

displayData();
let storedElement = [];
let score = document.querySelector(".score");
let sum = 0;
function RemoveAndSave(index1, index2, i, item) {
  let Dltelement = matrix[index1][index2].splice(i, 1);
  sum += Allalphabets[Dltelement[0]];
  score.innerText = sum;
  storedElement.push(...Dltelement);
  displayStoredElementS();
  displayData();
  getMatLength();
}

function displayStoredElementS() {
  let store_elements = document.querySelector(".store_elements");

  store_elements.innerText = storedElement.join("");
}

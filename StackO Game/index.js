const Allalphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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

function RemoveAndSave(index1, index2, i, item) {
  console.log("check delete", matrix);
  let Dltelement = matrix[index1][index2].splice(i, 1);
  console.log("check delete", matrix);
  console.log("check delete elemtn", Dltelement);
  displayData();
}

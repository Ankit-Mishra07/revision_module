let url = "http://localhost:3000/api/hotel";
let DATA = [];
let cards__container = document.querySelector(".cards__container");

async function fetchData() {
  let res = await fetch(url);
  let dat = await res.json();
  DATA = [...dat];
  displayData(dat);
}

function displayData(data) {
  cards__container.innerHTML = null;
  console.log(data);
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
        <img
          class="room_image"
          src=${el.image_url}
          alt=""
        />
        <div class="room_detail_box">
          <h3><i>${el.category} room</i></h3>
          <hr />
          <div class="details_box">
            <div>
              <span>Adults</span>
              <span>${el.no_of_persons}</span>
            </div>
            <div>
              <span>capacity</span>
              <span>Max capacity ${el.capacity}</span>
            </div>
            <div>
              <span>Facilities</span>
              <span>${el.type_of_room}</span>
            </div>
            <div>
              <span>Bed type</span>
              <span>${el.bed_type} bed</span>
            </div>
            <div>
              <span>Price</span>
              <span>₹${el.cost}<span class="night_text">/night</span></span>
            </div>
          </div>
          <button class="book_nowbtn">Book now</button>
        </div>
        `;
    cards__container.append(card);
  });
}

function filterCategory() {
  let filter_category = document.getElementById("filter_category").value;
  filter(filter_category);
}
function filter(cat) {
  let data = DATA.filter((el) => {
    return el.category === cat;
  });
  displayData(data);
}

function sortData() {
  let sortby = document.getElementById("sortby").value;
  sort(sortby);
}
function sort(val) {
  if (val === "LtoH") {
    let data = DATA.sort((a, b) => +a.cost - +b.cost);
    displayData(data);
  } else if (val === "HtoL") {
    let data = DATA.sort((a, b) => +b.cost - +a.cost);
    displayData(data);
  }
}

fetchData();

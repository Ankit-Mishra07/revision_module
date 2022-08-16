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
          <button class="book_nowbtn"  id="bookbtn" onclick="bookNowHere(${el.id})">Book now</button>
        </div>
        `;

    cards__container.append(card);
  });
}

async function bookNowHere(id) {
  event.preventDefault();
  let modal = document.querySelector(".modal");
  modal.style.display = "flex";
  console.log("hell", id);
  let item;
  await fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((res) => {
      item = res;
    });
  let userData = JSON.parse(localStorage.getItem("hotel_user"));
  let modal_content = document.querySelector(".modal_content");
  modal_content.innerHTML = `<div>
              <span>Name</span>
              <span>Mobile</span>
              <span>JD proof</span>
              <span>Room type</span>
              <span>No. of persons</span>
              <span>Days of stay</span>
              <span>Subtoal</span>
              <span>GST</span>
              <span>Total</span>
            </div>
            <div>
              <span>${userData.username}</span>
              <span>7000081170</span>
              <span>Aadhar Card</span>
              <span>${item.category}</span>
              <span>${item.no_of_persons}</span>
              <span>3</span>
              <span>Rs. 12000/-</span>
              <span>Rs. 720/-</span>
              <span>Rs. 12720/-</span>
            </div>
    `;
  item.booked = true;
  fetch(`${url}/${item.id}`, {
    method: "PATCH",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Booked Successfully");
    });
}
function hideModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
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

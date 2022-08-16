let url = "http://localhost:3000/api/hotel";
let DATA = [];

async function handleSubmitData(event) {
  event.preventDefault();
  let category = document.getElementById("category").value;
  let bedtype = document.getElementById("bedtype").value;
  let room_img = document.getElementById("room_img").value;
  let adults = document.getElementById("adults").value;
  let max_capacity = document.getElementById("max_capacity").value;
  let cost_night = document.getElementById("cost_night").value;
  let roomType = document.querySelector('input[name="roomtype"]:checked').value;
  if (
    !category ||
    !bedtype ||
    !room_img ||
    !adults ||
    !max_capacity ||
    !cost_night ||
    !roomType
  ) {
    alert("Please fill all data");
    return;
  }

  let obj = {
    category: category,
    image_url: room_img,
    type_of_room: roomType,
    bed_type: bedtype,
    no_of_persons: adults,
    capacity: max_capacity,
    cost: cost_night,
    booked: false,
  };

  await fetch(url, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Added Successfully!");
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
}

async function fetchData() {
  let res = await fetch(url);
  let dat = await res.json();
  DATA = [...dat];
  displayData(dat);
}

let tbody = document.querySelector("tbody");
function displayData(data) {
  tbody.innerHTML = null;

  data.forEach((el) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
          <td>${el.id}</td>
          <td>${el.category}</td>
          <td>${el.type_of_room}</td>
          <td>${el.bed_type}</td>
          <td>${el.no_of_persons}</td>
          <td>${el.capacity}</td>
          <td>${el.cost}</td>
          <td>${el.booked ? "Booked" : "not Booked"}</td>
          <td class="edit" onclick="EditData(${el.id})">Edit</td>
          <td class="delete" onclick="DeleteData(${el.id})">Delete</td>
    `;
    tbody.append(tr);
  });
}

fetchData();

function DeleteData(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      fetchData();
    });
}

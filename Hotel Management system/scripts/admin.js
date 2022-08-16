let url = "https://m5r3server.herokuapp.com/api/hotel";
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

// =========== Edit Data ============

let ID = null;
function EditData(id) {
  let edit_category = document.getElementById("edit_category");
  let edit_bedtype = document.getElementById("edit_bedtype");
  let edit_room_img = document.getElementById("edit_room_img");
  let edit_adults = document.getElementById("edit_adults");
  let edit_max_capacity = document.getElementById("edit_max_capacity");
  let edit_cost_night = document.getElementById("edit_cost_night");
  let edit_roomType = document.querySelector(
    'input[name="edit_roomtype"]:checked'
  );

  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      edit_category.value = res.category;
      edit_bedtype.value = res.bed_type;
      edit_room_img.value = res.image_url;
      edit_adults.value = res.no_of_persons;
      edit_max_capacity.value = res.capacity;
      edit_cost_night.value = res.cost;
      let modal = document.querySelector(".modal");
      modal.style.display = "flex";
      ID = res.id;
    });
}
function hidemodal() {
  let edit_roomType = document.querySelector(
    'input[name="edit_roomtype"]:checked'
  );
  if (!edit_roomType) {
    alert("Please choose room type: AC/nonAC");
    return;
  }
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

async function EditPost(event) {
  event.preventDefault();
  let edit_category = document.getElementById("edit_category").value;
  let edit_bedtype = document.getElementById("edit_bedtype").value;
  let edit_room_img = document.getElementById("edit_room_img").value;
  let edit_adults = document.getElementById("edit_adults").value;
  let edit_max_capacity = document.getElementById("edit_max_capacity").value;
  let edit_cost_night = document.getElementById("edit_cost_night").value;
  let edit_roomType = document.querySelector(
    'input[name="edit_roomtype"]:checked'
  );
  if (!edit_roomType) {
    alert("Please choose room type: AC/nonAC");
    return;
  }
  if (
    !edit_category ||
    !edit_bedtype ||
    !edit_room_img ||
    !edit_adults ||
    !edit_max_capacity ||
    !edit_cost_night ||
    !edit_roomType
  ) {
    alert("Please fill all data");
    return;
  }
  let obj = {
    category: edit_category,
    image_url: edit_room_img,
    type_of_room: edit_roomType.value,
    bed_type: edit_bedtype,
    no_of_persons: edit_adults,
    capacity: edit_max_capacity,
    cost: edit_cost_night,
    booked: false,
  };
  await fetch(`${url}/${ID}`, {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Edited Successfully");
      hidemodal();
      fetchData();
    });
}

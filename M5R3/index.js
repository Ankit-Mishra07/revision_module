const url = "https://m5r3server.herokuapp.com/api/data";
async function handleSubmitData(event) {
  event.preventDefault();
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  let population = document.getElementById("population").value;
  let payload = {
    country,
    city,
    population,
  };
  if (!country || !city || !population) {
    alert("Please fill all data");
    return;
  }
  console.log(payload);
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      alert("Added Successfully");
      fetchData();
    });
}

async function fetchData() {
  let res = await fetch(url);
  let dat = await res.json();
  displayData(dat);
}
fetchData();

let tbody = document.querySelector("tbody");
function displayData(data) {
  tbody.innerHTML = null;

  data.forEach((el) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${el.id}</td>
            <td>${el.country}</td>
            <td>${el.city}</td>
            <td>${el.population}</td>
            <td class="edit" onclick="EditData(${el.id})">Edit</td>
            <td class="delete" onclick="DeleteData(${el.id})">Delete</td>
    `;
    tbody.append(tr);
  });
}

function DeleteData(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      fetchData();
    });
}
let ID = null;
function EditData(id) {
  let country = document.getElementById("edit_country");
  let city = document.getElementById("edit_city");
  let population = document.getElementById("edit_population");
  fetch(`${url}/${id}`)
    .then((res) => res.json())
    .then((res) => {
      country.value = res.country;
      city.value = res.city;
      population.value = res.population;
      let modal = document.querySelector(".modal");
      modal.style.display = "flex";
      ID = res.id;
    });
}
function hidemodal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

async function EditPost(event) {
  event.preventDefault();
  let country = document.getElementById("edit_country").value;
  let city = document.getElementById("edit_city").value;
  let population = document.getElementById("edit_population").value;
  let payload = {
    country,
    city,
    population,
  };
  if (!country || !city || !population) {
    alert("Please fill all data");
    return;
  }
  console.log(payload);
  await fetch(`${url}/${ID}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
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

const url = "http://localhost:5000/json/data";
function handleSubmitData() {
  event.preventDefault();
  let country = document.getElementById("country");
  let city = document.getElementById("city");
  let population = document.getElementById("population");
  let payload = {
    country,
    city,
    population,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      fetchData();
    });
}

function fetchData() {}

const url = "http://localhost:3000/api/data";
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
  await fetch("http://localhost:3000/api/data", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then((res) => res.json())
  // .then((res) => {
  //   fetchData();
  // });
}

function fetchData() {}

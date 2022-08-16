let url = "https://m5r3server.herokuapp.com/api/hotel";
let DATA = [];

async function handleSubmitData(event) {
  event.preventDefault();
  let category = document.getElementById("category").value;
  let bedtype = document.getElementById("bedtype");
  await fetch("https://m5r3server.herokuapp.com/api/hotel", {
    method: "POST",
  });
}

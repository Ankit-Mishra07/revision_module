// Here we need to wait for response of each fetch call as we are using await keyword.
async function AsyncAwaitFetchProducts() {
  let products1 = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  let products2 = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );
  let products3 = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    products1,
    products2,
    products3,
  };
}

// AsyncAwaitFetchProducts().then((res) => console.log(res));

// Using promise.all

async function PromiseAllFetchProduct() {
  let products1 = fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
  let products2 = fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
  let products3 = fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );

  return Promise.all([products1, products2, products3]);
}

PromiseAllFetchProduct().then((res) => console.log(res));

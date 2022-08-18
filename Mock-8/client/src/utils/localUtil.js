export const getLocal = (key) => {
  let get = JSON.parse(localStorage.getItem(key));
  return get;
};

export const setLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

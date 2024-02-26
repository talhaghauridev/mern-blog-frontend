/* eslint-disable @typescript-eslint/no-unused-vars */


//Set LocalStorage
const setLocalStorage = <T>(key: string, value: T) => {
  const data = JSON.stringify(value);
  data ? localStorage.setItem(key, data) : null;
};

//Set GetStorage

const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

//Set RemoveStorage

const removeLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  data ? localStorage.removeItem(data) : null;
};


export { setLocalStorage , getLocalStorage , removeLocalStorage}
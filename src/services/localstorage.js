const saveOnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const loadLocalStorageValue = key => {
  console.log(localStorage.getItem(key))
  console.log(key)
  return JSON.parse(localStorage.getItem(key))
}

const remove = key => {
  localStorage.removeItem(key)
}

//  LocalStorageKeys

const localStorageKeys = {
  RUN_ID: 'RUN_ID',
}

export { saveOnLocalStorage, loadLocalStorageValue, remove, localStorageKeys }

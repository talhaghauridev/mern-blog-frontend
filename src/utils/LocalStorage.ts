class LocalStorageInstance {
  constructor() {}

  set<T>(key: string, value: T) {
    const val = JSON.stringify(value);

    val && localStorage.setItem(key, val);
  }

  get(key: string) {
    const parseData = localStorage.getItem(key);

    return key && parseData && JSON.parse(parseData);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

const LocalStorage = new LocalStorageInstance();
export default LocalStorage;

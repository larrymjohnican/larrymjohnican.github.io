// Export the browser storage object as a constant
export const BROWSER_STORAGE = window.localStorage;

// Define the Storage class
class Storage {
  // Get an item from local storage by key
  getItem(key) {
    return window.localStorage.getItem(key);
  }

  // Set an item in local storage with a given key and value
  setItem(key, value) {
    window.localStorage.setItem(key, value);
  }

  // Remove an item from local storage by key
  removeItem(key) {
    window.localStorage.removeItem(key);
  }
}

// Export the Storage class and BROWSER_STORAGE constant
export { BROWSER_STORAGE };
export { Storage };

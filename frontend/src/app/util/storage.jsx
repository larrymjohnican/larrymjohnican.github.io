// Export the browser storage object as a constant
export const BROWSER_STORAGE = window.localStorage;

// Define the Storage class
class Storage {
  // Get an item from local storage by key
  getItem(key) {
    return BROWSER_STORAGE.getItem(key);
  }

  // Set an item in local storage with a given key and value
  setItem(key, value) {
    BROWSER_STORAGE.setItem(key, value);
  }

  // Remove an item from local storage by key
  removeItem(key) {
    BROWSER_STORAGE.removeItem(key);
  }
}

// Export the Storage class and BROWSER_STORAGE constant
export { Storage };

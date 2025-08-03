
/**
 * Utility for storing and retrieving data from localStorage with TTL support
 */

// TTL in milliseconds - default is 1 hour
const DEFAULT_TTL = 60 * 60 * 1000;

/**
 * Store data in localStorage with TTL
 * @param key Storage key
 * @param data Data to store
 * @param ttl Time to live in milliseconds (default: 1 hour)
 */
export const storeWithExpiry = (key: string, data: any, ttl: number = DEFAULT_TTL): void => {
  const item = {
    value: data,
    expiry: Date.now() + ttl,
  };
  
  try {
    localStorage.setItem(key, JSON.stringify(item));
  } catch (e) {
    console.error('Error storing data in localStorage:', e);
  }
};

/**
 * Get data from localStorage if it hasn't expired
 * @param key Storage key
 * @returns Stored data or null if expired or not found
 */
export const getWithExpiry = <T = any>(key: string): T | null => {
  try {
    const itemStr = localStorage.getItem(key);
    
    // If the item doesn't exist, return null
    if (!itemStr) return null;
    
    const item = JSON.parse(itemStr);
    
    // Check if the item has expired
    if (Date.now() > item.expiry) {
      // If it has expired, remove it from storage and return null
      localStorage.removeItem(key);
      return null;
    }
    
    return item.value as T;
  } catch (e) {
    console.error('Error retrieving data from localStorage:', e);
    return null;
  }
};

/**
 * Clear all stored items with a specific prefix
 * @param prefix Key prefix to match for deletion
 */
export const clearStorageWithPrefix = (prefix: string): void => {
  try {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.error('Error clearing localStorage items with prefix:', e);
  }
};

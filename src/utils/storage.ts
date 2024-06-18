import Cookies from "js-cookie";


/**
 * Set system parameter to cookie.
 *
 * @author Gregory Albert <gregoryalbert1209@gmail.com>
 * @since 2024-02-23
 *
 * @param {any} systemParam The system parameter to be sent to the API.
 *
 * @returns {void}
 */
export function setSystemParam(systemParam: any): void {
  Cookies.set("systemParam", btoa(JSON.stringify(systemParam)));
}

/**
 * Cache some data.
 *
 * @author Gregory Albert <gregoryalbert1209@gmail.com>
 * @since 2024-01-21
 *
 * @param {any} data - Data to cache.
 * @param {string} cacheKey - Key of the cached data.
 *
 * @returns {void}
 */
export function cacheData(data: any, cacheKey: string): void {
  localStorage.setItem(cacheKey, JSON.stringify(data));
}

export function removeData(cacheKey: string): void {
  localStorage.removeItem(cacheKey);
}
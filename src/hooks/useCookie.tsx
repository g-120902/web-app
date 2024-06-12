import { useState, useCallback } from "react"
import Cookies from "js-cookie"

/**
 * The useCookie hook is a convenient way to store and retrieve data in cookies.
 * It is especially useful for storing data that needs to be accessed across multiple pages of a website.
 *
 * @author Valentin magde <valentinmagde@gmail.com>
 * @since 2024-01-21
 *
 * @param {string} name - The name of the cookie.
 * @param {any} defaultValue - The default value of the cookie.
 * @returns {Array} - An array containing the value of the cookie, a function to update the cookie,
 * and a function to delete the cookie.
 * @example
 * const [value, updateCookie, deleteCookie] = useCookie("my-cookie", "default-value")
 */
export default function useCookie(name: string, defaultValue: any): Array<any> {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) return cookie
        // Cookies.set(name, defaultValue)
        return defaultValue
    })

    const updateCookie = useCallback(
        (newValue: any, options: any) => {
            Cookies.set(name, newValue, options)
            setValue(newValue)
        },
        [name]
    )

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    }, [name])

    return [value, updateCookie, deleteCookie]
}

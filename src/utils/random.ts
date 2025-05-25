/**
 * Picks a random index from an array.
 *
 * @param arr - An array
 * @returns A random index from the array
 */
export function pickRandomIndex(arr: Array<any>) {
    return Math.floor(Math.random() * arr.length)
}

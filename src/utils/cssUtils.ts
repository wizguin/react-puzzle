/**
 * Helper function for creating dynamic class names, filters out falsy values.
 *
 * @param classes - Class names to merge
 * @returns Merged class names string
 */
export function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

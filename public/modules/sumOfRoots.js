/**
 * This method takes the First and Second coefficients and finds the sum of
 * the roots of the quadratic equation: -B/A = x_1 + x_2
 *
 * @param a - First coefficient
 * @param b - Second coeffcient
 * @returns Sum of roots
 */
export const sumOfRoots = (a, b) => {
    if (a === 0) {
        throw new Error("'A' can't be zero.");
    }
    return -b / a;
};

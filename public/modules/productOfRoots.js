/**
 * This method takes the First and Third coefficient and finds the product of
 * the roots of the quadratic equation: C/A = x_1 * x_2
 *
 * @param a - First coefficient
 * @param c - Third coeffcient
 * @returns Product of roots
 */
export const productOfRoots = (a, c) => {
    if (a === 0) {
        throw new Error("'A' can't be zero.");
    }
    return c / a;
};

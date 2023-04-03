/*
 * Taking things a step further, I decided to also provide the smaller root of
 * a quadratic equation.
 */
/**
 * This method takes in the three coefficients and returns the smaller
 * 'real number' quadratic root based on the equation: Ax^2 + Bx + C = 0
 *
 * If the root is a complex number, an error will be thrown.
 *
 * @param a - First coefficient
 * @param b - Second coefficient
 * @param c - Third coefficient
 * @returns Smaller real root value
 */
export const smallerRoot = (a, b, c) => {
    if (a === 0) {
        throw new Error("'A' can't be zero.");
    }
    else {
        let discriminant = b * b - 4 * a * c;
        if (discriminant < 0) {
            throw new Error("Discriminant less than zero.");
        }
        else {
            return (-b - Math.sqrt(discriminant)) / (2 * a);
        }
    }
};

/* 
 * The following code was taken from Introduction to Programming Using Java by 
 * David J. Eck in July 2019. I decided to modify the original Java code below 
 * to work in TypeScript as a simple web app using BootStrap 5 for a clean UI.
 * 
 * Code from Eck (2019):
 * Returns the larger of the two roots of the quadratic equation
 * A*x*x + B*x + C = 0, provided it has any roots.  If A == 0 or
 * if the discriminant, B*B - 4*A*C, is negative, then an exception
 * of type IllegalArgumentException is thrown.
 * 
 * static public double root( double A, double B, double C )
 *  throws IllegalArgumentException {
 *      if (A == 0) {
 *          throw new IllegalArgumentException("A can't be zero.");
 *      }else {
 *          double disc = B*B - 4*A*C;
 *          if (disc < 0)
 *              throw new IllegalArgumentException("Discriminant < zero.");
 *          return  (-B + Math.sqrt(disc)) / (2*A);
 *      }
 * }
 */

/**
 * This method takes in the three coefficients and returns the larger  
 * 'real number' quadratic root based on the equation: Ax^2 + Bx + C = 0
 * 
 * If the root is a complex number, an error will be thrown.
 * 
 * @param a - First coefficient
 * @param b - Second coefficient
 * @param c - Third coefficient
 * @returns Larger real root value
 */
export const largerRoot = (a: number, b: number, c: number): number | Error => {
    if (a === 0){
        throw new Error("'A' can't be zero.");
    }else{
        let discriminant:number = b * b - 4 * a * c;
        if(discriminant < 0) {
            throw new Error("Discriminant less than zero.");
        }else{
            return (-b + Math.sqrt(discriminant) ) / ( 2 * a );
        }
    } 
}

// function that calculates the sum of an array of numbers
export function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Computes the square root of a non-negative number.
 *
 * @param x - The number to compute the square root of. Must be non-negative.
 * @returns The square root of `x`.
 * @throws {Error} If `x` is negative.
 */
export function squareRoot(x: number): number {
    if (x < 0) throw new Error("Cannot compute square root of negative number");
    return Math.sqrt(x);
}

export function factorial(n: number): number {
    if (n < 0) throw new Error("Cannot compute factorial of negative number");
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
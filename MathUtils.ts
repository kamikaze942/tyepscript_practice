export async function asyncAdd(a: number, b: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}
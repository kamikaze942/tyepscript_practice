export function toArray(args: string | string[]) {
    if (Array.isArray(args)) {
        return args.map(arg => arg.trim());
    }
    return args.split(',').map(arg => arg.trim());
}
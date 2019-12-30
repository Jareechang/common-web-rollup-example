export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function isTypeObject(value: any): boolean {
    return typeof value === 'object';
}

export interface ConfigOptions<T> {
    [key: string]: T;
}

export function selectOption<T>(
    opts: ConfigOptions<T>,
    key: string,
    defaultReturn: T
): T {
    if (opts && isTypeObject(opts)) {
        return opts[key] || defaultReturn;
    }
    return defaultReturn;
}

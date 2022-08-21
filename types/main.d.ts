export {};

declare global {
  interface Array<T> {
    first: T;
    last: T;
    min: T;
    max: T;
    sum: number;
    append(...el: T[]): Array<T>;
    prepend(...el: T[]): Array<T>;
    compact: Array<T>;
    uniq: Array<T>;
    each(f: (value: T) => any): Array<T>;
    each_with_index(f: (value: T, index: number) => any): Array<T>;
    delete(target: T): Array<T>;
    delete_if(f: (value: T) => any): Array<T>;
    delete_at(pos: number): Array<T>;
    clear: [];
    union(other: Array<T>): Array<T>;
    size: number;
    minmax: Array<T>;
    min_by(f: (value: T) => number): T;
    max_by(f: (value: T) => number): T;
    find_all(f: (value: T, index: number, array: T[]) => any): Array<T>;
    select(f: (value: T, index: number, array: T[]) => any): Array<T>;
    count(f: (value: T, index: number, array: T[]) => any): number;
    rev: Array<T>;
  }

  interface String {
    chop: string;
    reverse: string;
    downcase: string;
    upcase: string;
    strip: string;
    gsub(pattern: RegExp, replace: string): string;
    center(width: number): string;
    prepend(str: string): string;
    size: number;
  }

  interface Number {
    floor: number;
    ceil: number;
    abs: number;
    next: number;
    succ: number;
    pred: number;
    next_float: number;
    prev_float: number;
    to_s: string;
    inspect: string;
    times(f: (num: number) => any): number;
    clamp(min: number, max: number): number;
  }
}

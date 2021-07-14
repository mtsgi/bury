export default class Bury {
  static init (options = {}) {
    const TARGETS = [
      [Array.prototype, Bury.ARRAY_METHODS()],
      [String.prototype, Bury.STRING_METHODS()],
      [Number.prototype, Bury.NUMBER_METHODS()]
    ]
    for (const t of TARGETS) {
      for (const m in t[1]) {
        if (t[1][m].length === 0) {
          Object.defineProperty(t[0], m, {
            configurable: true,
            enumerable: false,
            ...options,
            get () { return t[1][m].apply(this) }
          })
        } else t[0][m] = t[1][m]
      }
    }
  }

  static ARRAY_METHODS () {
    return {
      first () { return this[0] },
      last () { return this[this.length - 1] },
      min () { return this.reduce((a, b) => Math.min(a, b)) },
      max () { return this.reduce((a, b) => Math.max(a, b)) },
      sum () { return this.reduce((a, b) => Number(a) + Number(b)) },
      append (dumArg) { this.push(...arguments); return this },
      prepend (dumArg) { return [...arguments, ...this] },
      unshift (dumArg) { return this.prepend(...arguments) },
      compact () { return this.reduce((a, b) => (b ? a.append(b) : a), []) },
      uniq () { return this.reduce((a, b) => (a.indexOf(b) === -1 ? a.append(b) : a), []) },
      each (f) { this.forEach(a => f(a)); return this },
      each_with_index (f) { this.forEach((a, i) => f(a, i)); return this },
      delete (target) { return this.reduce((a, b) => (b !== target ? a.append(b) : a), []) },
      delete_if (f) { return this.reduce((a, b) => (f(b) ? a : a.append(b)), []) },
      delete_at (pos) { this.splice(pos, 1); return this },
      clear () { return [] },
      union (other) { return this.concat(other).uniq },
      size () { return this.length },
      minmax () { return [this.min, this.max] },
      min_by (f) { return this.reduce((a, b) => f(a) < f(b) ? a : b) },
      max_by (f) { return this.reduce((a, b) => f(a) > f(b) ? a : b) },
      find_all (f) { return this.filter(f) },
      select (f) { return this.find_all(f) },
      count (f) { return this.find_all(f).size },
      rev () { return [...this].reverse() }
    }
  }

  static STRING_METHODS () {
    return {
      chop () { return this.slice(0, -1) },
      reverse () { return [...this].reverse().join('') },
      downcase () { return this.toLowerCase() },
      upcase () { return this.toUpperCase() },
      strip () { return this.trim() },
      gsub (pattern, replace) { return this.replace(pattern, replace) },
      center (width) { return [' '.repeat(width), this, ' '.repeat(width)].join('') },
      prepend (str) { return [str, this].join('') },
      size () { return this.length }
    }
  }

  static NUMBER_METHODS () {
    return {
      floor () { return Math.floor(this) },
      ceil () { return Math.ceil(this) },
      abs () { return Math.abs(this) },
      next () { return Math.floor(this) + 1 },
      succ () { return this.next },
      pred () { return Math.ceil(this) - 1 },
      next_float () { return this + Number.EPSILON },
      prev_float () { return this - Number.EPSILON },
      to_s () { return this.toString() },
      inspect () { return this.to_s },
      times (f) { for (const i of [...Array(this).keys()]) f.apply(window, [i]); return this }
    }
  }
}

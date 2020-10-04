/* eslint-disable no-extend-native */

export default class Bury {
  static init () {
    const ARRAY_METHODS = {
      first () { return this[0] },
      last () { return this[this.length - 1] },
      min () { return this.reduce((a, b) => Math.min(a, b)) },
      max () { return this.reduce((a, b) => Math.max(a, b)) },
      sum () { return this.reduce((a, b) => a + b) },
      append (args) { this.push(...arguments); return this },
      compact () { return this.reduce((a, b) => (b ? a.append(b) : a), []) },
      uniq () { return this.reduce((a, b) => (a.indexOf(b) === -1 ? a.append(b) : a), []) },
      each (f) { this.forEach(a => f(a)); return this },
      each_with_index (f) { this.forEach((a, i) => f(a, i)); return this },
      delete (target) { return this.reduce((a, b) => (b !== target ? a.append(b) : a), []) },
      delete_if (f) { return this.reduce((a, b) => (f(b) ? a : a.append(b)), []) },
      delete_at (pos) { this.splice(pos, 1); return this },
      union (other) { return this.concat(other).uniq },
      size () { return this.length },
      minmax () { return [this.min, this.max] },
      min_by (f) { return this.reduce((a, b) => f(a) < f(b) ? a : b) },
      max_by (f) { return this.reduce((a, b) => f(a) > f(b) ? a : b) },
      find_all (f) { return this.filter(f) },
      select (f) { return this.find_all(f) },
      count (f) { return this.find_all(f).size }
    }
    const STRING_METHODS = {
      chop () { return this.slice(0, -1) },
      reverse () { return [...this].reverse().join('') },
      downcase () { return this.toLowerCase() },
      upcase () { return this.toUpperCase() },
      strip () { return this.trim() },
      gsub (pattern, replace) { return this.replace(pattern, replace) },
      center (width) { return [' '.repeat(width), this, ' '.repeat(width)].join('') },
      size () { return this.length }
    }
    const NUMBER_METHODS = {
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
    const TARGETS = [
      [Array.prototype, ARRAY_METHODS],
      [String.prototype, STRING_METHODS],
      [Number.prototype, NUMBER_METHODS]
    ]
    for (const t of TARGETS) {
      for (const m in t[1]) {
        if (t[1][m].length === 0) {
          Object.defineProperty(t[0], m, {
            enumerable: false,
            configurable: true,
            get () { return t[1][m].apply(this) }
          })
        } else t[0][m] = t[1][m]
      }
    }
  }
}

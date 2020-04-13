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
      uniq () { return this.reduce((a, b) => (a.indexOf(b) === -1 ? a.append(b) : a), []) }
    }
    const STRING_METHODS = {
      chop () { return this.slice(0, -1) },
      reverse () { return [...this].reverse().join('') },
      downcase () { return this.toLowerCase() },
      upcase () { return this.toUpperCase() },
      strip () { return this.trim() }
    }
    const TARGETS = [
      [Array.prototype, ARRAY_METHODS],
      [String.prototype, STRING_METHODS]
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

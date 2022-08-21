class s {
  constructor() {
    const r = ["Array", "String", "Number"], t = {
      Array: s.ARRAY_METHODS(),
      String: s.STRING_METHODS(),
      Number: s.NUMBER_METHODS()
    }, e = {
      Array: Array.prototype,
      String: String.prototype,
      Number: Number.prototype
    };
    r.forEach((n) => {
      const u = t[n];
      for (const i in u)
        t[n][i].length === 0 ? Object.defineProperty(e[n], i, {
          configurable: !0,
          enumerable: !1,
          get() {
            return t[n][i].apply(this);
          }
        }) : e[n][i] = t[n][i];
    });
  }
  static ARRAY_METHODS() {
    return {
      first() {
        return this[0];
      },
      last() {
        return this[this.length - 1];
      },
      min() {
        return this.reduce((r, t) => Math.min(r, t));
      },
      max() {
        return this.reduce((r, t) => Math.max(r, t));
      },
      sum() {
        return this.reduce((r, t) => Number(r) + Number(t));
      },
      append(r) {
        return this.push(...arguments), this;
      },
      prepend(r) {
        return [...arguments, ...this];
      },
      compact() {
        return this.reduce((r, t) => t ? r.append(t) : r, []);
      },
      uniq() {
        return this.reduce((r, t) => r.indexOf(t) === -1 ? r.append(t) : r, []);
      },
      each(r) {
        return this.forEach((t) => r(t)), this;
      },
      each_with_index(r) {
        return this.forEach((t, e) => r(t, e)), this;
      },
      delete(r) {
        return this.reduce((t, e) => e !== r ? t.append(e) : t, []);
      },
      delete_if(r) {
        return this.reduce((t, e) => r(e) ? t : t.append(e), []);
      },
      delete_at(r) {
        return this.splice(r, 1), this;
      },
      clear() {
        return [];
      },
      union(r) {
        return this.concat(r).uniq;
      },
      size() {
        return this.length;
      },
      minmax() {
        return [this.min, this.max];
      },
      min_by(r) {
        return this.reduce((t, e) => r(t) < r(e) ? t : e);
      },
      max_by(r) {
        return this.reduce((t, e) => r(t) > r(e) ? t : e);
      },
      find_all(r) {
        return this.filter(r);
      },
      select(r) {
        return this.find_all(r);
      },
      count(r) {
        return this.find_all(r).size;
      },
      rev() {
        return [...this].reverse();
      }
    };
  }
  static STRING_METHODS() {
    return {
      chop() {
        return this.slice(0, -1);
      },
      reverse() {
        return [...this].reverse().join("");
      },
      downcase() {
        return this.toLowerCase();
      },
      upcase() {
        return this.toUpperCase();
      },
      strip() {
        return this.trim();
      },
      gsub(r, t) {
        return this.replace(r, t);
      },
      center(r) {
        return [" ".repeat(r), this, " ".repeat(r)].join("");
      },
      prepend(r) {
        return [r, this].join("");
      },
      size() {
        return this.length;
      }
    };
  }
  static NUMBER_METHODS() {
    return {
      floor() {
        return Math.floor(this);
      },
      ceil() {
        return Math.ceil(this);
      },
      abs() {
        return Math.abs(this);
      },
      next() {
        return Math.floor(this) + 1;
      },
      succ() {
        return this.next;
      },
      pred() {
        return Math.ceil(this) - 1;
      },
      next_float() {
        return this + Number.EPSILON;
      },
      prev_float() {
        return this - Number.EPSILON;
      },
      to_s() {
        return this.toString();
      },
      inspect() {
        return this.to_s;
      },
      times(r) {
        for (const t of [...Array(this).keys()])
          r.apply(window, [t]);
        return this;
      },
      clamp(r, t) {
        return Math.min(Math.max(this, r), t);
      }
    };
  }
}
export {
  s as Bury
};

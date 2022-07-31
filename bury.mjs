class i {
  constructor() {
    const t = {
      Array: i.ARRAY_METHODS(),
      String: i.STRING_METHODS(),
      Number: i.NUMBER_METHODS()
    }, r = {
      Array: Array.prototype,
      String: String.prototype,
      Number: Number.prototype
    };
    for (const e in t)
      for (const n in t[e])
        t[e][n].length === 0 ? Object.defineProperty(r[e], n, {
          configurable: !0,
          enumerable: !1,
          get() {
            return t[e][n].apply(this);
          }
        }) : r[e][n] = t[e][n];
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
        return this.reduce((t, r) => Math.min(t, r));
      },
      max() {
        return this.reduce((t, r) => Math.max(t, r));
      },
      sum() {
        return this.reduce((t, r) => Number(t) + Number(r));
      },
      append(t) {
        return this.push(...arguments), this;
      },
      prepend(t) {
        return [...arguments, ...this];
      },
      compact() {
        return this.reduce((t, r) => r ? t.append(r) : t, []);
      },
      uniq() {
        return this.reduce((t, r) => t.indexOf(r) === -1 ? t.append(r) : t, []);
      },
      each(t) {
        return this.forEach((r) => t(r)), this;
      },
      each_with_index(t) {
        return this.forEach((r, e) => t(r, e)), this;
      },
      delete(t) {
        return this.reduce((r, e) => e !== t ? r.append(e) : r, []);
      },
      delete_if(t) {
        return this.reduce((r, e) => t(e) ? r : r.append(e), []);
      },
      delete_at(t) {
        return this.splice(t, 1), this;
      },
      clear() {
        return [];
      },
      union(t) {
        return this.concat(t).uniq;
      },
      size() {
        return this.length;
      },
      minmax() {
        return [this.min, this.max];
      },
      min_by(t) {
        return this.reduce((r, e) => t(r) < t(e) ? r : e);
      },
      max_by(t) {
        return this.reduce((r, e) => t(r) > t(e) ? r : e);
      },
      find_all(t) {
        return this.filter(t);
      },
      select(t) {
        return this.find_all(t);
      },
      count(t) {
        return this.find_all(t).size;
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
      gsub(t, r) {
        return this.replace(t, r);
      },
      center(t) {
        return [" ".repeat(t), this, " ".repeat(t)].join("");
      },
      prepend(t) {
        return [t, this].join("");
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
      times(t) {
        for (const r of [...Array(this).keys()])
          t.apply(window, [r]);
        return this;
      },
      clamp(t, r) {
        return Math.min(Math.max(this, t), r);
      }
    };
  }
}
export {
  i as Bury
};

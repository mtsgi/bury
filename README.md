# Bury.js

v0.1

> Ruby-like methods for JavaScript.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
![npm](https://img.shields.io/npm/v/buryjs?style=flat)
![GitHub repo size](https://img.shields.io/github/repo-size/mtsgi/bury)

Bury.js extends the prototype of native js objects such as String and Array.

- [View on GitHub](https://github.com/mtsgi/bury)
- [View on npm](https://www.npmjs.com/package/buryjs)

## Example

```js
[3, 3, 4, null].compact.uniq.sum // => 7
[1, 2, 3, 4].append(5).last // => 5
```

```js
"Hello!".upcase.chop.reverse // => "OLLEH"
"Bury.js".gsub(/\./, '').size // => 6
```

```js
3.5.floor.next // => 4
3..times(n => alert(n)) // => Try it out!
```

[💡 View more example 💡](https://mtsgi.github.io/bury/docs)

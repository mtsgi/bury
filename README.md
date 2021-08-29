# Bury.js

![npm](https://img.shields.io/npm/v/buryjs?style=flat)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
![code size](https://img.shields.io/github/languages/code-size/mtsgi/bury)
![npm](https://img.shields.io/npm/dt/buryjs)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/mtsgi/bury)

`v0.6`

_Ruby-like methods for JavaScript._

Bury.js extends the prototype of native JS objects such as String, Number and Array.

- [💡 Examples](https://mtsgi.github.io/bury/docs)
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

**[💡 View more example 💡](https://mtsgi.github.io/bury/docs)**

## Getting Started

```sh
npm i buryjs
# or
yarn add buryjs
```

```js
import Bury from 'buryjs';

Bury.init(options);
```

If not specified, the options will be set as follows:

```js
options = {
  configurable: true,
  enumerable: false
};
```

You can also use the Bury methods only for a specific type of prototype by specifying an array for 'options.only' as follows:

```js
Bury.init({
  only: [Array, String]
});
```

---

> Note: All of Bury's destructive methods will be changed to non-destructive methods in a future version.

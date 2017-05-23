# top-level-await

Allow using `await` at your code's top level.

Not this:
```
// 💩
(async function() {
  console.log(await Promise.resolve('hello world'));
})();
```

But this:
```
// 🎉
console.log(await Promise.resolve('hello world'));
```

## Installation

```
npm i top-level-await
```

## Usage

It's a two-step process: first `require()` this module, then `require()`
the rest of your code:

```
// bootstrap.js
require('top-level-await');
require('./app');
```

Inside `app.js`, you can use `await` whenever you like.

## How?

By hacking `Module.wrap()`.

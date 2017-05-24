# top-level-await

Allow using `await` at your code's top level. Requires Node.js v7.6.0 or higher.

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

You can also tell Node to require the module for you, instead of using
a separate bootstrap script:
```
$ node -r top-level-await app
```

Which works for CLI tools too:
```
#!/usr/bin/env node -r top-level-await

console.log( await Promise.resolve('hello world') );
```

## How?

By hacking `Module.wrap()`.

This is done without prejudice, so all modules that get loaded after loading this module will be "fixed".

## Is it production-ready?

```
¯\_(ツ)_/¯
```

# pull-dom-driver

> A pullstream "webdriver" for interacting with changes to the dom.

When you're testing client side apps like [react]() or [inu](), finding and interacting with elements that appear dynamically is painful. pull-dom-driver uses a [pull-stream]() source of dom mutations from [mutation observer]() to `find(".list")` and `click("#go-button")` on elements once they're actually in the dom.  

## Usage

Let's do X:

```js
var pullDomDriver = require('pull-dom-driver')

console.log('hello warld')
```

This will output

```
hello warld
```

## API

```js
var pullDomDriver = require('pull-dom-driver')
```

See [api_formatting.md](api_formatting.md) for tips.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install pull-dom-driver
```

## Acknowledgments

pull-dom-driver was inspired by..

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)
- ...

## License

MIT


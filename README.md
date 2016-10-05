# pull-dom-driver

> A pullstream "webdriver" for interacting with changes to the dom.

When you're testing client side apps like [react](https://facebook.github.io/react/) or [inu](https://github.com/ahdinosaur/inu), finding and interacting with elements that appear dynamically is painful. pull-dom-driver uses a [pull-stream](https://github.com/ahdinosaur/inu) source of dom mutations from [pull-dom-mutants](http://pull-stream.github.io/#pull-dom-mutants) to `find(".list")` and `click("#go-button")` on elements once they're actually in the dom.  

## Usage

Let's find an element that isn't in the dom yet but will be:

```js
var createDomStream = require('pull-dom-driver')
var pull = require('pull-stream')

var dom = createDomStream(document, window)
pull(
  dom.find('#mutant')
  pull.drain((elem) => console.log(`I found this: ${elem}`))
)

var myDiv = document.createElement('div')
myDiv.id = "mutant" 
document.body.appendChild(myDiv)
-> "I found this: ..."
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


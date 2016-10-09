# pull-dom-driver

> A pullstream "webdriver" for interacting with changes to the dom.

When you're testing client side apps like [react](https://facebook.github.io/react/) or [inu](https://github.com/ahdinosaur/inu), finding and interacting with elements that appear dynamically is painful. pull-dom-driver uses a [pull-stream](https://github.com/ahdinosaur/inu) source of dom mutations from [pull-dom-mutants](http://pull-stream.github.io/#pull-dom-mutants) to `find(".list")` and `click("#go-button")` on elements once they're actually in the dom.  

## Usage

Let's find an element that isn't in the dom yet but will be:

```js
//in the browser
var createDomStream = require('pull-dom-driver')
var pull = require('pull-stream')

var domStream = createDomStream(document, window)
pull(
  domStream.find('#mutant')
  pull.drain((elem) => console.log(`I found this: ${elem}`))
)

var myDiv = document.createElement('div')
myDiv.id = "mutant" 
document.body.appendChild(myDiv)
```

This will output

```
"I found this: [object HTMLDivElement]"
```

## API

### var createDomStream = require('pull-dom-driver')
### createDomStream(rootElement)
Takes the `rootElement` on which you'd like to obseve changes.

### var domStream = createDomStream(el)
Returns an object with the following keys:
- `subscribe` 
- `find` 
- `click` 

### domStream.find(cssSelectorString)
Takes a `cssSelectorString` for the element(s) you'd like to find.
Returns a pull-stream source of elements that have been found in the dom.
Note that if there is an element that matches the selector when the stream is created it will be emitted by the stream first.

### domStream.click(cssSelectorString)
Takes a `cssSelectorString` for the element(s) you'd like to click on.
Returns a pull-stream source of elements that have been clicked in the dom.
Note that if there is an element(s) that matches the selector when the stream is created it will be emitted by the stream first.

### domStream.subscribe()
Returns a pull-stream source of dom mutations from [pull-dom-mutants](http://pull-stream.github.io/#pull-dom-mutants)

## Install

With [npm](https://npmjs.org/) installed, run
```
$ npm install pull-dom-driver
```

## Acknowledgments

pull-dom-driver was inspired by..

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT


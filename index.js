var pull = require('pull-stream')
var many = require('pull-many')
var domMutant = require('pull-dom-mutants')

module.exports = createDomStream

function createDomStream (el, window) {
  return {
    find,
    click,
    subscribe
  }
  function subscribe () {
    return domMutant(el, window)
  }
  function find (selector, opts) {
    const newElements = pull(
      subscribe(),
      selectTargetEl(selector)
    )
    const currentElements = pull.once(el.querySelector(selector))
    return many([
      newElements,
      currentElements
    ])
  }
  function click (selector, opts) {
    return pull(
      find(selector, opts),
      pull.map(el => {
        el.click()
        return el
      })
    )
  }
  function selectTargetEl (selector) {
    return pull(
      pull.filter(function (mutation) {
        return mutation.target.querySelector(selector)
      }),
      pull.map(function (mutation) {
        return mutation.target.querySelector(selector)
      })
    )
  }
}


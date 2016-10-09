var test = require('tape')
var pull = require('pull-stream')
var document = require('global/document')

var createDomStream = require('../')

test('find emits elements that are already in the dom when the stream is created', function (t) {
  var root = document.createElement('div')
  var el = document.createElement('div')
  el.id = 'test'
  root.appendChild(el)
  var dom = createDomStream(root)
  pull(
    dom.find('#test'),
    pull.drain((el) => {
      t.equal(el.id, 'test')
      t.end()
      return false
    })
  )
})

test('find emits elements that are added to the dom after the stream is created', function (t) {
  var root = document.createElement('div')
  var dom = createDomStream(root)
  pull(
    dom.find('#test'),
    pull.drain((el) => {
      t.equal(el.id, 'test')
      t.end()
      return false
    })
  )
  var el = document.createElement('div')
  el.id = 'test'
  root.appendChild(el)
})

test('click emits elements that are already in the dom when the stream is created', function (t) {
  var root = document.createElement('div')
  var el = document.createElement('div')
  el.id = 'test'
  root.appendChild(el)
  var dom = createDomStream(root)
  pull(
    dom.click('#test'),
    pull.drain((el) => {
      t.equal(el.id, 'test')
      t.end()
      return false
    })
  )
})

test('click emits elements that are added to the dom after the stream is created', function (t) {
  var root = document.createElement('div')
  var dom = createDomStream(root)
  pull(
    dom.click('#test'),
    pull.drain((el) => {
      t.equal(el.id, 'test')
      t.end()
      return false
    })
  )
  var el = document.createElement('div')
  el.id = 'test'
  root.appendChild(el)
})

test('click calls the click method on the element', function (t) {
  var root = document.createElement('div')
  var dom = createDomStream(root)
  pull(
    dom.click('#test'),
    pull.drain((el) => {
    })
  )
  var el = document.createElement('div')
  el.id = 'test'
  el.click = () => {
    t.ok(true, 'was clicked')
    t.end()
  }
  root.appendChild(el)
})

import test from 'ava'
import React from 'react'
import renderer from 'react-test-renderer'
import InstagramEmbed from '../src'

// TODO: add more tests

test('Snapshot testing', t => {
  const component = renderer.create(
    <InstagramEmbed url='https://instagr.am/p/Zw9o4/' />
  )
  let tree = component.toJSON()
  t.snapshot(tree)
})

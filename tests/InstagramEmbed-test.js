import React from 'react'
import renderer from 'react-test-renderer'
import InstagramEmbed from '../src'

// TODO
describe('InstagramEmbed', () => {
  it('Render', () => {
    const component = renderer.create(
      <InstagramEmbed url='https://instagr.am/p/Zw9o4/' />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

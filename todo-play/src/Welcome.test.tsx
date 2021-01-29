import React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { Welcome } from './Welcome'

describe('<Welcome/>', () => { 
  test('welcomes customer - TestRenderer', () => {
    const welcome = TestRenderer.create(<Welcome name='Leon'/>).toTree()
    expect(welcome.rendered.type).toBe('h1')
    expect(welcome.rendered.rendered).toEqual(['Welcome ', 'Leon'])
    
  })

  test('welcomes customer - shallowrenderer', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Welcome name='Leon'/>)
    const renderedOutput = renderer.getRenderOutput()
   // console.log(renderedOutput)
    expect(renderedOutput.type).toBe('h1')
    expect(renderedOutput.props.children).toEqual(['Welcome ', 'Leon'])
  })

  test('what a component really is', () => {
    const welcome = Welcome({name: "Leon"})
    expect(welcome.type).toBe('h1')
    expect(welcome.props.children).toContain('Leon')
    console.log(Welcome({name: "Leon"}))
  })
})

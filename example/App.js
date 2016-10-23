import 'highlight.js/styles/github.css'
import 'react-ghfork/gh-fork-ribbon.ie.css'
import 'react-ghfork/gh-fork-ribbon.css'
import './App.css'
import React, { Component } from 'react'
import Fork from 'react-ghfork'
import hljs from 'highlight.js'
import InstagramEmbed from '../src'

export default class App extends Component {
  state = { url: urls[0], maxWidth: 320, hideCaption: true }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    Array.from(document.querySelectorAll('pre code')).forEach(el => hljs.highlightBlock(el))
  }
  render() {
    return (
      <div>
        <Fork project='sugarshin/react-instagram-embed' className='right' />
        <div className='body' style={{ maxWidth: this.state.maxWidth ? this.state.maxWidth : 'auto' }}>
          <h1>React Instagram Embed</h1>
          <InstagramEmbed
            className='instagram-embed'
            url={this.state.url}
            maxWidth={this.state.maxWidth}
            hideCaption={this.state.hideCaption}
          />
          <div className='ui'>
            <span className='ui-label'>Show caption</span>
            <input type='checkbox' value={this.state.hideCaption} onChange={this.handleChange} />
          </div>
          <div className='ui'>
            <span className='ui-label'>Max width</span>
            <input type='number' defaultValue={this.state.maxWidth} min={320} ref={el => this.number = el} />
            <button onClick={this.handleMaxWidthChange}>Change</button>
          </div>
          <div className='ui'>
            <span className='ui-label'>Select photo</span>
            <select value={this.state.url} onChange={this.hanldeURLSelect}>
              {urls.map(u => <option value={u} key={u}>{u}</option>)}
            </select>
          </div>
          <pre>
            <code>
              {
`<InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  maxWidth={320}
  hideCaption
  onLoading={() => {}}
  onSuccess={() => {}}
  onFailure={() => {}}
/>`
              }
            </code>
          </pre>
        </div>
      </div>
    )
  }
  handleMaxWidthChange = () => {
    this.setState({ maxWidth: this.number.value >= 320 ? this.number.value : undefined })
  }
  hanldeURLSelect = e => {
    this.setState({ url: e.target.value })
  }
  handleChange = () => {
    this.setState({ hideCaption: !this.state.hideCaption })
  }
}

const urls = [
  'https://instagr.am/p/Zw9o4/',
  'https://instagr.am/p/Ytlfl/',
  'https://instagr.am/p/Zn1Xz/',
  'https://instagr.am/p/HLLj2RgURT/',
  'https://instagr.am/p/HeZ7IxgUUc/',
  'https://instagr.am/p/LJ2tq9AUaO/',
]

import 'normalize.css/normalize.css'
import 'highlight.js/styles/github.css'
import 'react-ghfork/gh-fork-ribbon.css'
import './App.css'
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Fork from 'react-ghfork'
import InstagramEmbed from 'react-instagram-embed'
import hljs from 'highlight.js'

class App extends Component {
  state = { url: urls[0], maxWidth: 320, hideCaption: false }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  render() {
    const { url, maxWidth, hideCaption } = this.state
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
            <span className='ui-label'>Hide caption</span>
            <input type='checkbox' checked={this.state.hideCaption} onChange={this.handleCaptionChange} />
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
            <code>{getCode(url, maxWidth, hideCaption)}</code>
          </pre>
        </div>
      </div>
    )
  }

  highlight() {
    [...document.querySelectorAll('pre code')].forEach(el => hljs.highlightBlock(el))
  }

  handleMaxWidthChange = () => {
    const value = parseInt(this.number.value, 10)
    this.setState({ maxWidth: value >= 320 ? value : undefined })
  }

  hanldeURLSelect = e => {
    this.setState({ url: e.target.value })
  }

  handleCaptionChange = () => {
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

const getCode = (url, maxWidth, hideCaption) => `<InstagramEmbed
  url='${url}'
  maxWidth={${maxWidth}}
  hideCaption={${hideCaption}}
  containerTagName='div'
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>`

export default hot(module)(App)

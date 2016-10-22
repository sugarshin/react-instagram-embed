import React, { Component } from 'react'
import Fork from 'react-ghfork'
import insertStylesheet from 'insert-stylesheet'
import insertCSS from 'insert-css'
import InstagramEmbed from '../src'

insertStylesheet('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css')
require('react-ghfork/gh-fork-ribbon.ie.css')
require('react-ghfork/gh-fork-ribbon.css')
insertCSS(`
  html, :root {
    font-size: 62.5%;
  }
  html, :root, body {
    background-color: #fafafa;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic Pro", Meiryo, "メイリオ", "Noto Sans Japanese", sans-serif;
  }
  body {
    color: #323b43;
    line-height: 1.6;
    font-size: 1.4rem;
  }
  h1 {
    margin-top: 0;
    padding-top: 1em;
  }
`, { prepend: false })

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: urls[0],
      maxWidth: 320,
      hideCaption: true,
    }
  }
  render() {
    return (
      <div>
        <Fork project='sugarshin/react-instagram-embed' className='right' />
        <div style={{
          width: this.state.maxWidth ? this.state.maxWidth : 'auto',
          margin: '0 auto',
        }}>
          <h1>React Instagram Embed</h1>
          <InstagramEmbed
            style={{ minHeight: 390 }}
            url={this.state.url}
            maxWidth={this.state.maxWidth}
            hideCaption={this.state.hideCaption}
          />
          <div style={{
            marginTop: '1em',
          }}>
            <span>Show caption</span>
            <input type='checkbox' value={this.state.hideCaption} onChange={this.handleChange} />
          </div>
          <div>
            <span>Max width</span>
            <input type='number' defaultValue={this.state.maxWidth} min={320} ref={el => this.number = el} />
            <button onClick={this.handleMaxWidthChange}>Change</button>
          </div>
          <div>
            <span>Select photo</span>
            <select value={this.state.url} onChange={this.hanldeURLSelect}>
              {urls.map(u => <option value={u} key={u}>{u}</option>)}
            </select>
          </div>
          <pre style={{
            backgroundColor: '#eee',
            padding: '1em'
          }}>
            <code>{`<InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  maxWidth={320}
  hideCaption
  onLoading={() => {}}
  onSuccess={() => {}}
  onFailure={() => {}}
/>`}</code>
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

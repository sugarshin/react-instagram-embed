import 'normalize.css/normalize.css';
import 'highlight.js/styles/github.css';
import './App.css';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import GitHubRibbon from 'react-github-ribbons';
import InstagramEmbed from 'react-instagram-embed';
import hljs from 'highlight.js';
import env from './env';

interface State {
  url: string;
  maxWidth?: number;
  hideCaption: boolean;
}

class App extends Component<Record<string, never>, State> {
  public state = { url: urls[0], maxWidth: 375, hideCaption: false };

  private numberInputRef = React.createRef<HTMLInputElement>();

  public componentDidMount() {
    this.highlight();
  }

  public componentDidUpdate() {
    this.highlight();
  }

  public render() {
    const { url, maxWidth, hideCaption } = this.state;
    return (
      <div>
        <GitHubRibbon href="https://github.com/sugarshin/react-instagram-embed" className="right" />
        <div
          className="body"
          style={{
            maxWidth: this.state.maxWidth ? `${this.state.maxWidth}px` : 'auto',
          }}
        >
          <h1>React Instagram Embed</h1>
          <InstagramEmbed
            className="instagram-embed"
            url={this.state.url}
            maxWidth={this.state.maxWidth}
            hideCaption={this.state.hideCaption}
            clientAccessToken={env.INSTAGRAM_ACCESS_TOKEN}
          />
          <div className="ui">
            <span className="ui-label">Hide caption</span>
            <input type="checkbox" checked={this.state.hideCaption} onChange={this.handleCaptionChange} />
          </div>
          <div className="ui">
            <span className="ui-label">Max width</span>
            <input type="number" defaultValue={this.state.maxWidth} min={320} max={658} ref={this.numberInputRef} />
            <button onClick={this.handleMaxWidthChange}>Change</button>
          </div>
          <div className="ui">
            <span className="ui-label">Select photo</span>
            <select value={this.state.url} onChange={this.hanldeURLSelect}>
              {urls.map((u) => (
                <option value={u} key={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
          <pre>
            <code>{getCode(url, maxWidth, hideCaption)}</code>
          </pre>
        </div>
      </div>
    );
  }

  private highlight() {
    [...document.querySelectorAll('pre code')].forEach((el) => hljs.highlightElement(el as HTMLElement));
  }

  private handleMaxWidthChange = () => {
    const maxWidth = this.numberInputRef.current.value ? parseInt(this.numberInputRef.current.value, 10) : undefined;
    console.log('maxWidth', maxWidth);
    this.setState({ maxWidth });
  };

  private hanldeURLSelect = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    this.setState({ url: e.currentTarget.value });
  };

  private handleCaptionChange = () => {
    this.setState({ hideCaption: !this.state.hideCaption });
  };
}

const urls = [
  'https://instagr.am/p/Zw9o4/',
  'https://instagr.am/p/Ytlfl/',
  'https://instagr.am/p/Zn1Xz/',
  'https://instagr.am/p/HLLj2RgURT/',
  'https://instagr.am/p/HeZ7IxgUUc/',
  'https://instagr.am/p/LJ2tq9AUaO/',
];

const getCode = (url: string, maxWidth: number, hideCaption: boolean) => `<InstagramEmbed
  clientAccessToken='<appId>|<clientToken>'
  url='${url}'
  maxWidth={${maxWidth}}
  hideCaption={${hideCaption}}
  containerTagName='div'
  injectScript
  protocol=''
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>`;

export default hot(module)(App);

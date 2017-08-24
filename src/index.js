/* @flow */

import React, { Component } from 'react'
import jsonp from 'jsonp-p'
import qs from 'query-string'

export type Props = {
  url: string,
  hideCaption: boolean,
  maxWidth: number,
  containerTagName: string,
  onLoading: () => void,
  onSuccess: (response: Object) => void,
  onAfterRender: () => void,
  onFailure: () => void,
  protocol: string,
}
type State = { __html: ?string }
type QueryParams = { url: string, hideCaption: boolean, maxWidth: number }

export default class InstagramEmbed extends Component {
  props: Props
  state: State
  jsonp: { promise: Promise<any>, cancel: () => void }
  _timer: number

  static defaultProps = { hideCaption: false, containerTagName: 'div', protocol: 'https:' }

  state = { __html: null }

  componentDidMount() {
    if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
      this.fetchEmbed(this.getQueryParams(this.props))
    } else {
      const protocolToUse: string = window.location.protocol.indexOf('file') === 0
        ? this.props.protocol
        : ''

      const s = document.createElement('script')
      s.async = s.defer = true
      s.src = `${protocolToUse}//platform.instagram.com/en_US/embeds.js`
      s.id = 'react-instagram-embed-script'
      const body: HTMLElement | null = document.body
      if (body) {
        body.appendChild(s)
      }
      this.checkAPI().then(() => this.fetchEmbed(this.getQueryParams(this.props)))
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    const { url, hideCaption, maxWidth, containerTagName } = this.props
    if (nextProps.url !== url ||
        nextProps.hideCaption !== hideCaption ||
        nextProps.maxWidth !== maxWidth ||
        nextProps.containerTagName !== containerTagName) {
      this.jsonp.cancel()
      this.fetchEmbed(this.getQueryParams(nextProps))
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    const { url, hideCaption, maxWidth, containerTagName, onLoading, onSuccess, onAfterRender, onFailure } = this.props
    const { __html } = this.state
    if (nextProps.url !== url ||
        nextProps.hideCaption !== hideCaption ||
        nextProps.maxWidth !== maxWidth ||
        nextProps.containerTagName !== containerTagName ||
        nextProps.onLoading !== onLoading ||
        nextProps.onSuccess !== onSuccess ||
        nextProps.onAfterRender !== onAfterRender ||
        nextProps.onFailure !== onFailure ||
        nextState.__html !== __html) {
      return true
    }
    return false
  }

  render() {
    return <this.props.containerTagName {...this.omitComponentProps()} dangerouslySetInnerHTML={{ __html: this.state.__html }} />
  }

  componentWillUnmount() {
    this.cancel()
  }

  omitComponentProps(): Object {
    // eslint-disable-next-line no-unused-vars
    const { url, hideCaption, maxWidth, containerTagName, onLoading, onSuccess, onAfterRender, onFailure, protocol, ...rest } = this.props
    return rest
  }

  checkAPI(): Promise<any> {
    return new Promise(resolve => {
      (function checkAPI(_this) {
        _this._timer = setTimeout(() => {
          if (window.instgrm) {
            clearTimeout(_this._timer)
            resolve()
          } else {
            checkAPI(_this)
          }
        }, 20)
      })(this)
    })
  }

  fetchEmbed(queryParams: string): void {
    this.jsonp = jsonp(`https://api.instagram.com/oembed/?${queryParams}`)
    this.props.onLoading && this.props.onLoading()
    this.jsonp.promise
      .then(this.handleFetchSuccess)
      .catch(this.handleFetchFailure)
  }

  getQueryParams({ url, hideCaption, maxWidth }: QueryParams): string {
    return qs.stringify({
      url,
      hidecaption: hideCaption,
      maxwidth: typeof maxWidth === 'number' && maxWidth >= 320 ? maxWidth : undefined,
      omitscript: true,
    })
  }

  handleFetchSuccess = (response: Object): void => {
    this.props.onSuccess && this.props.onSuccess(response)
    this.setState(
      { __html: response.html },
      () => {
        window.instgrm.Embeds.process()
        this.props.onAfterRender && this.props.onAfterRender()
      }
    )
  }

  handleFetchFailure = (...args: any): void => {
    clearTimeout(this._timer)
    this.props.onFailure && this.props.onFailure(...args)
  }

  // Public
  cancel = (): void => {
    if (this.jsonp) {
      this.jsonp.cancel()
    }
  }
}

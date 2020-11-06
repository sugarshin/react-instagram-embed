# react-instagram-embed

[![CircleCI][circleci-image]][circleci-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

React embedding Instagram posts component

```bash
yarn add react-instagram-embed

# or

npm i react-instagram-embed
```

[Live demo](https://sugarshin.github.io/react-instagram-embed/)

## Usage

```tsx
import InstagramEmbed from 'react-instagram-embed';

<InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
```

Access token is combination of App Id and Client Token. See https://developers.facebook.com/docs/instagram/oembed/#access-tokens for more details.

## props

- `url` {String} Instagram URL. Required
- `clientAccessToken` {String} Instagram Client Access Token. Required
- `maxWidth` {Number} Max width. Minimum size is `320`. Default `undefined`
- `hideCaption` {Boolean} Default `false`
- `containerTagName` {String} Default `'div'`
- `protocol` {String} Instagram API script protocol. Default `''` same as current protocol
  - This property needed if you use device's file system, for example, Electron, Cordova apps
- `injectScript` {Boolean} Default `true`
- `onLoading` {Function}
- `onSuccess` {Function}
- `onAfterRender` {Function}
- `onFailure` {Function}

## License

[MIT][license-url]

© sugarshin

[npm-image]: https://img.shields.io/npm/v/react-instagram-embed.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/react-instagram-embed
[circleci-image]: https://circleci.com/gh/sugarshin/react-instagram-embed/tree/master.svg?style=svg&circle-token=8991301b0db526852c58dc884a349cb8e00f1b24
[circleci-url]: https://circleci.com/gh/sugarshin/react-instagram-embed/tree/master
[license-image]: https://img.shields.io/:license-mit-blue.svg?style=flat-square
[license-url]: https://sugarshin.mit-license.org/

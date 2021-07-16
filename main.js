(()=>{"use strict";var e,t={5098:(e,t,n)=>{var r=n(7294),o=n(3935),i=(n(9232),n(587),n(3379)),a=n.n(i),c=n(7795),u=n.n(c),l=n(569),s=n.n(l),p=n(3565),f=n.n(p),h=n(9216),m=n.n(h),d=n(4589),y=n.n(d),b=n(5864),g={};g.styleTagTransform=y(),g.setAttributes=f(),g.insert=s().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=m(),a()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var v=n(1722),O=n(7673);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var S=["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?C(e):t}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(c,e);var t,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(o);if(i){var n=P(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),R(C(t=a.call(this,e)),"request",null),R(C(t),"timer",void 0),R(C(t),"cancel",(function(){t.request&&t.request.cancel()})),R(C(t),"handleFetchSuccess",(function(e){t.props.onSuccess&&t.props.onSuccess(e),t.setState({html:e.html},(function(){window.instgrm.Embeds.process(),t.props.onAfterRender&&t.props.onAfterRender()}))})),R(C(t),"handleFetchFailure",(function(e){clearTimeout(t.timer),t.props.onFailure&&t.props.onFailure(e)})),R(C(t),"createRequestPromise",(function(e){var n={};return n.promise=new Promise((function(r,o){var i=fetch(e,{headers:{Authorization:"Bearer ".concat(t.props.clientAccessToken)}}).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return o(e)}));return n.cancel=function(){return o(new Error("Cancelled"))},i})),n})),t.state={html:null},t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.url,r=t.clientAccessToken,o=t.hideCaption,i=t.maxWidth,a=t.containerTagName,c=t.className;e.url===n&&e.clientAccessToken===r&&e.hideCaption===o&&e.maxWidth===i&&e.containerTagName===a&&e.className===c||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))}},{key:"componentWillUnmount",value:function(){this.cancel()}},{key:"render",value:function(){var e=this.props.containerTagName;return r.createElement(e,E({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))}},{key:"fetchEmbed",value:function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?".concat(e)),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)}},{key:"omitComponentProps",value:function(){var e=this.props;return e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,S)}},{key:"injectScript",value:function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src="".concat(e,"//platform.instagram.com/en_US/embeds.js"),t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)}},{key:"checkAPI",value:function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))}},{key:"getQueryParams",value:function(e){var t=e.url,n=e.hideCaption,r=e.maxWidth,o={url:t,hidecaption:n,omitscript:!0,fields:"html"};return"number"==typeof r&&320<=r&&r<=658&&(o.maxwidth=r),(0,O.stringify)(o)}}])&&k(t.prototype,n),c}(r.Component);R(A,"defaultProps",{hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0});var T=n(637);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(c,e);var t,n,o,i,a=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(o);if(i){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function c(){var e;W(this,c);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return M(U(e=a.call.apply(a,[this].concat(n))),"state",{url:H[0],maxWidth:375,hideCaption:!1}),M(U(e),"numberInputRef",r.createRef()),M(U(e),"handleMaxWidthChange",(function(){var t=e.numberInputRef.current.value?parseInt(e.numberInputRef.current.value,10):void 0;console.log("maxWidth",t),e.setState({maxWidth:t})})),M(U(e),"hanldeURLSelect",(function(t){e.setState({url:t.currentTarget.value})})),M(U(e),"handleCaptionChange",(function(){e.setState({hideCaption:!e.state.hideCaption})})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.highlight()}},{key:"componentDidUpdate",value:function(){this.highlight()}},{key:"render",value:function(){var e=this.state,t=e.url,n=e.maxWidth,o=e.hideCaption;return r.createElement("div",null,r.createElement(v.ZP,{href:"https://github.com/sugarshin/react-instagram-embed",className:"right"}),r.createElement("div",{className:"body",style:{maxWidth:this.state.maxWidth?"".concat(this.state.maxWidth,"px"):"auto"}},r.createElement("h1",null,"React Instagram Embed"),r.createElement(A,{className:"instagram-embed",url:this.state.url,maxWidth:this.state.maxWidth,hideCaption:this.state.hideCaption,clientAccessToken:"1068148143638626|a9b9853d87fb33cdc31ac2ad0426818d"}),r.createElement("div",{className:"ui"},r.createElement("span",{className:"ui-label"},"Hide caption"),r.createElement("input",{type:"checkbox",checked:this.state.hideCaption,onChange:this.handleCaptionChange})),r.createElement("div",{className:"ui"},r.createElement("span",{className:"ui-label"},"Max width"),r.createElement("input",{type:"number",defaultValue:this.state.maxWidth,min:320,max:658,ref:this.numberInputRef}),r.createElement("button",{onClick:this.handleMaxWidthChange},"Change")),r.createElement("div",{className:"ui"},r.createElement("span",{className:"ui-label"},"Select photo"),r.createElement("select",{value:this.state.url,onChange:this.hanldeURLSelect},H.map((function(e){return r.createElement("option",{value:e,key:e},e)})))),r.createElement("pre",null,r.createElement("code",null,B(t,n,o)))))}},{key:"highlight",value:function(){var e;(e=document.querySelectorAll("pre code"),function(e){if(Array.isArray(e))return N(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return T.Z.highlightElement(e)}))}}])&&I(t.prototype,n),c}(r.Component),H=["https://instagr.am/p/Zw9o4/","https://instagr.am/p/Ytlfl/","https://instagr.am/p/Zn1Xz/","https://instagr.am/p/HLLj2RgURT/","https://instagr.am/p/HeZ7IxgUUc/","https://instagr.am/p/LJ2tq9AUaO/"],B=function(e,t,n){return"<InstagramEmbed\n  clientAccessToken='<appId>|<clientToken>'\n  url='".concat(e,"'\n  maxWidth={").concat(t,"}\n  hideCaption={").concat(n,"}\n  containerTagName='div'\n  injectScript\n  protocol=''\n  onLoading={() => {}}\n  onSuccess={() => {}}\n  onAfterRender={() => {}}\n  onFailure={() => {}}\n/>")};const z=Z;!function(){var e=document.createElement("meta");e.setAttribute("name","viewport"),e.setAttribute("content","width=device-width, initial-scale=1"),document.head.appendChild(e);var t=document.body.appendChild(document.createElement("div"));o.render(r.createElement(z,null),t)}()},5864:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'html, :root {\n  font-size: 62.5%;\n}\nhtml, :root, body {\n  background-color: #fafafa;\n  height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Roboto, "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic Pro", Meiryo, "メイリオ", "Noto Sans Japanese", sans-serif;\n}\nbody {\n  color: #323b43;\n  line-height: 1.6;\n  font-size: 1.4rem;\n}\nh1 {\n  margin-top: 0;\n  text-align: center;\n}\n.body {\n  margin: 0 auto;\n  padding: 1em .5em;\n}\n.instagram-embed {\n  min-height: 390px;\n}\n.instagram-embed + .ui {\n  margin-top: 1em;\n}\n.ui {\n  margin-top: .5em;\n}\n.ui input[type=number] {\n  max-width: 128px;\n  margin-right: 1em;\n}\n.ui-label {\n  margin-right: 1em;\n}\npre {\n  background-color: #eee;\n  padding: 1em;\n}\n.hljs {\n  background-color: #eee;\n}\n',""]);const i=o}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,i]=e[l],c=!0,u=0;u<n.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(c=!1,i<a&&(a=i));c&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[a,c,u]=n,l=0;for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(u)var s=u(r);for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;return r.O(s)},n=self.webpackChunkreact_instagram_embed=self.webpackChunkreact_instagram_embed||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[916,931,652,27,438,347,363,124,721,73,50,234,30],(()=>r(5098)));o=r.O(o)})();
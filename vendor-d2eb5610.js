(self.webpackChunkreact_instagram_embed=self.webpackChunkreact_instagram_embed||[]).push([[916],{3645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},3390:e=>{var n={exports:{}};function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}n.exports=t,n.exports.default=t;var i=n.exports;class o{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const a=e=>!!e.kind;class c{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=r(e)}openNode(e){if(!a(e))return;let n=e.kind;n=e.sublanguage?`language-${n}`:((e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")}return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class u extends l{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new c(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}function d(...e){return e.map((e=>g(e))).join("")}function h(...e){return"("+(function(e){const n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(e).capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}function f(e){return new RegExp(e.toString()+"|").exec("").length-1}const p=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function b(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t;let i=g(e),o="";for(;i.length>0;){const e=p.exec(i);if(!e){o+=i;break}o+=i.substring(0,e.index),i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+n):(o+=e[0],"("===e[0]&&t++)}return o})).map((e=>`(${e})`)).join(n)}const m="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",y="\\b(0b[01]+)",_={begin:"\\\\[\\s\\S]",relevance:0},v={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},k={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},O=function(e,n,t={}){const i=s({scope:"comment",begin:e,end:n,contains:[]},t);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const o=h("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:d(/[ ]+/,"(",o,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},N=O("//","$"),S=O("/\\*","\\*/"),R=O("#","$"),M={scope:"number",begin:E,relevance:0},A={scope:"number",begin:x,relevance:0},j={scope:"number",begin:y,relevance:0},I={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},B={scope:"title",begin:m,relevance:0},T={scope:"title",begin:w,relevance:0};var L=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:m,UNDERSCORE_IDENT_RE:w,NUMBER_RE:E,C_NUMBER_RE:x,BINARY_NUMBER_RE:y,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=d(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:v,QUOTE_STRING_MODE:k,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:O,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:S,HASH_COMMENT_MODE:R,NUMBER_MODE:M,C_NUMBER_MODE:A,BINARY_NUMBER_MODE:j,REGEXP_MODE:I,TITLE_MODE:B,UNDERSCORE_TITLE_MODE:T,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function C(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function D(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function P(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=C,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function $(e,n){Array.isArray(e.illegal)&&(e.illegal=h(...e.illegal))}function H(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function U(e,n){void 0===e.relevance&&(e.relevance=1)}const z=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]})),e.keywords=t.keywords,e.begin=d(t.beforeMatch,d("(?=",t.begin,")")),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},K=["of","and","for","in","not","or","if","then","parent","list","value"];function W(e,n,t="keyword"){const i=Object.create(null);return"string"==typeof e?o(t,e.split(" ")):Array.isArray(e)?o(t,e):Object.keys(e).forEach((function(t){Object.assign(i,W(e[t],n,t))})),i;function o(e,t){n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((function(n){const t=n.split("|");i[t[0]]=[e,X(t[0],t[1])]}))}}function X(e,n){return n?Number(n):function(e){return K.includes(e.toLowerCase())}(e)?0:1}const G={},Z=e=>{console.error(e)},F=(e,...n)=>{console.log(`WARN: ${e}`,...n)},V=(e,n)=>{G[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),G[`${e}/${n}`]=!0)},q=new Error;function J(e,n,{key:t}){let i=0;const o=e[t],r={},s={};for(let e=1;e<=n.length;e++)s[e+i]=o[e],r[e+i]=!0,i+=f(n[e-1]);e[t]=s,e[t]._emit=r,e[t]._multi=!0}function Y(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Z("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),q;if("object"!=typeof e.beginScope||null===e.beginScope)throw Z("beginScope must be object"),q;J(e,e.begin,{key:"beginScope"}),e.begin=b(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Z("skip, excludeEnd, returnEnd not compatible with endScope: {}"),q;if("object"!=typeof e.endScope||null===e.endScope)throw Z("endScope must be object"),q;J(e,e.end,{key:"endScope"}),e.end=b(e.end,{joinWith:""})}}(e)}function Q(e){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=f(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(b(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(o,r){const a=o;if(o.isCompiled)return a;[D,H,Y,z].forEach((e=>e(o,r))),e.compilerExtensions.forEach((e=>e(o,r))),o.__beforeBegin=null,[P,$,U].forEach((e=>e(o,r))),o.isCompiled=!0;let c=null;return"object"==typeof o.keywords&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),c=o.keywords.$pattern,delete o.keywords.$pattern),c=c||/\w+/,o.keywords&&(o.keywords=W(o.keywords,e.case_insensitive)),a.keywordPatternRe=n(c,!0),r&&(o.begin||(o.begin=/\B|\b/),a.beginRe=n(o.begin),o.end||o.endsWithParent||(o.end=/\B|\b/),o.end&&(a.endRe=n(o.end)),a.terminatorEnd=g(o.end)||"",o.endsWithParent&&r.terminatorEnd&&(a.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(a.illegalRe=n(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return s(e,{variants:null},n)}))),e.cachedVariants?e.cachedVariants:ee(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?o:e)}))),o.contains.forEach((function(e){t(e,a)})),o.starts&&t(o.starts,r),a.matcher=function(e){const n=new i;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(a),a}(e)}function ee(e){return!!e&&(e.endsWithParent||ee(e.starts))}const ne=r,te=s,ie=Symbol("nomatch");var oe=function(e){const n=Object.create(null),t=Object.create(null),r=[];let s=!0;const a="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let l={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:u};function g(e){return l.noHighlightRe.test(e)}function d(e,n,t){let i="",o="";"object"==typeof n?(i=e,t=n.ignoreIllegals,o=n.language):(V("10.7.0","highlight(lang, code, ...args) has been deprecated."),V("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=n),void 0===t&&(t=!0);const r={code:i,language:o};y("before:highlight",r);const s=r.result?r.result:h(r.language,r.code,t);return s.code=r.code,y("after:highlight",s),s}function h(e,t,i,r){const c=Object.create(null);function u(){if(!O.keywords)return void S.addText(R);let e=0;O.keywordPatternRe.lastIndex=0;let n=O.keywordPatternRe.exec(R),t="";for(;n;){t+=R.substring(e,n.index);const o=_.case_insensitive?n[0].toLowerCase():n[0],r=(i=o,O.keywords[i]);if(r){const[e,i]=r;if(S.addText(t),t="",c[o]=(c[o]||0)+1,c[o]<=7&&(M+=i),e.startsWith("_"))t+=n[0];else{const t=_.classNameAliases[e]||e;S.addKeyword(n[0],t)}}else t+=n[0];e=O.keywordPatternRe.lastIndex,n=O.keywordPatternRe.exec(R)}var i;t+=R.substr(e),S.addText(t)}function g(){null!=O.subLanguage?function(){if(""===R)return;let e=null;if("string"==typeof O.subLanguage){if(!n[O.subLanguage])return void S.addText(R);e=h(O.subLanguage,R,!0,N[O.subLanguage]),N[O.subLanguage]=e._top}else e=f(R,O.subLanguage.length?O.subLanguage:null);O.relevance>0&&(M+=e.relevance),S.addSublanguage(e._emitter,e.language)}():u(),R=""}function d(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++;continue}const i=_.classNameAliases[e[t]]||e[t],o=n[t];i?S.addKeyword(o,i):(R=o,u(),R=""),t++}}function p(e,n){return e.scope&&"string"==typeof e.scope&&S.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(S.addKeyword(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(d(e.beginScope,n),R="")),O=Object.create(e,{parent:{value:O}}),O}function b(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new o(e);e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return b(e.parent,n,t)}function m(e){return 0===O.matcher.regexIndex?(R+=e[0],1):(I=!0,0)}function E(e){const n=e[0],i=t.substr(e.index),o=b(O,e,i);if(!o)return ie;const r=O;O.endScope&&O.endScope._wrap?(g(),S.addKeyword(n,O.endScope._wrap)):O.endScope&&O.endScope._multi?(g(),d(O.endScope,e)):r.skip?R+=n:(r.returnEnd||r.excludeEnd||(R+=n),g(),r.excludeEnd&&(R=n));do{O.scope&&S.closeNode(),O.skip||O.subLanguage||(M+=O.relevance),O=O.parent}while(O!==o.parent);return o.starts&&p(o.starts,e),r.returnEnd?0:n.length}let x={};function y(n,r){const a=r&&r[0];if(R+=n,null==a)return g(),0;if("begin"===x.type&&"end"===r.type&&x.index===r.index&&""===a){if(R+=t.slice(r.index,r.index+1),!s){const n=new Error(`0 width match regex (${e})`);throw n.languageName=e,n.badRule=x.rule,n}return 1}if(x=r,"begin"===r.type)return function(e){const n=e[0],t=e.rule,i=new o(t),r=[t.__beforeBegin,t["on:begin"]];for(const t of r)if(t&&(t(e,i),i.isMatchIgnored))return m(n);return t.skip?R+=n:(t.excludeBegin&&(R+=n),g(),t.returnBegin||t.excludeBegin||(R=n)),p(t,e),t.returnBegin?0:n.length}(r);if("illegal"===r.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"');throw e.mode=O,e}if("end"===r.type){const e=E(r);if(e!==ie)return e}if("illegal"===r.type&&""===a)return 1;if(j>1e5&&j>3*r.index)throw new Error("potential infinite loop, way more iterations than matches");return R+=a,a.length}const _=w(e);if(!_)throw Z(a.replace("{}",e)),new Error('Unknown language: "'+e+'"');const v=Q(_);let k="",O=r||v;const N={},S=new l.__emitter(l);!function(){const e=[];for(let n=O;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach((e=>S.openNode(e)))}();let R="",M=0,A=0,j=0,I=!1;try{for(O.matcher.considerAll();;){j++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=A;const e=O.matcher.exec(t);if(!e)break;const n=y(t.substring(A,e.index),e);A=e.index+n}return y(t.substr(A)),S.closeAllNodes(),S.finalize(),k=S.toHTML(),{language:e,value:k,relevance:M,illegal:!1,_emitter:S,_top:O}}catch(n){if(n.message&&n.message.includes("Illegal"))return{language:e,value:ne(t),illegal:!0,relevance:0,_illegalBy:{message:n.message,index:A,context:t.slice(A-100,A+100),mode:n.mode,resultSoFar:k},_emitter:S};if(s)return{language:e,value:ne(t),illegal:!1,relevance:0,errorRaised:n,_emitter:S,_top:O};throw n}}function f(e,t){t=t||l.languages||Object.keys(n);const i=function(e){const n={value:ne(e),illegal:!1,relevance:0,_top:c,_emitter:new l.__emitter(l)};return n._emitter.addText(e),n}(e),o=t.filter(w).filter(x).map((n=>h(n,e,!1)));o.unshift(i);const r=o.sort(((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(w(e.language).supersetOf===n.language)return 1;if(w(n.language).supersetOf===e.language)return-1}return 0})),[s,a]=r,u=s;return u.secondBest=a,u}function p(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=l.languageDetectRe.exec(n);if(t){const n=w(t[1]);return n||(F(a.replace("{}",t[1])),F("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find((e=>g(e)||w(e)))}(e);if(g(i))return;y("before:highlightElement",{el:e,language:i}),!l.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),n=e;const o=n.textContent,r=i?d(o,{language:i,ignoreIllegals:!0}):f(o);e.innerHTML=r.value,function(e,n,i){const o=n&&t[n]||i;e.classList.add("hljs"),e.classList.add(`language-${o}`)}(e,i,r.language),e.result={language:r.language,re:r.relevance,relevance:r.relevance},r.secondBest&&(e.secondBest={language:r.secondBest.language,relevance:r.secondBest.relevance}),y("after:highlightElement",{el:e,result:r,text:o})}let b=!1;function m(){"loading"!==document.readyState?document.querySelectorAll(l.cssSelector).forEach(p):b=!0}function w(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{t[e.toLowerCase()]=n}))}function x(e){const n=w(e);return n&&!n.disableAutodetect}function y(e,n){const t=e;r.forEach((function(e){e[t]&&e[t](n)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){b&&m()}),!1),Object.assign(e,{highlight:d,highlightAuto:f,highlightAll:m,highlightElement:p,highlightBlock:function(e){return V("10.7.0","highlightBlock will be removed entirely in v12.0"),V("10.7.0","Please use highlightElement now."),p(e)},configure:function(e){l=te(l,e)},initHighlighting:()=>{m(),V("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){m(),V("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(t,i){let o=null;try{o=i(e)}catch(e){if(Z("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw e;Z(e),o=c}o.name||(o.name=t),n[t]=o,o.rawDefinition=i.bind(null,e),o.aliases&&E(o.aliases,{languageName:t})},unregisterLanguage:function(e){delete n[e];for(const n of Object.keys(t))t[n]===e&&delete t[n]},listLanguages:function(){return Object.keys(n)},getLanguage:w,registerAliases:E,autoDetection:x,inherit:te,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),r.push(e)}}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="11.2.0";for(const e in L)"object"==typeof L[e]&&i(L[e]);return Object.assign(e,L),e}({});e.exports=oe},637:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});const i=t(8128)}}]);
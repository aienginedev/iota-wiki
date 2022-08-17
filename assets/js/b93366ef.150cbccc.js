"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15659],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return v}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=o,f=d["".concat(c,".").concat(v)]||d[v]||u[v]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52974:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},c="Channels Protocol Overview",l={unversionedId:"explanations/channels_protocol/overview",id:"explanations/channels_protocol/overview",title:"Channels Protocol Overview",description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",source:"@site/content/build/streams/develop/documentation/docs/explanations/channels_protocol/overview.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/overview",permalink:"/streams/explanations/channels_protocol/overview",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/explanations/channels_protocol/overview.md",tags:[],version:"current",frontMatter:{description:"The Streams framework is intended to be a secure message verification and protection protocol  for sending data over a given transport layer",image:"/img/overview/layered_overview.svg",keywords:["layered overview","high level","low level","stronghold","channels","author","subscriber","value transactions"]},sidebar:"docs",previous:{title:"Examples",permalink:"/streams/how_tos/wasm_how_tos"},next:{title:"Authors",permalink:"/streams/explanations/channels_protocol/authors"}},p={},u=[],d={toc:u};function v(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"channels-protocol-overview"},"Channels Protocol Overview"),(0,a.kt)("p",null,"The IOTA Streams framework is intended to be a secure message verification and protection protocol\nfor sending data over a given transport layer. "),(0,a.kt)("p",null,"The Channels protocol is designed as a replacement for the previously used MAM library for sending\ndata using the Tangle as the primary transportation mechanism. The channels themselves can be\nstructured in a number of ways with any arbitrary combination of publishers and subscribers (although\neach channel can only be hosted by a single author instance)"),(0,a.kt)("p",null,"The Channels protocol provides the high level API tools necessary for authors and subscribers to be\ngenerated and interact with the Tangle."))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98229],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55421:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},l="API Reference",u={unversionedId:"libraries/rust/api_reference",id:"libraries/rust/api_reference",title:"API Reference",description:"Official IOTA Wallet Library Software Rust API reference.",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/rust/api_reference.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/api_reference",permalink:"/wallet.rs/develop/libraries/rust/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/rust/api_reference.md",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Rust API reference.",image:"/img/logo/wallet_light.png",keywords:["api","rust","cargo","crate"]},sidebar:"docs",previous:{title:"Examples",permalink:"/wallet.rs/develop/libraries/rust/examples"},next:{title:"Getting Started with Node.js",permalink:"/wallet.rs/develop/libraries/nodejs/getting_started"}},p={},s=[],f={toc:s};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"You can visit the ",(0,i.kt)("a",{parentName:"p",href:"https://wallet-lib.docs.iota.org/docs/specification"},"Rust documentation")," to learn more about the API Reference."),(0,i.kt)("p",null,"If you would like to explore the implementation in more depth, you can generate docs for the whole crate by running the  following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo doc --document-private-items --no-deps --open\n")))}d.isMDXComponent=!0}}]);
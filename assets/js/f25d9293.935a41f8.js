"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61598],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,v=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(v,l(l({ref:t},s),{},{components:n})):r.createElement(v,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u=void 0,c={unversionedId:"reference/java_api/InputData",id:"reference/java_api/InputData",title:"InputData",description:"Address can be used as input to spend balance",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/InputData.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/InputData",permalink:"/wallet.rs/reference/java_api/InputData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/InputData.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"address(): String",id:"address-string",level:3},{value:"securityLvl(): short",id:"securitylvl-short",level:3},{value:"balance(): long",id:"balance-long",level:3},{value:"index(): long",id:"index-long",level:3},{value:"spent(): boolean",id:"spent-boolean",level:3},{value:"spentBundlehashes(): String[]",id:"spentbundlehashes-string",level:3}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Address can be used as input to spend balance"),(0,o.kt)("h3",{id:"address-string"},"address(): String"),(0,o.kt)("p",null,"Input address"),(0,o.kt)("h3",{id:"securitylvl-short"},"securityLvl(): short"),(0,o.kt)("p",null,"Security level"),(0,o.kt)("h3",{id:"balance-long"},"balance(): long"),(0,o.kt)("p",null,"Balance of the address"),(0,o.kt)("h3",{id:"index-long"},"index(): long"),(0,o.kt)("p",null,"Index of the address"),(0,o.kt)("h3",{id:"spent-boolean"},"spent(): boolean"),(0,o.kt)("p",null,"Spent status"),(0,o.kt)("h3",{id:"spentbundlehashes-string"},"spentBundlehashes(): String[]"),(0,o.kt)("p",null,"Spent bundlehashes"))}f.isMDXComponent=!0}}]);
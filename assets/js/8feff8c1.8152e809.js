"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[50614],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},42566:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return f}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={},u=void 0,l={unversionedId:"reference/java_api/TransactionConfirmationChangeEvent",id:"reference/java_api/TransactionConfirmationChangeEvent",title:"TransactionConfirmationChangeEvent",description:"A transaction confirmation state change event data.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransactionConfirmationChangeEvent.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/TransactionConfirmationChangeEvent",permalink:"/wallet.rs/reference/java_api/TransactionConfirmationChangeEvent",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransactionConfirmationChangeEvent.mdx",tags:[],version:"current",frontMatter:{}},s={},f=[{value:"indexationId(): String",id:"indexationid-string",level:3},{value:"accountId(): String",id:"accountid-string",level:3},{value:"message(): Message",id:"message-message",level:3},{value:"confirmed(): boolean",id:"confirmed-boolean",level:3}],p={toc:f};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A transaction confirmation state change event data."),(0,o.kt)("h3",{id:"indexationid-string"},"indexationId(): String"),(0,o.kt)("p",null,"Event unique identifier."),(0,o.kt)("h3",{id:"accountid-string"},"accountId(): String"),(0,o.kt)("p",null,"The associated account identifier."),(0,o.kt)("h3",{id:"message-message"},"message(): ",(0,o.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,o.kt)("p",null,"The event message."),(0,o.kt)("h3",{id:"confirmed-boolean"},"confirmed(): boolean"),(0,o.kt)("p",null,"The confirmed state of the transaction."))}d.isMDXComponent=!0}}]);
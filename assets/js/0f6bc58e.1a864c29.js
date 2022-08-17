"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36085],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73459:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),s=["components"],a={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},p="Interface: IOutputsResponse",c={unversionedId:"references/client/interfaces/IOutputsResponse",id:"references/client/interfaces/IOutputsResponse",title:"Interface: IOutputsResponse",description:"iota.js API reference",source:"@site/content/build/iota.js/develop/documentation/docs/references/client/interfaces/IOutputsResponse.md",sourceDirName:"references/client/interfaces",slug:"/references/client/interfaces/IOutputsResponse",permalink:"/iotajs/references/client/interfaces/IOutputsResponse",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/references/client/interfaces/IOutputsResponse.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Interface: IOutputResponse",permalink:"/iotajs/references/client/interfaces/IOutputResponse"},next:{title:"Interface: IPeer",permalink:"/iotajs/references/client/interfaces/IPeer"}},l={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"ledgerIndex",id:"ledgerindex",level:3},{value:"pageSize",id:"pagesize",level:3},{value:"cursor",id:"cursor",level:3},{value:"items",id:"items",level:3}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-ioutputsresponse"},"Interface: IOutputsResponse"),(0,o.kt)("p",null,"Details of an outputs response from the indexer plugin."),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IOutputsResponse#ledgerindex"},"ledgerIndex")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IOutputsResponse#pagesize"},"pageSize")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IOutputsResponse#cursor"},"cursor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/iotajs/references/client/interfaces/IOutputsResponse#items"},"items"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"ledgerindex"},"ledgerIndex"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"ledgerIndex"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"The ledger index at which these outputs where available at."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pagesize"},"pageSize"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"pageSize"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The maximum count of results that are returned by the node."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"cursor"},"cursor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"cursor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"The cursor to use for getting the next results."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"items"},"items"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"items"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,o.kt)("p",null,"The output IDs (transaction hash + output index) of the outputs on this address."))}d.isMDXComponent=!0}}]);
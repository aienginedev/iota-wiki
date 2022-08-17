"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91746],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||c;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58887:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],i={},s=void 0,l={unversionedId:"reference/java_api/AccountsSynchronizer",id:"reference/java_api/AccountsSynchronizer",title:"AccountsSynchronizer",description:"The accounts synchronizer.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountsSynchronizer.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountsSynchronizer",permalink:"/wallet.rs/reference/java_api/AccountsSynchronizer",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountsSynchronizer.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"gapLimit(limit): AccountsSynchronizer",id:"gaplimitlimit-accountssynchronizer",level:3},{value:"addressIndex(address_index): AccountsSynchronizer",id:"addressindexaddress_index-accountssynchronizer",level:3},{value:"skipAccountDiscovery(): AccountsSynchronizer",id:"skipaccountdiscovery-accountssynchronizer",level:3},{value:"skipChangeAddresses(): AccountsSynchronizer",id:"skipchangeaddresses-accountssynchronizer",level:3},{value:"accountDiscoveryThreshold(account_discovery_threshold): AccountsSynchronizer",id:"accountdiscoverythresholdaccount_discovery_threshold-accountssynchronizer",level:3},{value:"execute(): SyncedAccount[]",id:"execute-syncedaccount",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The accounts synchronizer."),(0,c.kt)("h3",{id:"gaplimitlimit-accountssynchronizer"},"gapLimit(limit): ",(0,c.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,c.kt)("p",null,"Number of address indexes that are generated."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"limit"),(0,c.kt)("td",{parentName:"tr",align:null},"long"),(0,c.kt)("td",{parentName:"tr",align:null},"The maximum gap we cross without finding an address with balance")))),(0,c.kt)("h3",{id:"addressindexaddress_index-accountssynchronizer"},"addressIndex(address_index): ",(0,c.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,c.kt)("p",null,"Initial address index to start syncing."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"address_index"),(0,c.kt)("td",{parentName:"tr",align:null},"long"),(0,c.kt)("td",{parentName:"tr",align:null},"The starting index")))),(0,c.kt)("h3",{id:"skipaccountdiscovery-accountssynchronizer"},"skipAccountDiscovery(): ",(0,c.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,c.kt)("p",null,"Skips the account discovery process."),(0,c.kt)("h3",{id:"skipchangeaddresses-accountssynchronizer"},"skipChangeAddresses(): ",(0,c.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,c.kt)("p",null,"Skip syncing existing change addresses."),(0,c.kt)("h3",{id:"accountdiscoverythresholdaccount_discovery_threshold-accountssynchronizer"},"accountDiscoveryThreshold(account_discovery_threshold): ",(0,c.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,c.kt)("p",null,"Sets the minimum number of accounts to check on the discovery process."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,c.kt)("th",{parentName:"tr",align:null},"Type"),(0,c.kt)("th",{parentName:"tr",align:null},"Description"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},"account_discovery_threshold"),(0,c.kt)("td",{parentName:"tr",align:null},"long"),(0,c.kt)("td",{parentName:"tr",align:null},"The minimum accounts number")))),(0,c.kt)("h3",{id:"execute-syncedaccount"},"execute(): ",(0,c.kt)("a",{parentName:"h3",href:"#syncedaccount"},"SyncedAccount[]")),(0,c.kt)("p",null,"Syncs the accounts with the Tangle."))}h.isMDXComponent=!0}}]);
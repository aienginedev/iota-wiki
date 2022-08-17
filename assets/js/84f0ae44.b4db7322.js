"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9706],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(a),g=r,h=s["".concat(u,".").concat(g)]||s[g]||d[g]||l;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},17746:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},u=void 0,c={unversionedId:"reference/java_api/AccountManagerBuilder",id:"reference/java_api/AccountManagerBuilder",title:"AccountManagerBuilder",description:"Account manager builder.",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountManagerBuilder.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/AccountManagerBuilder",permalink:"/wallet.rs/reference/java_api/AccountManagerBuilder",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/AccountManagerBuilder.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[{value:"AccountManagerBuilder(): AccountManagerBuilder",id:"accountmanagerbuilder-accountmanagerbuilder",level:3},{value:"withStorage(storage_path, password): AccountManagerBuilder",id:"withstoragestorage_path-password-accountmanagerbuilder",level:3},{value:"withPollingInterval(polling_interval): AccountManagerBuilder",id:"withpollingintervalpolling_interval-accountmanagerbuilder",level:3},{value:"withSkipPolling(): AccountManagerBuilder",id:"withskippolling-accountmanagerbuilder",level:3},{value:"withOutputConsolidationThreshold(threshold): AccountManagerBuilder",id:"withoutputconsolidationthresholdthreshold-accountmanagerbuilder",level:3},{value:"withAutomaticOutputConsolidationDisabled(): AccountManagerBuilder",id:"withautomaticoutputconsolidationdisabled-accountmanagerbuilder",level:3},{value:"withSyncSpentOutputs(): AccountManagerBuilder",id:"withsyncspentoutputs-accountmanagerbuilder",level:3},{value:"withEventPersistence(): AccountManagerBuilder",id:"witheventpersistence-accountmanagerbuilder",level:3},{value:"withMultipleEmptyAccounts(): AccountManagerBuilder",id:"withmultipleemptyaccounts-accountmanagerbuilder",level:3},{value:"finish(): AccountManager",id:"finish-accountmanager",level:3}],s={toc:d};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Account manager builder."),(0,l.kt)("h3",{id:"accountmanagerbuilder-accountmanagerbuilder"},"AccountManagerBuilder(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Initialises a new instance of the account manager builder with the default storage adapter."),(0,l.kt)("h3",{id:"withstoragestorage_path-password-accountmanagerbuilder"},"withStorage(storage_path, password): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Sets the storage config to be used."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"storage_path"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The path where the database file will be saved")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The storage password")))),(0,l.kt)("h3",{id:"withpollingintervalpolling_interval-accountmanagerbuilder"},"withPollingInterval(polling_interval): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Sets the polling interval."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"polling_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"the polling interval in seconds")))),(0,l.kt)("h3",{id:"withskippolling-accountmanagerbuilder"},"withSkipPolling(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Skip polling"),(0,l.kt)("h3",{id:"withoutputconsolidationthresholdthreshold-accountmanagerbuilder"},"withOutputConsolidationThreshold(threshold): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Sets the number of outputs an address must have to trigger the automatic consolidation process."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of outputs an address must have to trigger the automatic consolidation process")))),(0,l.kt)("h3",{id:"withautomaticoutputconsolidationdisabled-accountmanagerbuilder"},"withAutomaticOutputConsolidationDisabled(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Disables the automatic output consolidation process."),(0,l.kt)("h3",{id:"withsyncspentoutputs-accountmanagerbuilder"},"withSyncSpentOutputs(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Enables fetching spent output history on sync."),(0,l.kt)("h3",{id:"witheventpersistence-accountmanagerbuilder"},"withEventPersistence(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Enables event persistence."),(0,l.kt)("h3",{id:"withmultipleemptyaccounts-accountmanagerbuilder"},"withMultipleEmptyAccounts(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Enables creating multiple accounts without history.\nThe wallet disables it by default to simplify account discovery."),(0,l.kt)("h3",{id:"finish-accountmanager"},"finish(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanager"},"AccountManager")),(0,l.kt)("p",null,"Builds the manager."))}g.isMDXComponent=!0}}]);
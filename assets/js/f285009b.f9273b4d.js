"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39644],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),o=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=o(r),m=n,c=f["".concat(d,".").concat(m)]||f[m]||p[m]||l;return r?a.createElement(c,i(i({ref:t},s),{},{components:r})):a.createElement(c,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=f;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var o=2;o<l;o++)i[o]=r[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22715:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return p}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],u={},d=void 0,o={unversionedId:"reference/java_api/TransferBuilder",id:"reference/java_api/TransferBuilder",title:"TransferBuilder",description:"TransferBuilder(address, amount, output_kind): TransferBuilder",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransferBuilder.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/TransferBuilder",permalink:"/wallet.rs/reference/java_api/TransferBuilder",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/TransferBuilder.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"TransferBuilder(address, amount, output_kind): TransferBuilder",id:"transferbuilderaddress-amount-output_kind-transferbuilder",level:3},{value:"newFromOutputs(outputs): TransferBuilder",id:"newfromoutputsoutputs-transferbuilder",level:3},{value:"withRemainderValueStrategy(strategy): TransferBuilder",id:"withremaindervaluestrategystrategy-transferbuilder",level:3},{value:"withRemainderToAccountWithAddress(address): TransferBuilder",id:"withremaindertoaccountwithaddressaddress-transferbuilder",level:3},{value:"withIndexation(indexation): TransferBuilder",id:"withindexationindexation-transferbuilder",level:3},{value:"withSkipSync(): TransferBuilder",id:"withskipsync-transferbuilder",level:3},{value:"finish(): Transfer",id:"finish-transfer",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"transferbuilderaddress-amount-output_kind-transferbuilder"},"TransferBuilder(address, amount, output_kind): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"Initialises a new transfer to the given address."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"The addres we want to send to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount we want to send")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_kind"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#outputkind"},"OutputKind")),(0,l.kt)("td",{parentName:"tr",align:null},"The kind of output we wish to use")))),(0,l.kt)("h3",{id:"newfromoutputsoutputs-transferbuilder"},"newFromOutputs(outputs): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"Creates a transfer with multiple outputs."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputs"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#transferoutput"},"TransferOutput[]")),(0,l.kt)("td",{parentName:"tr",align:null},"List of outputs")))),(0,l.kt)("h3",{id:"withremaindervaluestrategystrategy-transferbuilder"},"withRemainderValueStrategy(strategy): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"Sets the remainder value strategy for the transfer."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"strategy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#remaindervaluestrategy"},"RemainderValueStrategy")),(0,l.kt)("td",{parentName:"tr",align:null},"The type of strategy we use to handle the remainder")))),(0,l.kt)("h3",{id:"withremaindertoaccountwithaddressaddress-transferbuilder"},"withRemainderToAccountWithAddress(address): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"Move the remainder value to an address that must belong to the source account."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#addresswrapper"},"AddressWrapper")),(0,l.kt)("td",{parentName:"tr",align:null},"The address we send the remainder t o")))),(0,l.kt)("h3",{id:"withindexationindexation-transferbuilder"},"withIndexation(indexation): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"(Optional) message indexation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"indexation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#indexationpayload"},"IndexationPayload")),(0,l.kt)("td",{parentName:"tr",align:null},"Build a transfer with this specific payload")))),(0,l.kt)("h3",{id:"withskipsync-transferbuilder"},"withSkipSync(): ",(0,l.kt)("a",{parentName:"h3",href:"#transferbuilder"},"TransferBuilder")),(0,l.kt)("p",null,"Skip account syncing before transferring."),(0,l.kt)("h3",{id:"finish-transfer"},"finish(): ",(0,l.kt)("a",{parentName:"h3",href:"#transfer"},"Transfer")),(0,l.kt)("p",null,"Builds the transfer."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84195],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=m(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,g=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},o),{},{components:a})):n.createElement(g,i({ref:e},o))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var m={};for(var p in e)hasOwnProperty.call(e,p)&&(m[p]=e[p]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},29331:function(t,e,a){a.r(e),a.d(e,{assets:function(){return o},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],m={description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib version of ISC-specific value data types.",image:"/img/logo/WASP_logo_dark.png",keywords:["data types","WasmLib","array","proxies","map","reference"]},p="WasmLib Data Types",d={unversionedId:"guide/wasm_vm/types",id:"guide/wasm_vm/types",title:"WasmLib Data Types",description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib version of ISC-specific value data types.",source:"@site/content/build/wasp/develop/documentation/docs/guide/wasm_vm/types.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/types",permalink:"/smart-contracts/develop/guide/wasm_vm/types",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/wasm_vm/types.mdx",tags:[],version:"current",frontMatter:{description:"The WasmLib provides direct support for the basic value data types that are found in all programming languages, and WasmLib version of ISC-specific value data types.",image:"/img/logo/WASP_logo_dark.png",keywords:["data types","WasmLib","array","proxies","map","reference"]},sidebar:"tutorialSidebar",previous:{title:"Data Access Proxies",permalink:"/smart-contracts/develop/guide/wasm_vm/proxies"},next:{title:"Function Call Context",permalink:"/smart-contracts/develop/guide/wasm_vm/context"}},o={},u=[{value:"Basic Value Data Types",id:"basic-value-data-types",level:2},{value:"ISC-specific Value Data Types",id:"isc-specific-value-data-types",level:2},{value:"Full Matrix of WasmLib Types (excluding array proxies)",id:"full-matrix-of-wasmlib-types-excluding-array-proxies",level:2},{value:"Full Matrix of WasmLib Types for Array Proxies",id:"full-matrix-of-wasmlib-types-for-array-proxies",level:2}],s={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wasmlib-data-types"},"WasmLib Data Types"),(0,l.kt)("p",null,"You will need to manipulate data when creating smart contracts. The WasmLib provides\ndirect support for the following value data types:"),(0,l.kt)("h2",{id:"basic-value-data-types"},"Basic Value Data Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bool")," - boolean value (0 or 1)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int8")," - 8-bit signed integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int16")," - 16-bit signed integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int32")," - 32-bit signed integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Int64")," - 64-bit signed integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bytes")," - An arbitrary-length byte array."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"String")," - An UTF-8 encoded string value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Uint8")," - 8-bit unsigned integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Uint16")," - 16-bit unsigned integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Uint32")," - 32-bit unsigned integer value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Uint64")," - 64-bit unsigned integer value.")),(0,l.kt)("h2",{id:"isc-specific-value-data-types"},"ISC-specific Value Data Types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Address")," - A 33-byte Tangle address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AgentID")," - A 37-byte ISC Agent ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ChainID")," - A 33-byte ISC Chain ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Color")," - A 32-byte token color ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ContractID")," - A 37-byte ISC smart contract ID."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Hash")," - A 32-byte hash value."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Hname")," - A 4-byte unsigned integer hash value derived from a name string."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RequestID")," - A 34-byte transaction request ID.")),(0,l.kt)("p",null,"The first group consists of the basic value data types that are found in all programming\nlanguages, whereas the second group consists of WasmLib versions of ISC-specific value\ndata types. More detailed explanations about their specific uses can be found in the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/documentation/docs/misc/coretypes.md"},"ISC documentation"),"\n. WasmLib provides its own implementations for each of the ISC value data types. They can\nall be serialized into and deserialized from a byte array. Each value data type can also\nbe used as a key in key/value maps."),(0,l.kt)("p",null,"WasmLib implements ",(0,l.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/proxies#value-proxies"},"value proxies")," for each value type, as well\nas a set of ",(0,l.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/proxies#container-proxies"},"container proxies"),",\n",(0,l.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/proxies#map-proxies"},"map proxies")," that allow the value types to be used as key and/or\nstored value and  ",(0,l.kt)("a",{parentName:"p",href:"#array-proxies"},"array proxies")," for arrays of each of these value types,\nand for arrays of maps."),(0,l.kt)("p",null,"Another thing to consider is that some data provided by the host is mutable, whereas other\ndata may be immutable. To facilitate this distinction, each proxy type comes in two\nflavors that reflect this, and makes sure that the data can only be used as intended.\nThe rule is that from an immutable container proxy you can only derive immutable container\nand value proxies. The referenced data can never be changed through immutable proxies.\nSeparating these constraints for types into separate proxy types allows the use of\ncompile-time type-checking to enforce these constraints. To guard against client code that tries to bypass\nthem, the ISC sandbox will also check these constraints at runtime on the host."),(0,l.kt)("h2",{id:"full-matrix-of-wasmlib-types-excluding-array-proxies"},"Full Matrix of WasmLib Types (excluding array proxies)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ISC type"),(0,l.kt)("th",{parentName:"tr",align:null},"WasmLib type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mutable proxy"),(0,l.kt)("th",{parentName:"tr",align:null},"Immutable proxy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Bool")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Bool"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"byte array")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Bytes")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Bytes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"8-bit signed")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int8")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"16-bit signed")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int16")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"32-bit signed")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int32")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"64-bit signed")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int64")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"UTF-8 string")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"8-bit unsigned")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint8")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint16"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"16-bit unsigned")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint16")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint32"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"32-bit unsigned")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint32")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint64"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"64-bit unsigned")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint64")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Address"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"Address")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Address")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Address"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AgentId"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"AgentId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"AgentId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"AgentId"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChainId"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"ChainId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"ChainId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"ChainId"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Color")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Color"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hname"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"Hname")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Hname")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Hname"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hash"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"Hash")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Hash")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Hash"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Map")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Map"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,l.kt)("td",{parentName:"tr",align:null},"Sc",(0,l.kt)("strong",{parentName:"td"},"RequestId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"RequestId")),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"RequestId"))))),(0,l.kt)("p",null,"The consistent naming makes it easy to remember the type names. Bool, Bytes, String,\nand the integer types are the odd ones out. They are implemented in WasmLib by the\nclosest equivalents in the chosen implementation programming language."),(0,l.kt)("h2",{id:"full-matrix-of-wasmlib-types-for-array-proxies"},"Full Matrix of WasmLib Types for Array Proxies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ISC type"),(0,l.kt)("th",{parentName:"tr",align:null},"Mutable array proxy"),(0,l.kt)("th",{parentName:"tr",align:null},"Immutable array proxy"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bool"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Bool"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Bool"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Bytes"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Bytes"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int8"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int8"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int8"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int16"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int16"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int16"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int32"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int32"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int32"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Int64"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Int64"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Int64"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"String"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"String"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint8"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint8"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint8"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint16"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint16"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint16"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint32"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint32"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint32"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Uint64"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Uint64"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Uint64"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Address"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Address"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Address"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AgentId"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"AgentId"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"AgentId"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ChainId"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"ChainId"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"ChainId"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Color"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Color"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Color"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hname"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Hname"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Hname"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hash"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Hash"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Hash"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"Map"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"Map"),"Array")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RequestId"),(0,l.kt)("td",{parentName:"tr",align:null},"ScMutable",(0,l.kt)("strong",{parentName:"td"},"RequestId"),"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"ScImmutable",(0,l.kt)("strong",{parentName:"td"},"RequestId"),"Array")))),(0,l.kt)("p",null,"Again, consistency in naming makes them easy to remember."),(0,l.kt)("p",null,"In the next section we will show how the smart contract function call context is\nstructured in WasmLib-compatible smart contract code."))}k.isMDXComponent=!0}}]);
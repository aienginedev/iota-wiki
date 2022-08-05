"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78800],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},l),{},{components:a})):n.createElement(h,s({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8836:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],i={description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the ISC sandbox as seamless as possible.",image:"/img/wasm_vm/Proxies.png",keywords:["proxies","sandbox","wasm","value proxies","container proxies","array proxies","map proxies","explanation"]},c="Data Access Proxies",p={unversionedId:"guide/wasm_vm/proxies",id:"guide/wasm_vm/proxies",title:"Data Access Proxies",description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the ISC sandbox as seamless as possible.",source:"@site/content/build/wasp/develop/documentation/docs/guide/wasm_vm/proxies.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/proxies",permalink:"/smart-contracts/develop/guide/wasm_vm/proxies",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/wasm_vm/proxies.mdx",tags:[],version:"current",frontMatter:{description:"As there is no way for the Wasm code to access any memory outside its own memory space, the WasmLib interface provides a number of proxies to make accessing data within the ISC sandbox as seamless as possible.",image:"/img/wasm_vm/Proxies.png",keywords:["proxies","sandbox","wasm","value proxies","container proxies","array proxies","map proxies","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Wasm VM for ISC",permalink:"/smart-contracts/develop/guide/wasm_vm/intro"},next:{title:"WasmLib Data Types",permalink:"/smart-contracts/develop/guide/wasm_vm/types"}},l={},u=[{value:"Value Proxies",id:"value-proxies",level:2},{value:"Container Proxies",id:"container-proxies",level:2},{value:"Map Proxies",id:"map-proxies",level:3},{value:"Array Proxies",id:"array-proxies",level:3},{value:"Example That Shows the Use of Proxies in WasmLib",id:"example-that-shows-the-use-of-proxies-in-wasmlib",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-access-proxies"},"Data Access Proxies"),(0,o.kt)("p",null,"As we cannot call the ISC sandbox functions directly, we need a library to access the\nsandbox functionality. There is no way for the Wasm code to access any memory outside\nits own memory space. Therefore, any data that is governed by the ISC sandbox has to be\ncopied in and out of that memory space through well-defined protected channels in the Wasm\nruntime system."),(0,o.kt)("p",null,"To make this whole process as seamless as possible the WasmLib interface uses so-called\n",(0,o.kt)("inlineCode",{parentName:"p"},"proxies"),". Proxies are objects that can perform the underlying data transfers between the\nseparate systems. Proxies are like data references in that regard, they refer to the\nactual objects or values stored on the ISC host, and know how to manipulate them. Proxies\nprovide a consistent interface to access the smart contract data."),(0,o.kt)("h2",{id:"value-proxies"},"Value Proxies"),(0,o.kt)("p",null,"The most basic proxies are value proxies. They refer to a single value instance stored on\nthe ISC host. All values are stored as key/value pairs in container objects on the ISC\nhost. Value proxies refer to their values through an object id and key id combination that\nuniquely defines the value's location in the container object."),(0,o.kt)("h2",{id:"container-proxies"},"Container Proxies"),(0,o.kt)("p",null,"To keep things as simple and understandable as possible these are limited to only two\ndifferent kinds. Array proxies and map proxies. Because we allow nesting of container\nobjects, these are enough to be able to define quite complex data structures. The\nunderlying ISC sandbox provides access to its data in the form of simple key/value stores\nthat can have arbitrary byte data for both key and value. WasmLib provides an abstraction\non top of this one-dimensional storage system that supports nesting of maps and arrays,\nvery similar to the way objects in YAML or JSON can be nested."),(0,o.kt)("h3",{id:"map-proxies"},"Map Proxies"),(0,o.kt)("p",null,"A map is a key/value store where the key is one of our supported value types. Maps always\nstore elements of the same data type, which can be one of our supported value types, a\nuser-defined data type, or another container object (map or array)."),(0,o.kt)("h3",{id:"array-proxies"},"Array Proxies"),(0,o.kt)("p",null,"An array can be seen as a special kind of map. Its key is an integer value with the\nproperty that keys always form a sequence from 0 to N-1 for an array with N elements.\nArrays always store elements of the same data type, which can be one of our supported\nvalue types, a user-defined type, or a map. We do not support arrays of arrays at this\nmoment."),(0,o.kt)("h2",{id:"example-that-shows-the-use-of-proxies-in-wasmlib"},"Example That Shows the Use of Proxies in WasmLib"),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(85288).Z},(0,o.kt)("img",{alt:"Proxies in WasmLib",src:a(40960).Z,width:"862",height:"686"}))),(0,o.kt)("p",null,"In this example we have a single map in the ISC state storage that contains a number of\nkey/value combinations (Key 1 through Key 4). One of them (Key 4)\nrefers to an array, which in turn contains indexed values stored at indexes 0 through N.\nNotice how the WasmLib proxies mirror these exactly. There is a container proxy for every\ncontainer, and a value proxy for each value stored. Each container proxy can uniquely\nidentify the container it references through the container's id. Each value proxy uniquely\nidentifies the value it references through the container id of the container it is in, and\nthe key id (or index) that correlates to its position in the container."),(0,o.kt)("p",null,"Note that despite the one-to-one correspondence in the example it is not necessary for a\nsmart contract function to define a proxy for every value or container in the ISC state\nstorage. In practice a function will only define proxies to data that it actually needs to\naccess."),(0,o.kt)("p",null,"In the next section we will go into more detail about the supported ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/types"},"data types"),"."))}m.isMDXComponent=!0},85288:function(e,t,a){t.Z=a.p+"assets/files/Proxies-2066daf7b371183fb722d7583cb6b6bb.png"},40960:function(e,t,a){t.Z=a.p+"assets/images/Proxies-2066daf7b371183fb722d7583cb6b6bb.png"}}]);
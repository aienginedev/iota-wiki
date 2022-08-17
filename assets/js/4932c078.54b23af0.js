"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[15976],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,f=d["".concat(s,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],c={keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",image:"/img/logo/WASP_logo_dark.png"},s="Smart Contract Schema Tool",l={unversionedId:"guide/schema/schema",id:"guide/schema/schema",title:"Smart Contract Schema Tool",description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/schema.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/",permalink:"/smart-contracts/guide/schema/",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/schema.mdx",tags:[],version:"current",frontMatter:{keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Call Context",permalink:"/smart-contracts/guide/wasm_vm/context"},next:{title:"Using the Schema Tool",permalink:"/smart-contracts/guide/schema/usage"}},u={},m=[],d={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-schema-tool"},"Smart Contract Schema Tool"),(0,r.kt)("p",null,"Smart contracts need to be very robust. The generic nature of WasmLib allows for a lot of\nflexibility, but it also a lot of opportunities to make mistakes. In addition, there is a\nlot of repetitive coding involved. The setup code that is needed for every smart contract\nmust follow strict rules. You want to assure that certain functions can only be called by\nspecific entities, and that function parameters values have been properly checked before\ntheir usage."),(0,r.kt)("p",null,"The best way to increase robustness is by using a code generator that will take care of\nmost repetitive coding tasks. A code generator only needs to be debugged once, after which\nthe generated code is 100% accurate and trustworthy. Another advantage of code generation\nis that you can regenerate code to correctly reflect any changes to the smart contract\ninterface. A code generator can also help you by generating wrapper code that limits what\nyou can do to mirror the intent behind it. This enables compile-time enforcing of some\naspects of the defined smart contract behavior. A code generator can also support multiple\ndifferent programming languages."),(0,r.kt)("p",null,"During the initial experiences creating demo smart contracts for WasmLib, we quickly\nidentified a number of areas where there was a lot of repetitive coding going on. Some\nexamples of repetition were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up the ",(0,r.kt)("inlineCode",{parentName:"li"},"on_load")," function and keeping it up to date"),(0,r.kt)("li",{parentName:"ul"},"Checking function access rights"),(0,r.kt)("li",{parentName:"ul"},"Verifying function parameter types"),(0,r.kt)("li",{parentName:"ul"},"Verifying the presence of mandatory function parameters"),(0,r.kt)("li",{parentName:"ul"},"Setting up access to state, params, and results maps"),(0,r.kt)("li",{parentName:"ul"},"Defining common strings as constants")),(0,r.kt)("p",null,"To facilitate the code generation, we decided to use a ",(0,r.kt)("em",{parentName:"p"},"schema definition file")," for smart\ncontracts. All aspects of a smart contract that should be known by someone who wants to\nuse the contract are clearly defined in a schema definition file. This schema definition\nfile then becomes the source of truth for how the smart contract works."),(0,r.kt)("p",null,"The schema definition file defines things like the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/state"},"state")," variables that the\nsmart contract uses, the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/funcs"},"Funcs")," and ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/views"},"Views")," that the contract\nimplements, the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/access"},"access rights")," for each function, the\n",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/params"},"input parameters")," and ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/results"},"output results")," for each function, and\nadditional data structures that the contract uses."),(0,r.kt)("p",null,"With detailed schema information readily available in a single location, it becomes\npossible to do a lot more than just generating repetitive code fragments. You can use the\nschema information to generate interfaces for functions, parameters, results, and state\nthat use strict compile-time type-checking. This reduces the likelihood of introducing\nerrors significantly."),(0,r.kt)("p",null,"Another advantage of knowing everything about important smart contract aspects is that it\nis possible to generate constants to prevent repeating of typo-prone key strings, and\nprecalculate necessary values like Hnames and encode them as constants instead of having\nthe code recalculate them every time they are needed."),(0,r.kt)("p",null,"Similarly, since you know all static keys that are going to be used by the smart contract\nin advance, you can now generate code that will negotiate the corresponding key IDs with\nthe host only once in the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load")," function, and cache those values for use in future\nfunction calls."),(0,r.kt)("p",null,"The previous two optimizations mean that the code becomes both simpler and more efficient.\nNote that all the improvements described above are independent of the programming language\nused."),(0,r.kt)("p",null,"Future additions that we envision for the schema tool are the automatic generation of\nsmart contract interface classes to use with client side Javascript, and automatic\ngeneration of a web API for smart contracts. The schema definition file can also provide\na starting point for other tooling, for example a tool that automatically audits a smart\ncontract."),(0,r.kt)("p",null,"In the next section we will look at ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/usage"},"how the schema tool works"),"."))}h.isMDXComponent=!0}}]);
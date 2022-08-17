"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9899],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return h}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=l(r),h=a,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(d,i(i({ref:e},m),{},{components:r})):n.createElement(d,i({ref:e},m))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},14140:function(t,e,r){r.r(e),r.d(e,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={keywords:["EVM","EVM chain","Solidity","Smart Contracts","Ethereum"],description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},c="EVM/Solidity Based Smart Contracts",l={unversionedId:"guide/evm/introduction",id:"guide/evm/introduction",title:"EVM/Solidity Based Smart Contracts",description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/introduction.md",sourceDirName:"guide/evm",slug:"/guide/evm/introduction",permalink:"/smart-contracts/guide/evm/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/introduction.md",tags:[],version:"current",frontMatter:{keywords:["EVM","EVM chain","Solidity","Smart Contracts","Ethereum"],description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Colored Tokens and Time Locks",permalink:"/smart-contracts/guide/schema/timelock"},next:{title:"EVM Limitations within IOTA Smart Contracts",permalink:"/smart-contracts/guide/evm/limitations"}},m={},u=[{value:"What is EVM/Solidity",id:"what-is-evmsolidity",level:3},{value:"How IOTA Smart Contracts Work With EVM",id:"how-iota-smart-contracts-work-with-evm",level:3}],p={toc:u};function h(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evmsolidity-based-smart-contracts"},"EVM/Solidity Based Smart Contracts"),(0,o.kt)("p",null,"The current release of IOTA Smart Contracts has experimental support for EVM/Solidity smart contracts as well as Wasm based smart contracts. This means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts. This allows us to offer the existing ecosystem around EVM/Solidity a familiar alternative."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This experimental implementation currently does not have the ability yet to interact with Layer 1 IOTA tokens. We will bring support for this in a later release.")),(0,o.kt)("h3",{id:"what-is-evmsolidity"},"What is EVM/Solidity"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),' stands for "Ethereum Virtual Machine", which currently is the tried and proven virtual machine running most smart contract implementations. ',(0,o.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," is the programming language of choice with EVM, and has been created for this specific purpose."),(0,o.kt)("p",null,"The main benefit of using EVM/Solidity right now is the sheer amount of resources available from it from years of development and experimentation on Ethereum. There are many articles, tutorials, examples and tools available for EVM/Solidity, and the IOTA Smart Contracts implementation is fully compatible with them. If you have experience developing on other EVM based chains you will feel right at home, and any existing contracts you've written will probably need no (or very minimal) changes to function on IOTA Smart Contracts as well."),(0,o.kt)("h3",{id:"how-iota-smart-contracts-work-with-evm"},"How IOTA Smart Contracts Work With EVM"),(0,o.kt)("p",null,"With IOTA Smart Contracts, an EVM based chain runs inside an IOTA Smart Contracts chain as an IOTA Smart Contracts smart contract. Because of this, it is possible to run both Wasm based smart contracts and an EVM chain in a single IOTA Smart Contracts chain. We offer an EVM compatible JSON-RPC server as part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp-cli"),", which allows you to connect to these EVM Chains using existing tooling like ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),". Deploying to a new EVM chain is as easy as pointing your tools to the address of your JSON-RPC gateway."))}h.isMDXComponent=!0}}]);
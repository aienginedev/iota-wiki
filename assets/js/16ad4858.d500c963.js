"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38544],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,c(c({ref:e},u),{},{components:n})):a.createElement(h,c({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93015:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),c=["components"],i={description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},s="Smart Contracts",l={unversionedId:"guide/core_concepts/smart-contracts",id:"guide/core_concepts/smart-contracts",title:"Smart Contracts",description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/smart-contracts",permalink:"/smart-contracts/develop/guide/core_concepts/smart-contracts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/smart-contracts.md",tags:[],version:"current",frontMatter:{description:"Smart contracts are applications you can trust that run on a distributed network with multiple validators all executing and validating the same code.",image:"/img/Banner/banner_wasp_core_concepts_smart_contracts.png",keywords:["smart contracts","blockchain","parallel","scaling","explanation"]},sidebar:"tutorialSidebar",previous:{title:"IOTA Smart Contracts",permalink:"/smart-contracts/develop/overview"},next:{title:"ISC Architecture",permalink:"/smart-contracts/develop/guide/core_concepts/isc-architecture"}},u={},p=[{value:"Applications You Can Trust",id:"applications-you-can-trust",level:2},{value:"Scalable Smart Contracts",id:"scalable-smart-contracts",level:2}],d={toc:p};function m(t){var e=t.components,i=(0,r.Z)(t,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wasp Node Smart Contracts",src:n(94462).Z,width:"862",height:"200"})),(0,o.kt)("p",null,"Smart contracts are software applications that run on a distributed network with multiple validators executing and validating the same code. This prevents tampering with the execution of the program and ensures that the application behaves as expected. "),(0,o.kt)("h2",{id:"applications-you-can-trust"},"Applications You Can Trust"),(0,o.kt)("p",null,"Smart contracts can be trusted because it is guaranteed that the code that is being executed will never change.\nThe rules of the smart contract define what the contract can and can not do, making it a decentralized and a predictable decision maker."),(0,o.kt)("p",null,"Smart contracts are used for all kinds of purposes.\nA recurring reason to use a smart contract would be to automate a certain action without needing a centralized entity to enforce it.\nFor example, a smart contract could exchange a certain amount of base tokens for a certain amount of land ownership.\nThat smart contract would accept both the base tokens and the land ownership and predictably exchange them between both parties.\nIt excludes the risk of one of the parties not delivering on their promise: with a smart contract, code is law."),(0,o.kt)("h2",{id:"scalable-smart-contracts"},"Scalable Smart Contracts"),(0,o.kt)("p",null,"Anyone could deploy a smart contract to a public smart contract chain.\nOnce it is deployed, nobody will be able to change or delete it.\nSmart contracts can communicate with one another, and they can also expose public functions that can be manually invoked to trigger their execution or check their state."),(0,o.kt)("p",null,"Smart contracts do not run on just a single computer.\nInstead, each validator of the blockchain has to execute it, compare the results with others, and synchronize the state of the network.\nThese messages are carried over the Internet and introduce delays that cannot be solved with quicker software or faster computers.\nIn single-chain platforms, this issue only gets worse if one tries to add more validators to the network.\nWith enough requests, any traditional blockchain network will get congested, and its execution fees will ramp up."),(0,o.kt)("p",null,"As IOTA Smart Contracts run many independent chains, it spreads out the load and creates a network of a much larger scale. At the same time, it provides advanced means of communication between its chains and preserves the ability to create complex, composed smart contracts."))}m.isMDXComponent=!0},94462:function(t,e,n){e.Z=n.p+"assets/images/banner_wasp_core_concepts_smart_contracts-9b7268f183de6c60a27309cfcfbe6f16.png"}}]);
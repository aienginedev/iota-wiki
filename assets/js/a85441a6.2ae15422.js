"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59461],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(f,i(i({ref:t},h),{},{components:n})):a.createElement(f,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96262:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"tangle",title:"The Tangle",description:"The Tangle is the data structure behind IOTA and it is different from a blockchain.",image:"/img/iota-wiki.png",keywords:["explanation"]},s="The Tangle",c={unversionedId:"about-iota/tangle",id:"about-iota/tangle",title:"The Tangle",description:"The Tangle is the data structure behind IOTA and it is different from a blockchain.",source:"@site/internal/learn/about-iota/tangle.md",sourceDirName:"about-iota",slug:"/about-iota/tangle",permalink:"/learn/about-iota/tangle",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/internal/learn/about-iota/tangle.md",tags:[],version:"current",lastUpdatedAt:1658188502,formattedLastUpdatedAt:"Jul 18, 2022",frontMatter:{id:"tangle",title:"The Tangle",description:"The Tangle is the data structure behind IOTA and it is different from a blockchain.",image:"/img/iota-wiki.png",keywords:["explanation"]},sidebar:"learn",previous:{title:"IOTA",permalink:"/learn/about-iota/an-introduction-to-iota"},next:{title:"Data Transfer",permalink:"/learn/about-iota/data-transfer"}},h={},u=[{value:"The Tangle Versus Blockchains",id:"the-tangle-versus-blockchains",level:2},{value:"Blockchains",id:"blockchains",level:3},{value:"The Tangle",id:"the-tangle-1",level:3}],p={toc:u};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-tangle"},"The Tangle"),(0,r.kt)("p",null,"The Tangle is a structure that holds all necessary information to keep track of token ownership. It is a directed acyclic graph (DAG) of messages, where each newer message is attached to two to eight older ones. The protocol can process these various attachments in parallel."),(0,r.kt)("p",null,"IOTA nodes reach consensus on the ledger state by validating massages. Anyone can send a message ",(0,r.kt)("a",{parentName:"p",href:"/learn/about-iota/why-is-iota-feeless"},"for free"),". Currently, messages will only be considered valid if they reference a milestone. Milestones are issued by a special network node that is called ",(0,r.kt)("a",{parentName:"p",href:"/learn/about-iota/coordinator"},"Coordinator"),"."),(0,r.kt)("h2",{id:"the-tangle-versus-blockchains"},"The Tangle Versus Blockchains"),(0,r.kt)("p",null,"The Tangle and blockchains serve the same function of maintaining their ledger states, but the Tangle's different implementation leads to unique benefits."),(0,r.kt)("h3",{id:"blockchains"},"Blockchains"),(0,r.kt)("p",null,"In a blockchain, new transactions can only be attached to a single point, a new block. This block is directly linked to the previous block, so the network can work only on a single block at a time. You need to wait until a new block with your transaction is formed, and if there are too many transactions some of them will be postponed until the next block or later. This is called the ",(0,r.kt)("em",{parentName:"p"},"blockchain bottleneck")," effect."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An animation of a blockchain where new transactions have to pass through a narrow gap one by one.",src:n(35938).Z,title:"Click to see the full-sized image.",width:"867",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The blockchain bottleneck.")),(0,r.kt)("p",null,"Transactions in a blockchain can only become part of the ledger if they are included in a newly issued block by the block producer (a miner in Proof of Work blockchains, a staker in Proof of Stake blockchains). In nearly all blockchains, the block producers can decide which new transactions they include in their blocks. They of course favor users willing to pay higher fees for their transactions. Any time there are more transactions that can pass through the blockchain bottleneck, the transaction fees ramp up."),(0,r.kt)("p",null,"There is more. In blockchains, each block producer works on a potential new block, but only a single producer will become the leader of the blockchain and get its block attached. All other potential blocks will be discarded \u2014 and in case of PoW systems, all effort and electricity put into computing them will be wasted."),(0,r.kt)("p",null,"Only the blockchain leader collects the reward for producing a block. Only the largest miners and stakers can collect this reward consistently. It promotes a system with fewer but bigger players, which can be perceived as a form of centralization."),(0,r.kt)("h3",{id:"the-tangle-1"},"The Tangle"),(0,r.kt)("p",null,'The Tangle is a network of parallel processed messages. These parallel messages form the "front" of the Tangle and offer multiple points for newly issued messages to attach to. There are no block producers, and it is enough to issue your transaction to any node so it would wrap it into a message and attach it to the Tangle.'),(0,r.kt)("p",null,"IOTA is a leaderless protocol. Multiple nodes attach multiple transaction messages to multiple points of the Tangle at the same time. IOTA has no bottlenecks, no middlemen, and no fees."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An animation of the Tangle where the passage is much wider and allows multiple transactions at a time.",src:n(76475).Z,width:"867",height:"500"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Allowing parallel processing removes congestion.")))}d.isMDXComponent=!0},35938:function(e,t,n){t.Z=n.p+"assets/images/blockchain-bottleneck-c807d504ff52169427d3ca4cf0179a8c.gif"},76475:function(e,t,n){t.Z=n.p+"assets/images/tangle-bottleneck-ad9ab01d5399a5cefbac1cbd1be3900a.gif"}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42088],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33426:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen."},l="IOTA 1.5 Chrysalis",c={unversionedId:"iota-1.5-chrysalis",id:"iota-1.5-chrysalis",title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen.",source:"@site/content/networks/iota-1.5-chrysalis.md",sourceDirName:".",slug:"/iota-1.5-chrysalis",permalink:"/networks/iota-1.5-chrysalis",draft:!1,editUrl:"https://github.com/iota-community/iota-wiki/edit/main/content/networks/iota-1.5-chrysalis.md",tags:[],version:"current",lastUpdatedAt:1659306152,formattedLastUpdatedAt:"Jul 31, 2022",frontMatter:{title:"IOTA 1.5 Chrysalis",description:"The current Mainnet implementation where all IOTA transactions and use cases happen."},sidebar:"networks",next:{title:"IOTA 2.0 Coordicide",permalink:"/networks/iota-2.0-coordicide"}},u={},h=[{value:"Vision",id:"vision",level:2},{value:"Launch",id:"launch",level:2},{value:"Migration",id:"migration",level:2},{value:"Useful Links",id:"useful-links",level:2}],p={toc:h};function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iota-15-chrysalis"},"IOTA 1.5 Chrysalis"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Chrysalis",src:n(27209).Z,width:"862",height:"200"})),(0,i.kt)("h2",{id:"vision"},"Vision"),(0,i.kt)("p",null,'The IOTA Foundation is well on the way to realizing its core goal of a decentralized IOTA mainnet. Considerable progress has been made in basic research on removing the coordinator: this is referred to as "Coordicide". Some Coordicide modules have already been added to the IOTA mainnet, including autopeering and object storage. Before the Coordicide can be completed, the IOTA mainnet had to be further optimized to provide a business-compatible solution for the ecosystem.'),(0,i.kt)("p",null,'This intermediate update ran under the project name "Chrysalis". A chrysalis is a shape that a caterpillar takes before it emerges from its cocoon as a fully developed moth or butterfly. In the context of IOTA, Chrysalis stands for the transformation of the mainnet into a mature form to bring IOTA to production readiness.'),(0,i.kt)("p",null,"To describe the status of the network more concisely, it is also marked as IOTA 1.5. Anyone can start building projects on the Tangle without worrying about the need for major refactoring regarding the final network migration. There will be no significant changes on the way to IOTA 2.0 (Coordicide), as the majority of the code base including tools, libraries, and APIs is already available."),(0,i.kt)("h2",{id:"launch"},"Launch"),(0,i.kt)("p",null,"Chrysalis is the most significant update in IOTA's history; it covers all aspects of the protocol, libraries, wallets, and software implementations developed by the IOTA Foundation. The update of the Tangle fixes technical problems and inefficiencies and implements further improvements in terms of performance and security. Exotic aspects of the protocol have been replaced by established standards and a wealth of new tools have been made available to developers, businesses, and exchanges."),(0,i.kt)("p",null,"The first major milestone was achieved with the deployment of Chrysalis Phase One in August 2020. This update included a set of components improving the reliability, performance, and usability of the IOTA network."),(0,i.kt)("p",null,"The first phase of Chrysalis resulted in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transaction confirmation times of around 10 seconds"),(0,i.kt)("li",{parentName:"ul"},"Reduction of the need to reattach transactions to the Tangle"),(0,i.kt)("li",{parentName:"ul"},"A significant increase in TPS (transactions per second)"),(0,i.kt)("li",{parentName:"ul"},"Performance and reliability improvements for the nodes")),(0,i.kt)("p",null,"Since April 2021 the complete Chrysalis Network is finally live. It is supposed to give the Tangle a noticeable performance boost and it simplifies handling for developers and interested companies enormously. All users should be able to benefit from several new features through the new version. In addition to the improved performance of the Tangle, a lot has changed, especially in the area of account management."),(0,i.kt)("p",null,"The second phase of Chrysalis consisted of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reusable addresses and support for standard cryptography (EdDSA)"),(0,i.kt)("li",{parentName:"ul"},"A simplified transaction layout and a reduction in transaction size, which leads to an increase in performance and efficiency"),(0,i.kt)("li",{parentName:"ul"},"Significant improvements in the usability and reliability of IOTA"),(0,i.kt)("li",{parentName:"ul"},"A change from the account model to a UTXO-based model")),(0,i.kt)("h2",{id:"migration"},"Migration"),(0,i.kt)("p",null,"The legacy network is still operational to guarantee the migration of IOTA tokens at any time before Coordicide. It is no longer possible to transfer funds in the old network."),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://blog.iota.org/chrysalis-migration-process/"},"this blog post")," for more details about the migration of IOTA tokens. Tokens held on exchanges will be migrated by the respective exchanges on behalf of their customers."),(0,i.kt)("p",null,"All users maintaining a node in the new or the legacy network can upgrade their systems using the latest releases on GitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gohornet/hornet"},(0,i.kt)("strong",{parentName:"a"},"Chrysalis Hornet"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/bee"},(0,i.kt)("strong",{parentName:"a"},"Chrysalis Bee"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gohornet/hornet/releases/tag/v0.5.8"},(0,i.kt)("strong",{parentName:"a"},"Legacy Hornet")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"useful-links"},"Useful Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chrysalis.iota.org/"},(0,i.kt)("strong",{parentName:"a"},"chrysalis.iota.org"))," - Official Chrysalis Status Page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.iota.org/iota-chrysalis-a-new-dawn/"},(0,i.kt)("strong",{parentName:"a"},"blog.iota.org/iota-chrysalis-a-new-dawn"))," - Blog post Announcement to Chrysalis")))}d.isMDXComponent=!0},27209:function(e,t,n){t.Z=n.p+"assets/images/banner_chrysalis-9898df7ed2cc8f02ae02b0d0cdefac9b.svg"}}]);
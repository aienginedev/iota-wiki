"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79494],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12230:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={toc:[{value:"Stronghold Snapshot",id:"stronghold-snapshot",level:2}]};function c(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"stronghold-snapshot"},"Stronghold Snapshot"),(0,a.kt)("p",null,"This crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem."),(0,a.kt)("p",null,"The snapshot format follows a fairly simple specification:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"th"},"Header")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Magic Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Version Bytes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("strong",{parentName:"td"},"Body"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Ephemeral Key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"xchacha20 tag")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Cipher Text")))),(0,a.kt)("p",null,"The format has a header with version and magic bytes to appease applications wishing to provide file-type detection. "),(0,a.kt)("p",null,"The body format has a ephemeral public key followed by the xchacha20 tag and the cipher text. "),(0,a.kt)("p",null,"The data stored within a snapshot is considered opaque and uses 256 bit keys. It provides recommended ways to derive the snapshot encryption key from a user provided password. The format also allows using an authenticated data bytestring to further protect the offline snapshot files (one might consider using a secondary user password strengthened by an HSM)."),(0,a.kt)("p",null,"The current version of the format is using X25519 together with an ephemeral key to derive a shared key for the symmetric XChaCha20 cipher and uses the Poly1305 message authentication algorithm. Future versions, when the demands for larger snapshot sizes and/or random access is desired, might consider encrypting smaller chunks (B-trees?) or similar using per chunk derived ephemeral keys."))}c.isMDXComponent=!0;var p=["components"],l={description:"The snapshot crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","magic bytes","offline storage"]},u="Structure: Engine::Snapshot",d={unversionedId:"reference/structure/engine/snapshot",id:"reference/structure/engine/snapshot",title:"Structure: Engine::Snapshot",description:"The snapshot crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.",source:"@site/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/snapshot.md",sourceDirName:"reference/structure/engine",slug:"/reference/structure/engine/snapshot",permalink:"/stronghold.rs/reference/structure/engine/snapshot",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/content/build/stronghold.rs/develop/documentation/docs/reference/structure/engine/snapshot.md",tags:[],version:"current",frontMatter:{description:"The snapshot crate defines and implements the encrypted offline storage format used by the Stronghold ecosystem.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","crate","magic bytes","offline storage"]},sidebar:"mySidebar",previous:{title:"Structure: Engine",permalink:"/stronghold.rs/reference/structure/engine/overview"},next:{title:"Structure: Engine::Vault",permalink:"/stronghold.rs/reference/structure/engine/vault"}},h={},m=[],g={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"structure-enginesnapshot"},"Structure: Engine::Snapshot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/engine/src/snapshot"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/stronghold_engine/latest/engine/snapshot/index.html"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/stronghold-engine"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/stronghold-engine.svg",alt:null}))),(0,a.kt)(c,{mdxType:"Snapshot"}))}f.isMDXComponent=!0}}]);
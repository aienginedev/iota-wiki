"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78511],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=o,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},63622:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Changelog",sidebar_label:"Changelog"},c=void 0,d={unversionedId:"specs/didcomm/CHANGELOG",id:"specs/didcomm/CHANGELOG",title:"Changelog",description:"All notable changes to this project will be documented in this file.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/specs/didcomm/CHANGELOG.md",sourceDirName:"specs/didcomm",slug:"/specs/didcomm/CHANGELOG",permalink:"/identity.rs/specs/didcomm/CHANGELOG",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/specs/didcomm/CHANGELOG.md",tags:[],version:"current",frontMatter:{title:"Changelog",sidebar_label:"Changelog"},sidebar:"docs",previous:{title:"Problem Reports",permalink:"/identity.rs/specs/didcomm/resources/problem-reports"},next:{title:"Glossary",permalink:"/identity.rs/glossary"}},u={},p=[{value:"Unreleased",id:"unreleased",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Removed",id:"removed",level:3},{value:"0.1.0 - 2021-10-29",id:"010---2021-10-29",level:2},{value:"Added",id:"added-1",level:3}],s={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,i.kt)("p",null,"The format is based on ",(0,i.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),"."),(0,i.kt)("h2",{id:"unreleased"},"[Unreleased]"),(0,i.kt)("h3",{id:"added"},"Added"),(0,i.kt)("h3",{id:"changed"},"Changed"),(0,i.kt)("h3",{id:"removed"},"Removed"),(0,i.kt)("h2",{id:"010---2021-10-29"},"[0.1.0]"," - 2021-10-29"),(0,i.kt)("p",null,"Initial version of IOTA DIDComm specification ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/pull/379"},"(#379)"),"."),(0,i.kt)("h3",{id:"added-1"},"Added"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication protocol"),(0,i.kt)("li",{parentName:"ul"},"Connection protocol"),(0,i.kt)("li",{parentName:"ul"},"Issuance protocol"),(0,i.kt)("li",{parentName:"ul"},"Post protocol"),(0,i.kt)("li",{parentName:"ul"},"Presentation protocol"),(0,i.kt)("li",{parentName:"ul"},"Revocation Options protocol"),(0,i.kt)("li",{parentName:"ul"},"Revocation protocol"),(0,i.kt)("li",{parentName:"ul"},"Signing protocol]"),(0,i.kt)("li",{parentName:"ul"},"Termination protocol"),(0,i.kt)("li",{parentName:"ul"},"CredentialInfo resource"),(0,i.kt)("li",{parentName:"ul"},"Problem Reports resource")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8531],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,o(o({ref:e},u),{},{components:n})):r.createElement(g,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87401:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Getting started with the official IOTA Client Library Wasm binding.",image:"/img/logo/iota_mark_light.png",keywords:["wasm","npm","how-to"]},l="Getting Started with Wasm",c={unversionedId:"getting_started/wasm_getting_started",id:"getting_started/wasm_getting_started",title:"Getting Started with Wasm",description:"Getting started with the official IOTA Client Library Wasm binding.",source:"@site/content/build/streams/develop/documentation/docs/getting_started/wasm_getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/wasm_getting_started",permalink:"/streams/getting_started/wasm_getting_started",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/getting_started/wasm_getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Wasm binding.",image:"/img/logo/iota_mark_light.png",keywords:["wasm","npm","how-to"]},sidebar:"docs",previous:{title:"Getting Started with Rust",permalink:"/streams/getting_started/rust_getting_started"},next:{title:"Getting Started with C",permalink:"/streams/getting_started/c_getting_started"}},u={},p=[{value:"Install the Library",id:"install-the-library",level:2},{value:"Start a Channel",id:"start-a-channel",level:2}],d={toc:p};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-wasm"},"Getting Started with Wasm"),(0,i.kt)("p",null,"Before building anything you'll need to make sure you have ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," installed on your\nmachine."),(0,i.kt)("p",null,"Before building anything, you will need to make sure you have ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"npm"))," installed on your machine."),(0,i.kt)("h2",{id:"install-the-library"},"Install the Library"),(0,i.kt)("p",null,"To install a library, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/streams\n")),(0,i.kt)("h2",{id:"start-a-channel"},"Start a Channel"),(0,i.kt)("p",null,"Once the package has been built, you can pull it into a script file: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const streams = require("@iota/streams/node");\n\nlet node = "https://chrysalis-nodes.iota.org/";\n\n// Options include: (node-url, local pow)\nlet options = new streams.SendOptions(node, true);\n\nlet author = new streams.Author("Unique Seed Here", options.clone(), streams.ChannelType.MultiBranch );\n\n// Response formatting: {link, sequence link, msg }\nlet response = await author.clone().send_announce();\n\nlet ann_link = response.link;\n\nconsole.log("Channel Announcement at: ", ann_link.toString());\n')))}m.isMDXComponent=!0}}]);
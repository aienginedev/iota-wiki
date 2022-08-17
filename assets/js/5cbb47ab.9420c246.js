"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5849],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},92579:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),l=["components"],o={title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},s=void 0,u={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started with Rust",description:"Getting started with the IOTA Identity Rust Library.",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/identity.rs/libraries/rust/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/libraries/overview"},next:{title:"Getting Started",permalink:"/identity.rs/libraries/wasm/getting_started"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Include the Library",id:"include-the-library",level:2},{value:"Latest Stable Release",id:"latest-stable-release",level:3},{value:"Development Release",id:"development-release",level:3},{value:"Examples",id:"examples",level:2},{value:"API Reference",id:"api-reference",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," (>= 1.60)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"Cargo")," (>= 1.60)")),(0,a.kt)("h2",{id:"include-the-library"},"Include the Library"),(0,a.kt)("p",null,"To include IOTA Identity in your project add it as a dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,a.kt)("h3",{id:"latest-stable-release"},"Latest Stable Release"),(0,a.kt)("p",null,"This version is published to crates.io and is ",(0,a.kt)("strong",{parentName:"p"},"stable"),", following semantic versioning."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nidentity_iota = { version = "0.6" }\n')),(0,a.kt)("h3",{id:"development-release"},"Development Release"),(0,a.kt)("p",null,"This version matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,a.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,a.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nidentity_iota = { git = "https://github.com/iotaledger/identity.rs", branch = "dev"}\n')),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"To try out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/main/examples"},"examples"),", you should:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Clone the repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/identity.rs\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build the repository:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run your first example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example getting_started\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,"The API reference for the Rust library can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/identity_iota/0.6.1/identity_iota/index.html"},"docs.rs"),"."),(0,a.kt)("p",null,"If you would like to build the documentation locally you can do so with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"RUSTDOCFLAGS='--cfg docsrs' cargo +nightly doc -p identity_iota --all-features --no-deps --open\n")))}m.isMDXComponent=!0}}]);
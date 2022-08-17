"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[22549],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={},c=void 0,p={unversionedId:"reference/java_api/MilestonePayloadEssence",id:"reference/java_api/MilestonePayloadEssence",title:"MilestonePayloadEssence",description:"index(): long",source:"@site/content/build/wallet.rs/production/documentation/docs/reference/java_api/MilestonePayloadEssence.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/MilestonePayloadEssence",permalink:"/wallet.rs/reference/java_api/MilestonePayloadEssence",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/reference/java_api/MilestonePayloadEssence.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"index(): long",id:"index-long",level:3},{value:"timestamp(): long",id:"timestamp-long",level:3},{value:"parents(): MessageId[]",id:"parents-messageid",level:3},{value:"merkleProof(): byte[]",id:"merkleproof-byte",level:3},{value:"nextPowScore(): long",id:"nextpowscore-long",level:3},{value:"nextPowScoreMilestone(): long",id:"nextpowscoremilestone-long",level:3},{value:"publicKeys(): PublicKey[]",id:"publickeys-publickey",level:3},{value:"receipt(): Optional&lt;ReceiptPayload&gt;",id:"receipt-optionalreceiptpayload",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"index-long"},"index(): long"),(0,a.kt)("p",null,"Returns the index of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"timestamp-long"},"timestamp(): long"),(0,a.kt)("p",null,"Returns the timestamp of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"parents-messageid"},"parents(): ",(0,a.kt)("a",{parentName:"h3",href:"#messageid"},"MessageId[]")),(0,a.kt)("p",null,"Returns the parents of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"merkleproof-byte"},"merkleProof(): byte[]"),(0,a.kt)("p",null,"Returns the merkle proof of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"nextpowscore-long"},"nextPowScore(): long"),(0,a.kt)("p",null,"Returns the next proof of work score of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"nextpowscoremilestone-long"},"nextPowScoreMilestone(): long"),(0,a.kt)("p",null,"Returns the next proof of work index of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"publickeys-publickey"},"publicKeys(): ",(0,a.kt)("a",{parentName:"h3",href:"#publickey"},"PublicKey[]")),(0,a.kt)("p",null,"Returns the public keys of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."),(0,a.kt)("h3",{id:"receipt-optionalreceiptpayload"},"receipt(): Optional","<",(0,a.kt)("a",{parentName:"h3",href:"#receiptpayload"},"ReceiptPayload"),">"),(0,a.kt)("p",null,"Returns the optional receipt of a ",(0,a.kt)("inlineCode",{parentName:"p"},"MilestonePayloadEssence"),"."))}f.isMDXComponent=!0}}]);
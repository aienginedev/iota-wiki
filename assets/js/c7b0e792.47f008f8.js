"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30360],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87134:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={description:"How to run your own private Chrysalis Tangle",image:"/img/Banner/banner_hornet_private_tangle.png",keywords:["IOTA Node","HORNET Node","Private Tangle","Chrysalis","Coordinator","Wallet","how to"]},s="Run a Private Tangle",u={unversionedId:"how_tos/private_tangle",id:"how_tos/private_tangle",title:"Run a Private Tangle",description:"How to run your own private Chrysalis Tangle",source:"@site/content/build/hornet/develop/documentation/docs/how_tos/private_tangle.md",sourceDirName:"how_tos",slug:"/how_tos/private_tangle",permalink:"/hornet/develop/how_tos/private_tangle",draft:!1,editUrl:"https://github.com/iotaledger/hornet/edit/develop/documentation/content/build/hornet/develop/documentation/docs/how_tos/private_tangle.md",tags:[],version:"current",frontMatter:{description:"How to run your own private Chrysalis Tangle",image:"/img/Banner/banner_hornet_private_tangle.png",keywords:["IOTA Node","HORNET Node","Private Tangle","Chrysalis","Coordinator","Wallet","how to"]},sidebar:"mySidebar",previous:{title:"Post-installation",permalink:"/hornet/develop/how_tos/post_installation"},next:{title:"Configuration",permalink:"/hornet/develop/references/configuration"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Download the latest release",id:"download-the-latest-release",level:2},{value:"Bootstrap your network",id:"bootstrap-your-network",level:2},{value:"Run your network",id:"run-your-network",level:2},{value:"Access your network",id:"access-your-network",level:2}],d={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-a-private-tangle"},"Run a Private Tangle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HORNET Node Private Tangle",src:n(13210).Z,width:"862",height:"200"})),(0,a.kt)("p",null,"This guide explains how you can run your own private tangle.\nPrivate tangles are targetted at developers wanting to test their solutions in a private network environment. "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A recent release of Docker enterprise or community edition. You can find installation instructions in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"official Docker documentation"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/compose-plugin/"},"Docker Compose CLI plugin"),".")),(0,a.kt)("h2",{id:"download-the-latest-release"},"Download the latest release"),(0,a.kt)("p",null,"Once you have completed all the installation ",(0,a.kt)("a",{parentName:"p",href:"#requirements"},"requirements"),", you can download the latest release by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'mkdir private_tangle\ncd private_tangle\ncurl -L -O "https://github.com/iotaledger/hornet/releases/download/v2.0.0-beta.6/HORNET-2.0.0-beta.6-private_tangle.tar.gz"\ntar -zxf HORNET-2.0.0-beta.6-private_tangle.tar.gz\n')),(0,a.kt)("h2",{id:"bootstrap-your-network"},"Bootstrap your network"),(0,a.kt)("p",null,"To bootstrap the network you should run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./bootstrap.sh\n")),(0,a.kt)("h2",{id:"run-your-network"},"Run your network"),(0,a.kt)("p",null,"To run the private tangle you should run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./run.sh\n")),(0,a.kt)("p",null,"This will start the private tangle using a coordinator node and second node.\nYou can use ",(0,a.kt)("inlineCode",{parentName:"p"},"./run.sh 3")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"./run.sh 4")," to start the private tangle with additional nodes instead."),(0,a.kt)("h2",{id:"access-your-network"},"Access your network"),(0,a.kt)("p",null,"All the information required to access the private tangle is contained inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),"."))}h.isMDXComponent=!0},13210:function(e,t,n){t.Z=n.p+"assets/images/banner_hornet_private_tangle-44269a4533cbb6b132f26a80bf4776eb.png"}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64823],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),y=o,f=d["".concat(l,".").concat(y)]||d[y]||p[y]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95850:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={description:"This section provides a checklist of steps for running a reliable and secure node.",image:"/img/logo/bee_logo.png",keywords:["nodes","reverse proxy","ports","API","requests","SSH","explanation"]},l="Security 101",u={unversionedId:"explanations/security_101",id:"explanations/security_101",title:"Security 101",description:"This section provides a checklist of steps for running a reliable and secure node.",source:"@site/content/build/bee/production/documentation/docs/explanations/security_101.md",sourceDirName:"explanations",slug:"/explanations/security_101",permalink:"/bee/explanations/security_101",draft:!1,editUrl:"https://github.com/iotaledger/bee/edit/production/documentation/content/build/bee/production/documentation/docs/explanations/security_101.md",tags:[],version:"current",frontMatter:{description:"This section provides a checklist of steps for running a reliable and secure node.",image:"/img/logo/bee_logo.png",keywords:["nodes","reverse proxy","ports","API","requests","SSH","explanation"]},sidebar:"mySidebar",previous:{title:"Nodes 101",permalink:"/bee/explanations/nodes_101"},next:{title:"Configuration",permalink:"/bee/references/configuration"}},c={},p=[{value:"Securing Your Device",id:"securing-your-device",level:2},{value:"Securing SSH logins",id:"securing-ssh-logins",level:3},{value:"Blocking Unnecessary Ports",id:"blocking-unnecessary-ports",level:3},{value:"Deciding Whether to Enable Remote Proof of Work",id:"deciding-whether-to-enable-remote-proof-of-work",level:2},{value:"Load Balancing",id:"load-balancing",level:2},{value:"Reverse Proxy",id:"reverse-proxy",level:2}],d={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-101"},"Security 101"),(0,a.kt)("p",null,"This section explains how and why node security is important while also providing a checklist of steps for running a reliable and secure node."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Servers that are reachable from the Internet are a constant target from security challengers. Please, make sure you follow the minimum security essentials summarized in this article.")),(0,a.kt)("h2",{id:"securing-your-device"},"Securing Your Device"),(0,a.kt)("p",null,"The security of the device that is running your node is of the utmost importance to stop attackers from gaining access to the node."),(0,a.kt)("p",null,"Before running a node on your device, consider:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#securing-ssh-logins"},"Securing SSH logins"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#blocking-unnecessary-ports"},"Blocking unnecessary ports"),".")),(0,a.kt)("h3",{id:"securing-ssh-logins"},"Securing SSH logins"),(0,a.kt)("p",null,"If you log into your device through SSH, you should take measures to protect it from unauthorized access. Many guides and resources have been provided on this subject, including: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.devolutions.net/2017/04/10-steps-to-secure-open-ssh"},"10 Steps to Secure Open SSH"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.fail2ban.org/wiki/index.php/Main_Page"},"Fail2ban"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Here, you can leverage tools to improve your node's security")))),(0,a.kt)("h3",{id:"blocking-unnecessary-ports"},"Blocking Unnecessary Ports"),(0,a.kt)("p",null,"Attackers can abuse any open ports on your device. Closing all of your ports except those that are in use helps secure your device from attacks on unused or open ports."),(0,a.kt)("p",null,"You can use a firewall to accomplish this, and all operating systems include firewall options. By having a firewall in place, you can completely block unused and unnecessary ports."),(0,a.kt)("p",null,"On cloud platforms such as AWS, Azure, or GCP, you can even block ports on VPS networking settings."),(0,a.kt)("h2",{id:"deciding-whether-to-enable-remote-proof-of-work"},"Deciding Whether to Enable Remote Proof of Work"),(0,a.kt)("p",null,"When you are configuring your node, you have the option to allow it to do Proof of Work (PoW). If you enable this feature, clients can ask your node to do remote PoW."),(0,a.kt)("p",null,"PoW takes time and uses your node's computational power. So consider enabling it according to your infrastructure."),(0,a.kt)("h2",{id:"load-balancing"},"Load Balancing"),(0,a.kt)("p",null,"If you run more than one node, it is a good practice to make sure that you distribute the API requests among all of them."),(0,a.kt)("p",null,"To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer (",(0,a.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache"),", etc.). This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. On the backend, the nodes with the most spare computational power will process the request and return the response."),(0,a.kt)("p",null,"Since broadcasted messages are atomic and nodes provide restful API to communicate, you will not need sticky sessions or similar technologies."),(0,a.kt)("h2",{id:"reverse-proxy"},"Reverse Proxy"),(0,a.kt)("p",null,"We recommend that you use a reverse proxy in front of a node is even if you are deploying a single node. Using a reverse proxy adds a security layer that can handle tasks such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP address filtering. "),(0,a.kt)("li",{parentName:"ul"},"Abuse rate limiting. "),(0,a.kt)("li",{parentName:"ul"},"SSL encrypting."),(0,a.kt)("li",{parentName:"ul"},"Additional authorization layer.")))}y.isMDXComponent=!0}}]);
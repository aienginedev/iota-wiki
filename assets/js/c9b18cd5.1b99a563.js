"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42985],{3905:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?t.createElement(h,i(i({ref:n},u),{},{components:a})):t.createElement(h,i({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},37155:function(e,n,a){a.r(n),a.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var t=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(34259),o=a(18679),s=["components"],c={image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example","maven","java","nodejs","javascript"]},u="Create a Channel",d={unversionedId:"how_tos/integration-services-sdk/create-channel",id:"how_tos/integration-services-sdk/create-channel",title:"Create a Channel",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-channel.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/create-channel",permalink:"/integration-services/how_tos/integration-services-sdk/create-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/create-channel.mdx",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-5 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a channel, writes data on the channel, reads data from the channel.",keywords:["how to","create channel","read channel","write channel","example","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"Trusted Authorities",permalink:"/integration-services/how_tos/integration-services-sdk/trusted-authorities"},next:{title:"Authorize a Channel",permalink:"/integration-services/how_tos/integration-services-sdk/authorize-to-channel"}},p={},m=[{value:"Create Channel",id:"create-channel",level:2},{value:"Write on a Channel",id:"write-on-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],h={toc:m};function g(e){var n=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-channel"},"Create a Channel"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"example-5")," script authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,l.kt)("a",{parentName:"p",href:"/integration-services/how_tos/integration-services-sdk/run-how-tos"},"example-0")," and then performs the following tasks:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-channel"},"Creates a channel"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#write-on-a-channel"},"Writes data on the channel"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#read-from-a-channel"},"Reads data from the channel"))),(0,l.kt)("p",null,"You can run the example with the following command:"),(0,l.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:_java -Dexec.mainClass=net.gradbase.how_tos.CreateChannel\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateChannel.java"},"Example-5"))),(0,l.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-5\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example source code"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/client-sdk/examples/5-CreateChannel.ts"},"Example-5")))),(0,l.kt)("h2",{id:"create-channel"},"Create Channel"),(0,l.kt)("p",null,"You can create a channel using the following script:"),(0,l.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, String> topics = new HashMap<String, String>();\ntopics.put("type", "example-data");\ntopics.put("source", "data-creator");\n\nList<Map<String, String>> allTopics = new ArrayList<Map<String, String>>();\nallTopics.add(topics);\n\n// Create a new channel for example data\nJSONObject newChannelDetails = channelClient.create(null, allTopics, null, null, null);\n\n// The channel address is used to read and write to channels\nString channelAddress = newChannelDetails.getString("channelAddress");\nSystem.out.println(channelAddress);\n'))),(0,l.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// The owner creates a channel where he/she want to publish data of type 'example-data'.\n    const { channelAddress } = await ownerClient.create({\n    name: `Channel-${Math.ceil(Math.random() * 100000)}`,\n    topics: [{ type: 'example-data', source: 'data-creator' }]\n});\n")))),(0,l.kt)("h2",{id:"write-on-a-channel"},"Write on a Channel"),(0,l.kt)("p",null,"You can write on a channel using the following script:"),(0,l.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Writing 3 data packets to channel\nfor (int i = 0; i < 3; i++) {\n    System.out.println("writing data to channel no " + i);\n    channelClient.write(channelAddress, "log", null, new JSONObject().put("log", "This is log number " + i));\n}\n'))),(0,l.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await channel.write(channelAddress, {\n    type: 'log',\n    created: new Date().toISOString(),\n    payload: {\n        log: `This is log file ...`\n    }\n});\n")))),(0,l.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,l.kt)("p",null,"You can read from a channel using the following script:"),(0,l.kt)(i.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"List<ChannelData> datas = channelClient.read(channelAddress, null, null, null, null, null);\n\nfor (ChannelData data : datas) {\n    System.out.println(data.toString());\n}\n"))),(0,l.kt)(o.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"const channelData = await channel.read(channelAddress);\nconsole.log('Read from channel:');\nchannelData.forEach((data) => {\n    console.log(data.log);\n});\n")))))}g.isMDXComponent=!0},18679:function(e,n,a){a.d(n,{Z:function(){return i}});var t=a(67294),r=a(86010),l="tabItem_Ymn6";function i(e){var n=e.children,a=e.hidden,i=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},n)}},34259:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(87462),r=a(67294),l=a(86010),i=a(51048),o=a(33609),s=a(1943),c=a(72957),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var n,a,i=e.lazy,p=e.block,m=e.defaultValue,h=e.values,g=e.groupId,v=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,o.l)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(n=null!=m?m:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?n:f[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),T=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,r.useState)(w),C=N[0],j=N[1],O=[],I=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var S=T[g];null!=S&&S!==C&&b.some((function(e){return e.value===S}))&&j(S)}var E=function(e){var n=e.currentTarget,a=O.indexOf(n),t=b[a].value;t!==C&&(I(n),j(t),null!=g&&x(g,String(t)))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=O.indexOf(e.currentTarget)+1;a=null!=(t=O[r])?t:O[0];break;case"ArrowLeft":var l,i=O.indexOf(e.currentTarget)-1;a=null!=(l=O[i])?l:O[O.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var n=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=a?a:n)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function m(e){var n=(0,i.Z)();return r.createElement(p,(0,t.Z)({key:String(n)},e))}}}]);
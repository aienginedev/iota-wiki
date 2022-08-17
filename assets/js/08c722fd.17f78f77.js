"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[60884],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},80785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=n(34259),l=n(18679),s=["components"],u={image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["how to","integration services sdk","sdk","decentralized identity","maven","java","nodejs","javascript"]},c="Introduction",d={unversionedId:"how_tos/integration-services-sdk/introduction",id:"how_tos/integration-services-sdk/introduction",title:"Introduction",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",source:"@site/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/introduction.mdx",sourceDirName:"how_tos/integration-services-sdk",slug:"/how_tos/integration-services-sdk/introduction",permalink:"/integration-services/how_tos/integration-services-sdk/introduction",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/how_tos/integration-services-sdk/introduction.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail).",keywords:["how to","integration services sdk","sdk","decentralized identity","maven","java","nodejs","javascript"]},sidebar:"docs",previous:{title:"UI Components",permalink:"/integration-services/explanations/services/dashboard/ui-components"},next:{title:"Run How-Tos",permalink:"/integration-services/how_tos/integration-services-sdk/run-how-tos"}},p={},m=[{value:"Install",id:"install",level:2},{value:"Clients",id:"clients",level:2},{value:"IdentityClient",id:"identityclient",level:3},{value:"ChannelClient",id:"channelclient",level:3},{value:"Authorization",id:"authorization",level:2}],g={toc:m};function v(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following sections  will guide you in how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/iota-is-sdk"},"Integration Services SDK"),".\nThe Integration Services SDK makes it easy to manage decentralized identities and secure channels (Audit Trail)."),(0,r.kt)("p",null,"You should have a basic understanding of ",(0,r.kt)("a",{parentName:"p",href:"../../explanations/identity"},"decentralized identities"),"\nto get the most out of the following examples."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},"Build from source:",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:albydeca/iota-is-sdk.git\ncd iota-is-sdk\nmvn clean install\n")),(0,r.kt)("p",null,"or download JAR from ",(0,r.kt)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk/0.0.1"},"MVNRepository")),(0,r.kt)("p",null,"or simply add to your POM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/net.gradbase/iota.is.sdk --\x3e\n<dependency>\n    <groupId>net.gradbase</groupId>\n    <artifactId>iota.is.sdk</artifactId>\n    <version>0.0.1</version>\n</dependency>\n"))),(0,r.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},"You can install the Integration Services Client using [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/).",(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/is-client\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/is-client\n")))))),(0,r.kt)("h2",{id:"clients"},"Clients"),(0,r.kt)("p",null,"The Integration Services SDK has two different clients you can use:"),(0,r.kt)("h3",{id:"identityclient"},"IdentityClient"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentityClient")," to manage decentralized identities. This includes, but is not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-identity-and-credentials"},"Creating an identity and verifiable credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"update-users"},"Updating users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"delete-users"},"Deleting users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"trusted-authorities"},"Adding Trusted Authorities"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can test your implementation on our public API which is connected to the IOTA Mainnet."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://demo-integration-services.iota.cafe/"},"https://demo-integration-services.iota.cafe/")),(0,r.kt)("li",{parentName:"ul"},"API key: b85e51a2-9981-11ec-8770-4b8f01948e9b"))),(0,r.kt)("h3",{id:"channelclient"},"ChannelClient"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChannelClient")," to access Audit Trail features. These include, but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel"},"Creating a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"authorize-to-channel#subscribe-to-a-channel"},"Subscribing or approving access to a channel")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-channel#write-on-a-channel"},"Reading and Writing on a channel"))),(0,r.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("p",null,"You can import and configure these clients using a ",(0,r.kt)("inlineCode",{parentName:"p"},"env.properties")," object which will populate the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseClient")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"}," api-key=XXXXXXX\n api-version=vX.X\n api-url=XXXXXXX\n identity-file=adminIdentity.json\n"))),(0,r.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("p",null,"You can import and configure these clients using a ",(0,r.kt)("inlineCode",{parentName:"p"},"ClientConfig")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"\nimport { ClientConfig, IdentityClient, ChannelClient } from '@iota/is-client';\n\nconst config: ClientConfig = {\n    isGatewayUrl: process.env.IS_GATEWAY_URL,   // used in production \n    ssiBridgeUrl: process.env.SSI_BRIDGE_URL,   // used in local development \n    auditTrailUrl: process.env.AUDIT_TRAIL_URL, // used in local development \n    apiKey: process.env.API_KEY,                // can be setup in the API to restrict access \n    apiVersion: ApiVersion.v01                  // API version (default: v0.1)\n};\n\n...\nconst identityClient = new IdentityClient(config);\n...\n\n...\nconst channelClient = new ChannelClient(config);\n...\n\n\n")))),(0,r.kt)("h2",{id:"authorization"},"Authorization"),(0,r.kt)("p",null,"In order to work with Integration Services API, you will need to be authenticated with a decentralized identity."),(0,r.kt)("p",null,"The Integration Services use a JWT token based authorization mechanism which behaves in the following manner:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The client gets a nonce from the API and returns it signed by the identity's private key."),(0,r.kt)("li",{parentName:"ol"},"The API returns a JWT token to authorize any subsequent requests.")),(0,r.kt)("p",null,"You can get an identity using the following script (no auth required):"),(0,r.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  IdentityClient client = new IdentityClient();\n  JSONObject jsonClaim = new JSONObject().put("type", "Person").put("name", "randomName");\n\n  Claim claim = new Claim(jsonClaim);\n\n  final String randomUsername = Utils.getRandomUsernameOfLength(5);\n  System.out.println("username: " + randomUsername);\n  JSONObject newUserIdentity = client.create(randomUsername, claim);\n  System.out.println("created new user " + newUserIdentity);\n'))),(0,r.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { IdentityJson } from '@iota/is-client';\n...\n\nconst identity = await identityClient.create('User') as IdentityJson;\n")))),(0,r.kt)("p",null,"The generated identity is stored on the IOTA Tangle and follows ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"did-core specifications"),".\nIt is a JSON file like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "doc": {\n    "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n    "authentication": [\n      {\n        "id": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss#key",\n        "controller": "did:iota:3q4mW831dfbbSP2j5Lf4FPTKXFjEv2ykyPjuVrd1FHss",\n        "type": "Ed25519VerificationKey2018",\n        "publicKeyBase58": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5"\n      }\n    ],\n    "created": "2021-12-20T10:43:00Z",\n    "updated": "2021-12-20T10:43:00Z",\n    "proof": {\n      "type": "JcsEd25519Signature2020",\n      "verificationMethod": "#key",\n      "signatureValue": "ktusPiZd5whHTHsJJwSiSbfhmAGypdkTgLFQt4USvVg91WJLYNhEzshcBCvr9Cr42heyB249TvZHVrdGVAYds6s"\n    }\n  },\n  "key": {\n    "type": "ed25519",\n    "public": "5LT5yjaykKeTqYuqmCELE7xUyN9z4WEN5CKxdWmrU5g5",\n    "secret": "9Arv8HTAu3JjLvBhst6deMaULvBc3e7w2WiseEL4BESC",\n    "encoding": "base58"\n  }\n}\n')),(0,r.kt)("p",null,"If you have a JSON Identity, you can authorize your client as follows:"),(0,r.kt)(o.Z,{groupId:"programmingLanguage",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  String id = newUserIdentity.getJSONObject("doc").getString("id");\n  String pubKey = newUserIdentity.getJSONObject("key").getString("public");\n  String privKey = newUserIdentity.getJSONObject("key").getString("secret");\n  client.authenticate(id, pubKey, privKey);\n'))),(0,r.kt)(l.Z,{value:"Nodejs",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const identity = // ... did-core json object ...\n\nawait identityClient.authenticate(identity.doc.id, identity.key.secret);\n")))))}v.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),i=n(86010),r="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),i=n(67294),r=n(86010),o=n(51048),l=n(33609),s=n(1943),u=n(72957),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n,o=e.lazy,p=e.block,m=e.defaultValue,g=e.values,v=e.groupId,h=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(f,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),N=T.tabGroupChoices,w=T.setTabGroupChoices,I=(0,i.useState)(b),j=I[0],C=I[1],S=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var x=N[v];null!=x&&x!==j&&f.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=S.indexOf(t),a=f[n].value;a!==j&&(O(t),C(a),null!=v&&w(v,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,i=S.indexOf(e.currentTarget)+1;n=null!=(a=S[i])?a:S[0];break;case"ArrowLeft":var r,o=S.indexOf(e.currentTarget)-1;n=null!=(r=S[o])?r:S[S.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return S.push(e)},onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,o.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);
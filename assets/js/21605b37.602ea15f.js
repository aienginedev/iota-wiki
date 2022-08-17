"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39428],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=s,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87223:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=t(87462),s=t(63366),r=(t(67294),t(3905)),o=["components"],l={description:"The official IOTA Streams Wasm API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","wasm","js","javascript","node","examples","reference"]},i="Examples",c={unversionedId:"how_tos/wasm_how_tos",id:"how_tos/wasm_how_tos",title:"Examples",description:"The official IOTA Streams Wasm API examples.",source:"@site/content/build/streams/develop/documentation/docs/how_tos/wasm_how_tos.md",sourceDirName:"how_tos",slug:"/how_tos/wasm_how_tos",permalink:"/streams/how_tos/wasm_how_tos",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/how_tos/wasm_how_tos.md",tags:[],version:"current",frontMatter:{description:"The official IOTA Streams Wasm API examples.",image:"/img/logo/iota_mark_light.png",keywords:["api","wasm","js","javascript","node","examples","reference"]},sidebar:"docs",previous:{title:"Examples",permalink:"/streams/how_tos/c_how_tos"},next:{title:"Channels Protocol Overview",permalink:"/streams/explanations/channels_protocol/overview"}},u={},p=[{value:"Core Functionality",id:"core-functionality",level:2},{value:"Author Generation",id:"author-generation",level:3},{value:"Author and Channel Generation",id:"author-and-channel-generation",level:3},{value:"Subscriber Generation",id:"subscriber-generation",level:3},{value:"Subscription",id:"subscription",level:3},{value:"Keyload",id:"keyload",level:3},{value:"Sending Messages",id:"sending-messages",level:3},{value:"Message Fetching",id:"message-fetching",level:3},{value:"Forward",id:"forward",level:4},{value:"Backwards",id:"backwards",level:4}],m={toc:p};function d(e){var n=e.components,l=(0,s.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("p",null,"An overview example of the available api tools can be found ",(0,r.kt)("a",{target:"_blank",href:t(38128).Z},"here"),".\nThe general API is simply an abstraction over the rust library, so the examples found\n",(0,r.kt)("a",{parentName:"p",href:"/streams/how_tos/rust_how_tos"},"here")," still apply (with some minor modifications, see: ",(0,r.kt)("a",{parentName:"p",href:"/streams/reference/wasm_api_reference"},"api_reference"),")"),(0,r.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,r.kt)("h3",{id:"author-generation"},"Author Generation"),(0,r.kt)("p",null,"Create an Author and generate a new channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let node = "https://chrysalis-nodes.iota.org/";\nlet options = new streams.SendOptions(node, true);\nlet client = await new streams.ClientBuilder().node(node).build();\n')),(0,r.kt)("h3",{id:"author-and-channel-generation"},"Author and Channel Generation"),(0,r.kt)("p",null,"Create an Author and generate a new channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let author = streams.Author.fromClient(streams.StreamsClient.fromClient(client), "Unique Seed", streams.ChannelType.SingleBranch);\nlet response = await author.clone().send_announce();\nlet ann_link = response.link;\n// Link used by subscribers to attach to instance\nconsole.log("Announced at: ", ann_link.toString());\n')),(0,r.kt)("h3",{id:"subscriber-generation"},"Subscriber Generation"),(0,r.kt)("p",null,"Create a Subscriber and attach to a channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let sub = new streams.Subscriber("Unique Seed", options.clone());\nlet ann_link = streams.Address.parse("Announcement_link_string:Here");\nawait sub.clone().receive_announcement(ann_link.copy());\n')),(0,r.kt)("h3",{id:"subscription"},"Subscription"),(0,r.kt)("p",null,"The Subscriber sends a subscription message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = sub.clone().send_subscribe(ann_link.copy());\nlet sub_link = response.link;\n// Link to be provided to the Author for subscription\nconsole.log("Subscription link: ", sub_link.toString());\n')),(0,r.kt)("p",null,"The Author accepts and processes subscription: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let sub_link = streams.Address.parse("Sub_link_string:Here");\nawait author.clone().receive_subscribe(sub_link.copy());\n')),(0,r.kt)("h3",{id:"keyload"},"Keyload"),(0,r.kt)("p",null,"The Author sends a keyload for all participants in the channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = author.clone().send_keyload_for_everyone(ann_link.copy());\nlet keyload_link = response.link;\n// Keyload message can now act as starting point for a protected branch\nconsole.log("Keyload link for everyone: ", keyload_link.toString());\n')),(0,r.kt)("p",null,"The Author sends a keyload for just one subscriber in the channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = author.clone().send_keyload(ann_link.copy\n(), [], ["SubA_PublicKey"]);\nlet sub_A_keyload_link = response.link;\n// Keyload message can now act as starting point for a protected branch\nconsole.log("Keyload link for SubA: ", sub_A_keyload_link.toString());\n')),(0,r.kt)("h3",{id:"sending-messages"},"Sending Messages"),(0,r.kt)("p",null,"Messages are required to be linked to a previous message that the user had access to. In a single branch implementation, this means the latest message in the branch. In multi-branch implementations, this can mean any message in a branch that they have had access to."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In a multi-publisher implementation (that is, multiple publishers in a single branch),\npublishers are required to make sure to sync their state before publishing to ensure\nthat the instance stays in sync with the other publishers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await sub.clone().syncState();\nlet masked_payload = to_bytes("Masked Payload") <- Payloads must be converted to bytes\nlet public_payload = to_bytes("Public Payload")\n\nlet response = subA.clone().send_signed_packet(\n    sub_A_keyload_link,\n    public_payload,\n    masked_payload\n);\nlet msg_link = response.link;\nconsole.log("New message sent by Sub A at: ", msg_link.toString());\n')),(0,r.kt)("h3",{id:"message-fetching"},"Message Fetching"),(0,r.kt)("h4",{id:"forward"},"Forward"),(0,r.kt)("p",null,"When new messages are available to retrieve from the channel, you can fetch the next message sent by each publisher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let next_msgs = await sub.clone().fetchNextMsgs();\n\nfor (const msg of next_msgs) {\n  console.log("Found a message...");\n  console.log(\n    "Public: ",\n    from_bytes(next_msgs[i].get_message().get_public_payload()),\n    "\\tMasked: ",\n    from_bytes(next_msgs[i].get_message().get_masked_payload())\n  );\n}\n')),(0,r.kt)("p",null,"If no new messages are present, the returned array will be empty."),(0,r.kt)("p",null,"You can also fetch all previous messages."),(0,r.kt)("h4",{id:"backwards"},"Backwards"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'let num_messages = 10;\nlet prev_msgs = sub.clone().fetch_prev_msgs(latest_msg_link, num_messages);\n\nfor (var i = 0; i < prev_msgs.length; i++) {\n    console.log("Found a message...");\n    console.log(\n      "Public: ",\n      from_bytes(prev_msgs[i].get_message().get_public_payload()),\n      "\\tMasked: ",\n      from_bytes(prev_msgs[i].get_message().get_masked_payload())\n    );\n}\n')))}d.isMDXComponent=!0},38128:function(e,n,t){n.Z=t.p+"assets/files/node-b87cccec1d8d491c04de9b55b71e7807.js"}}]);
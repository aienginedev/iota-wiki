"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98860],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4542:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var n=a(87462),i=a(63366),s=(a(67294),a(3905)),r=["components"],o={description:"This article outlines the differences between IOTA 1.0 and IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["developer","Address Anatomy","seeds","UTXO","Ed25519","IOTA 1.5","IOTA 1.0","reference"]},l="Chrysalis Details",d={unversionedId:"reference/details",id:"reference/details",title:"Chrysalis Details",description:"This article outlines the differences between IOTA 1.0 and IOTA 1.5, aka Chrysalis.",source:"@site/content/build/introduction-docs/production/docs/reference/details.md",sourceDirName:"reference",slug:"/reference/details",permalink:"/introduction/reference/details",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/content/build/introduction-docs/production/docs/reference/details.md",tags:[],version:"current",frontMatter:{description:"This article outlines the differences between IOTA 1.0 and IOTA 1.5, aka Chrysalis.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["developer","Address Anatomy","seeds","UTXO","Ed25519","IOTA 1.5","IOTA 1.0","reference"]},sidebar:"mySidebar",previous:{title:"Chrysalis Changelog",permalink:"/introduction/reference/changelog"},next:{title:"Mainnet",permalink:"/introduction/reference/networks/mainnet"}},p={},u=[{value:"Seed and Addresses",id:"seed-and-addresses",level:2},{value:"IOTA 1.5 Address Anatomy",id:"iota-15-address-anatomy",level:3},{value:"Seed",id:"seed",level:3},{value:"Address/Key Space",id:"addresskey-space",level:3},{value:"Messages, Payloads, and Transactions",id:"messages-payloads-and-transactions",level:2},{value:"Unspent Transaction Output (UTXO)",id:"unspent-transaction-output-utxo",level:2},{value:"Selected Message Payloads",id:"selected-message-payloads",level:2},{value:"IndexationPayload",id:"indexationpayload",level:3},{value:"SignedTransaction",id:"signedtransaction",level:3},{value:"Dust Protection",id:"dust-protection",level:2},{value:"Up to 8 Parents",id:"up-to-8-parents",level:2}],c={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"chrysalis-details"},"Chrysalis Details"),(0,s.kt)("h2",{id:"seed-and-addresses"},"Seed and Addresses"),(0,s.kt)("p",null,"In Chrysalis, all ternary conversions apart from PoW have been removed which results in a better, faster developer experience. Additionally, the WOTS-Signature has been replaced by an ",(0,s.kt)("inlineCode",{parentName:"p"},"Ed25519")," signature scheme. This means that you can now use an address multiple times to send and receive coins."),(0,s.kt)("p",null,"With these changes, and the further adoption of industry standards, both seeds and addresses look completely different in Chrysalis."),(0,s.kt)("p",null,"IOTA 1.0 address:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZRGJMIGPDW\n")),(0,s.kt)("p",null,"IOTA 1.5 (Chrysalis) address (bech32 standard):"),(0,s.kt)("p",null,"Mainnet with ",(0,s.kt)("inlineCode",{parentName:"p"},"iota"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"iota1qpw6k49dedaxrt854rau02talgfshgt0jlm5w8x9nk5ts6f5x5m759nh2ml\n")),(0,s.kt)("p",null,"Devnet with ",(0,s.kt)("inlineCode",{parentName:"p"},"atoi"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"atoi1qpw6k49dedaxrt854rau02talgfshgt0jlm5w8x9nk5ts6f5x5m75zaxtpj\n")),(0,s.kt)("h3",{id:"iota-15-address-anatomy"},"IOTA 1.5 Address Anatomy"),(0,s.kt)("p",null,"The current IOTA address is based on the Ed25519 signature scheme and it is usually represented by the Bech32 (checksummed base32) format string of 64 characters or hex format:"),(0,s.kt)("p",null,"We can break down the address ",(0,s.kt)("inlineCode",{parentName:"p"},"iota1qpw6k49dedaxrt854rau02talgfshgt0jlm5w8x9nk5ts6f5x5m759nh2ml")," into three distinguishable parts:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"human-readable id"),(0,s.kt)("th",{parentName:"tr",align:null},"separator"),(0,s.kt)("th",{parentName:"tr",align:null},"data"),(0,s.kt)("th",{parentName:"tr",align:null},"checksum"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"iota ","|"," atoi"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"48 bytes ","[0..9a..z]"),(0,s.kt)("td",{parentName:"tr",align:null},"6 characters ","[0..9a..z]")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"iota"),(0,s.kt)("td",{parentName:"tr",align:null},"1"),(0,s.kt)("td",{parentName:"tr",align:null},"qpw6k49dedaxrt854rau02talgfshgt0jlm5w8x9nk5ts6f5x5m75"),(0,s.kt)("td",{parentName:"tr",align:null},"9nh2ml")))),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0011/tip-0011.md"},"Protocol-rfc#0020 - Bech32 Address Format")," page."),(0,s.kt)("h3",{id:"seed"},"Seed"),(0,s.kt)("p",null,"With the updated ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet library"),", developers do not need to use a self-generated seed. By default, the seed is created and stored in Stronghold, our in-house built security enclave. It is not possible to extract the seed from Stronghold for security purposes. Stronghold uses encrypted snapshots that can easily be backed up and securely shared between devices. These snapshots are then further secured with a password."),(0,s.kt)("p",null,"More information about IOTA Wallet Library is available on the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"Wallet docs page")," or in the ",(0,s.kt)("a",{parentName:"p",href:"/introduction/how_tos/exchange"},"Exchange guide"),", which is mainly focuses on value transactions."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It is highly recommended you do NOT use online seed generators at all. The seed is the only key to the given funds.")),(0,s.kt)("p",null,"A root of the ",(0,s.kt)("inlineCode",{parentName:"p"},"Ed25519")," signature scheme is a ",(0,s.kt)("inlineCode",{parentName:"p"},"32-byte (256-bit)")," uniformly randomly generated seed based on which all private keys and corresponding addresses are generated. A seed may be represented by a string of 64 characters using ",(0,s.kt)("inlineCode",{parentName:"p"},"[0-9a-f]")," alphabet (32 bytes encoded in hexadecimal)."),(0,s.kt)("p",null,"The seed can be, for example, generated using the SHA256 algorithm on some random input generated by cryptographically secure pseudo-random generator, such as ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/iota.rs/libraries/python/examples#generating-seed-and-addresses"},"os.urandom()"),"."),(0,s.kt)("p",null,"Seed examples (a single seed per line):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"4892e2265c45734d07f220294b1697244a8ab5beb38ba9a7d57aeebf36b6e84a\n37c4aab22a5883595dbc77907c1626c1be39d104df39c5d5708423c0286aea89\ne94346bce41402155ef120e2525fad2d0bf30b10a89e4b93fd8471df1e6a0981\n...\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"In modern wallet implementations, such as our ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs library")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly"},"firefly wallet"),", the seed is usually generated from a ",(0,s.kt)("inlineCode",{parentName:"p"},"seed mnemonic")," (",(0,s.kt)("inlineCode",{parentName:"p"},"seed phrase"),"), using the ",(0,s.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/BIP_0039"},"BIP39 standard"),", for better memorization or to be stored by humans. It is based on a randomly generated list of english words and is later used to generate the seed. Either way, the seed is a root for all generated private keys and addresses.")),(0,s.kt)("p",null,"For further reference, please see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0010/tip-0010.md"},"Protocol-rfc#0010 - Mnemonic Seed")," page."),(0,s.kt)("h3",{id:"addresskey-space"},"Address/Key Space"),(0,s.kt)("p",null,"As mentioned above, IOTA 1.5 embraced some existing industry standards, which is apparent during an address generation process. This included the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP32")," standard that describes an approach to ",(0,s.kt)("em",{parentName:"p"},"Hierarchical Deterministic Wallets")," which was further improved by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"},"BIP44"),"."),(0,s.kt)("p",null,"These standards define a tree structure as a base for address and key space generation which is represented by a ",(0,s.kt)("inlineCode",{parentName:"p"},"derivation path"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"m / purpose / coin_type / account / change / address_index\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"m"),": a master node (seed)."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"purpose"),": constant which is {44}."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"coin_type"),": a constant set for each crypto currency. IOTA = 4218, for instance."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"account"),": account index. Zero-based increasing ",(0,s.kt)("inlineCode",{parentName:"li"},"int"),". This level splits the address/key space into independent branches (ex. user identities) which each has its own set of addresses/keys."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"change"),": change index which is ",(0,s.kt)("inlineCode",{parentName:"li"},"{0, 1}"),", also known as ",(0,s.kt)("inlineCode",{parentName:"li"},"wallet chain"),".",(0,s.kt)("br",null),"\nThere are two independent chain of addresses/keys. ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," is reserved for public addresses (for coin receival) and ",(0,s.kt)("inlineCode",{parentName:"li"},"1")," is reserved for internal (also known as change) addresses to which a transaction change is returned. ",(0,s.kt)("em",{parentName:"li"},"In comparison to IOTA 1.0, IOTA 1.5 is fine with address reuse, and so it is, technically speaking, valid to return transaction change to the same originating address. It is up to developers whether to leverage it or not. ",(0,s.kt)("inlineCode",{parentName:"em"},"iota.rs")," library and its sibling ",(0,s.kt)("inlineCode",{parentName:"em"},"wallet.rs")," help with either scenario"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"address_index"),": address index. Zero-based increasing ",(0,s.kt)("inlineCode",{parentName:"li"},"int")," that indicates an address index.")),(0,s.kt)("p",null,"As outlined, there is a large address/key space that is secured by a single seed."),(0,s.kt)("p",null,"And there are a few additional things to note:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Each level defines a completely different subtree (subspace) of addresses/keys and those are never mixed up."),(0,s.kt)("li",{parentName:"ul"},'The hierarchy is ready to "absorb" addresses/keys for different coins at the same time (',(0,s.kt)("inlineCode",{parentName:"li"},"coin_type"),") and all those coins are secured by the same seed."),(0,s.kt)("li",{parentName:"ul"},"There may also be other ",(0,s.kt)("inlineCode",{parentName:"li"},"purposes")," in the future. However, we should consider it a single purpose as of now. The constant ",(0,s.kt)("inlineCode",{parentName:"li"},"44")," stands for BIP44."),(0,s.kt)("li",{parentName:"ul"},"The standard was agreed upon by different crypto communities, although not all ",(0,s.kt)("inlineCode",{parentName:"li"},"derivation path")," components are always in active use. For example, ",(0,s.kt)("inlineCode",{parentName:"li"},"account")," is not always actively leveraged across crypto space (if this is a case then there is usually ",(0,s.kt)("inlineCode",{parentName:"li"},"account=0")," used)."),(0,s.kt)("li",{parentName:"ul"},"Using different ",(0,s.kt)("inlineCode",{parentName:"li"},"accounts")," may be useful to split addresses/key into some independent spaces and it is up to developers to implement.",(0,s.kt)("br",null))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Having many different accounts may have a negative impact on performance while in the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki#account-discovery"},"account discovery")," phase. So, if you are after using multiple, different accounts then you may be interested in our stateful library ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs")," that incorporates all business logic needed to efficiently manage independent accounts. Additionally, our ",(0,s.kt)("a",{parentName:"p",href:"/introduction/how_tos/exchange"},"exchange guide")," provides some useful tips on how different accounts may be leveraged.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Address Generation",src:a(69030).Z,width:"862",height:"635"})),(0,s.kt)("p",null,"So in case of Chrysalis, the derivation path of address/key space is ",(0,s.kt)("inlineCode",{parentName:"p"},"[seed]/44/4218/{int}/{0,1}/{int}"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The levels ",(0,s.kt)("inlineCode",{parentName:"li"},"purpose")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"coin_type")," are given."),(0,s.kt)("li",{parentName:"ul"},"The rest levels are up to developers to integrate, specifically ",(0,s.kt)("inlineCode",{parentName:"li"},"seed"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"account"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"wallet_chain"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"address_index"),".")),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/ee07797acb5940b7dbb5c3411b184ccdc6afdbb1/text/0000-ed25519-signature-scheme/0000-ed25519-signature-scheme.md"},"Protocol-rfc#0003 - Signature Scheme")," page."),(0,s.kt)("h2",{id:"messages-payloads-and-transactions"},"Messages, Payloads, and Transactions"),(0,s.kt)("p",null,"In comparison to the original IOTA 1.0, Chrysalis also introduced some fundamental changes to the underlying data structures. The original concept of ",(0,s.kt)("inlineCode",{parentName:"p"},"transactions")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"bundles")," is gone and has been replaced by a concept of ",(0,s.kt)("inlineCode",{parentName:"p"},"messages")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"payloads"),"."),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," is a data structure that is actually being broadcast in the Chrysalis network and represents a node (vertex) in the Tangle graph."),(0,s.kt)("p",null,"It refers to at least 1 (2 is recommended) and up to 8 previous messages and once a message is attached to the Tangle and approved by a milestone, the Tangle structure ensures the content of the message is unaltered. Every message is referenced by a ",(0,s.kt)("inlineCode",{parentName:"p"},"message_id")," which is based on a hash algorithm (",(0,s.kt)("inlineCode",{parentName:"p"},"Blake2b256"),") of binary content of the message. It also includes previous Tangle messages as its ",(0,s.kt)("inlineCode",{parentName:"p"},"parents")," which means it is not possible to alter the given message without altering previous messages in the Tangle."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," is an atomic unit that is confirmed by the network as a whole."),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"IOTA is no longer based on ternary. IOTA 1.5 uses binary to encode and broadcast all underlying data entities.")),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," can be up to 32 kb in size and can hold variable sets of information called ",(0,s.kt)("inlineCode",{parentName:"p"},"payloads"),". The number of payloads a single message can encapsulate is not given. Even a message without a ",(0,s.kt)("inlineCode",{parentName:"p"},"payload")," is completely valid and can be broadcast. The ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," itself does not include any timestamp; a message timestamp is derived from an acceptance of the given message by the Tangle network."),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0006/tip-0006.md"},"TIP#0006 - Message")," page."),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"payload")," represents a layer of concern. Some payloads may change the state of the ledger (ex. ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransactions"),") and some may provide extra features to some specific applications and business use cases (ex. ",(0,s.kt)("inlineCode",{parentName:"p"},"IndexationPayload"),")."),(0,s.kt)("p",null,"There are already implemented core payloads, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"MilestonePayload"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," but the message and payload definition is generic enough to incorporate any future payload(s) the community agrees upon."),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0007/tip-0007.md"},"TIP#0018 - Transaction Payload")," page."),(0,s.kt)("p",null,"The IOTA network ensures the outer structure of the message itself is valid and strictly complies with network consensus protocol. However, the inner structure is very flexible, future-proof, and offers network extensibility."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Messages in the Tangle",src:a(18539).Z,width:"862",height:"489"})),(0,s.kt)("p",null,"The current Chrysalis network incorporates the following core payloads:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SignedTransaction"),": a payload that describes ",(0,s.kt)("inlineCode",{parentName:"li"},"UTXO")," transactions that are the cornerstones of value-based transfers in the IOTA network. Via this payload, a ",(0,s.kt)("inlineCode",{parentName:"li"},"message")," can also be cryptographically signed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"MilestonePayload"),": a payload that is emitted by the Coordinator."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"IndexationPayload"),": a payload that enables the addition of an index to the encapsulating message, as well as some arbitrary data. The given index can be later used to search the message(s).")),(0,s.kt)("p",null,"In comparison to IOTA 1.0, a ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," itself is not directly related to the IOTA address while broadcasting to the Chrysalis network. Such messages are referenced using the so-called ",(0,s.kt)("inlineCode",{parentName:"p"},"message_id"),". Messages are indirectly related to IOTA addresses via ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," payload, specifically the ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO")," section."),(0,s.kt)("h2",{id:"unspent-transaction-output-utxo"},"Unspent Transaction Output (UTXO)"),(0,s.kt)("p",null,"Originally, IOTA 1.0 used an ",(0,s.kt)("inlineCode",{parentName:"p"},"account-based model")," for tracking individual iota tokens: each IOTA address held a number of tokens and the aggregated number of tokens from all IOTA addresses was equal to the total supply."),(0,s.kt)("p",null,"In contrast, Chrysalis uses the ",(0,s.kt)("inlineCode",{parentName:"p"},"unspent transaction output")," model, or ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO"),". It is based on an idea to track unspent amounts of tokens via a data structure called ",(0,s.kt)("inlineCode",{parentName:"p"},"output"),"."),(0,s.kt)("p",null,"Below is a simplified analogy of how the UTXO works:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"There are 100 tokens recorded in the ledger as ",(0,s.kt)("inlineCode",{parentName:"li"},"Output A")," and this output belongs to Alice. So, the ",(0,s.kt)("strong",{parentName:"li"},"initial state of the ledger"),": ",(0,s.kt)("inlineCode",{parentName:"li"},"Output A")," = 100 tokens."),(0,s.kt)("li",{parentName:"ul"},"Alice sends 20 tokens to Paul, 30 tokens to Linda, and keeps 50 tokens at her disposal."),(0,s.kt)("li",{parentName:"ul"},"Her 100 tokens are recorded as ",(0,s.kt)("inlineCode",{parentName:"li"},"Output A")," so she has to divide (spent) tokens and create three new outputs:",(0,s.kt)("br",null),(0,s.kt)("inlineCode",{parentName:"li"},"Output B")," with 20 tokens that goes to Paul, ",(0,s.kt)("inlineCode",{parentName:"li"},"Output C")," with 30 tokens that goes to Linda, and finally ",(0,s.kt)("inlineCode",{parentName:"li"},"Output D")," with the rest of the 50 tokens that she kept for herself."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Original ",(0,s.kt)("inlineCode",{parentName:"strong"},"Output A"))," was completely spent and cannot be used any more. It has been spent and so ",(0,s.kt)("strong",{parentName:"li"},"becomes irrelevant")," to ledger state."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"New state of ledger"),": ",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Output B")," = 20 tokens."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Output C")," = 30 tokens. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Output D")," = 50 tokens."))),(0,s.kt)("li",{parentName:"ul"},"The total supply remains the same, the number of outputs differs, and some outputs were replaced by other outputs in the process.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Unspent Transaction Output",src:a(24814).Z,width:"862",height:"489"})),(0,s.kt)("p",null,"The key takeaway of the outlined process above is the fact that each unique ",(0,s.kt)("inlineCode",{parentName:"p"},"output")," can be spent ",(0,s.kt)("strong",{parentName:"p"},"only once"),". Once the given ",(0,s.kt)("inlineCode",{parentName:"p"},"output")," is spent, it cannot be used any more and is irrelevant in regards to the ledger state."),(0,s.kt)("p",null,"So even if Alice still wants to keep the remaining tokens at her fingertips, those tokens have to be moved to a completely new ",(0,s.kt)("inlineCode",{parentName:"p"},"output")," that can be, for instance, still tied to Alice's same IOTA address as before."),(0,s.kt)("p",null,"Every ",(0,s.kt)("inlineCode",{parentName:"p"},"output")," also stores information about an IOTA address to which it is coupled with. So addresses and tokens are indirectly coupled via ",(0,s.kt)("inlineCode",{parentName:"p"},"outputs"),". Basically, the sum of outputs and their amounts under the given address is a balance of the given address, that is, the number of tokens the given address can spend. And the sum of all unspent outputs and their amounts is equal to the total supply."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Outputs")," are being broadcasted and encapsulated in a ",(0,s.kt)("inlineCode",{parentName:"p"},"message")," as a part of ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," payload."),(0,s.kt)("h2",{id:"selected-message-payloads"},"Selected Message Payloads"),(0,s.kt)("p",null,"Currently, there are two commonly used message payloads, ",(0,s.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," which can be combined as needed."),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0007/tip-0007.md"},"TIP#0007 - Transaction Payload")," page."),(0,s.kt)("h3",{id:"indexationpayload"},"IndexationPayload"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"IndexationPayload")," is a payload type that can be used to attach arbitrary ",(0,s.kt)("inlineCode",{parentName:"p"},"data")," and key ",(0,s.kt)("inlineCode",{parentName:"p"},"index")," to a message. When this particular payload is leveraged, then a message and related data entity can be searched via key ",(0,s.kt)("inlineCode",{parentName:"p"},"index")," in addition to a ",(0,s.kt)("inlineCode",{parentName:"p"},"message_id"),"."),(0,s.kt)("h3",{id:"signedtransaction"},"SignedTransaction"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," is a payload type that is used to transfer value-based messages as ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO"),". It changes the ledger state as old ",(0,s.kt)("inlineCode",{parentName:"p"},"outputs")," are being spent (replaced) and new ",(0,s.kt)("inlineCode",{parentName:"p"},"outputs")," are being created."),(0,s.kt)("p",null,"Each ",(0,s.kt)("inlineCode",{parentName:"p"},"SignedTransaction")," includes the following set of information:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"inputs")," - a list of valid ",(0,s.kt)("inlineCode",{parentName:"li"},"outputs")," that should be used to fund the given transaction. Outputs are uniquely referenced via a previous ",(0,s.kt)("inlineCode",{parentName:"li"},"transaction_id")," and inner ",(0,s.kt)("inlineCode",{parentName:"li"},"index"),". At least one output has to be given with enough balance to source all ",(0,s.kt)("inlineCode",{parentName:"li"},"outputs")," of the given message."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"outputs")," - a list of IOTA address(es) and related amount(s) the input ",(0,s.kt)("inlineCode",{parentName:"li"},"outputs")," should be split among. Based on this information, new ",(0,s.kt)("inlineCode",{parentName:"li"},"UTXO")," outputs are being created."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"unlock_blocks")," - it includes a transaction signature(s) (currently based on ",(0,s.kt)("inlineCode",{parentName:"li"},"Ed25519")," scheme) that proves token ownership based on a valid seed.")),(0,s.kt)("h2",{id:"dust-protection"},"Dust Protection"),(0,s.kt)("p",null,"Since IOTA is feeless and has the ability to send microtransactions, attackers could use this to spam the network with very low value transactions, which we call dust. To avoid this, we only allow microtransaction below 1Mi (dust) of IOTA tokens to another address if you already have at least 1Mi as a dust allowance output on that address. The number of allowed dust outputs on an address is the amount of the dust allowance outputs divided by 100,000 and rounded down, that is, 10 outputs for each 1 Mi deposited, with a maximum of 100 dust outputs in total."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"In the UTXO model, each node in the network needs to keep track of all the currently unspent outputs. When the number of outputs becomes too large, it can cause performance and memory issues. The RFC below proposes a new protocol rule regarding the processing of outputs where they transfer a very small amount of IOTA\u2019s so-called dust outputs. Dust outputs are only allowed when they are backed up by a certain deposit on the receiving address. This limits the amount of dust outputs, thus making it expensive to proliferate dust. Since a receiver must make a deposit, the protocol makes receiving dust an opt-in feature.")),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0015/tip-0015.md"},"TIP#0015 - Dust Protection")," page."),(0,s.kt)("h2",{id:"up-to-8-parents"},"Up to 8 Parents"),(0,s.kt)("p",null,"With IOTA 1.0, you always had to reference 2 parent transactions. With Chrysalis, we introduced a more dynamic number of parent nodes where you can reference up to 8 parents. We recommend you reference at least 2 unique parents at all times for the best possible results."),(0,s.kt)("p",null,"For further reference, please see our ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/tips/blob/main/tips/TIP-0008/tip-0008.md"},"TIP#0008 - Message")," page."))}m.isMDXComponent=!0},69030:function(e,t,a){t.Z=a.p+"assets/images/address_generation-ea9dd30746334c7588162a69745c5b3a.svg"},18539:function(e,t,a){t.Z=a.p+"assets/images/messages_in_tangle-4b75cbcbfaa8cfbf5d820209ac747a92.svg"},24814:function(e,t,a){t.Z=a.p+"assets/images/utxo-7218489062bc14114d3f4435a1dfb2b7.svg"}}]);
"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[70795],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94836:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={description:"Easily integrate IOTA with your exchange, custody solution, or product using the wallet.rs library.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["integrate","exchange","account model","addresses","wallet.rs","setup","NodeJS","how to"]},l="Exchange Guide",c={unversionedId:"how_tos/exchange",id:"how_tos/exchange",title:"Exchange Guide",description:"Easily integrate IOTA with your exchange, custody solution, or product using the wallet.rs library.",source:"@site/content/build/introduction-docs/production/docs/how_tos/exchange.md",sourceDirName:"how_tos",slug:"/how_tos/exchange",permalink:"/introduction/how_tos/exchange",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/docs/content/build/introduction-docs/production/docs/how_tos/exchange.md",tags:[],version:"current",frontMatter:{description:"Easily integrate IOTA with your exchange, custody solution, or product using the wallet.rs library.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["integrate","exchange","account model","addresses","wallet.rs","setup","NodeJS","how to"]},sidebar:"mySidebar",previous:{title:"Backup and Security",permalink:"/introduction/how_tos/backup_security"},next:{title:"How to Run Hornet On Kubernetes",permalink:"/introduction/how_tos/mainnet_hornet_node_k8s"}},d={},u=[{value:"The IOTA Wallet Library",id:"the-iota-wallet-library",level:2},{value:"How Do I Implement It to My Exchange?",id:"how-do-i-implement-it-to-my-exchange",level:2},{value:"Multi-Account Approach",id:"multi-account-approach",level:3},{value:"Single Account Approach",id:"single-account-approach",level:3},{value:"Implementation Guide",id:"implementation-guide",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:2},{value:"1. Set up the Wallet Library",id:"1-set-up-the-wallet-library",level:3},{value:"2. Create an Account For a User",id:"2-create-an-account-for-a-user",level:3},{value:"3. Generate a User Address to Deposit Funds",id:"3-generate-a-user-address-to-deposit-funds",level:3},{value:"4. Listen to Events",id:"4-listen-to-events",level:3},{value:"5. Check the Account Balance",id:"5-check-the-account-balance",level:3},{value:"6. Enable Withdrawals",id:"6-enable-withdrawals",level:3}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exchange-guide"},"Exchange Guide"),(0,o.kt)("h2",{id:"the-iota-wallet-library"},"The IOTA Wallet Library"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can easily integrate IOTA with your exchange, custody solution, or product.")),(0,o.kt)("p",null,"IOTA is built on an architecture that was designed to be the backbone of the Internet of Things (IoT) environment of the future. But this architecture has made it more challenging for service providers like exchanges to integrate IOTA compared to traditional blockchain-based distributed ledgers."),(0,o.kt)("p",null,"Within the Chrysalis update (also known as IOTA 1.5), some building blocks were changed to be more approachable and more aligned with currently leveraged standards. We also ship many ",(0,o.kt)("a",{parentName:"p",href:"/introduction/explanations/libraries"},"client libraries")," to help developers implement IOTA into their applications:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Wallet.rs layer overview",src:n(54855).Z,width:"862",height:"575"})),(0,o.kt)("h2",{id:"how-do-i-implement-it-to-my-exchange"},"How Do I Implement It to My Exchange?"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs"),", we use an account model so you can create an account for each of your users. Another approach would be to use one account and generate multiple addresses, which you can then link to the users in your database. The wallet library is designed to be as flexible as possible to back up any of your use cases."),(0,o.kt)("p",null,"Since IOTA addresses in the Chrysalis network are perfectly reusable, they can be mapped to your users in a clear and concise way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an account for every user -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Multi Account")," approach."),(0,o.kt)("li",{parentName:"ul"},"Create one account with many addresses -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Single account")," approach.")),(0,o.kt)("p",null,"The library supports derivation for multiple accounts from a single seed. An account is simply a deterministic identifier from which multiple addresses can be further derived. "),(0,o.kt)("p",null,"The library also allows consumers to assign a meaningful alias to each account. In addition to this, generated individual accounts can also be searched via generated addresses. This means it does not matter whether aliases or addresses are known as the search for the related account is very straightforward using the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library."),(0,o.kt)("p",null,"It also leaves the choice to users if they want to segregate their funds across multiple accounts or multiple addresses. The following illustration outlines the relationships between seed, accounts, and addresses: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Relationship between seed, accounts, and addresses",src:n(44004).Z,width:"862",height:"449"})),(0,o.kt)("h3",{id:"multi-account-approach"},"Multi-Account Approach"),(0,o.kt)("p",null,"The multi-account approach is used to create an account for each individual user. The created accounts can then be linked to the internal user IDs as an account alias, which are distinctly separated."),(0,o.kt)("h3",{id:"single-account-approach"},"Single Account Approach"),(0,o.kt)("p",null,"The single account approach allows for just one account and creates addresses for each user. The associated addresses are then linked to the internal user IDs and store who owns which address in the database. Most exchanges are more familiar with the single account approach and find it easier to use, implement, and backup."),(0,o.kt)("h2",{id:"implementation-guide"},"Implementation Guide"),(0,o.kt)("p",null,"This guide explains how to use the IOTA Wallet Library to successfully implement IOTA into an exchange. If you have already implemented the IOTA Hub, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/introduction/how_tos/migration/hub_migration"},"Hub Migration Guide"),"."),(0,o.kt)("p",null,"Features of the Wallet Library:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Secure seed management."),(0,o.kt)("li",{parentName:"ul"},"Account management (with multiple accounts and multiple addresses)."),(0,o.kt)("li",{parentName:"ul"},"Confirmation monitoring."),(0,o.kt)("li",{parentName:"ul"},"Deposit address monitoring."),(0,o.kt)("li",{parentName:"ul"},"Backup and restore functionality.")),(0,o.kt)("h2",{id:"how-does-it-work"},"How Does it Work?"),(0,o.kt)("p",null,"The Wallet Library is a stateful package with a standardized interface for developers to build applications involving IOTA value transactions. It offers abstractions to handle IOTA payments and can optionally interact with the IOTA Stronghold for seed handling, seed storage, and state backup. You can also use an SQLite database instead of Stronghold but it is not as secure."),(0,o.kt)("p",null,"For further reference, you can read our ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet documentation here"),"."),(0,o.kt)("p",null,"The following examples cover the ",(0,o.kt)("em",{parentName:"p"},"multi-account approach")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeJS")," binding:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set up the Wallet Library."),(0,o.kt)("li",{parentName:"ol"},"Create an account for each user."),(0,o.kt)("li",{parentName:"ol"},"Generate a user address for deposits."),(0,o.kt)("li",{parentName:"ol"},"Listen to events."),(0,o.kt)("li",{parentName:"ol"},"Check the user balance."),(0,o.kt)("li",{parentName:"ol"},"Enable withdrawals.")),(0,o.kt)("p",null,"Since all ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," bindings are based on core principles provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, the outlined approach is very similar regardless of the programming language of your choice."),(0,o.kt)("h3",{id:"1-set-up-the-wallet-library"},"1. Set up the Wallet Library"),(0,o.kt)("p",null,"First, you should install the components that are needed to use ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," and the binding of your choice; it may vary a bit from language to language. In the case of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeJs")," binding, it is straightforward since it is distributed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," package manager. We also recommend you use ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")," for password management."),(0,o.kt)("p",null,"You can read more about ",(0,o.kt)("a",{parentName:"p",href:"./backup_security"},"backup and security in this guide"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/wallet dotenv\ntouch .env\n")),(0,o.kt)("p",null,"Then, input your password to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\n')),(0,o.kt)("p",null,"Once you have everything needed to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, it is necessary to initialize the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager")," instance which creates (opens) a secure storage for individual accounts (backed up by ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," by default)."),(0,o.kt)("p",null,"The storage is encrypted at rest, so you need a strong password and location where to put your storage. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Manage your password with the utmost care.")),(0,o.kt)("p",null,'Technically speaking, "storage" means a single file called ',(0,o.kt)("inlineCode",{parentName:"p"},"wallet.stronghold"),". It is also needed to generate a seed (mnemonic) that serves as a cryptographic key from which all accounts and related addresses are generated."),(0,o.kt)("p",null,"One of the key principles behind the ",(0,o.kt)("inlineCode",{parentName:"p"},"stronghold"),"-based storage is that no one can get a seed from the storage. You deal with all the accounts purely via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account_Manager")," instance where all complexities are hidden under the hood and are dealt with securely. In case you would also like to store a seed somewhere else, there is another method, ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.generateMnemonic()"),", that generates random seeds. This method can be leveraged before the actual account initialization."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Keep the ",(0,o.kt)("inlineCode",{parentName:"p"},"stronghold")," password and the ",(0,o.kt)("inlineCode",{parentName:"p"},"stronghold")," database on separate devices. See the ",(0,o.kt)("a",{parentName:"p",href:"./backup_security"},"backup and security guide")," for more information.")),(0,o.kt)("p",null,"Import the Wallet Library and create an account manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    const { AccountManager, SignerType } = require('@iota/wallet')\n\n    // Setup IOTA Wallet Library\n    const manager = new AccountManager({\n        storagePath: './storage'\n    })\n    manager.setStrongholdPassword(process.env.SH_PASSWORD)\n    const mnemonic = manager.generateMnemonic(); // seed generation\n    // Store your mnemonic in a secure location, it's the only backup option apart from the Stronghold file\n    console.log(\"Save this securely: \" + mnemonic)\n    manager.storeMnemonic(SignerType.Stronghold, mnemonic) \n")),(0,o.kt)("p",null,"Once the stronghold storage is created, it is not needed to generate the seed any longer (",(0,o.kt)("inlineCode",{parentName:"p"},"manager.storeMnemonic(SignerType.Stronghold, manager.generateMnemonic())"),"). It has already been saved in the storage together with all account information."),(0,o.kt)("h3",{id:"2-create-an-account-for-a-user"},"2. Create an Account For a User"),(0,o.kt)("p",null,"Once the backend storage is created, individual accounts for individual users can be created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    let account = await manager.createAccount({\n        alias: user_id,  // an unique id from your existing user\n        clientOptions: { node: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe/', localPow: false }\n    })\n")),(0,o.kt)("p",null,"Each account is related to a specific IOTA network (mainnet/devnet) which is referenced by a node property, such as node url (in this example, the Chrysalis devnet balancer)."),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"clientOptions"),", please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/nodejs/api_reference"},"Wallet NodeJs API Reference"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Alias")," can be whatever fits to the given use case and should be unique. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Alias")," is typically used to identify the given account later on. Each account is also represented by an ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new account is created. Any account can then be referred to via ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"alias"),", or one of its generated ",(0,o.kt)("inlineCode",{parentName:"p"},"addresses"),"."),(0,o.kt)("p",null,"Once an account has been created, you get an instance of it using the following methods: ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccountByAlias(alias)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccounts()"),"."),(0,o.kt)("p",null,"The most common methods of ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," instance include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.alias()")," - returns an alias of the given account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.listAddresses()")," - returns list of addresses related to the account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.getUnusedAddress()")," - returns a first unused address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," - generate a new address for the address index incremented by 1."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.balance()")," - returns the balance for the given account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"account.sync()")," - sync the account information with the tangle.")),(0,o.kt)("h3",{id:"3-generate-a-user-address-to-deposit-funds"},"3. Generate a User Address to Deposit Funds"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," is a stateful library which means it caches all relevant information in storage to provide performance benefits while dealing with, potentially, many accounts/addresses."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Sync the account info with the network during the wallet manipulation to be sure the storage reflects an actual state of the ledger (network).")),(0,o.kt)("p",null,"Every account can own multiple addresses. Addresses are represented by an ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," which is incremented (by 1) every time a new address is created. The latest address is accessible via ",(0,o.kt)("inlineCode",{parentName:"p"},"account.latestAddress()"),": "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n\n    // By design, the last address of each account is an unused address which can be used as deposit address\n    const latestAddress = account.latestAddress()\n\n    console.log('Need a refill? Send it to this address:', latestAddress)\n")),(0,o.kt)("p",null,"You can fill the address with Devnet Tokens with the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.devnet.chrysalis2.com/"},"IOTA Faucet")," to test it."),(0,o.kt)("p",null,"Addresses are of two types, ",(0,o.kt)("inlineCode",{parentName:"p"},"internal")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," (external):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each set of addresses are independent from each other and has an independent ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," id."),(0,o.kt)("li",{parentName:"ul"},"Addresses that are created by ",(0,o.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," are indicated as ",(0,o.kt)("inlineCode",{parentName:"li"},"internal=false")," (public)."),(0,o.kt)("li",{parentName:"ul"},"Internal addresses (",(0,o.kt)("inlineCode",{parentName:"li"},"internal=true"),") are called ",(0,o.kt)("inlineCode",{parentName:"li"},"change")," addresses and are used to send the excess funds to them."),(0,o.kt)("li",{parentName:"ul"},"The approach is also known as a ",(0,o.kt)("em",{parentName:"li"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You may remember IOTA 1.0 network in which addresses were not reusable. It is no longer true and addresses can be reused multiple times in the Chrysalis network.")),(0,o.kt)("h3",{id:"4-listen-to-events"},"4. Listen to Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wallet.rs")," library supports several events for listening. As soon as the given event occurs, a provided callback is triggered."),(0,o.kt)("p",null,"Below is an example of fetching existing accounts and listening to transaction events coming into the account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'    const { addEventListener } = require(\'@iota/wallet\')\n\n    const callback = function(err, data) {\n        if(err) console.log("err:", err)\n        console.log("data:", data)\n    }\n\n    //Adds a new event listener with a callback in the form of (err, data) => {}. Supported event names:\n    addEventListener("BalanceChange", callback)\n\n    // Possible Event Types:\n    //\n    // ErrorThrown\n    // BalanceChange\n    // NewTransaction\n    // ConfirmationStateChange\n    // Reattachment\n    // Broadcast\n\n')),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"data: {\n  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',\n  address: {\n    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',\n    balance: 20000000,\n    keyIndex: 0,\n    internal: false,\n    outputs: [ [Object], [Object] ]\n  },\n  balance: 20000000\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"accountId")," can then be used to identify the given account via ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),"."),(0,o.kt)("p",null,"For further reference, you can read more about events in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/libraries/nodejs/api_reference#addeventlistenerevent-cb"},"API reference"),"."),(0,o.kt)("h3",{id:"5-check-the-account-balance"},"5. Check the Account Balance"),(0,o.kt)("p",null,"Get the available account balance across all addresses of the given account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before account interactions\n    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('synced!')\n    let balance = account.balance().available\n    console.log('available balance', balance)\n")),(0,o.kt)("h3",{id:"6-enable-withdrawals"},"6. Enable Withdrawals"),(0,o.kt)("p",null,"Sending tokens is performed via the ",(0,o.kt)("inlineCode",{parentName:"p"},"SyncedAccount")," instance that is a result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"account.sync()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    console.log('syncing...')\n    const synced = await account.sync()\n    console.log('available balance', account.balance().available)\n\n    const address = 'atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r'\n    const amount = 1000000 // Amount in IOTA: 1000000 == 1 MIOTA\n\n    const node_response = await account.send(\n        address,\n        amount\n    )\n\n    console.log(\"Check your message on https://explorer.iota.org/chrysalis/message/\", node_response.id)\n")),(0,o.kt)("p",null,"The full function signature is ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send(address, amount[, options])"),"."),(0,o.kt)("p",null,"Default options are fine and are successful; however, additional options can be provided, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"remainderValueStrategy"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"changeAddress"),": Send the remainder value to an internal address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reuseAddress"),": Send the remainder value back to its original address.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send()")," function returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet message")," that fully describes the given transaction. The ",(0,o.kt)("inlineCode",{parentName:"p"},"messageId")," can be used later for checking a confirmation status. Individual messages related to the given account can be obtained via the ",(0,o.kt)("inlineCode",{parentName:"p"},"account.listMessages()")," function."),(0,o.kt)("p",null,"Please note that when sending tokens, a ",(0,o.kt)("a",{parentName:"p",href:"/introduction/reference/details#dust-protection"},"dust protection")," mechanism should be considered."))}h.isMDXComponent=!0},44004:function(e,t,n){t.Z=n.p+"assets/images/accounts-be22cb02c267579a65e460eecf36d366.svg"},54855:function(e,t,n){t.Z=n.p+"assets/images/wallet_rs_layers-5e6a102402164692046128e6f73e9b47.svg"}}]);
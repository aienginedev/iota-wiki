"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46648],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],i={description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the L1 ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},l="The L2 Ledger",c={unversionedId:"guide/solo/the-l2-ledger",id:"guide/solo/the-l2-ledger",title:"The L2 Ledger",description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the L1 ledger.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/the-l2-ledger.md",sourceDirName:"guide/solo",slug:"/guide/solo/the-l2-ledger",permalink:"/smart-contracts/develop/guide/solo/the-l2-ledger",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/the-l2-ledger.md",tags:[],version:"current",frontMatter:{description:"Smart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the L1 ledger.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","account","address","wallet","balances","ledger"]},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/smart-contracts/develop/guide/solo/error-handling"},next:{title:"Installing Wasp",permalink:"/smart-contracts/develop/guide/chains_and_nodes/installing-wasp"}},d={},u=[],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-l2-ledger"},"The L2 Ledger"),(0,o.kt)("p",null,"Each chain in IOTA Smart Contracts contains its own L2 ledger, independent from the L1 ledger.\nSmart contracts can exchange assets between themselves on the same chain and also between different chains, as well as with addresses on the L1 Ledger."),(0,o.kt)("p",null,"Let's imagine that we have a wallet with some tokens on the L1 ledger, and we want to send those tokens to a smart contract on a chain, and later receive these tokens back on L1."),(0,o.kt)("p",null,"On the L1 ledger, our wallet's private key is represented by an address, which holds some tokens.\nThose tokens are ",(0,o.kt)("em",{parentName:"p"},"controlled")," by the private key."),(0,o.kt)("p",null,"In IOTA Smart Contracts the L2 ledger is a collection of ",(0,o.kt)("em",{parentName:"p"},"on-chain accounts")," (sometimes also called just ",(0,o.kt)("em",{parentName:"p"},"accounts"),").\nEach L2 account is controlled by the same private key as its associated address, and can hold tokens on the chain's ledger, just like an address can hold tokens on L1.\nThis way, the chain is essentially a custodian of the tokens deposited on its accounts."),(0,o.kt)("p",null,"The following test demonstrates how a wallet can deposit tokens in a chain\naccount and then withdraw them.\nNote that the math is made somewhat more complex by the gas fees and storage deposit.\nWe could ignore those but we include them here to show exactly how they are handled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorialAccounts(t *testing.T) {\n    env := solo.New(t, &solo.InitOptions{AutoAdjustStorageDeposit: true})\n    chain := env.NewChain(nil, "ch1")\n\n    // create a wallet with some base tokens on L1:\n    userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(0))\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount)\n\n    // the wallet can we identified on L2 by an AgentID:\n    userAgentID := isc.NewAgentID(userAddress)\n    // for now our on-chain account is empty:\n    chain.AssertL2BaseTokens(userAgentID, 0)\n\n    // send 1 Mi from the L1 wallet to own account on-chain, controlled by the same wallet\n    req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).\n        AddBaseTokens(1 * isc.Million)\n\n    // estimate the gas fee and storage deposit\n    gas1, gasFee1, err := chain.EstimateGasOnLedger(req, userWallet, true)\n    require.NoError(t, err)\n    storageDeposit1, err := chain.EstimateNeededStorageDeposit(req, userWallet)\n    require.NoError(t, err)\n    require.Zero(t, storageDeposit1) // since 1 Mi is enough\n\n    // send the deposit request\n    req.WithGasBudget(gas1).\n        AddBaseTokens(gasFee1) // including base tokens for gas fee\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // our L1 balance is 1 Mi + gas fee short\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount-1*isc.Million-gasFee1)\n    // our L2 balance is 1 Mi\n    chain.AssertL2BaseTokens(userAgentID, 1*isc.Million)\n    // (the gas fee went to the chain\'s private account)\n\n    // withdraw all base tokens back to L1\n    req = solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name).\n        WithAllowance(isc.NewAllowanceBaseTokens(1 * isc.Million))\n\n    // estimate the gas fee and storage deposit\n    gas2, gasFee2, err := chain.EstimateGasOnLedger(req, userWallet, true)\n    require.NoError(t, err)\n    storageDeposit2, err := chain.EstimateNeededStorageDeposit(req, userWallet)\n    require.NoError(t, err)\n\n    // send the withdraw request\n    req.WithGasBudget(gas2).\n        AddBaseTokens(gasFee2 + storageDeposit2). // including base tokens for gas fee and storage\n        AddAllowanceBaseTokens(storageDeposit2)   // and withdrawing the storage as well\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // we are back to the initial situation, having been charged some gas fees\n    // in the process:\n    env.AssertL1BaseTokens(userAddress, utxodb.FundsFromFaucetAmount-gasFee1-gasFee2)\n    chain.AssertL2BaseTokens(userAgentID, 0)\n}\n')),(0,o.kt)("p",null,"The example above creates a chain and a wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"utxodb.FundsFromFaucetAmount")," base tokens on L1.\nThen it sends 1 Mi to the corresponding on-chain account by posting a ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," core contract on the chain.\nLater, it sends a ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," core contract, in order to get the tokens back to L1."),(0,o.kt)("p",null,"Both requests are affected by the gas fees and the storage deposit.\nIn some cases it is possible to ignore these amounts, if they are negligible compared to the amounts being transferred.\nIn our case, however, we want to be very precise.\nLet's inspect the first request to see what is going on."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First we create a request to deposit the funds, with ",(0,o.kt)("inlineCode",{parentName:"li"},"solo.NewCallParams"),"."),(0,o.kt)("li",{parentName:"ol"},"Since we want to deposit 1 Mi, we call ",(0,o.kt)("inlineCode",{parentName:"li"},"AddBaseTokens(1 * isc.Million)"),". This\ninstructs Solo to take that amount from our L1 balance and add it to the\ntransaction (this is only possible for on-ledger requests)."),(0,o.kt)("li",{parentName:"ol"},"Once the request is executed by the chain, it will be charged some gas fee.\nWe use ",(0,o.kt)("inlineCode",{parentName:"li"},"chain.EstimateGasOnLedger")," before actually sending the request."),(0,o.kt)("li",{parentName:"ol"},"On-ledger requests also require some storage deposit. We use\n",(0,o.kt)("inlineCode",{parentName:"li"},"EstimateNeededStorageDeposit")," for this, and then realize that the 1 Mi\nalready included is enough for the storage deposit, so no need to add more."),(0,o.kt)("li",{parentName:"ol"},"We adjust the request with the gas budget and the gas fee with ",(0,o.kt)("inlineCode",{parentName:"li"},"WithGasBudget")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AddBaseTokens")," respectively."),(0,o.kt)("li",{parentName:"ol"},"Finally, we send the on-ledger request with ",(0,o.kt)("inlineCode",{parentName:"li"},"PostRequestSync"),"."),(0,o.kt)("li",{parentName:"ol"},"The chain picks up the request. Any attached base tokens (1 Mi + gas fee) are automatically credited to the sender's L2 account."),(0,o.kt)("li",{parentName:"ol"},"The chain executes the request. The gas fee is deducted from the sender's L2\naccount."),(0,o.kt)("li",{parentName:"ol"},"We have exactly 1 Mi on our L2 balance.")),(0,o.kt)("p",null,"The process for the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request is similar, with two main differences:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We need to ensure that the L1 transaction contains enough funds for the storage deposit (because it is larger than the gas fee). These tokens are automatically deposited on our L2 account, and we immediately withdraw them back."),(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("inlineCode",{parentName:"li"},"AddAllowanceBaseTokens")," to set the ",(0,o.kt)("em",{parentName:"li"},"allowance")," of our request. The allowance specifies the maximum amount of tokens that the smart contract is allowed to debit from the sender's L2 account.")),(0,o.kt)("p",null,"Note that if we posted the same ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," request from another user wallet (another private key), it would fail.\nTry it! Only the owner of the address can move those funds from the on-chain account."),(0,o.kt)("p",null,"Also try removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"AddAllowanceBaseTokens")," call: it will fail because a smart contract is not allowed to deduct funds from the sender's L2 balance unless explicitly authorized by the allowance."))}p.isMDXComponent=!0}}]);
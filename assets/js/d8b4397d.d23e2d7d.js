"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[94885],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},64267:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return p}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(34259),s=n(18679),l=["components"],u={keywords:["testing","colored tokens","time locks","solo","plain iotas","balance","mint","delay"],description:"You can post a time-locked request by using the Delay() method. You can convert plan tokens to colored tokens using the Mint() method.",image:"/img/logo/WASP_logo_dark.png"},c="Colored Tokens and Time Locks",d={unversionedId:"guide/schema/timelock",id:"guide/schema/timelock",title:"Colored Tokens and Time Locks",description:"You can post a time-locked request by using the Delay() method. You can convert plan tokens to colored tokens using the Mint() method.",source:"@site/content/build/wasp/develop/documentation/docs/guide/schema/timelock.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/timelock",permalink:"/smart-contracts/develop/guide/schema/timelock",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/schema/timelock.mdx",tags:[],version:"current",frontMatter:{keywords:["testing","colored tokens","time locks","solo","plain iotas","balance","mint","delay"],description:"You can post a time-locked request by using the Delay() method. You can convert plan tokens to colored tokens using the Mint() method.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Example Tests",permalink:"/smart-contracts/develop/guide/schema/examples"},next:{title:"EVM/Solidity Based Smart Contracts",permalink:"/smart-contracts/develop/guide/evm/introduction"}},h={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colored-tokens-and-time-locks"},"Colored Tokens and Time Locks"),(0,r.kt)("p",null,"Let's examine some less commonly used member functions of the SoloContext. We will switch\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"fairauction")," example to show their usage. Here is the startAuction() function of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"fairauction")," test suite:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    auctioneer *wasmsolo.SoloAgent\n    tokenColor wasmlib.ScColor\n)\n\nfunc startAuction(t *testing.T) *wasmsolo.SoloContext {\n    ctx := wasmsolo.NewSoloContract(t, fairauction.ScName, fairauction.OnLoad)\n\n    // set up auctioneer account and mint some tokens to auction off\n    auctioneer = ctx.NewSoloAgent()\n    tokenColor, ctx.Err = auctioneer.Mint(10)\n    require.NoError(t, ctx.Err)\n    require.EqualValues(t, utxodb.FundsFromFaucetAmount-10, auctioneer.Balance())\n    require.EqualValues(t, 10, auctioneer.Balance(tokenColor))\n\n    // start the auction\n    sa := fairauction.ScFuncs.StartAuction(ctx.Sign(auctioneer))\n    sa.Params.Color().SetValue(tokenColor)\n    sa.Params.MinimumBid().SetValue(500)\n    sa.Params.Description().SetValue("Cool tokens for sale!")\n    transfer := ctx.Transfer()\n    transfer.Set(wasmlib.IOTA, 25) // deposit, must be >=minimum*margin\n    transfer.Set(tokenColor, 10) // the tokens to auction\n    sa.Func.Transfer(transfer).Post()\n    require.NoError(t, ctx.Err)\n    return ctx\n}\n')))),(0,r.kt)("p",null,"The function first sets up the SoloContext as usual, and then it performs quite a bit of\nextra work. This is because we want the startAuction() function to start an auction, so\nthat the tests that subsequently use startAuction() can then focus on testing all kinds of\nbidding and auction results."),(0,r.kt)("p",null,"First, we are going to need an agent that functions as the ",(0,r.kt)("inlineCode",{parentName:"p"},"auctioneer"),". This auctioneer\nwill auction off some colored tokens. To provide the auctioneer with colored tokens we use\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Mint()")," method to convert 10 of his plain iota tokens into colored tokens. The mint\nprocess will assign the color value, which is equal to the hash of the Tangle transaction\nthat minted them. We save the resulting ScColor value in ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenColor"),". Note that both\n",(0,r.kt)("inlineCode",{parentName:"p"},"auctioneer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tokenColor")," are global variables that are accessible by any test that\nneeds them."),(0,r.kt)("p",null,"Next we check that no error occurred during the minting process, and then we verify that\nthe auctioneer now has 10 less plain iota and also has a balance of 10 tokens with the\nsaved token color in its address. Notice how we use the same Balance() method to retrieve\nboth balances. When the token color parameter is omitted, the Balance() method defaults to\nreturning the balance of plain iotas in the address."),(0,r.kt)("p",null,"Now we are going to start the auction by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the\nfairauction contract. We get the function descriptor in the usual way, but we also call\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign()")," method of the SoloContext to make sure that the transaction we are about to\npost takes its tokens from the auctioneer address, and signs the transaction with the\ncorresponding private key. Very often you won't care who posts a request, and we have set\nit up in such a way that by default tokens come from the chain originator address,\nwhich has been seeded with tokens just for this occasion. But whenever it is important\nwhere the tokens come from, or who invokes the request, you need to specify the agent\ninvolved by using the Sign() method."),(0,r.kt)("p",null,"Next we set up the function parameters as usual. Note how we pass the saved tokenColor for\nexample. After the parameters have been set up, we see something new happening. We create\na ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer")," proxy and initialize it with the 25 iota that we need to deposit, plus the 10\ntokens of the saved tokenColor that we are auctioning. Next we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer()")," method\nto pass this proxy before posting the request. This is exactly how we would do it from\nwithin the smart contract code. We also have a shorthand function called TransferBaseTokens()\nthat can be used when all you need to transfer is plain iotas which encapsulates the\ncreation of the Transfer proxy, and the initialization with the required amount of iotas."),(0,r.kt)("p",null,"Finally, we make sure there was no error while posting the request and return the\nSoloContext. That concludes the startAuction() function."),(0,r.kt)("p",null,"Here is the first test function that uses our startAuction() function:"),(0,r.kt)(i.Z,{defaultValue:"go",values:[{label:"Go",value:"go"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"func TestFaStartAuction(t *testing.T) {\n    ctx := startAuction(t)\n\n    // note 1 iota should be stuck in the delayed finalize_auction\n    require.EqualValues(t, 25-1, ctx.Balance(nil))\n    require.EqualValues(t, 10, ctx.Balance(nil, tokenColor))\n\n    // auctioneer sent 25 deposit + 10 tokenColor\n    require.EqualValues(t, utxodb.FundsFromFaucetAmount-25-10, auctioneer.Balance())\n    require.EqualValues(t, 0, auctioneer.Balance(tokenColor))\n    require.EqualValues(t, 0, ctx.Balance(auctioneer))\n\n    // remove pending finalize_auction from backlog\n    ctx.AdvanceClockBy(61 * time.Minute)\n    require.True(t, ctx.WaitForPendingRequests(1))\n}\n")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"startAuction")," function of the smart contract will have posted a time-locked request\nto the ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," function by using the Delay() method. This request needed 1 iota\nfor the request, but the request is still 'in transit' until it is unlocked. We can verify\nthe contract balance after the transfer of 25 iota plus 10 colorToken, minus the 1 iota\nstill locked. Note how we again have an account Balance() method where the color parameter\ncan be omitted, in which case it defaults to the account balance of plain iotas."),(0,r.kt)("p",null,"We also verify the address balance of the auctioneer after sending the startAuction\nrequest, and double-check that no tokens ended up in his contract account."),(0,r.kt)("p",null,"The final 2 lines of the code are used to remove the pending ",(0,r.kt)("inlineCode",{parentName:"p"},"finalizeAuction")," request\nfrom the backlog. First we move the logical clock forward to a point when that request is\nsupposed to have triggered. Then we wait for this request to actually be processed. Note\nthat this will happen in a separate goroutine in the background, so we explicitly wait for\nthe request counters to catch up with the one request that is pending."),(0,r.kt)("p",null,"The WaitForPendingRequests() method can also be used whenever a smart contract function is\nknown to Post() a request to itself. Such requests are not immediately executed, but added\nto the backlog, so you need to wait for these pending requests to actually be processed.\nThe advantage here is that you can inspect the in-between state, which means that you can\ntest even a function that posts a request in isolation."))}f.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(67294),a=n(86010),r="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return p}});var o=n(87462),a=n(67294),r=n(86010),i=n(51048),s=n(33609),l=n(1943),u=n(72957),c="tabList__CuJ",d="tabItem_LNqP";function h(e){var t,n,i=e.lazy,h=e.block,p=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===p?p:null!=(t=null!=p?p:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),T=y.tabGroupChoices,x=y.setTabGroupChoices,C=(0,a.useState)(w),q=C[0],N=C[1],E=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var O=T[f];null!=O&&O!==q&&b.some((function(e){return e.value===O}))&&N(O)}var A=function(e){var t=e.currentTarget,n=E.indexOf(t),o=b[n].value;o!==q&&(S(t),N(o),null!=f&&x(f,String(o)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,a=E.indexOf(e.currentTarget)+1;n=null!=(o=E[a])?o:E[0];break;case"ArrowLeft":var r,i=E.indexOf(e.currentTarget)-1;n=null!=(r=E[i])?r:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":h},k)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:A,onClick:A},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":q===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(g.filter((function(e){return e.props.value===q}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}function p(e){var t=(0,i.Z)();return a.createElement(h,(0,o.Z)({key:String(t)},e))}}}]);
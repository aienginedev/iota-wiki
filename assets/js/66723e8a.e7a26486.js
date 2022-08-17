"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[21432],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),s=n,k=c["".concat(p,".").concat(s)]||c[s]||u[s]||r;return a?l.createElement(k,i(i({ref:t},m),{},{components:a})):l.createElement(k,i({ref:t},m))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28406:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],o={},p="Account Manager Interface",d={unversionedId:"account_manager",id:"account_manager",title:"Account Manager Interface",description:"The Account Manager Interface is evaluated through the Command Line Interface of the wallet binary, once per",source:"@site/content/build/cli-wallet/develop/documentation/docs/02_account_manager.md",sourceDirName:".",slug:"/account_manager",permalink:"/cli-wallet/account_manager",draft:!1,editUrl:"https://github.com/iotaledger/cli-wallet/edit/develop/documentation/content/build/cli-wallet/develop/documentation/docs/02_account_manager.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/cli-wallet/installation"},next:{title:"Account Interface",permalink:"/cli-wallet/account"}},m={},u=[{value:"Commands",id:"commands",level:2},{value:"<code>./wallet</code>",id:"wallet",level:3},{value:"Example",id:"example",level:4},{value:"<code>./wallet [account]</code>",id:"wallet-account",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>./wallet backup</code>",id:"wallet-backup",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>./wallet change-password</code>",id:"wallet-change-password",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>./wallet help</code>",id:"wallet-help",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>./wallet init</code>",id:"wallet-init",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>./wallet new</code>",id:"wallet-new",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>./wallet restore</code>",id:"wallet-restore",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>./wallet set-node</code>",id:"wallet-set-node",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>./wallet sync</code>",id:"wallet-sync",level:3},{value:"Example",id:"example-7",level:4}],c={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"account-manager-interface"},"Account Manager Interface"),(0,r.kt)("p",null,"The Account Manager Interface is evaluated through the Command Line Interface of the ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," binary, once per\nexecution."),(0,r.kt)("p",null,"It is responsible for the creation and management of the wallet and its accounts."),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("h3",{id:"wallet"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet")),(0,r.kt)("p",null,"Starts the wallet without a specified account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the wallet has only one account, it will be used;"),(0,r.kt)("li",{parentName:"ul"},"If the wallet has more than one account, a selector will be shown to decide which account to use.")),(0,r.kt)("p",null,"The wallet needs to be initialised (",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command) and with at least one account (",(0,r.kt)("inlineCode",{parentName:"p"},"new")," command)."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet\n")),(0,r.kt)("h3",{id:"wallet-account"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet [account]")),(0,r.kt)("p",null,"Starts the wallet with a specified account;"),(0,r.kt)("p",null,"The wallet needs to be initialised (",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command)."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet main\n")),(0,r.kt)("h3",{id:"wallet-backup"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet backup")),(0,r.kt)("p",null,"Creates a stronghold backup file."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},'"backup.stronghold"')))),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"Create a stronghold backup file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet backup backup.stronghold\n")),(0,r.kt)("h3",{id:"wallet-change-password"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet change-password")),(0,r.kt)("p",null,"Changes the stronghold password."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,"Change the stronghold password."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet change-password\n")),(0,r.kt)("h3",{id:"wallet-help"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet help")),(0,r.kt)("p",null,"Displays the account manager interface usage and exits."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet help\n")),(0,r.kt)("h3",{id:"wallet-init"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet init")),(0,r.kt)("p",null,"Initialises the wallet by creating a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs"},"stronghold")," file from a provided or generated mnemonic."),(0,r.kt)("p",null,"The wallet can only be initialised once."),(0,r.kt)("p",null,"When just initialised, the wallet has no account yet, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," command to create one."),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mnemonic")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly generated"),(0,r.kt)("td",{parentName:"tr",align:null},'"aunt middle impose faith ramp kid olive good practice motor grab ready group episode oven matrix silver rhythm avocado assume humble tiger shiver hurt" (DO NOT USE THIS MNEMONIC)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"node")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:14265/"'),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:14265/"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"coin-type")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"4219 (=Shimmer)"),(0,r.kt)("td",{parentName:"tr",align:null},"4218 (=IOTA)")))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Initialise the wallet with a randomly generated mnemonic and the default node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet init\n")),(0,r.kt)("p",null,"Initialise the wallet with a given mnemonic and the default node.\nDO NOT USE THIS MNEMONIC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./wallet init --mnemonic "aunt middle impose faith ramp kid olive good practice motor grab ready group episode oven matrix silver rhythm avocado assume humble tiger shiver hurt"\n')),(0,r.kt)("p",null,"Initialise the wallet with a randomly generated mnemonic and a given node."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'$ ./wallet init --node "http://localhost:14265/"\n')),(0,r.kt)("p",null,"Initialise the wallet with a given coin type.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP-0044")," for all registered coin types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet init --coin-type 4219\n")),(0,r.kt)("h3",{id:"wallet-new"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet new")),(0,r.kt)("p",null,"Creates a new account."),(0,r.kt)("p",null,"The wallet needs to be initialised (",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command)."),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"alias")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"Account index"),(0,r.kt)("td",{parentName:"tr",align:null},'"main"')))),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"Create a new account with the account index as alias."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet new\n")),(0,r.kt)("p",null,"Create a new account with a provided alias."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet new main\n")),(0,r.kt)("h3",{id:"wallet-restore"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet restore")),(0,r.kt)("p",null,"Restores accounts from a stronghold backup file."),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},'"backup.stronghold"')))),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("p",null,"Restore accounts from a stronghold backup file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet restore backup.stronghold\n")),(0,r.kt)("h3",{id:"wallet-set-node"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet set-node")),(0,r.kt)("p",null,"Sets the node to be used for all requests."),(0,r.kt)("p",null,"The new node URL is persisted to the storage and all future requests will use it."),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2718"),(0,r.kt)("td",{parentName:"tr",align:null},'"http://localhost:14265/"')))),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet set-node http://localhost:14265/\n")),(0,r.kt)("h3",{id:"wallet-sync"},(0,r.kt)("inlineCode",{parentName:"h3"},"./wallet sync")),(0,r.kt)("p",null,"Synchronises all accounts."),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./wallet sync\n")))}s.isMDXComponent=!0}}]);
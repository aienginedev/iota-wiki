"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[90072],{38168:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return u}});var r=a(87462),i=a(63366),n=(a(67294),a(3905)),o=["components"],d={},s="Zebra-IOTA-Edge-SDK : Identity Enabler : 104 Tutorial",l={unversionedId:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial",id:"zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial",title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 104 Tutorial",description:"Device onboarding",source:"@site/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial.md",sourceDirName:"zebra-iota-edge-sdk",slug:"/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial",draft:!1,editUrl:"https://github.com/zebradevs/zebra-iota-edge-sdk/edit/main/documentation/content/build/zebra-iota-edge-sdk/production/documentation/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-104-tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Zebra-IOTA-Edge-SDK : Identity Enabler : 103 Tutorial",permalink:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-103-tutorial"},next:{title:"IOTA Track & Trace Ledger APIs 101 Tutorial : Device Events",permalink:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"How to run in a browser",id:"how-to-run-in-a-browser",level:2},{value:"How to run on an Android Device",id:"how-to-run-on-an-android-device",level:2},{value:"DataWedge profile",id:"datawedge-profile",level:2},{value:"Onboard a device",id:"onboard-a-device",level:2},{value:"Show me the code",id:"show-me-the-code",level:3}],p={toc:u};function g(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"zebra-iota-edge-sdk--identity-enabler--104-tutorial"},"Zebra-IOTA-Edge-SDK : Identity Enabler : 104 Tutorial"),(0,n.kt)("h2",null,"Device onboarding"),(0,n.kt)("p",null,"In this tutorial you will learn how to use the ",(0,n.kt)("strong",{parentName:"p"},"Identity Enabler")," of the Zebra-IOTA Edge SDK to onboard supply chain devices."),(0,n.kt)("p",null,"Before reading this tutorial you should have first read the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial"},"Decentralized Identity introduction tutorial")," and the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},"identity management Holder Application tutorial"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",{parentName:"p"},"DeviceID")," ",(0,n.kt)("em",{parentName:"p"},"Application")," provides a blueprint of how devices can be onboarded to participate in supply chain processes by obtaining a new decentralized identity verified by the organization owning the device. This process is aimed at improving auditability, data provenance and traceability all the way from device events to business events."),(0,n.kt)("p",null,"Particularly, once a new Device Identity is available, the concerned device can start reporting authenticated ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-101"},"scan events")," (after having been previously registered to the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-103"},"Track & Trace Ledger APIs"),") that can be immutably recorded on the IOTA Tangle. Those events could later be transformed into ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/track-trace-ledger-api/track-trace-ledger-api-tutorial-201"},"EPCIS 2.0 events"),"."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"The prerequisites for running this tutorial are described on ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#prerequisites"},"part 1")," of this series."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"An overview of the structure of the SDK is described on ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#getting-started"},"part 1")," of this series."),(0,n.kt)("h2",{id:"how-to-run-in-a-browser"},"How to run in a browser"),(0,n.kt)("p",null,"Run the Holder application in your browser with the below commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/deviceId-mobile-app\nnpm install\n\n# Build and run\nnpm run build:dev\nnpm run start:dev\n\n# Open http://localhost:5002 in your browser\n")),(0,n.kt)("h2",{id:"how-to-run-on-an-android-device"},"How to run on an Android Device"),(0,n.kt)("p",null,"Before continuing please ensure that you have already installed the Android Studio on your local development machine and is properly configured. Then"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"# Clone the repository\ngit clone https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK\n\n# Set up the project\ncd Zebra-Iota-Edge-SDK/identity-enabler/deviceId-mobile-app\nnpm install\n\n# Build and run\nnpm run android\n")),(0,n.kt)("p",null,"Afterwards you need to go to the Android Studio and compile, install and execute the corresponding Android application. After successfully running the application you will be shown a simple wizard that you will need to complete. See below."),(0,n.kt)("h2",{id:"datawedge-profile"},"DataWedge profile"),(0,n.kt)("p",null,"If you want to run this application integrated with a Zebra Scanner you need to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ZebraDevs/Zebra-Iota-Edge-SDK/blob/main/test/datawedge/datawedge.db"},"import")," the corresponding DataWedge profile or configure a new one similar to the one on the screen capture below. The associated application shall be ",(0,n.kt)("inlineCode",{parentName:"p"},"\u201corg.iota.zebra.device_id\u201d"),"."),(0,n.kt)("p",null,"Note: On a non DataWedge device you can simulate a DataWedge scanning through the adb command line tool as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"adb shell am startservice -a org.iota.zebra.device_id.intent.action.SCAN -e com.symbol.datawedge.source scanner -e com.symbol.datawedge.data_string <scanned_string>\n")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Data Wedge Profile 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image3.png",width:"30%"}),(0,n.kt)("img",{alt:"Data Wedge Profile 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image18.png",width:"30%"}),(0,n.kt)("img",{alt:"Data Wedge Profile 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image22.png",width:"30%"})),(0,n.kt)("p",null,"Note: Also you should have previously defined a ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial#datawedge-profile"},"DataWedge profile for the Holder Application"),"."),(0,n.kt)("p",null,"Additional information on how Zebra DataWedge can be integrated is found at the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial#zebra-datawedge-integration"},"introductory tutorial"),"."),(0,n.kt)("h2",{id:"onboard-a-device"},"Onboard a device"),(0,n.kt)("p",null,"The first step to onboard a device is to obtain a new DID document. This process is conducted through a wizard, and is similar to the one we already described for the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial#create-an-identity"},(0,n.kt)("em",{parentName:"a"},"Holder Application")),". See below."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Identity device 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image21.png",width:"30%"}),(0,n.kt)("img",{alt:"Identity device 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image23.png",width:"30%"}),(0,n.kt)("img",{alt:"Identity device 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image17.png",width:"30%"})),(0,n.kt)("p",null,"After having obtained a new Decentralized Identity, which includes verification methods (i.e. public / private keys), the next step is to get a new Verifiable Credential that will contain all the claims associated with the device (serial number, manufacturer, etc.). Thus, it is first required that the device presents its claims to an issuer. In this case the issuer will be ",(0,n.kt)("strong",{parentName:"p"},"the organization owning the device"),". Such an organization will check for the ownership of the DID and the claims made. And, after a verification process, a new Verifiable Credential will be issued and signed. The issuer of such a Verifiable Credential will be the organization owning the device and the subject the device itself."),(0,n.kt)("p",null,"In our blueprint application the process described above is conducted as shown below. From the ",(0,n.kt)("em",{parentName:"p"},"DeviceID Application")," it is requested a new DeviceID credential. For that purpose, the device generates a QR code that encodes all its claims."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Request Credential 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image16.png",width:"30%",align:"center"})),(0,n.kt)("p",null,"Afterwards, such QR code is scanned by the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial"},(0,n.kt)("em",{parentName:"a"},"Holder Application"))," that will verify the claims, the ownership of the DID and will finally issue a new credential."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Device ID Credential",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image8.png",width:"30%"}),(0,n.kt)("img",{alt:"Device ID Claims",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image20.png",width:"30%"})),(0,n.kt)("p",null,"Once the new Credential is ready it is shared from the ",(0,n.kt)("em",{parentName:"p"},"Holder Application")," through a scannable DataMatrix code and imported by the ",(0,n.kt)("em",{parentName:"p"},"DeviceID application"),"."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{alt:"Onboard device 1",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image4.png",width:"30%"}),(0,n.kt)("img",{alt:"Onboard device 2",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image12.png",width:"30%"}),(0,n.kt)("img",{alt:"Onboard device 3",src:"https://raw.githubusercontent.com/ZebraDevs/Zebra-Iota-Edge-SDK/main/docs/static/img/zebra-iota-edge-sdk/104/image17.png",width:"30%"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Important Note"),": In this version of the SDK we are using the ",(0,n.kt)("em",{parentName:"p"},"Holder Application")," itself as ",(0,n.kt)("em",{parentName:"p"},"Issuer Application"),". Thus, in the end the device\u2019s Credential is signed with the identity we have previously generated at the ",(0,n.kt)("em",{parentName:"p"},"Holder Application"),". However, in a real solution there should be a specific ",(0,n.kt)("em",{parentName:"p"},"Issuer Application")," for this purpose. In the next version of the SDK we plan to provide a new blueprint for an ",(0,n.kt)("em",{parentName:"p"},"Issuer Application"),"."),(0,n.kt)("h3",{id:"show-me-the-code"},"Show me the code"),(0,n.kt)("p",null,"The code that makes it possible the Device onboarding is a combination of the previous code we have shown in other parts of this tutorial, such as the ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial#show-me-the-code"},"identity generation")," or ",(0,n.kt)("a",{parentName:"p",href:"/zebra-tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-102-tutorial#show-me-the-code-1"},"credential issuance"),"."))}g.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(a),g=i,h=p["".concat(s,".").concat(g)]||p[g]||u[g]||n;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
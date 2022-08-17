"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54024],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},h=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=m(a),c=r,u=p["".concat(o,".").concat(c)]||p[c]||k[c]||i;return a?n.createElement(u,l(l({ref:t},h),{},{components:a})):n.createElement(u,l({ref:t},h))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87783:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return k}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],s={description:"The marker tool improves the efficiency with which certain properties can be checked or certain metrics calculated.",image:"https://i.imgur.com/GENej3O.png",slug:"4.7Markers",keywords:["past cone","future cone","approval weight","marker tools","sequence","dag"]},o="4.7 Markers",m={unversionedId:"4.7 Markers",id:"4.7 Markers",title:"4.7 Markers",description:"The marker tool improves the efficiency with which certain properties can be checked or certain metrics calculated.",source:"@site/content/build/iota-2.0-research-specifications/4.7 Markers.md",sourceDirName:".",slug:"/4.7Markers",permalink:"/IOTA-2.0-Research-Specifications/4.7Markers",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/docusaurus/content/build/iota-2.0-research-specifications/4.7 Markers.md",tags:[],version:"current",frontMatter:{description:"The marker tool improves the efficiency with which certain properties can be checked or certain metrics calculated.",image:"https://i.imgur.com/GENej3O.png",slug:"4.7Markers",keywords:["past cone","future cone","approval weight","marker tools","sequence","dag"]},sidebar:"tutorialSidebar",previous:{title:"4.6 Congestion Control",permalink:"/IOTA-2.0-Research-Specifications/4.6CongestionControl"},next:{title:"5.1 UTXO",permalink:"/IOTA-2.0-Research-Specifications/5.1UTXO"}},h={},k=[{value:"4.7.1 Introduction",id:"471-introduction",level:2},{value:"4.7.2 Definitions",id:"472-definitions",level:2},{value:"4.7.3 The Markers",id:"473-the-markers",level:2},{value:"4.7.4 The Marker-sequence",id:"474-the-marker-sequence",level:2},{value:"4.7.4.1 Marker-sequence data",id:"4741-marker-sequence-data",level:3},{value:"4.7.4.2 Creation of Marker-sequences",id:"4742-creation-of-marker-sequences",level:3},{value:"4.7.5 Message Metadata",id:"475-message-metadata",level:2},{value:"4.7.5.1 Update of Already Booked Messages on Double Spends",id:"4751-update-of-already-booked-messages-on-double-spends",level:3},{value:"4.7.6 Marker Application Description",id:"476-marker-application-description",level:2},{value:"4.7.6.1 Example Implementation",id:"4761-example-implementation",level:3},{value:"4.7.6.2 Approval Weight Approximation",id:"4762-approval-weight-approximation",level:3},{value:"4.7.6.3 Past Cone Check",id:"4763-past-cone-check",level:3}],p={toc:k};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"47-markers"},"4.7 Markers"),(0,i.kt)("h2",{id:"471-introduction"},"4.7.1 Introduction"),(0,i.kt)("p",null,"This section specifies the requirements for the ",(0,i.kt)("em",{parentName:"p"},"marker")," tool. A tool as defined here is a feature that adds functionality to the node software but is not an essential component. The marker tool improves the efficiency with which certain properties can be checked or certain metrics calculated."),(0,i.kt)("p",null,"The potential issues addressed by the use of the marker tool are in handling potentially numerically expensive operations. Specifically, the following operations can become numerically expensive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Future- or past cone inclusion"),". For certain applications it is necessary to know whether a certain message is in the past or future cone of another message. In the default approach the Tangle has to be walked until a given message is found."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Approval weight"),". In order to compute the approval weight of a given message the node software needs to traverse the Tangle from that message to the tips and sum up the active consensus Mana of all the messages in its future cone, see also the section on ",(0,i.kt)("a",{parentName:"li",href:"./6.2OpinionSetting"},"approval weight"),".")),(0,i.kt)("p",null,"The marker tool allows a node to efficiently determine whether certain markers are in the past or future cone of a given message, by reducing the proportion of the Tangle that needs to be traversed."),(0,i.kt)("p",null,'The marker tool achieves this by defining a parallel internal data structure, consisting of additional metadata applied to specific messages in the Tangle. Specifically, the marker tool "marks" certain messages, which form a subDAG which approximates the topological structure of the Tangle.  Furthermore, the markers are grouped into sequences (which themselves form yet another DAG), which allow the node to quickly determine which markers reference each other.'),(0,i.kt)("p",null,"Note, that we ",(0,i.kt)("em",{parentName:"p"},"shall")," require that markers are assigned when booking a message. Thus, for that part of the message DAG that is already booked the corresponding marker DAG does not change anymore."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Markers")," tool specification depends on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./4.1TheTangle"},"4.1 - The Tangle"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"5.2 - Ledger State"),".")),(0,i.kt)("h2",{id:"472-definitions"},"4.7.2 Definitions"),(0,i.kt)("p",null,"The following terms are defined in relation to markers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"UTXO branch:")," This is a set of outputs that spawn off from a conflict transaction. Each UTXO branch by itself is conflict free. See also ",(0,i.kt)("a",{parentName:"li",href:"./5.1UTXO"},"Section 5.1 - UTXO")," and ",(0,i.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"Section 5.2 - Ledger State")," for a more complete discussion on UTXO and its branches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Aggregated branch:")," The aggregation of a combination of several branches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Branch identifier (",(0,i.kt)("inlineCode",{parentName:"strong"},"BID"),"):")," The unique identifier of a branch or aggregated branch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Main branch:")," The part of the UTXO DAG, in which all outputs are considered to be good in the sense that all conflicts in their past have been resolved, either by a given conflict being accepted or rejected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rank:")," The length of the longest directed path in DAG terminating in a given vertex/object. Specifically, if a vertex ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"A")," directly references only ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"B")," and ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"C")," then ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"rank(A)=max(rank(B),rank(C))+1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker:")," A message that is assigned additional properties locally on the node, and that tracks a particular UTXO branch."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker identifier (",(0,i.kt)("inlineCode",{parentName:"strong"},"MID"),"):")," The unique identifier of the marker."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker DAG:")," The collection of all markers."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker rank (",(0,i.kt)("inlineCode",{parentName:"strong"},"MR"),"):")," The rank of a marker in the marker DAG."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker-sequence:")," A marker-sequence is a group of markers. Each marker-sequence maps to a UTXO branch; see ",(0,i.kt)("a",{parentName:"li",href:"./5.2LedgerState"},"Section 5.2 - Ledger State"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker-sequence identifier (",(0,i.kt)("inlineCode",{parentName:"strong"},"SID"),"):")," A marker-sequence identifier is a number that uniquely identifies a marker-sequence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker-sequence rank (",(0,i.kt)("inlineCode",{parentName:"strong"},"SR"),"):")," The rank of a marker-sequence in the marker-sequence DAG."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Future marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"FM"),"):")," This field in the ",(0,i.kt)("a",{parentName:"li",href:"##4.7.5MessageMetadata"},"message metadata"),' is (potentially) updated when a new marker is generated in the future cone of the message, following the rules defined in Section "Message Metadata". Essentially it contains the list of markers for which there is no other marker between the marker in question and the message, or in more mathematical terms, the minimal markers in the future cone.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Past marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"PM"),"):")," A past marker of a message is a most recent past marker of the parents (with respect to ",(0,i.kt)("inlineCode",{parentName:"li"},"MR"),"). The past marker of a marker is set to itself.")),(0,i.kt)("h2",{id:"473-the-markers"},"4.7.3 The Markers"),(0,i.kt)("p",null,"A marker consists of the following data:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Variable"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"MID")),(0,i.kt)("td",null,"uint64"),(0,i.kt)("td",null,"Unique identifier of the marker")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SID")),(0,i.kt)("td",null,"uint64"),(0,i.kt)("td",null,"Unique identifier of the marker-sequence")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"MR")),(0,i.kt)("td",null,"uint64"),(0,i.kt)("td",null,"Marker rank"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 4.7.1:")," Marker data."),(0,i.kt)("p",null,"A new marker ",(0,i.kt)("em",{parentName:"p"},"shall")," be created by the marker tool when any of the following conditions are met:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a new UTXO branch is created and the message that would get a marker assigned is not yet booked. This also creates a new marker-sequence."),(0,i.kt)("li",{parentName:"ul"},"more than a certain number of messages (",(0,i.kt)("inlineCode",{parentName:"li"},"maxMsgPerMarker"),") have been received since the last marker.  This rule must be applied per marker-sequence. I.e. for each marker-sequence with more than ",(0,i.kt)("inlineCode",{parentName:"li"},"maxMsgPerMarker")," since the last marker in that marker-sequence, the rule ",(0,i.kt)("em",{parentName:"li"},"shall")," be applied independently."),(0,i.kt)("li",{parentName:"ul"},"a certain time window (",(0,i.kt)("inlineCode",{parentName:"li"},"maxTimePerMarker"),") has passed since the last marker.")),(0,i.kt)("p",null,"A marker is created with a ",(0,i.kt)("inlineCode",{parentName:"p"},"MID"),", an this ",(0,i.kt)("inlineCode",{parentName:"p"},"MID")," must be unique."),(0,i.kt)("p",null,"To set a new  marker within a marker-sequence, the marker tool randomly selects from strong tips set a message whose past marker is the last marker in the sequence. The next marker will then reference that transaction. If there is no strong tip with the appropriate past marker, the selection ",(0,i.kt)("em",{parentName:"p"},"shall")," be from message in the weak tips set. The rank of the new marker should be one greater than the rank of all the past markers of the message."),(0,i.kt)("p",null,"Since ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},"\\texttt{MR}(x)=1+\\max \\limits_{y: x\\text{ references }y}\\texttt{MR}(y)"),", marker ranks are monotonically non-decreasing such that\n",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},"\\forall x \\in fc(y) \\Rightarrow \\texttt{MR}_x > \\texttt{MR}_y"),",\nwhere ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},"fc(y)")," is the future cone of ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},"y"),"."),(0,i.kt)("h2",{id:"474-the-marker-sequence"},"4.7.4 The Marker-sequence"),(0,i.kt)("p",null,"Marker-sequences are used to track the UTXO DAG branches. Each branch corresponds to a marker-sequence with a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"SID"),", and the marker-sequences form a DAG."),(0,i.kt)("h3",{id:"4741-marker-sequence-data"},"4.7.4.1 Marker-sequence data"),(0,i.kt)("p",null,"Each marker-sequence is associated with the following data:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Variable"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SID")),(0,i.kt)("td",null,"unit64"),(0,i.kt)("td",null,"The marker-sequence identifier")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"SR")),(0,i.kt)("td",null,"unit64"),(0,i.kt)("td",null,"The rank of a marker-sequence in the marker-sequence DAG")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"MRMax")),(0,i.kt)("td",null,"unit64"),(0,i.kt)("td",null,"The highest ",(0,i.kt)("code",null,"MR")," in the marker-sequence")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"MRMin")),(0,i.kt)("td",null,"unit64"),(0,i.kt)("td",null,"The lowest ",(0,i.kt)("code",null,"MR")," in the marker-sequence")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"ParentReferences ")),(0,i.kt)("td",null,"map[",(0,i.kt)("code",null,"Marker"),"] ",(0,i.kt)("code",null,"Marker")),(0,i.kt)("td",null,"Relationship map from parent marker-sequences to markers (*) "))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 4.7.2:")," Data associated to a marker-sequence."),(0,i.kt)("p",null,"*The field ",(0,i.kt)("inlineCode",{parentName:"p"},"ParentReferences")," models the relationship between marker-sequences. This maps which marker in this marker-sequence references which other markers from other marker-sequences."),(0,i.kt)("p",null,"Whenever a new marker is added that is a member of a given marker-sequence, ",(0,i.kt)("inlineCode",{parentName:"p"},"MR_max")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ParentReferences")," for that marker-sequence ",(0,i.kt)("em",{parentName:"p"},"shall")," be updated."),(0,i.kt)("h3",{id:"4742-creation-of-marker-sequences"},"4.7.4.2 Creation of Marker-sequences"),(0,i.kt)("p",null,"A new marker-sequence ",(0,i.kt)("em",{parentName:"p"},"shall")," be created when:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"there's a transaction that creates a new conflict, i.e. creates a new UTXO branch."),(0,i.kt)("li",{parentName:"ol"},"the UTXO branches are aggregated."),(0,i.kt)("li",{parentName:"ol"},"UTXO branches are merged.")),(0,i.kt)("p",null,"Each new marker-sequence ",(0,i.kt)("em",{parentName:"p"},"shall")," start with a new marker. Hence, with the creation of a new marker-sequence also a new marker ",(0,i.kt)("em",{parentName:"p"},"must")," be assigned to the message that caused one of the three above events."),(0,i.kt)("p",null,"Whenever a new marker-sequence is created, the marker tool ",(0,i.kt)("em",{parentName:"p"},"shall")," assign:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a new ",(0,i.kt)("inlineCode",{parentName:"li"},"SID"),", created by the rule ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"\\text{new }\\texttt{SID}=1+\\text{last } \\texttt{SID}"),". A new created ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," must be unique."),(0,i.kt)("li",{parentName:"ul"},"a new ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},"\\texttt{SR}=1+max(\\text{referenced }\\texttt{SR})"),".\nTo prevent assigning a new ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," when combining the same marker-sequences at different times, the marker tool ",(0,i.kt)("em",{parentName:"li"},"shall")," build parent-child relationships in a map whenever a new marker-sequence is created.")),(0,i.kt)("p",null,"For further details about the UTXO model, please refer to the section on ",(0,i.kt)("a",{parentName:"p",href:"./5.1UTXO"},"UTXO"),"."),(0,i.kt)("h2",{id:"475-message-metadata"},"4.7.5 Message Metadata"),(0,i.kt)("p",null,"For each message in the Tangle, the marker tool ",(0,i.kt)("em",{parentName:"p"},"shall")," maintain metadata that provides information about the markers that are closest in the past or future cone of that message, as well as whether the message itself is a marker and what rank the message has. The following message metadata ",(0,i.kt)("em",{parentName:"p"},"shall")," be defined in the marker tool to support that requirement:"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Variable"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"IsMarker")),(0,i.kt)("td",null,"bool"),(0,i.kt)("td",null,"A flag to indicate whether a message is a marker.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"PastMarkers")),(0,i.kt)("td",null,"map[",(0,i.kt)("code",null,"SID"),"]",(0,i.kt)("code",null,"MID")),(0,i.kt)("td",null,"A list of the closest markers from different marker-sequences in the past cone of the message.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"FutureMarkers")),(0,i.kt)("td",null,"map[",(0,i.kt)("code",null,"SID"),"]",(0,i.kt)("code",null,"MID")),(0,i.kt)("td",null,"A list of the closest markers from different marker-sequences in the future cone of the message.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"MarkerBranchID")),(0,i.kt)("td",null,(0,i.kt)("code",null,"BID")),(0,i.kt)("td",null,"The branch ID to which the marker is mapped, or ",(0,i.kt)("code",null,"nil")," if the message is no marker.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"PayloadBranchID")),(0,i.kt)("td",null,(0,i.kt)("code",null,"BID")),(0,i.kt)("td",null,"The branch ID to which the Payload is mapped in case it is a conflict, or ",(0,i.kt)("code",null,"nil")," otherwise.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"IndividualBranchID")),(0,i.kt)("td",null,(0,i.kt)("code",null,"BID")),(0,i.kt)("td",null,"The branch ID if there is need for mapping the message individually to a branch ID, or ",(0,i.kt)("code",null,"nil")," otherwise."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Table 4.7.3:")," Markers metadata."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PastMarkers")," field contains"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"only the marker identifier of itself, if the message is marked as a marker."),(0,i.kt)("li",{parentName:"ul"},"the marker identifier of its closest past markers (PMs), i.e. from each referenced marker-sequence only the markers with the highest marker rank (",(0,i.kt)("inlineCode",{parentName:"li"},"MR"),"). Markers which are referenced by other markers in this list ",(0,i.kt)("em",{parentName:"li"},"shall")," be removed.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FutureMarkers")," list ",(0,i.kt)("em",{parentName:"p"},"shall")," be empty at the start and ",(0,i.kt)("em",{parentName:"p"},"shall")," be updated when a new marker directly or indirectly references that list."),(0,i.kt)("p",null,"The propagation of a FM to its past cone (i.e. the update of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FutureMarkers")," list in the encountered messages) ",(0,i.kt)("em",{parentName:"p"},"shall")," not continue beyond a message if:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"FutureMarkers")," of a message includes a previous marker of the same marker-sequence; the message that includes such a marker ",(0,i.kt)("em",{parentName:"li"},"shall")," not get updated."),(0,i.kt)("li",{parentName:"ol"},"the message is the marker in a different marker-sequence. Then the ",(0,i.kt)("inlineCode",{parentName:"li"},"FutureMarkers")," ",(0,i.kt)("em",{parentName:"li"},"shall")," be updated for that marker only.")),(0,i.kt)("p",null,"Through this approach past and future markers do not cross weak parents. It also prevents the lists from growing unboundedly."),(0,i.kt)("p",null,"The fields ",(0,i.kt)("inlineCode",{parentName:"p"},"MarkerBranchID"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PayloadBranchID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IndividualBranchID")," allow for making connections between the marker DAG, the message DAG and the UTXO branch DAG. When a new Sequence is created the ",(0,i.kt)("inlineCode",{parentName:"p"},"MarkerBranchID")," is set to the branch that creates the sequence."),(0,i.kt)("h3",{id:"4751-update-of-already-booked-messages-on-double-spends"},"4.7.5.1 Update of Already Booked Messages on Double Spends"),(0,i.kt)("p",null,"If a transaction arrives that double spends an already booked transaction, a new marker-sequence ",(0,i.kt)("em",{parentName:"p"},"shall")," be created for the newly arrived message (containing the transaction), see Section ",(0,i.kt)("a",{parentName:"p",href:"#4.7.4.2CreationofMarker-sequences"},"Creation of marker-sequences"),"."),(0,i.kt)("p",null,"For the already booked conflicting transaction ",(0,i.kt)("strong",{parentName:"p"},"no")," new marker or marker Sequence ",(0,i.kt)("em",{parentName:"p"},"shall")," be created. This is because the marker DAG and Sequence DAG ",(0,i.kt)("em",{parentName:"p"},"shall")," not be changed post-booking a message. However a new UTXO branch is created."),(0,i.kt)("p",null,"First, assume the existing booked transaction is a Marker itself. Then the marker gets mapped onto the new branch by updating the field ",(0,i.kt)("inlineCode",{parentName:"p"},"MarkerBranchID")," in the message metadata. Furthermore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"PayloadBranchID")," is updated to the new branch. For all FM in the same sequence the ",(0,i.kt)("inlineCode",{parentName:"p"},"MarkerBranchID")," gets updated to the new branch. Furthermore, for every sequence that directly or indirectly references the sequence in which the double-spend occurs, the first marker is remapped to the new branch as well."),(0,i.kt)("p",null,"Second, assume the existing transaction is not a marker. Then all messages between the transaction and the following future markers (including the transaction itself) get mapped individually to the new branch mapping using the field ",(0,i.kt)("inlineCode",{parentName:"p"},"IndividualBranchID"),". From the future markers onwards, the same applies as in the first scenario."),(0,i.kt)("p",null,"For an example implementation of these scenarios also visit the example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/packages/tangle/images/TestBookerMarkerMappings"},"here"),"."),(0,i.kt)("h2",{id:"476-marker-application-description"},"4.7.6 Marker Application Description"),(0,i.kt)("p",null,"Figure 1 shows an example of how the markers and marker-sequences (here also called Sequence) would look in the Tangle from the perspective of the Message DAG, the marker DAG and the marker-sequence DAG. The purple colored messages are markers:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://i.imgur.com/GENej3O.png"},(0,i.kt)("img",{parentName:"a",src:"https://i.imgur.com/GENej3O.png",alt:"Markers and marker-sequences in the tangle"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Image 4.7.4:")," Markers and marker-sequences in the Tangle."),(0,i.kt)("h3",{id:"4761-example-implementation"},"4.7.6.1 Example Implementation"),(0,i.kt)("p",null,"An illustrative example of the markers tool in action is provided ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/packages/tangle/images/TestBookerMarkerMappings"},"here")," for the prototype implementation."),(0,i.kt)("h3",{id:"4762-approval-weight-approximation"},"4.7.6.2 Approval Weight Approximation"),(0,i.kt)("p",null,"To approximate the approval weight of a message, the markers tool retrieves the approval weight of ",(0,i.kt)("inlineCode",{parentName:"p"},"FutureMarkers"),". Since a given message is in the past cone of its FMs, the approval weight and thus the finality of the message will be at least the same as the maximum weight of its FMs. This gives a lower bound (which is the \u201csafe\u201d bound), and if the markers are set frequently enough, this provides a good approximation of that bound."),(0,i.kt)("h3",{id:"4763-past-cone-check"},"4.7.6.3 Past Cone Check"),(0,i.kt)("p",null,"By comparing the ",(0,i.kt)("inlineCode",{parentName:"p"},"PastMarkers")," of a message with the ",(0,i.kt)("inlineCode",{parentName:"p"},"FutureMarkers")," of another message, the markers tool can determine if that message is in the past cone of the other. For example, consider two messages ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Y")," that are members in the same marker-sequence. Then if ",(0,i.kt)("inlineCode",{parentName:"p"},"PM(X)>FM(Y)"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," is in the future of ",(0,i.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,i.kt)("p",null,"One way in which this check can be carried out is by traversing the marker DAG while remaining in the bounds of the marker ranks."),(0,i.kt)("p",null,"A potential optimization is that the marker-sequence DAG can be traversed while considering the marker-sequence ranks, prior to any traversal of the marker DAG."),(0,i.kt)("p",null,"It is possible that the marker DAG does not cover certain areas of the message DAG at a given point in time. In this case, a check on this question can return one of the following three values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRUE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FALSE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"N/A"))),(0,i.kt)("p",null,"If the check returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"N/A"),", then the Message DAG must be searched via a search algorithm."),(0,i.kt)("p",null,"For an example implementation of the algorithm for the past cone check visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/docs/specification/003-markers"},"GoShimmer markers"),"."))}c.isMDXComponent=!0}}]);
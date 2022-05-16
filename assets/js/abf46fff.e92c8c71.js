"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6067],{341:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=a(87462),s=a(63366),l=(a(67294),a(3905)),r=["components"],i={description:"Tools API allows retrieving technical info about the state of the node.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","tools","message","past cone","diagnostic"]},o="Tools API Methods",p={unversionedId:"apis/tools",id:"apis/tools",title:"Tools API Methods",description:"Tools API allows retrieving technical info about the state of the node.",source:"@site/external/goshimmer/documentation/docs/apis/tools.md",sourceDirName:"apis",slug:"/apis/tools",permalink:"/goshimmer/apis/tools",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/apis/tools.md",tags:[],version:"current",frontMatter:{description:"Tools API allows retrieving technical info about the state of the node.",image:"/img/logo/goshimmer_light.png",keywords:["client library","HTTP API","tools","message","past cone","diagnostic"]},sidebar:"docs",previous:{title:"Spammer API Methods",permalink:"/goshimmer/apis/spammer"},next:{title:"Tooling",permalink:"/goshimmer/tooling/overview"}},d={},m=[{value:"<code>/tools/message/pastcone</code>",id:"toolsmessagepastcone",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Examples",id:"examples",level:3},{value:"cURL",id:"curl",level:4},{value:"Client lib - <code>PastConeExist()</code>",id:"client-lib---pastconeexist",level:4},{value:"Response examples",id:"response-examples",level:4},{value:"Results",id:"results",level:4},{value:"<code>/tools/message/missing</code>",id:"toolsmessagemissing",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples-1",level:3},{value:"cURL",id:"curl-1",level:4},{value:"Client lib - <code>Missing()</code>",id:"client-lib---missing",level:4},{value:"Response examples",id:"response-examples-1",level:4},{value:"Results",id:"results-1",level:4},{value:"<code>/tools/message/approval</code>",id:"toolsmessageapproval",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Examples",id:"examples-2",level:3},{value:"cURL",id:"curl-2",level:4},{value:"Response examples",id:"response-examples-2",level:4},{value:"<code>tools/message/orphanage</code>",id:"toolsmessageorphanage",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Examples",id:"examples-3",level:3},{value:"cURL",id:"curl-3",level:4},{value:"Response examples",id:"response-examples-3",level:4},{value:"<code>tools/diagnostic/messages</code>",id:"toolsdiagnosticmessages",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Examples",id:"examples-4",level:3},{value:"cURL",id:"curl-4",level:4},{value:"Response examples",id:"response-examples-4",level:4},{value:"<code>tools/diagnostic/messages/firstweakreferences</code>",id:"toolsdiagnosticmessagesfirstweakreferences",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Examples",id:"examples-5",level:3},{value:"cURL",id:"curl-5",level:4},{value:"Response examples",id:"response-examples-5",level:4},{value:"<code>tools/diagnostic/messages/rank/:rank</code>",id:"toolsdiagnosticmessagesrankrank",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"Examples",id:"examples-6",level:3},{value:"cURL",id:"curl-6",level:4},{value:"Response examples",id:"response-examples-6",level:4},{value:"<code>tools/diagnostic/utxodag</code>",id:"toolsdiagnosticutxodag",level:2},{value:"Parameters",id:"parameters-7",level:3},{value:"Examples",id:"examples-7",level:3},{value:"cURL",id:"curl-7",level:4},{value:"Response examples",id:"response-examples-7",level:4},{value:"<code>tools/diagnostic/branches</code>",id:"toolsdiagnosticbranches",level:2},{value:"Parameters",id:"parameters-8",level:3},{value:"Examples",id:"examples-8",level:3},{value:"cURL",id:"curl-8",level:4},{value:"Response examples",id:"response-examples-8",level:4},{value:"<code>tools/diagnostic/branches/lazybooked</code>",id:"toolsdiagnosticbrancheslazybooked",level:2},{value:"Parameters",id:"parameters-9",level:3},{value:"Examples",id:"examples-9",level:3},{value:"cURL",id:"curl-9",level:4},{value:"Response examples",id:"response-examples-9",level:4},{value:"<code>tools/diagnostic/branches/invalid</code>",id:"toolsdiagnosticbranchesinvalid",level:2},{value:"Parameters",id:"parameters-10",level:3},{value:"Examples",id:"examples-10",level:3},{value:"cURL",id:"curl-10",level:4},{value:"Response examples",id:"response-examples-10",level:4},{value:"<code>tools/diagnostic/tips</code>",id:"toolsdiagnostictips",level:2},{value:"Parameters",id:"parameters-11",level:3},{value:"Examples",id:"examples-11",level:3},{value:"cURL",id:"curl-11",level:4},{value:"Response examples",id:"response-examples-11",level:4},{value:"<code>tools/diagnostic/drng</code>",id:"toolsdiagnosticdrng",level:2},{value:"Parameters",id:"parameters-12",level:3},{value:"Examples",id:"examples-12",level:3},{value:"cURL",id:"curl-12",level:4},{value:"Response examples",id:"response-examples-12",level:4}],u={toc:m};function c(e){var t=e.components,a=(0,s.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tools-api-methods"},"Tools API Methods"),(0,l.kt)("p",null,"Tools API allows retrieving technical info about the state of the node."),(0,l.kt)("p",null,"The API provides the following functions and endpoints:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsmessagepastcone"},"/tools/message/pastcone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsmessagemissing"},"/tools/message/missing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tools/message/approval"},"/tools/message/approval")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsmessageorphanage"},"/tools/message/orphanage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessages"},"tools/diagnostic/messages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessagesfirstweakreferences"},"tools/diagnostic/messages/firstweakreferences")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticmessagesrankrank"},"tools/diagnostic/messages/rank/:rank")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticutxodag"},"tools/diagnostic/utxodag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticbranches"},"tools/diagnostic/branches")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticbrancheslazybooked"},"tools/diagnostic/branches/lazybooked")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticbranchesinvalid"},"tools/diagnostic/branches/invalid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnostictips"},"tools/diagnostic/tips")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnostictipsstrong"},"tools/diagnostic/tips/strong")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnostictipsweak"},"tools/diagnostic/tips/weak")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#toolsdiagnosticdrng"},"tools/diagnostic/drng"))),(0,l.kt)("p",null,"Client lib APIs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---pastconeexist"},"PastConeExist()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#client-lib---missing"},"Missing()"))),(0,l.kt)("h2",{id:"toolsmessagepastcone"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tools/message/pastcone")),(0,l.kt)("p",null,"Checks that all the messages in the past cone of a message are existing on the node down to the genesis. Returns the number of messages in the past cone as well."),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"ID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Message ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("h4",{id:"curl"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/pastcone?ID=4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc'\n")),(0,l.kt)("h4",{id:"client-lib---pastconeexist"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"PastConeExist()")),(0,l.kt)("p",null,"Past cone can be checked using ",(0,l.kt)("inlineCode",{parentName:"p"},"PastConeExist(base58EncodedMessageID string) (*jsonmodels.PastconeResponse, error)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"pastConeCheck, err := goshimAPI.PastConeExist(base58EncodedMessageID)\nif err != nil {\n    // return error\n}\n\n// will print the past cone size\nfmt.Println(string(pastConeCheck.PastConeSize))\n")),(0,l.kt)("h4",{id:"response-examples"},"Response examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "exist": true,\n  "pastConeSize": 475855\n}\n')),(0,l.kt)("h4",{id:"results"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"exist")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A boolean indicates if the message and its past cone exist.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"pastConeSize")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Size of the past cone of the given message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"error")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,l.kt)("h2",{id:"toolsmessagemissing"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tools/message/missing")),(0,l.kt)("p",null,"Returns all the missing messages and their count."),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("h4",{id:"curl-1"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/missing'\n")),(0,l.kt)("h4",{id:"client-lib---missing"},"Client lib - ",(0,l.kt)("inlineCode",{parentName:"h4"},"Missing()")),(0,l.kt)("p",null,"Missing messages can be retrieved using ",(0,l.kt)("inlineCode",{parentName:"p"},"Missing() (*jsonmodels.MissingResponse, error)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"missingMsgs, err := goshimAPI.Missing()\nif err != nil {\n    // return error\n}\n\n// will print number of missing messages\nfmt.Println(string(missingMsgs.Count))\n")),(0,l.kt)("h4",{id:"response-examples-1"},"Response examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ids": [],\n  "count": 0\n}\n')),(0,l.kt)("h4",{id:"results-1"},"Results"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ids")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"[]string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"List of missing messages' IDs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"count")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Count of missing messages.")))),(0,l.kt)("h2",{id:"toolsmessageapproval"},(0,l.kt)("inlineCode",{parentName:"h2"},"/tools/message/approval")),(0,l.kt)("p",null,"Returns the first approver of all messages."),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"examples-2"},"Examples"),(0,l.kt)("h4",{id:"curl-2"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/approval'\n")),(0,l.kt)("h4",{id:"response-examples-2"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("h2",{id:"toolsmessageorphanage"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/message/orphanage")),(0,l.kt)("p",null,"Returns orphaned messages of the future cone of the given message ID."),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"msgID")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"Message ID encoded in Bases58")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"string")))),(0,l.kt)("h3",{id:"examples-3"},"Examples"),(0,l.kt)("h4",{id:"curl-3"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/message/orphanage?msgID=4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc'\n")),(0,l.kt)("h4",{id:"response-examples-3"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"MsgID,MsgIssuerID,MsgIssuanceTime,MsgArrivalTime,MsgSolidTime,MsgApprovedBy\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,1622100376301474621,1622100390350323240,1622100390350376317,true\n")),(0,l.kt)("h2",{id:"toolsdiagnosticmessages"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages")),(0,l.kt)("p",null,"Returns all the messages in the storage."),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"examples-4"},"Examples"),(0,l.kt)("h4",{id:"curl-4"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages'\n")),(0,l.kt)("h4",{id:"response-examples-4"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csv"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,GradeOfFinality,GradeOfFinalityTime,StrongParents,WeakParents,DislikeParents,LikeParents,StrongApprovers,WeakApprovers,BranchID,Scheduled,Booked,Invalid,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,GradeOfFinanlity(3),E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,BranchID(MasterBranchID),true,true,true,1,0:0,0,0,1:2,2,2,TransactionType(1337)\n")),(0,l.kt)("h2",{id:"toolsdiagnosticmessagesfirstweakreferences"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages/firstweakreferences")),(0,l.kt)("p",null,"Returns the first weak reference of all messages in the storage."),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"examples-5"},"Examples"),(0,l.kt)("h4",{id:"curl-5"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages/firstweakreferences'\n")),(0,l.kt)("h4",{id:"response-examples-5"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,GradeOfFinality,GradeOfFinalityTime,StrongParents,WeakParents,DislikeParents,LikeParents,StrongApprovers,WeakApprovers,BranchID,Scheduled,Booked,Invalid,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,GradeOfFinanlity(3),E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,BranchID(MasterBranchID),true,true,true,1,0:0,0,0,1:2,2,2,TransactionType(1337)\n")),(0,l.kt)("h2",{id:"toolsdiagnosticmessagesrankrank"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/messages/rank/:rank")),(0,l.kt)("p",null,"Returns a list of messages with rank >= of the given rank parameter."),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"Parameter")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"rank")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Required or Optional")),(0,l.kt)("td",{parentName:"tr",align:null},"Required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Description")),(0,l.kt)("td",{parentName:"tr",align:null},"message rank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Type")),(0,l.kt)("td",{parentName:"tr",align:null},"uint64")))),(0,l.kt)("h3",{id:"examples-6"},"Examples"),(0,l.kt)("h4",{id:"curl-6"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/messages/rank/:rank'\n")),(0,l.kt)("p",null,"where ",(0,l.kt)("inlineCode",{parentName:"p"},":rank")," is the uint64, e.g. 20."),(0,l.kt)("h4",{id:"response-examples-6"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,GradeOfFinality,GradeOfFinalityTime,StrongParents,WeakParents,DislikeParents,LikeParents,StrongApprovers,WeakApprovers,BranchID,Scheduled,Booked,Invalid,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,GradeOfFinanlity(3),E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,BranchID(MasterBranchID),true,true,true,1,0:0,0,0,1:2,2,2,TransactionType(1337)\n")),(0,l.kt)("h2",{id:"toolsdiagnosticutxodag"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/utxodag")),(0,l.kt)("p",null,"Returns the information of all transactions in the storage."),(0,l.kt)("h3",{id:"parameters-7"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-7"},"Examples"),(0,l.kt)("h4",{id:"curl-7"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/utxodag'\n")),(0,l.kt)("h4",{id:"response-examples-7"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,IssuanceTime,SolidTime,AccessManaPledgeID,ConsensusManaPledgeID,Inputs,Outputs,Attachments,BranchID,Conflicting,LazyBooked,GradeOfFinality,GradeOfFinalityTime\n\n...\n\nuNUZMoAdYZu74ZREoZr84AbYb9du1fC8vTbXpsX3rj6,1622102040372947362,1622102040419353230,1622102044420491940,2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5,2GtxMQD94KvDH1SJPJV7icxofkyV1njuUZKtsqKmtux5,DBejuv32xNJdZQurbitPTktm5HJML5SdnmN6ic6xQGKd:83,uNUZMoAdYZu74ZREoZr84AbYb9du1fC8vTbXpsX3rj6:0,3Lu696zF21tCAeqX7mEjwC1xPocWMnQVHAPMtd9CCdep,BranchID(MasterBranchID),true,true,GradeOfFinality(3),1622102040419353230\n")),(0,l.kt)("h2",{id:"toolsdiagnosticbranches"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches")),(0,l.kt)("p",null,"Returns the information of all conflict and aggregated branches in the storag."),(0,l.kt)("h3",{id:"parameters-8"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-8"},"Examples"),(0,l.kt)("h4",{id:"curl-8"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches'\n")),(0,l.kt)("h4",{id:"response-examples-8"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,LazyBooked,GradeOfFinality\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,true,3\n")),(0,l.kt)("h2",{id:"toolsdiagnosticbrancheslazybooked"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches/lazybooked")),(0,l.kt)("p",null,"Returns the information of all lazy booked branches."),(0,l.kt)("h3",{id:"parameters-9"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-9"},"Examples"),(0,l.kt)("h4",{id:"curl-9"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches/lazybooked'\n")),(0,l.kt)("h4",{id:"response-examples-9"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,LazyBooked,GradeOfFinality\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,true,3\n")),(0,l.kt)("h2",{id:"toolsdiagnosticbranchesinvalid"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/branches/invalid")),(0,l.kt)("p",null,"Returns the information of all invalid branches."),(0,l.kt)("h3",{id:"parameters-10"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-10"},"Examples"),(0,l.kt)("h4",{id:"curl-10"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/branches/invalid'\n")),(0,l.kt)("h4",{id:"response-examples-10"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,ConflictSet,IssuanceTime,SolidTime,LazyBooked,GradeOfFinality\n\n...\n\n7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,true,3\n")),(0,l.kt)("h2",{id:"toolsdiagnostictips"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/tips")),(0,l.kt)("p",null,"Returns the information of all tips."),(0,l.kt)("h3",{id:"parameters-11"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-11"},"Examples"),(0,l.kt)("h4",{id:"curl-11"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/tips'\n")),(0,l.kt)("h4",{id:"response-examples-11"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tipType,ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,GradeOfFinality,GradeOfFinalityTime,StrongParents,WeakParents,DislikeParents,LikeParents,StrongApprovers,WeakApprovers,BranchID,Scheduled,Booked,Invalid,Rank,IsPastMarker,PastMarkers,PMHI,PMLI,FutureMarkers,FMHI,FMLI,PayloadType,TransactionID\n\n...\n\nTipType(StrongTip),7h7arHrxYhuuzgpvRtuw6jn5AwtAA5AEiKnAzdQheyDW,dAnF7pQ6k7a,CHfU1NUf6ZvUKDQHTG2df53GR7CvuMFtyt7YymJ6DwS3,1622100376301474621,1622100390350323240,1622100390350376317,1622100390350655597,1622100390497058485,1622100394498368012,GradeOfFinanlity(3),E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,,,E8jiyKgouhbk8GK8xNiwSnLM4FSzmCfvCmBijbKd8z8A,BranchID(MasterBranchID),true,true,true,1,0:0,0,0,1:2,2,2,TransactionType(1337)\n")),(0,l.kt)("h2",{id:"toolsdiagnosticdrng"},(0,l.kt)("inlineCode",{parentName:"h2"},"tools/diagnostic/drng")),(0,l.kt)("p",null,"Returns the information of all dRNG messages."),(0,l.kt)("h3",{id:"parameters-12"},"Parameters"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"examples-12"},"Examples"),(0,l.kt)("h4",{id:"curl-12"},"cURL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/tools/diagnostic/drng'\n")),(0,l.kt)("h4",{id:"response-examples-12"},"Response examples"),(0,l.kt)("p",null,"The response is written in a csv file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ID,IssuerID,IssuerPublicKey,IssuanceTime,ArrivalTime,SolidTime,ScheduledTime,BookedTime,dRNGPayloadType,InstanceID,Round,PreviousSignature,Signature,DistributedPK\n\n...\n\nBsSw31y4BufNoPp93TRfgDfXdrjnevsm7Up2mHtybzdK,CRPFWYijV1T,GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,1621963390710701221,1621963391011749004,1621963391011818075,1621963391011903917,1621963391012012853,dRNG(111),1339,2210960,us8vrWKdKtNvXdx424hgqGYpM65Cs2KAGmAyhinCncn6PQ8Dv4hLh1rZ3ugvk2QZkGofJhwNvx2EmD5Vzcz3RQTowfiNBTpLJYEUM4swAPXaFwSGntWhvWDYtpyHrXtGtBP,24LuByAUakW36DmEyCz58Ld5utTeKh3zCUbJ4mn6Eo6rZmhb7wnZnjQN3KMm59TjHwSm158iAviP1fS2mc2kuMc4Vf2k4M88hgN1reCUVGn5ufwxHmMEAZVXi82L2k6XLxNY,6HbdGdict6Egw8gwBRYmdgrMWt46qw1LtqkVk51D4sQx51XMDNEbsX6mcXZ1PjJJDy\n")))}c.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),c=s,k=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,r(r({ref:t},d),{},{components:a})):n.createElement(k,r({ref:t},d))}));function c(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,r=new Array(l);r[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
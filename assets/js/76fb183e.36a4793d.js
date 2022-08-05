"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35162],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),k=r,c=s["".concat(p,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92272:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={description:"This section describes the configuration parameters and their types for INX-MQTT.",keywords:["IOTA Node","Hornet Node","Dashboard","Configuration","JSON","Customize","Config","reference"]},p="Core Configuration",u={unversionedId:"configuration",id:"configuration",title:"Core Configuration",description:"This section describes the configuration parameters and their types for INX-MQTT.",source:"@site/content/build/inx-mqtt/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/inx-mqtt/develop/configuration",draft:!1,editUrl:"https://github.com/gohornet/inx-mqtt/edit/develop/documentation/docs/content/build/inx-mqtt/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"This section describes the configuration parameters and their types for INX-MQTT.",keywords:["IOTA Node","Hornet Node","Dashboard","Configuration","JSON","Customize","Config","reference"]},sidebar:"mySidebar",previous:{title:"Welcome to INX-MQTT",permalink:"/inx-mqtt/develop/welcome"},next:{title:"API Reference",permalink:"/inx-mqtt/develop/api_reference"}},d={},m=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="inx"></a> 2. INX',id:"-2-inx",level:2},{value:'<a id="mqtt"></a> 3. MQTT',id:"-3-mqtt",level:2},{value:'<a id="mqtt_subscriptions"></a> Subscriptions',id:"-subscriptions",level:3},{value:'<a id="mqtt_websocket"></a> Websocket',id:"-websocket",level:3},{value:'<a id="mqtt_tcp"></a> TCP',id:"-tcp",level:3},{value:'<a id="mqtt_tcp_auth"></a> Auth',id:"-auth",level:3},{value:'<a id="mqtt_tcp_tls"></a> TLS',id:"-tls",level:3},{value:'<a id="profiling"></a> 4. Profiling',id:"-4-profiling",level:2},{value:'<a id="prometheus"></a> 5. Prometheus',id:"-5-prometheus",level:2}],s={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"INX-MQTT uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,l.kt)("p",null,"You can change the path of the config file by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"inx-mqtt")," executable."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-mqtt -c config_defaults.json\n")),(0,l.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-mqtt -h --full\n")),(0,l.kt)("h2",{id:"-1-application"},(0,l.kt)("a",{id:"app"})," 1. Application"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5m"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "stopGracePeriod": "5m"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-2-inx"},(0,l.kt)("a",{id:"inx"})," 2. INX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-3-mqtt"},(0,l.kt)("a",{id:"mqtt"})," 3. MQTT"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bufferSize"),(0,l.kt)("td",{parentName:"tr",align:null},"The size of the client buffers in bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bufferBlockSize"),(0,l.kt)("td",{parentName:"tr",align:null},"The size per client buffer R/W block in bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mqtt_subscriptions"},"subscriptions")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for subscriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mqtt_websocket"},"websocket")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for websocket"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mqtt_tcp"},"tcp")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for TCP"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-subscriptions"},(0,l.kt)("a",{id:"mqtt_subscriptions"})," Subscriptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxTopicSubscriptionsPerClient"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum number of topic subscriptions per client before the client gets dropped (DOS protection)"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topicsCleanupThresholdCount"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of deleted topics that trigger a garbage collection of the subscription manager"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"10000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topicsCleanupThresholdRatio"),(0,l.kt)("td",{parentName:"tr",align:null},"The ratio of subscribed topics to deleted topics that trigger a garbage collection of the subscription manager"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")))),(0,l.kt)("h3",{id:"-websocket"},(0,l.kt)("a",{id:"mqtt_websocket"})," Websocket"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable the websocket connection of the MQTT broker"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The websocket bind address on which the MQTT broker listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:1888"')))),(0,l.kt)("h3",{id:"-tcp"},(0,l.kt)("a",{id:"mqtt_tcp"})," TCP"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable the TCP connection of the MQTT broker"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The TCP bind address on which the MQTT broker listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:1883"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mqtt_tcp_auth"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for auth"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#mqtt_tcp_tls"},"tls")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-auth"},(0,l.kt)("a",{id:"mqtt_tcp_auth"})," Auth"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable auth for TCP connections"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"passwordSalt"),(0,l.kt)("td",{parentName:"tr",align:null},"The auth salt used for hashing the passwords of the users"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"0000000000000000000000000000000000000000000000000000000000000000"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"users"),(0,l.kt)("td",{parentName:"tr",align:null},"The list of allowed users with their password+salt as a scrypt hash"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"[]")))),(0,l.kt)("h3",{id:"-tls"},(0,l.kt)("a",{id:"mqtt_tcp_tls"})," TLS"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable TLS for TCP connections"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"privateKeyPath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the private key file (x509 PEM) for TCP connections with TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"private_key.pem"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"certificatePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The path to the certificate file (x509 PEM) for TCP connections with TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"certificate.pem"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "mqtt": {\n      "bufferSize": 0,\n      "bufferBlockSize": 0,\n      "subscriptions": {\n        "maxTopicSubscriptionsPerClient": 1000,\n        "topicsCleanupThresholdCount": 10000,\n        "topicsCleanupThresholdRatio": 1\n      },\n      "websocket": {\n        "enabled": true,\n        "bindAddress": "localhost:1888"\n      },\n      "tcp": {\n        "enabled": false,\n        "bindAddress": "localhost:1883",\n        "auth": {\n          "enabled": false,\n          "passwordSalt": "0000000000000000000000000000000000000000000000000000000000000000",\n          "users": null\n        },\n        "tls": {\n          "enabled": false,\n          "privateKeyPath": "private_key.pem",\n          "certificatePath": "certificate.pem"\n        }\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-4-profiling"},(0,l.kt)("a",{id:"profiling"})," 4. Profiling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-5-prometheus"},(0,l.kt)("a",{id:"prometheus"})," 5. Prometheus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the prometheus plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the Prometheus HTTP server listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9312"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mqttMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include MQTT metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include go metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"processMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include process metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promhttpMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include promhttp metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "prometheus": {\n      "enabled": false,\n      "bindAddress": "localhost:9312",\n      "mqttMetrics": true,\n      "goMetrics": false,\n      "processMetrics": false,\n      "promhttpMetrics": false\n    }\n  }\n')))}k.isMDXComponent=!0}}]);
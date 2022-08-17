"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13882],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86377:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={description:"GoShimmer provides a tool at `tools/docker-network` with which a local test network can be set up locally with docker.",image:"/img/tooling/docker-network.png",keywords:["docker","docker network","dashboard","web api","host system","port","docker compose","analysis dashboard"]},p="Docker Private Network",s={unversionedId:"tooling/docker_private_network",id:"tooling/docker_private_network",title:"Docker Private Network",description:"GoShimmer provides a tool at `tools/docker-network` with which a local test network can be set up locally with docker.",source:"@site/content/build/goshimmer/develop/documentation/docs/tooling/docker_private_network.md",sourceDirName:"tooling",slug:"/tooling/docker_private_network",permalink:"/goshimmer/tooling/docker_private_network",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/tooling/docker_private_network.md",tags:[],version:"current",frontMatter:{description:"GoShimmer provides a tool at `tools/docker-network` with which a local test network can be set up locally with docker.",image:"/img/tooling/docker-network.png",keywords:["docker","docker network","dashboard","web api","host system","port","docker compose","analysis dashboard"]},sidebar:"docs",previous:{title:"Tooling",permalink:"/goshimmer/tooling/overview"},next:{title:"Integration Tests with Docker",permalink:"/goshimmer/tooling/integration_tests"}},c={},d=[{value:"How to Use the Tool",id:"how-to-use-the-tool",level:2},{value:"How to Use as Development Tool",id:"how-to-use-as-development-tool",level:2},{value:"Snapshot Tool",id:"snapshot-tool",level:2},{value:"How to Use Block Approval Check Tool",id:"how-to-use-block-approval-check-tool",level:2},{value:"Spammer Tool",id:"spammer-tool",level:2},{value:"Tangle Width",id:"tangle-width",level:2},{value:"Running With <code>docker-compose</code> Directly",id:"running-with-docker-compose-directly",level:2},{value:"Base Components",id:"base-components",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Example",id:"example",level:4},{value:"Peer master",id:"peer-master",level:4},{value:"Volumes",id:"volumes",level:5},{value:"Ports",id:"ports",level:5},{value:"Peer replicas",id:"peer-replicas",level:4},{value:"Ports",id:"ports-1",level:5},{value:"Faucet",id:"faucet",level:4},{value:"Ports",id:"ports-2",level:5},{value:"Optional Components",id:"optional-components",level:3},{value:"Grafana + Prometheus",id:"grafana--prometheus",level:4},{value:"Profile",id:"profile",level:5},{value:"Configuration",id:"configuration-1",level:5},{value:"Example",id:"example-1",level:5},{value:"Ports",id:"ports-3",level:5}],m={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker-private-network"},"Docker Private Network"),(0,r.kt)("p",null,"We provide a tool at ",(0,r.kt)("inlineCode",{parentName:"p"},"tools/docker-network")," with which a local test network can be set up locally with docker. "),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(90687).Z},(0,r.kt)("img",{alt:"Docker network",src:n(26694).Z,title:"Docker network",width:"738",height:"397"}))),(0,r.kt)("h2",{id:"how-to-use-the-tool"},"How to Use the Tool"),(0,r.kt)("p",null,"In the docker network run for example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./run.sh 5 1 1\n")),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"./run.sh")," spins up a GoShimmer network within Docker as schematically shown in the figure above. The first integer input defines the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_replicas")," ",(0,r.kt)("inlineCode",{parentName:"p"},"N"),". The second argument is optional for activating the Grafana dashboard, where "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"default (no argument) or 0: Grafana disabled"),(0,r.kt)("li",{parentName:"ul"},"1: Grafana enabled")),(0,r.kt)("p",null,"More details on how to set up the dashboard can be found ",(0,r.kt)("a",{parentName:"p",href:"/goshimmer/tutorials/setup"},"here"),"."),(0,r.kt)("p",null,"The peers can communicate freely within the Docker network\nwhile the analysis and visualizer dashboard, as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_master's")," dashboard and web API are reachable from the host system on the respective ports."),(0,r.kt)("p",null,"The settings for the different containers (",(0,r.kt)("inlineCode",{parentName:"p"},"peer_master"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_replica"),") can be modified in ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"."),(0,r.kt)("h2",{id:"how-to-use-as-development-tool"},"How to Use as Development Tool"),(0,r.kt)("p",null,"Using a standalone throwaway Docker network can be really helpful as a development tool. "),(0,r.kt)("p",null,"Prerequisites: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker 17.12.0+"),(0,r.kt)("li",{parentName:"ul"},"Docker compose: file format 3.5")),(0,r.kt)("p",null,"Reachable from the host system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peer_master's")," analysis dashboard (autopeering visualizer): http://localhost:9000"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"peer_master's")," web API: http: http://localhost:8080"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"faucet's")," dashboard: http: http://localhost:8081")),(0,r.kt)("p",null,"It is therefore possible to send blocks to the local network via the ",(0,r.kt)("inlineCode",{parentName:"p"},"peer_master"),". Log blocks of a specific containter can be followed via "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker logs --follow CONTAINERNAME\n")),(0,r.kt)("h2",{id:"snapshot-tool"},"Snapshot Tool"),(0,r.kt)("p",null,"A snapshot tool is provided in the tools folder. The snapshot file that is created must be moved into the ",(0,r.kt)("inlineCode",{parentName:"p"},"integration-tests/assets")," folder. There, rename and replace the existing bin file (",(0,r.kt)("inlineCode",{parentName:"p"},"7R1itJx5hVuo9w9hjg5cwKFmek4HMSoBDgJZN8hKGxih.bin"),"). After restarting the docker network the snapshot file will be loaded."),(0,r.kt)("p",null,"Docker Compose uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"SNAPSHOT_FILE")," environment variable to determine the location of the snapshot. Once you have a new snapshot you can simply set ",(0,r.kt)("inlineCode",{parentName:"p"},"SNAPSHOT_FILE")," to the location of your new snapshot and Docker Compose will use your snapshot the next time you run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up"),"."),(0,r.kt)("h2",{id:"how-to-use-block-approval-check-tool"},"How to Use Block Approval Check Tool"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get_approval_csv.sh")," script helps you conveniently trigger the block approval checks on all nodes in the docker\nnetwork, and gather their results in the ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," folder."),(0,r.kt)("p",null,"Once the network is up and running, execute the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./get_approval_csv.sh\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Triggering approval analysis on peer_master and 20 replicas...\nTriggering approval analysis on peer_master and 20 replicas... DONE\nCopying csv files from peer_master and 20 replicas...\nCopying csv files from peer_master and 20 replicas... DONE\nCopied files are located at ./csv\n")),(0,r.kt)("p",null,"The exported csv files are timestamped to the date of request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csv\n\u251c\u2500\u2500 210120_16_34_14-docker-network_peer_replica_10.csv\n\u251c\u2500\u2500 210120_16_34_14-docker-network_peer_replica_11.csv\n\u251c\u2500\u2500 210120_16_34_14-docker-network_peer_replica_12.csv\n...\n")),(0,r.kt)("p",null,"Note, that the record length of the files might differ, since the approval check execution time of the nodes might differ."),(0,r.kt)("h2",{id:"spammer-tool"},"Spammer Tool"),(0,r.kt)("p",null,"The Spammer tool lets you add blocks to the tangle when running GoShimmer in a Docker network.\nIn order to start the spammer, you need to send GET requests to a ",(0,r.kt)("inlineCode",{parentName:"p"},"/spammer")," API endpoint with the following parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cmd")," - one of two possible values: ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stop"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unit")," - Either ",(0,r.kt)("inlineCode",{parentName:"li"},"mps")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"mpm"),". Only applicable when ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd=start"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rate")," - Rate in integer. Only applicable when ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd=start"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"imif")," - (",(0,r.kt)("em",{parentName:"li"},"optional"),") parameter indicating time interval between issued blocks. Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poisson")," - emit blocks modeled with Poisson point process, whose time intervals are exponential variables with mean 1/rate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uniform")," - issues blocks at constant rate")))),(0,r.kt)("p",null,"Example requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"http://localhost:8080/spammer?cmd=start&rate=10&unit=mps\n\nhttp://localhost:8080/spammer?cmd=start&rate=10&unit=mps&imif=uniform\nhttp://localhost:8080/spammer?cmd=stop\n")),(0,r.kt)("h2",{id:"tangle-width"},"Tangle Width"),(0,r.kt)("p",null,"When running GoShimmer locally in a Docker network, the network delay is so small that only 1 tip will be available most of the time.\nIn order to artificially create a tangle structure with multiple tips you can add a ",(0,r.kt)("inlineCode",{parentName:"p"},"blockLayer.tangleWidth")," property to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/tools/docker-network/config.docker.json"},"config.docker.json"),"\nthat specifies the number of tips that nodes should retain. This setting exists only for local testing purposes and should not be used in a distributed testnet.  "),(0,r.kt)("p",null,"Here is an example config that can be added: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n  "blockLayer": {\n    "tangleWidth": 10\n  }}\n')),(0,r.kt)("h2",{id:"running-with-docker-compose-directly"},"Running With ",(0,r.kt)("inlineCode",{parentName:"h2"},"docker-compose")," Directly"),(0,r.kt)("p",null,"To get an instance up and running on your machine make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed."),(0,r.kt)("p",null,"Then you just need to run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose build\ndocker-compose --profile grafana up -d\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Docker will build the GoShimmer image which can take several minutes.")),(0,r.kt)("h3",{id:"base-components"},"Base Components"),(0,r.kt)("p",null,"These services that are created by default with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"."),(0,r.kt)("h4",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNAPSHOT_FILE: The full path to the block snapshot file. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"./goshimmer/assets/7R1itJx5hVuo9w9hjg5cwKFmek4HMSoBDgJZN8hKGxih.bin")),(0,r.kt)("li",{parentName:"ul"},"GOSHIMMER_TAG: (Optional) The ",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/iotaledger/goshimmer"},"iotaledger/goshimmer")," tag to use. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"develop"),"."),(0,r.kt)("li",{parentName:"ul"},"GOSHIMMER_CONFIG: The location of the GoShimmer config file. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"./config.docker.json"),".")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"You can set the environment variable configuration inline as seen in this example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GOSHIMMER_TAG=develop docker-compose up -d\n")),(0,r.kt)("h4",{id:"peer-master"},"Peer master"),(0,r.kt)("p",null,"A node that is used to expose ports via the host and to have a single attachment point for monitoring tools."),(0,r.kt)("h5",{id:"volumes"},"Volumes"),(0,r.kt)("p",null,"Docker Compose creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnetdb")," volume to maintain a tangle even after tearing down the containers. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose down -v")," to clear the volume."),(0,r.kt)("h5",{id:"ports"},"Ports"),(0,r.kt)("p",null,"The following ports are exposed on the host to allow for interacting with the Tangle."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Service"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8080/tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"Web API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9000/tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"Analysis dashboard")))),(0,r.kt)("h4",{id:"peer-replicas"},"Peer replicas"),(0,r.kt)("p",null,"A node that can be replicated to add more nodes to your local tangle."),(0,r.kt)("h5",{id:"ports-1"},"Ports"),(0,r.kt)("p",null,"These expose 0 ports because they are replicas and the host system cannot map a port to multiple containers."),(0,r.kt)("h4",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"A node that can dispense tokens."),(0,r.kt)("h5",{id:"ports-2"},"Ports"),(0,r.kt)("p",null,"The following ports are exposed on the host to allow for interacting with the Tangle."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Service"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8081/tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"Dashboard")))),(0,r.kt)("h3",{id:"optional-components"},"Optional Components"),(0,r.kt)("p",null,"These services can be added to your deployment through ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile")," flags and can be configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"ENVIRONMENT_VARIABLES"),"."),(0,r.kt)("h4",{id:"grafana--prometheus"},"Grafana + Prometheus"),(0,r.kt)("p",null,"A set of containers to enable dashboards and monitoring."),(0,r.kt)("h5",{id:"profile"},"Profile"),(0,r.kt)("p",null,"In order to enable these containers you must set the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile grafana")," flag when running ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose"),"."),(0,r.kt)("h5",{id:"configuration-1"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PROMETHEUS_CONFIG: Location of the prometheus config yaml file. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"./prometheus.yml"),".")),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("p",null,"You can set the environment variable configuration inline as seen in this example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose --profile grafana up -d\n")),(0,r.kt)("h5",{id:"ports-3"},"Ports"),(0,r.kt)("p",null,"The following ports are exposed on the host to allow for interacting with the Tangle."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Service"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3000/tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"Grafana")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9090/tcp"),(0,r.kt)("td",{parentName:"tr",align:null},"Prometheus")))))}u.isMDXComponent=!0},90687:function(e,t,n){t.Z=n.p+"assets/files/docker-network-a90acb2c45455d331cf18884cb319919.png"},26694:function(e,t,n){t.Z=n.p+"assets/images/docker-network-a90acb2c45455d331cf18884cb319919.png"}}]);
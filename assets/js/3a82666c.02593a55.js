"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[45232],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=u(n),m=r,k=g["".concat(s,".").concat(m)]||g[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},93807:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={image:"/img/integration-services/logo/integration_services.png",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",keywords:["how to","install integration services","deploy integration services","Kubernetes","requirements","configuration","MongoDB","API","minikube"]},s="Local Setup",u={unversionedId:"getting_started/installation/kubernetes/local_setup",id:"getting_started/installation/kubernetes/local_setup",title:"Local Setup",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",source:"@site/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/local_setup.md",sourceDirName:"getting_started/installation/kubernetes",slug:"/getting_started/installation/kubernetes/local_setup",permalink:"/integration-services/getting_started/installation/kubernetes/local_setup",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/getting_started/installation/kubernetes/local_setup.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster.",keywords:["how to","install integration services","deploy integration services","Kubernetes","requirements","configuration","MongoDB","API","minikube"]},sidebar:"docs",previous:{title:"Local Setup",permalink:"/integration-services/getting_started/installation/java/local_setup"},next:{title:"Configuration",permalink:"/integration-services/getting_started/installation/kubernetes/configuration"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Clone Integration Services Repository",id:"clone-integration-services-repository",level:2},{value:"Start Minikube",id:"start-minikube",level:2},{value:"Set Up Kong",id:"set-up-kong",level:2},{value:"Create the Kong Cluster",id:"create-the-kong-cluster",level:2},{value:"FAQ",id:"faq",level:2}],g={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-setup"},"Local Setup"),(0,l.kt)("p",null,"This section will guide you in installing and deploying the Integration Service API on a Kubernetes cluster."),(0,l.kt)("p",null,"This installation was tested on ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/releases/_print/#release-v1-21"},"Kubernetes 1.21"),"."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"Please make sure to have the following installed before moving forward:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://helm.sh/"},"helm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://brew.sh/"},"Homebrew"))),(0,l.kt)("h2",{id:"clone-integration-services-repository"},"Clone Integration Services Repository"),(0,l.kt)("p",null,"Please follow these steps to clone the Integration Services:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the project:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/integration-services.git\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Change directory to your freshly cloned project:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd integration-services\n")))),(0,l.kt)("h2",{id:"start-minikube"},"Start Minikube"),(0,l.kt)("p",null,"Setup and start the empty cluster by running the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\n")),(0,l.kt)("h2",{id:"set-up-kong"},"Set Up Kong"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install helm by running the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install helm\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Add helm repo by running the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add kong https://charts.konghq.com\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install kong using helm by running the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm install kong kong/kong\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Expose the kong service (",(0,l.kt)("strong",{parentName:"li"},"Do NOT close this terminal"),"):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo minikube tunnel\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Open a ",(0,l.kt)("strong",{parentName:"li"},"new terminal")," and export the PROXY_IP variable by running the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PROXY_IP=$(kubectl get -o jsonpath="{.status.loadBalancer.ingress[0].ip}" service kong-kong-proxy)\n')),(0,l.kt)("p",null,"You can check that you have exported the variable correctly by running the following command: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"echo $PROXY_IP\n")),(0,l.kt)("p",null,"It should output the IP you have exported. In most of the cases this will be ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1"),"."),(0,l.kt)("h2",{id:"create-the-kong-cluster"},"Create the Kong Cluster"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Apply the Kubernetes cluster to kong by running the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f kubernetes/optional -f kubernetes/ -f kubernetes/kong-gw\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"You can check if the services are up and running with the following command:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get services\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Expected output"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"NAME              TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE\naudit-trail-gw    ClusterIP      10.105.148.167   <none>        3000/TCP                     17h\nkong-kong-proxy   LoadBalancer   10.97.208.78     127.0.0.1     80:30959/TCP,443:32326/TCP   17h\nkubernetes        ClusterIP      10.96.0.1        <none>        443/TCP                      21h\nmongodb-service   ClusterIP      10.106.253.44    <none>        27017/TCP                    17h\nssi-bridge        ClusterIP      10.110.29.161    <none>        3000/TCP                     17h\n")),(0,l.kt)("p",null,"You can check if the pods are running with the following command. It will take a few minutes before all pods are running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Expected output"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext"},"\nNAME                                  READY   STATUS      RESTARTS        AGE\naudit-trail-gw-557959d777-52p94       1/1     Running     0               9m8s\naudit-trail-gw-557959d777-cmqvg       1/1     Running     0               9m8s\ngenerate-key--1-zbz7x                 0/1     Completed   0               9m8s\nkong-75757c49b6-pptwm                 2/2     Running     0               26m\nkong-75757c49b6-zgqkg                 2/2     Running     0               26m\nkong-postgresql-0                     1/1     Running     0               26m\nmongodb-deployment-5f89c7c88f-nr5xv   1/1     Running     0               9m9s\nssi-bridge-f849f7fc7-fhg6g            1/1     Running     2 (7m42s ago)   9m8s\nssi-bridge-f849f7fc7-t4msg            1/1     Running     2 (7m42s ago)   9m8s\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Check if the services are up and running:")),(0,l.kt)("p",null,"In few minutes, depending on how many resources you allocated, the Integration Service API will be ready to handle\nrequests. Once the generate-key pod is completed and the audit-trail and ssi-bridge pods are running, you can check if they are available with following two commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i $PROXY_IP/ssi-bridge/info\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -i $PROXY_IP/audit-trail-gw/info\n")),(0,l.kt)("p",null,"You finished the setup of the Integration Services using Kubernetes!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You set up a single MongoDB instance with an ephemeral storage (i.e. no persistent bound volume) with ",(0,l.kt)("inlineCode",{parentName:"li"},"root")," as username and ",(0,l.kt)("inlineCode",{parentName:"li"},"rootpassword"),"as password for administration purpose and ",(0,l.kt)("inlineCode",{parentName:"li"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"password")," as credentials for the\ndatabase ",(0,l.kt)("inlineCode",{parentName:"li"},"integration-service"),"."),(0,l.kt)("li",{parentName:"ul"},"You run a Kubernetes Job that will create a root identity in the database if there is not one yet."),(0,l.kt)("li",{parentName:"ul"},"You created replicated backend service for Integration Service API (2 replicas as default value).")),(0,l.kt)("p",null,"You can find information on how to configure Integration Service with a production-ready database in\nthe ",(0,l.kt)("a",{parentName:"p",href:"/integration-services/getting_started/installation/kubernetes/configuration"},"configuration section"),"."),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"How can I stop the cluster?"))),(0,l.kt)("p",null,"Just run the following command to stop the cluster."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f kubernetes/optional -f kubernetes/ -f kubernetes/kong-gw\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"How can I delete my whole Kubernetes cluster?"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First, shut down the cluster by running:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete -f kubernetes/optional -f kubernetes/ -f kubernetes/kong-gw\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Close all open terminal windows.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Delete the kong load balancer by running the following command:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete kong\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Delete the minikube container containing the cluster")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"minikube delete\n")))}m.isMDXComponent=!0}}]);
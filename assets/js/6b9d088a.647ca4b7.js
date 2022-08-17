"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33792],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44619:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(34259),l=n(18679),s=["components"],u={keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},c="Function Parameters",m={unversionedId:"guide/schema/params",id:"guide/schema/params",title:"Function Parameters",description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",source:"@site/content/build/wasp/production/documentation/docs/guide/schema/params.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/params",permalink:"/smart-contracts/guide/schema/params",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/schema/params.mdx",tags:[],version:"current",frontMatter:{keywords:["params","parameters","field definition","field type","optional","schema tool","structure","immutable"],description:"The optional params subsection contains field definitions for each of the parameters that a function takes.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Limiting Access",permalink:"/smart-contracts/guide/schema/access"},next:{title:"Function Results",permalink:"/smart-contracts/guide/schema/results"}},p={},d=[],f={toc:d};function b(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function-parameters"},"Function Parameters"),(0,o.kt)("p",null,"The optional ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," subsection contains field definitions for each of the parameters\nthat a function takes. The layout of the field definitions is identical to that of\nthe ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/state"},"state")," field definitions with one addition, the field type can be\nfollowed by a question mark which indicates that that parameter is optional."),(0,o.kt)("p",null,"The schema tool will automatically generate an immutable structure with member variables\nfor proxies to each parameter variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," map. It will also generate code to\ncheck the presence of each non-optional parameter, and it will also verify the parameter's\ndata type. This checking is done before the function is called. The user will be able to\nimmediately start using the parameter proxy through the structure that is passed to the\nfunction."),(0,o.kt)("p",null,"When this subsection is empty or completely omitted, no structure will be generated or\npassed to the function."),(0,o.kt)("p",null,"For example, here is the structure generated for the immutable params for the ",(0,o.kt)("inlineCode",{parentName:"p"},"member"),"\nfunction:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type ImmutableMemberParams struct {\n    id int32\n}\n\nfunc (s ImmutableMemberParams) Address() wasmlib.ScImmutableAddress {\n    return wasmlib.NewScImmutableAddress(s.id, idxMap[IdxParamAddress])\n}\n\nfunc (s ImmutableMemberParams) Factor() wasmlib.ScImmutableInt64 {\n    return wasmlib.NewScImmutableInt64(s.id, idxMap[IdxParamFactor])\n}\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Copy)]\npub struct ImmutableMemberParams {\n    pub(crate) id: i32,\n}\n\nimpl ImmutableMemberParams {\n    pub fn address(&self) -> ScImmutableAddress {\n        ScImmutableAddress::new(self.id, idx_map(IDX_PARAM_ADDRESS))\n    }\n\n    pub fn factor(&self) -> ScImmutableInt64 {\n        ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_FACTOR))\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class ImmutableMemberParams extends wasmlib.ScMapID {\n    address(): wasmlib.ScImmutableAddress {\n        return new wasmlib.ScImmutableAddress(this.mapID, sc.idxMap[sc.IdxParamAddress]);\n    }\n\n    factor(): wasmlib.ScImmutableInt64 {\n        return new wasmlib.ScImmutableInt64(this.mapID, sc.idxMap[sc.IdxParamFactor]);\n    }\n}\n")))),(0,o.kt)("p",null,"Note that the schema tool will also generate a mutable version of the structure, suitable\nfor providing the parameters when calling this smart contract function."),(0,o.kt)("p",null,"In the next section, we will look at the ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/guide/schema/results"},(0,o.kt)("inlineCode",{parentName:"a"},"results")),"."))}b.isMDXComponent=!0},18679:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},34259:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(86010),i=n(51048),l=n(33609),s=n(1943),u=n(72957),c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,n,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,b=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!g.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,s.U)(),I=k.tabGroupChoices,T=k.setTabGroupChoices,x=(0,r.useState)(w),P=x[0],O=x[1],N=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var E=I[b];null!=E&&E!==P&&g.some((function(e){return e.value===E}))&&O(E)}var A=function(e){var t=e.currentTarget,n=N.indexOf(t),a=g[n].value;a!==P&&(S(t),O(a),null!=b&&T(b,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=N.indexOf(e.currentTarget)+1;n=null!=(a=N[r])?a:N[0];break;case"ArrowLeft":var o,i=N.indexOf(e.currentTarget)-1;n=null!=(o=N[i])?o:N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:A,onClick:A},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);
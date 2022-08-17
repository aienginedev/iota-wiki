"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76184],{24791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(82756),s=n(21834),d=["components"],l={title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},c=void 0,u={unversionedId:"concepts/decentralized_identifiers/create",id:"concepts/decentralized_identifiers/create",title:"Creating a Decentralized Identity",description:"Create DID Documents and publish them to the Tangle",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/create.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/create",permalink:"/identity.rs/concepts/decentralized_identifiers/create",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/concepts/decentralized_identifiers/create.mdx",tags:[],version:"current",frontMatter:{title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/identity.rs/concepts/decentralized_identifiers/overview"},next:{title:"Update",permalink:"/identity.rs/concepts/decentralized_identifiers/update"}},h={},p=[{value:"Creating an Identity Using the Account",id:"creating-an-identity-using-the-account",level:2},{value:"Identity Generation Process",id:"identity-generation-process",level:3}],m={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When someone or something wants to benefit from Self-Sovereign Identity, they must first create a Decentralized Identity. This identity consists of many parts that have different functions. This page will cover both the basics and the details about identity creation, storage, and publishing to the Tangle."),(0,o.kt)("p",null,"The example below utilizes the high-level account module of the IOTA Identity framework to create an identity. The account is the easiest method of using IOTA Identity. It is recommended to use the account for your use cases, although a lower-level API is also available, providing more flexibility at the cost of more complexity."),(0,o.kt)("h2",{id:"creating-an-identity-using-the-account"},"Creating an Identity Using the Account"),(0,o.kt)("admonition",{title:"Using Replit",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Select your programming language of choice and press the green play button to execute the example.")),(0,o.kt)(r.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/create-did?lite=true",rustContent:s.Z,nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples-account/src/create_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/account/create_did.rs",mdxType:"CodeSnippet"}),(0,o.kt)("p",null,"The first step in this example is the creation of an account. This acts as a stateful object that manages one or more identities. The account provides an interface to execute high-level operations on identities, such as creating, updating, and storing them."),(0,o.kt)("p",null,"Next, the identity is created and published to the IOTA Tangle. This operation will generate a private key, storing it in the account, generating a DID, DID Document, and publishing it to the Tangle. Once it is uploaded to the Tangle, it becomes immutable, meaning that this version of the identity can never be altered or removed. The only way to update or delete an identity is by publishing a new version, which we will discuss in the next section. This immutability is what makes a Decentralized Identity solution based on Distributed Ledger Technology (DLT) trustworthy. The public keys inside the DID Document can never be changed without having access to the private key, allowing the users to completely control their own identities. The rest of the example shows how to retrieve (resolve) the identity from the Tangle and how it can be deleted."),(0,o.kt)("h3",{id:"identity-generation-process"},"Identity Generation Process"),(0,o.kt)("p",null,"The generation of an identity starts with a randomly generated asymmetric key pair. This can be generated by the IOTA Identity framework or can be provided as a parameter during the creation process. The public key is hashed using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Blake2b-256")," algorithm. This hash becomes the DID, creating a permanent and provable link between the initial keypair and the DID. The public key is then embedded into the initial DID Document and is used for verifying signatures created with the corresponding private key. This process can be observed and manipulated in depth by using the low-level API available for the IOTA Identity framework. These low-level APIs are available in ",(0,o.kt)("a",{parentName:"p",href:"../../libraries/rust/getting_started#api-reference"},"Rust")," and ",(0,o.kt)("a",{parentName:"p",href:"../../libraries/wasm/api_reference"},"WASM")," but are only recommended for complex use cases that require maximum flexibility in the framework."))}g.isMDXComponent=!0},82756:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(86010),a=n(67294),o=n(69319);function r(e){var t=e.nodeReplitLink,n=e.rustContent,r=e.nodeGithubLink,s=e.rustGithubLink,d=a.useState("node"),l=d[0],c=d[1],u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),c(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},t&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:function(){localStorage.setItem("lang","node"),c("node")}},"Node.js"),n&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:function(){localStorage.setItem("lang","rust"),c("rust")}},"Rust")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===l?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(o.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),a.createElement("div",{className:(0,i.Z)("githubLink")},r&&"node"===l&&a.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",u),s&&"rust"===l&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}},21834:function(e,t){t.Z='// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_create\n\nuse std::path::PathBuf;\n\nuse identity_iota::account::Account;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::Result;\nuse identity_iota::account_storage::Stronghold;\nuse identity_iota::client::ExplorerUrl;\nuse identity_iota::iota_core::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Sets the location and password for the Stronghold\n  //\n  // Stronghold is an encrypted file that manages private keys.\n  // It implements best practices for security and is the recommended way of handling private keys.\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".to_owned();\n  let stronghold: Stronghold = Stronghold::new(&stronghold_path, password, None).await?;\n\n  // Create a new identity using Stronghold as local storage.\n  //\n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // Retrieve the did of the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Print the local state of the DID Document\n  println!("[Example] Local Document from {} = {:#?}", iota_did, account.document());\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n'}}]);
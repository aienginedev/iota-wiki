"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9930],{46307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=n(87462),a=(n(67294),n(3905)),o=n(2206);const r={title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},s=void 0,d={unversionedId:"concepts/decentralized_identifiers/create",id:"concepts/decentralized_identifiers/create",title:"Creating a Decentralized Identity",description:"Create DID Documents and publish them to the Tangle",source:"@site/content/build/identity.rs/develop/documentation/docs/concepts/decentralized_identifiers/create.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/create",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/create",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/concepts/decentralized_identifiers/create.mdx",tags:[],version:"current",frontMatter:{title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},sidebar:"docs",previous:{title:"Alias Output",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/alias"},next:{title:"Update",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/update"}},l={},c=[{value:"Creating an Identity Using the Account",id:"creating-an-identity-using-the-account",level:2},{value:"Identity Generation Process",id:"identity-generation-process",level:3}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When someone or something wants to benefit from Self-Sovereign Identity, they must first create a Decentralized Identity. This identity consists of many parts that have different functions. This page will cover both the basics and the details about identity creation and publishing."),(0,a.kt)("h2",{id:"creating-an-identity-using-the-account"},"Creating an Identity Using the Account"),(0,a.kt)("admonition",{title:"Using Replit",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Select your programming language of choice and press the green play button to execute the example.")),(0,a.kt)(o.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    KeyPair,\n    KeyType,\n    MethodScope,\n    IotaDID,\n    IotaDocument,\n    IotaIdentityClient,\n    IotaVerificationMethod\n} from \'../../../node\';\nimport { Bech32Helper, IAliasOutput } from \'@iota/iota.js\';\nimport { Bip39 } from "@iota/crypto.js";\nimport { Client, MnemonicSecretManager, SecretManager } from "@iota/iota-client-wasm/node";\nimport { API_ENDPOINT, ensureAddressHasFunds } from \'../util\';\n\n/** Demonstrate how to create a DID Document and publish it in a new Alias Output. */\nexport async function createIdentity(): Promise<{\n    didClient: IotaIdentityClient,\n    secretManager: SecretManager,\n    walletAddressBech32: string,\n    did: IotaDID\n}> {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Get the Bech32 human-readable part (HRP) of the network.\n    const networkHrp: string = await didClient.getNetworkHrp();\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        Mnemonic: Bip39.randomMnemonic()\n    };\n    const walletAddressBech32 = (await client.generateAddresses(secretManager, {\n        accountIndex: 0,\n        range: {\n            start: 0,\n            end: 1,\n        },\n    }))[0];\n    console.log("Wallet address Bech32:", walletAddressBech32);\n\n    // Request funds for the wallet, if needed - only works on development networks.\n    await ensureAddressHasFunds(client, walletAddressBech32);\n\n    // Create a new DID document with a placeholder DID.\n    // The DID will be derived from the Alias Id of the Alias Output after publishing.\n    const document = new IotaDocument(networkHrp);\n\n    // Insert a new Ed25519 verification method in the DID document.\n    let keypair = new KeyPair(KeyType.Ed25519);\n    let method = new IotaVerificationMethod(document.id(), keypair.type(), keypair.public(), "#key-1");\n    document.insertMethod(method, MethodScope.VerificationMethod());\n\n    // Construct an Alias Output containing the DID document, with the wallet address\n    // set as both the state controller and governor.\n    const address = Bech32Helper.addressFromBech32(walletAddressBech32, networkHrp);\n    const aliasOutput: IAliasOutput = await didClient.newDidOutput(address, document);\n    console.log("Alias Output:", JSON.stringify(aliasOutput, null, 2));\n\n    // Publish the Alias Output and get the published DID document.\n    const published = await didClient.publishDidOutput(secretManager, aliasOutput);\n    console.log("Published DID document:", JSON.stringify(published, null, 2));\n\n    return {\n        didClient, secretManager,\n        walletAddressBech32,\n        did: published.id()\n    };\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::get_address_with_funds;\nuse examples::random_stronghold_path;\nuse identity_iota::crypto::KeyPair;\nuse identity_iota::crypto::KeyType;\nuse identity_iota::did::MethodScope;\nuse identity_iota::iota::IotaClientExt;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse identity_iota::iota::IotaVerificationMethod;\nuse identity_iota::iota::NetworkName;\nuse iota_client::block::address::Address;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to create a DID Document and publish it in a new Alias Output.\n///\n/// In this example we connect to the Shimmer testnet, but it can be adapted\n/// to run on a private network by setting the network and faucet endpoints.\n///\n/// See the following instructions on running your own private network\n/// https://wiki.iota.org/hornet/develop/how_tos/private_tangle\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // The API endpoint of an IOTA node, e.g. Hornet.\n  // For a local Hornet node, this would usually be `http://127.0.0.1:14265`.\n  let api_endpoint: &str = "https://api.testnet.shimmer.network/";\n\n  // The faucet endpoint allows requesting funds for testing purposes.\n  // For a local Hornet node, this would usually be `http://127.0.0.1:8091/api/enqueue`.\n  let faucet_endpoint: &str = "https://faucet.testnet.shimmer.network/api/enqueue";\n\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(api_endpoint, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Get an address with funds for testing.\n  let address: Address = get_address_with_funds(&client, &mut secret_manager, faucet_endpoint).await?;\n\n  // Get the Bech32 human-readable part (HRP) of the network.\n  let network_name: NetworkName = client.network_name().await?;\n\n  // Create a new DID document with a placeholder DID.\n  // The DID will be derived from the Alias Id of the Alias Output after publishing.\n  let mut document: IotaDocument = IotaDocument::new(&network_name);\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: IotaVerificationMethod =\n    IotaVerificationMethod::new(document.id().clone(), keypair.type_(), keypair.public(), "#key-1")?;\n  document.insert_method(method, MethodScope::VerificationMethod)?;\n\n  // Construct an Alias Output containing the DID document, with the wallet address\n  // set as both the state controller and governor.\n  let alias_output: AliasOutput = client.new_did_output(address, document, None).await?;\n\n  // Publish the Alias Output and get the published DID document.\n  let document: IotaDocument = client.publish_did_output(&secret_manager, alias_output).await?;\n  println!("Published DID document: {:#}", document);\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/bindings/wasm/examples/src/0_basic/0_create_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/examples/0_basic/0_create_did.rs",mdxType:"CodeSnippet"}),(0,a.kt)("p",null,"This examples creates a new address with funds using the faucet on the testnet. Next, it creates a new DID Document with a verification method. This DID Document is then published in an Alias Output making the DID available in the ledger state and resolvable by any node."),(0,a.kt)("p",null,"Note that using the faucet is only possible on the testnet. Once the Stardust update is released on the Shimmer network or the IOTA network, an output with funds is required to create a new Alias Output that represents a DID."),(0,a.kt)("p",null,"Updating the identity is also possible, which will be discussed in the next section, but all previous states of the DID Document will still be stored in permanodes or any third party recording the network activity."),(0,a.kt)("h3",{id:"identity-generation-process"},"Identity Generation Process"),(0,a.kt)("p",null,"In order to create a Alias Output, an existing output is required to make a transaction. For that a new Address is generated and a Basic Output controlled by this address is created using the faucet."),(0,a.kt)("p",null,"A DID Document is then created which includes one verification method. At this point the DID itself is unknown since the Alias Output is not published yet and didn't get an ",(0,a.kt)("inlineCode",{parentName:"p"},"Alias ID")," assigned. For that a placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"did:iota:0x0000000000000000000000000000000000000000000000000000000000000000")," is used to reference the DID inside the document."),(0,a.kt)("p",null,"An Alias Output is created which contains an encoded version of the DID Document in its ",(0,a.kt)("inlineCode",{parentName:"p"},"State Metadata")," and has the state controller and the governor set to the generated Ed25519 address. Note that controllers don't have to be Ed25519 addresses, they can be any type of output. However, they must be unlocked in order perform a state or governance transition when the DID Document is updated or destroyed."),(0,a.kt)("p",null,"The byte cost for the document is then automatically calculated and a new transaction is published that includes the Basic Output as input and the newly generated Alias Output as output as well as a Basic Output which contains the remaining IOTA coins."),(0,a.kt)("p",null,"Once the transaction is confirmed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Alias ID")," would be assigned and the DID can be derived from it. Now The DID Document is stored on the ledger and can be resolved using any node. See the further examples for ",(0,a.kt)("a",{parentName:"p",href:"./update"},"updating")," and ",(0,a.kt)("a",{parentName:"p",href:"./resolve"},"resolving")," DID."))}h.isMDXComponent=!0},2206:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(86010),a=n(67294),o=n(44393);function r(e){let{nodeReplitLink:t,nodeContent:n,rustContent:r,nodeGithubLink:s,rustGithubLink:d}=e;const[l,c]=a.useState("node"),u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((()=>{let e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||n||(i="rust"),"rust"!==i||r||(i="node"),c(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},r&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===l&&t?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===l&&n?a.createElement("div",{className:(0,i.Z)("nodeContainer")},a.createElement(o.Z,{className:(0,i.Z)("noMarginBottom"),language:"typescript"},n)):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(o.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},r))),a.createElement("div",{className:(0,i.Z)("githubLink")},s&&"node"===l&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u),d&&"rust"===l&&a.createElement("a",{href:d,target:"_blank"},"GitHub\xa0",u)))}}}]);
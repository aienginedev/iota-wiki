"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[79843],{29782:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return w},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return f}});var s=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(69319),d=["components"],i={toc:[]};function l(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,s.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Though it is possible to send transactions with iota.rs, we strongly recommend that you use the official\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},"wallet.rs")," library together with the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},"stronghold.rs")," enclave for value-based transfers. This combination\nincorporates the best security practices while dealing with seeds, related addresses, and ",(0,r.kt)("inlineCode",{parentName:"p"},"UTXO"),".")))}l.isMDXComponent=!0;var c=["components"],u={description:"Learn how to request funds and send transactions using the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","tokens","value transactions","request funds","faucet","send transaction","retrieve transaction"]},p="Send a Transaction",h={unversionedId:"how_tos/transaction",id:"how_tos/transaction",title:"Send a Transaction",description:"Learn how to request funds and send transactions using the iota.js client library.",source:"@site/content/build/iota.js/develop/documentation/docs/how_tos/transaction.mdx",sourceDirName:"how_tos",slug:"/how_tos/transaction",permalink:"/iotajs/how_tos/transaction",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/content/build/iota.js/develop/documentation/docs/how_tos/transaction.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to request funds and send transactions using the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","tokens","value transactions","request funds","faucet","send transaction","retrieve transaction"]},sidebar:"docs",previous:{title:"Send and Retrieve Data",permalink:"/iotajs/how_tos/data"},next:{title:"Perform Proof of Work",permalink:"/iotajs/how_tos/pow"}},m={},f=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Create a Wallet",id:"create-a-wallet",level:3},{value:"Create a wallet seed",id:"create-a-wallet-seed",level:4},{value:"Retrieve the wallet&#39;s address",id:"retrieve-the-wallets-address",level:4},{value:"Request Funds",id:"request-funds",level:3},{value:"Send the Transaction",id:"send-the-transaction",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3}],g={toc:f};function w(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"send-a-transaction"},"Send a Transaction"),(0,r.kt)(l,{mdxType:"WalletTransactionRecomendation"}),(0,r.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,r.kt)("p",null,"Before you can create a transaction, you will need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/iotajs/how_tos/simple"},"Connect to a Node"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/iotajs/how_tos/address#generate-a-seed"},"Generate a seed"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/iotajs/how_tos/address#create-an-address"},"Create an address"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-a-walllet"},"Create a wallet"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#request-funds"},"Request funds"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#fetch-basic-outputs"},"Fetch basic outputs"),".")),(0,r.kt)("h3",{id:"create-a-wallet"},"Create a Wallet"),(0,r.kt)("h4",{id:"create-a-wallet-seed"},"Create a wallet seed"),(0,r.kt)("p",null,"You can create a wallet seed by instantiating an ",(0,r.kt)("a",{parentName:"p",href:"../references/client/classes/Ed25519Seed"},"Ed25519Seed")," using its constructor.\nYou will need to provide ",(0,r.kt)("inlineCode",{parentName:"p"},"secretBytes")," to the constructor, which you can get by using the ",(0,r.kt)("a",{parentName:"p",href:"/iotajs/references/util/classes/Converter#hextobytes"},"Converter.hexToBytes(hex)")," function."),(0,r.kt)("h4",{id:"retrieve-the-wallets-address"},"Retrieve the wallet's address"),(0,r.kt)("p",null,"Once you have ",(0,r.kt)("a",{parentName:"p",href:"#create-a-wallet-seed"},"created your wallet seed"),", you can use it"),(0,r.kt)("p",null,"Once you have ",(0,r.kt)("a",{parentName:"p",href:"#generate-a-seed"},"generated a seed"),", you can create a wallet using the ",(0,r.kt)("a",{parentName:"p",href:"/iotajs/references/client/classes/Ed25519Address#toaddress"},"Ed25519Address.toAddress()")," fucntion."),(0,r.kt)("h3",{id:"request-funds"},"Request Funds"),(0,r.kt)("p",null,"Before you can send the transaction, you will need to request funds.  If you are on the alphanet, you can request test\nfunds from the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.alphanet.iotaledger.net/api/enqueue"},"faucet"),". If you are running a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/how_tos/private_tangle"},"private tangle"),",\nyou can use the '/enqueue' endpoint."),(0,r.kt)("h2",{id:"send-the-transaction"},"Send the Transaction"),(0,r.kt)("p",null,"Once you have fulfilled the ",(0,r.kt)("a",{parentName:"p",href:"#pre-requirements"},"pre-requirements"),", you can send the transaction using either the ",(0,r.kt)("a",{parentName:"p",href:"../references/client/api_ref#sendadvanced"},"sendAdvanced(client, inputsAndSignatureKeyPairs, outputs, taggedData?)")," function, which will return the created block's id, or the ",(0,r.kt)("a",{parentName:"p",href:"/iotajs/references/client/api_ref#send"},"send(client, seed, accountIndex, addressBech32, amount, taggedData?, addressOptions?)")," function, which will return the created block's id, as well as the constructed blocks."),(0,r.kt)("p",null,"As this example uses a genesis address, it must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"(client, inputsAndSignatureKeyPairs, outputs, taggedData?)")," function.  However, if you are doing a wallet to wallet transfer, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"send(client, seed, accountIndex, addressBech32, amount, taggedData?, addressOptions?)")," method."),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import { Bip32Path } from "@iota/crypto.js";\nimport {\n    BASIC_OUTPUT_TYPE, Bech32Helper,\n    Ed25519Address,\n    Ed25519Seed,\n    ED25519_ADDRESS_TYPE,\n    getBalance,\n    getUnspentAddress,\n    getUnspentAddresses, IBasicOutput, IKeyPair, IndexerPluginClient, IOutputsResponse, IUTXOInput,\n    OutputTypes,\n    sendAdvanced, SingleNodeClient,\n    UTXO_INPUT_TYPE\n} from "@iota/iota.js";\nimport { Converter } from "@iota/util.js";\nimport { NeonPowProvider } from "@iota/pow-neon.js";\nimport bigInt, { BigInteger } from "big-integer";\nimport fetch from "node-fetch";\nimport { randomBytes } from "node:crypto";\n\nconst API_ENDPOINT = "https://api.alphanet.iotaledger.net/";\nconst FAUCET = "https://faucet.alphanet.iotaledger.net/api/enqueue" \n\n// If running the node locally\n// const API_ENDPOINT = "http://localhost:14265/";\n// const FAUCET = "http://localhost:8091/api/enqueue"; \n\nasync function run() {\n    const client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\n    const nodeInfo = await client.info();\n\n    // Generate the seed from the Mnemonic\n    // const mnemonic =\n    //     "assist file add kidney sense anxiety march quality sphere stamp crime swift mystery bind thrive impact walk solar asset pottery nation dutch column beef";\n    // const genesisSeed = Ed25519Seed.fromMnemonic(mnemonic);\n    \n    // Generate the seed from random bytes\n    const genesisSeed =  new Ed25519Seed(randomBytes(32));\n\n    const genesisPath = new Bip32Path("m/44\'/4218\'/0\'/0\'/0\'");\n    const genesisWalletSeed = genesisSeed.generateSeedFromPath(genesisPath);\n    const genesisWalletKeyPair = genesisWalletSeed.keyPair();\n\n    // Get the address for the path seed which is actually the Blake2b.sum256 of the public key\n    // display it in both Ed25519 and Bech 32 format\n    const genesisEd25519Address = new Ed25519Address(genesisWalletKeyPair.publicKey);\n    const genesisWalletAddress = genesisEd25519Address.toAddress();\n    const genesisWalletAddressHex = Converter.bytesToHex(genesisWalletAddress, true);\n    const genesisWalletAddressBech32 = Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, genesisWalletAddress, nodeInfo.protocol.bech32Hrp);\n\n    console.log("Genesis");\n    console.log("\\tSeed", Converter.bytesToHex(genesisWalletSeed.toBytes()));\n    console.log("\\tAddress Ed25519", genesisWalletAddressHex);\n    console.log("\\tAddress Bech32", genesisWalletAddressBech32);\n\n    // Create a new seed for the wallet\n    const walletSeed = new Ed25519Seed(\n        Converter.hexToBytes("e57fb750f3a3a67969ece5bd9ae7eef5b2256a818b2aac458941f7274985a410")\n    );\n\n    // Use the new seed like a wallet with Bip32 Paths 44,4128,accountIndex,isInternal,addressIndex\n    const walletPath = new Bip32Path("m/44\'/4218\'/0\'/0\'/0\'");\n    const walletAddressSeed = walletSeed.generateSeedFromPath(walletPath);\n    const walletEd25519Address = new Ed25519Address(walletAddressSeed.keyPair().publicKey);\n    const newAddress = walletEd25519Address.toAddress();\n    const newAddressHex = Converter.bytesToHex(newAddress, true);\n\n    console.log("Wallet 1");\n    console.log("\\tSeed:", Converter.bytesToHex(walletSeed.toBytes()));\n    console.log("\\tPath:", walletPath.toString());\n    console.log(`\\tAddress Ed25519 ${walletPath.toString()}:`, newAddressHex);\n    console.log(\n        `\\tAddress Bech32 ${walletPath.toString()}:`,\n        Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, newAddress, nodeInfo.protocol.bech32Hrp)\n    );\n\n    //Request funds from faucet\n    const genesisFunds = await requestFunds(FAUCET, genesisWalletAddressBech32);\n    console.log("genesisFunds: ", genesisFunds)\n\n    // Because we are using the genesis address we must use send advanced as the input address is\n    // not calculated from a Bip32 path, if you were doing a wallet to wallet transfer you can just use send\n    // which calculates all the inputs/outputs for you\n    const indexerPlugin = new IndexerPluginClient(client);\n    // const genesisAddressOutputs = await indexerPlugin.basicOutputs({ addressBech32: genesisWalletAddressBech32 });\n    const genesisAddressOutputs = await fetchAndWaitForBasicOutputs(genesisWalletAddressBech32, indexerPlugin);\n\n    const inputsWithKeyPairs: {\n        input: IUTXOInput;\n        addressKeyPair: IKeyPair;\n        consumingOutput: OutputTypes;\n    }[] = [];\n\n    let totalGenesis: BigInteger = bigInt(0);\n\n    for (let i = 0; i < genesisAddressOutputs.items.length; i++) {\n        const output = await client.output(genesisAddressOutputs.items[i]);\n        if (!output.metadata.isSpent) {\n            inputsWithKeyPairs.push({\n                input: {\n                    type: UTXO_INPUT_TYPE,\n                    transactionId: output.metadata.transactionId,\n                    transactionOutputIndex: output.metadata.outputIndex\n                },\n                addressKeyPair: genesisWalletKeyPair,\n                consumingOutput: output.output\n            });\n            if (output.output.type === BASIC_OUTPUT_TYPE) {\n                totalGenesis = totalGenesis.plus((output.output as IBasicOutput).amount);\n            }\n        }\n    }\n\n    const amountToSend = bigInt(10000000);\n\n    const outputs: {\n        address: string;\n        addressType: number;\n        amount: BigInteger;\n    }[] = [\n            // This is the transfer to the new address\n            {\n                address: newAddressHex,\n                addressType: ED25519_ADDRESS_TYPE,\n                amount: amountToSend\n            },\n            // Sending remainder back to genesis\n            {\n                address: genesisWalletAddressHex,\n                addressType: ED25519_ADDRESS_TYPE,\n                amount: totalGenesis.minus(amountToSend)\n            }\n        ];\n\n    const { blockId } = await sendAdvanced(client, inputsWithKeyPairs, outputs, {\n        tag: Converter.utf8ToBytes("WALLET"),\n        data: Converter.utf8ToBytes("Fireflea")\n    });\n\n    console.log("Created Block Id", blockId);\n\n    const newAddressBalance = await getBalance(client, walletSeed, 0);\n    console.log("Wallet 1 Address Balance", newAddressBalance);\n\n    const unspentAddress = await getUnspentAddress(client, walletSeed, 0);\n    console.log("Wallet 1 First Unspent Address", unspentAddress);\n\n    const allUspentAddresses = await getUnspentAddresses(client, walletSeed, 0);\n    console.log("Wallet 1 Unspent Addresses", allUspentAddresses);\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n    \nasync function requestFunds(url: string, addressBech32: string): Promise<object> {\n    const requestFounds = await fetch(url, {\n            method: \'POST\',\n            headers: {\n                \'Accept\': \'application/json\',\n                \'Content-Type\': \'application/json\'\n            },\n            body: JSON.stringify({ address: addressBech32 })\n        });\n\n    return await requestFounds.json();\n}\n\nasync function fetchAndWaitForBasicOutputs(addressBech32: string, client: IndexerPluginClient): Promise<IOutputsResponse> {\n    let outputsResponse: IOutputsResponse = { ledgerIndex: 0, cursor: "", pageSize: "", items: [] };\n    let maxTries = 10;\n    let tries = 0;\n    while(outputsResponse.items.length == 0 ){\n        if (tries > maxTries){break}\n        tries++;\n        console.log("\\tTry #",tries,": fetching basic output for address ", addressBech32)\n        outputsResponse = await client.basicOutputs({\n            addressBech32: addressBech32,\n            hasStorageDepositReturn: false,\n            hasExpiration: false,\n            hasTimelock: false,\n            hasNativeTokens: false,\n        });\n        if(outputsResponse.items.length == 0){\n            console.log("\\tDidn\'t find any, retrying soon...")\n            await new Promise(f => setTimeout(f, 1000));}\n    }\n    if(tries > maxTries){\n        throw new Error("Didn\'t find any outputs for address");\n    }\n    \n    return outputsResponse;\n};\n'),(0,r.kt)("h3",{id:"expected-output"},"Expected Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'Genesis\n        Seed bd80f079560f25b35ab6a5f95e31e57e1f549f81140d1d28884037dc9fa6ed10\n        Address Ed25519 0xd49b2cf7f727faf9cad957d14d7f13993c10010f43b0c2a5de72b728b9d01835\n        Address Bech32 rms1qr2fkt8h7unl47w2m9tazntlzwvncyqppapmps49meetw29e6qvr2wrxcz6\nWallet 1\n        Seed: e57fb750f3a3a67969ece5bd9ae7eef5b2256a818b2aac458941f7274985a410\n        Path: m/44\'/4218\'/0\'/0\'/0\'\n        Address Ed25519 m/44\'/4218\'/0\'/0\'/0\': 0x515582fe648b0f10a2b2a1b91d7502190c979baabfee85b6bbb5020692e55d16\n        Address Bech32 m/44\'/4218\'/0\'/0\'/0\': rms1qpg4tqh7vj9s7y9zk2smj8t4qgvse9um42l7apdkhw6syp5ju4w3vajenuh\ngenesisFunds:  {\n  address: \'rms1qr2fkt8h7unl47w2m9tazntlzwvncyqppapmps49meetw29e6qvr2wrxcz6\',\n  waitingRequests: 1\n}\n        Try # 1 : fetching basic output for address  rms1qr2fkt8h7unl47w2m9tazntlzwvncyqppapmps49meetw29e6qvr2wrxcz6\n        Didn\'t find any, retrying soon...\n        Try # 2 : fetching basic output for address  rms1qr2fkt8h7unl47w2m9tazntlzwvncyqppapmps49meetw29e6qvr2wrxcz6\n        Didn\'t find any, retrying soon...\n        Try # 3 : fetching basic output for address  rms1qr2fkt8h7unl47w2m9tazntlzwvncyqppapmps49meetw29e6qvr2wrxcz6\ninputsWithKeyPairs: [{"input":{"type":0,"transactionId":"0xab9c00cf096a80b8414dacb78f256d6604d968621533ca5a314c690392d5bd3d","transactionOutputIndex":0},"addressKeyPair":{"publicKey":{"0":133,"1":225,"2":45,"3":246,"4":113,"5":97,"6":179,"7":226,"8":184,"9":195,"10":212,"11":50,"12":205,"13":196,"14":138,"15":221,"16":95,"17":3,"18":229,"19":242,"20":69,"21":223,"22":2,"23":212,"24":169,"25":203,"26":248,"27":141,"28":222,"29":162,"30":252,"31":176},"privateKey":{"0":189,"1":128,"2":240,"3":121,"4":86,"5":15,"6":37,"7":179,"8":90,"9":182,"10":165,"11":249,"12":94,"13":49,"14":229,"15":126,"16":31,"17":84,"18":159,"19":129,"20":20,"21":13,"22":29,"23":40,"24":136,"25":64,"26":55,"27":220,"28":159,"29":166,"30":237,"31":16,"32":133,"33":225,"34":45,"35":246,"36":113,"37":97,"38":179,"39":226,"40":184,"41":195,"42":212,"43":50,"44":205,"45":196,"46":138,"47":221,"48":95,"49":3,"50":229,"51":242,"52":69,"53":223,"54":2,"55":212,"56":169,"57":203,"58":248,"59":141,"60":222,"61":162,"62":252,"63":176}},"consumingOutput":{"type":3,"amount":"1000000000","unlockConditions":[{"type":0,"address":{"type":0,"pubKeyHash":"0xd49b2cf7f727faf9cad957d14d7f13993c10010f43b0c2a5de72b728b9d01835"}}]}}]\nCreated Block Id 0xa48c85b745e964d66ca48912a88faab7c86c7662a2993a488239377f2dc07728\nWallet 1 Address Balance Integer { value: 1010000000n }\nWallet 1 First Unspent Address {\n  address: \'rms1qpg4tqh7vj9s7y9zk2smj8t4qgvse9um42l7apdkhw6syp5ju4w3vajenuh\',\n  path: "m/44\'/4218\'/0\'/0\'/0\'",\n  balance: Integer { value: 1020000000n }\n}\nWallet 1 Unspent Addresses [\n  {\n    address: \'rms1qpg4tqh7vj9s7y9zk2smj8t4qgvse9um42l7apdkhw6syp5ju4w3vajenuh\',\n    path: "m/44\'/4218\'/0\'/0\'/0\'",\n    balance: Integer { value: 1020000000n }\n  }\n]\nDone\n')))}w.isMDXComponent=!0}}]);
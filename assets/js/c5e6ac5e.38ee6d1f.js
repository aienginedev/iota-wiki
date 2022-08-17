"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27599],{10580:function(t,e,i){i.r(e),i.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),s=(i(69319),["components"]),o={title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},l=void 0,u={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/getting_started.mdx",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/iota.rs/develop/libraries/rust/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/getting_started.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started With Rust",description:"Getting started with the official IOTA Client Rust library.",image:"/img/logo/iota_mark_light.png",keywords:["Rust","install","cargo","system environment variables"]},sidebar:"docs",previous:{title:"IOTA Client libraries",permalink:"/iota.rs/develop/libraries/overview"},next:{title:"How To Get Node Info",permalink:"/iota.rs/develop/libraries/rust/how_to/get_node_info"}},d={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Using the library",id:"using-the-library",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function g(t){var e=t.components,i=(0,r.Z)(t,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"This is a rust library, if you don't have rust installed yet, visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Install Rust"),"."),(0,a.kt)("h2",{id:"using-the-library"},"Using the library"),(0,a.kt)("p",null,"Using the library is very easy, you just need to add it as dependency in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'[dependencies]\niota-client = { git = "https://github.com/iotaledger/iota.rs", branch = "develop" }\ntokio = { version = "1.20.0", features = [ "full" ] }\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This example fetches node information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node("https://api.testnet.shimmer.network")?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Get node info.\n    let info = client.get_info().await?;\n\n    // Print node info.\n    println!("{info:#?}");\n\n    Ok(())\n}\n')))}g.isMDXComponent=!0}}]);
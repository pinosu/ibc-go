"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92597,27918],{64744:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=s(85893),t=s(11151),n=s(18573);const c={title:"Scaffold a Cosmos SDK Blockchain with Ignite",sidebar_label:"Scaffold a Cosmos SDK Blockchain with Ignite",sidebar_position:3,slug:"/fee/scaffold-chain"},a="Scaffold a Cosmos SDK blockchain with Ignite",r={id:"fee/scaffold-chain",title:"Scaffold a Cosmos SDK Blockchain with Ignite",description:"In this tutorial, we will not be going through the process of creating a Cosmos SDK module. Instead, we will integrate the ICS-29 Fee Middleware into an existing Cosmos SDK blockchain. Scaffold the blockchain without any custom modules using the following command.",source:"@site/tutorials/01-fee/03-scaffold-chain.md",sourceDirName:"01-fee",slug:"/fee/scaffold-chain",permalink:"/tutorials/fee/scaffold-chain",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Scaffold a Cosmos SDK Blockchain with Ignite",sidebar_label:"Scaffold a Cosmos SDK Blockchain with Ignite",sidebar_position:3,slug:"/fee/scaffold-chain"},sidebar:"defaultSidebar",previous:{title:"Set Up Your Work Environment",permalink:"/tutorials/fee/setup-env"},next:{title:"Wire Up the ICS-29 Fee Middleware to a Cosmos SDK Blockchain",permalink:"/tutorials/fee/wire-feeibc-mod"}},l={},d=[];function h(e){const o={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.h1,{id:"scaffold-a-cosmos-sdk-blockchain-with-ignite",children:"Scaffold a Cosmos SDK blockchain with Ignite"}),"\n",(0,i.jsx)(o.p,{children:"In this tutorial, we will not be going through the process of creating a Cosmos SDK module. Instead, we will integrate the ICS-29 Fee Middleware into an existing Cosmos SDK blockchain. Scaffold the blockchain without any custom modules using the following command."}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"ignite scaffold chain foo --no-module\n"})}),"\n",(0,i.jsxs)(o.p,{children:["This will create a new blockchain in the ",(0,i.jsx)(o.code,{children:"foo"})," directory. The ",(0,i.jsx)(o.code,{children:"foo"})," directory will contain ",(0,i.jsx)(o.a,{href:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/tree/0f41b3c6b4e065aa1a860de3e3038d489c37a28a",children:"these files and directories"}),". Verify that this chain runs with"]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-bash",children:"cd foo\nignite chain serve --reset-once\n"})}),"\n",(0,i.jsxs)(o.p,{children:["Once it is running quit by pressing ",(0,i.jsx)(o.code,{children:"q"}),". This blockchain comes with Cosmos SDK ",(0,i.jsx)(o.code,{children:"v0.47.3"})," and IBC-Go ",(0,i.jsx)(o.code,{children:"v7.1.0"}),". We can update Cosmos SDK to its latest patch version and update IBC-Go to its latest minor version by running these two commands."]}),"\n",(0,i.jsx)(n.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/tree/88e2fa73c833523cba2122d4b2a41eb8e3b8d86e",children:(0,i.jsx)(o.p,{children:"go get github.com/cosmos/cosmos-sdk@v0.47.5 && go mod tidy"})}),"\n",(0,i.jsx)(n.Z,{className:"language-bash",source:"https://github.com/srdtrk/cosmoverse2023-ibc-fee-demo/tree/2e2c2a3b8e13fd5e23c3b59894438494af6fc32a",children:(0,i.jsx)(o.p,{children:"go get github.com/cosmos/ibc-go/v7@v7.3.0 && go mod tidy"})}),"\n",(0,i.jsxs)(o.p,{children:["Feel free to test that the chain still runs with ",(0,i.jsx)(o.code,{children:"ignite chain serve --reset-once"}),". Do not forget to quit by pressing ",(0,i.jsx)(o.code,{children:"q"}),"."]})]})}function f(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},18573:(e,o,s)=>{s.d(o,{Z:()=>c});s(67294);var i=s(33010),t=s.n(i),n=s(85893);function c(e){const{source:o,...s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t(),{...s}),o&&(0,n.jsx)("div",{className:"text-right mb-4",children:(0,n.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:"View Source"})})]})}}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7710],{39739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(85893),r=t(11151);const i={title:"Client",sidebar_label:"Client",sidebar_position:9,slug:"/apps/transfer/ics20-v1/client"},o="Client",l={id:"apps/transfer/ICS20-v1/client",title:"Client",description:"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol.",source:"@site/docs/02-apps/01-transfer/10-ICS20-v1/09-client.md",sourceDirName:"02-apps/01-transfer/10-ICS20-v1",slug:"/apps/transfer/ics20-v1/client",permalink:"/main/apps/transfer/ics20-v1/client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Client",sidebar_label:"Client",sidebar_position:9,slug:"/apps/transfer/ics20-v1/client"},sidebar:"defaultSidebar",previous:{title:"Authorizations",permalink:"/main/apps/transfer/ics20-v1/authorizations"},next:{title:"Overview",permalink:"/main/apps/interchain-accounts/overview"}},a={},c=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"Transactions",id:"transactions",level:4},{value:"<code>transfer</code>",id:"transfer",level:4},{value:"<code>total-escrow</code>",id:"total-escrow",level:4},{value:"gRPC",id:"grpc",level:2},{value:"<code>TotalEscrowForDenom</code>",id:"totalescrowfordenom",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This document is relevant only for fungible token transfers over channels on v1 of the ICS-20 protocol."})}),"\n",(0,s.jsx)(n.h1,{id:"client",children:"Client"}),"\n",(0,s.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["A user can query and interact with the ",(0,s.jsx)(n.code,{children:"transfer"})," module using the CLI. Use the ",(0,s.jsx)(n.code,{children:"--help"})," flag to discover the available commands:"]}),"\n",(0,s.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"query"})," commands allow users to query ",(0,s.jsx)(n.code,{children:"transfer"})," state."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"tx"})," commands allow users to interact with the controller submodule."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx ibc-transfer --help\n"})}),"\n",(0,s.jsx)(n.h4,{id:"transfer",children:(0,s.jsx)(n.code,{children:"transfer"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"transfer"})," command allows users to execute cross-chain token transfers from the source port ID and channel ID on the sending chain."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd tx ibc-transfer transfer [src-port] [src-channel] [receiver] [coins] [flags]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"coins"})," parameter accepts the amount and denomination (e.g. ",(0,s.jsx)(n.code,{children:"100uatom"}),") of the tokens to be transferred."]}),"\n",(0,s.jsx)(n.p,{children:"The additional flags that can be used with the command are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--packet-timeout-height"})," to specify the timeout block height in the format ",(0,s.jsx)(n.code,{children:"{revision}-{height}"}),". The default value is ",(0,s.jsx)(n.code,{children:"0-0"}),", which effectively disables the timeout. Timeout height can only be absolute, therefore this option must be used in combination with ",(0,s.jsx)(n.code,{children:"--absolute-timeouts"})," set to true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--packet-timeout-timestamp"})," to specify the timeout timestamp in nanoseconds. The timeout can be either relative (fromthe current UTC time) or absolute. The default value is 10 minutes (and thus relative). The timeout is disabled when set to 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--absolute-timeouts"})," to interpret the timeout timestamp as an absolute value (when set to true). The default value is false (and thus the timeout timeout is considered relative to current UTC time)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--memo"})," to specify the memo string to be sent along with the transfer packet. If forwarding is used, then the memo string will be carried through the intermediary chains to the final destination."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"total-escrow",children:(0,s.jsx)(n.code,{children:"total-escrow"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"total-escrow"})," command allows users to query the total amount in escrow for a particular coin denomination regardless of the transfer channel from where the coins were sent out."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer total-escrow [denom] [flags]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"simd query ibc-transfer total-escrow samoleans\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'amount: "100"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"grpc",children:"gRPC"}),"\n",(0,s.jsxs)(n.p,{children:["A user can query the ",(0,s.jsx)(n.code,{children:"transfer"})," module using gRPC endpoints."]}),"\n",(0,s.jsx)(n.h3,{id:"totalescrowfordenom",children:(0,s.jsx)(n.code,{children:"TotalEscrowForDenom"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"TotalEscrowForDenom"})," endpoint allows users to query the total amount in escrow for a particular coin denomination regardless of the transfer channel from where the coins were sent out."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"ibc.applications.transfer.v1.Query/TotalEscrowForDenom\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'grpcurl -plaintext \\\n  -d \'{"denom":"samoleans"}\' \\\n  localhost:9090 \\\n  ibc.applications.transfer.v1.Query/TotalEscrowForDenom\n'})}),"\n",(0,s.jsx)(n.p,{children:"Example output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'{\n  "amount": "100"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
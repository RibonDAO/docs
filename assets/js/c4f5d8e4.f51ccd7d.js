"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[195],{1386:function(e,t,n){n.r(t),n.d(t,{Guides:function(){return I},actions:function(){return V},default:function(){return $},github:function(){return P},quick:function(){return S}});var r,l=n(1880),a=n(7294),i=n(4385),c=n(9960),o=(n(2263),n(1584)),m=["title","titleId"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h,d,u,g,x,f,E,w,v,y,b,Z,M,z,k,j=function(e){var t=e.title,n=e.titleId,l=p(e,m);return a.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:24,height:24,"aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,r||(r=a.createElement("path",{fill:"#8c9eff",d:"M40 12s-4.585-3.588-10-4l-.488.976C34.408 10.174 36.654 11.891 39 14c-4.045-2.065-8.039-4-15-4s-10.955 1.935-15 4c2.346-2.109 5.018-4.015 9.488-5.024L18 8c-5.681.537-10 4-10 4s-5.121 7.425-6 22c5.162 5.953 13 6 13 6l1.639-2.185C13.857 36.848 10.715 35.121 8 32c3.238 2.45 8.125 5 16 5s12.762-2.55 16-5c-2.715 3.121-5.857 4.848-8.639 5.815L33 40s7.838-.047 13-6c-.879-14.575-6-22-6-22zM17.5 30c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4zm13 0c-1.933 0-3.5-1.791-3.5-4s1.567-4 3.5-4 3.5 1.791 3.5 4-1.567 4-3.5 4z"})))},D=n(9750),R=n(4996),B=n(1875),C=n(8264),L=n(943),O=n(2027),A=n(6293),V=[{title:"What is Ribon",href:"#",icon:C.Z,to:"docs/what-is-ribon",text:"Learn about the core concepts of the Ribon Protocol. Promoters, Integrations, Donations and more."},{title:"Smart contract overview",href:"#",icon:L.Z,to:"docs/contract/smart-contract-overview",text:"Learn about the architecture of the Ribon Protocol smart contracts made up of the Core and Periphery libraries."},{title:"How to integrate with Ribon",href:"#",icon:L.Z,to:"docs/what-is-ribon",text:"Learn how to integrate with Ribon using javascript."}],P=[{title:"core-protocol-v1",href:"https://github.com/RibonDAO/core-protocol-v1",icon:O.Z},{title:"interface",href:"https://github.com/RibonDAO/interface",icon:O.Z},{title:"core-api",href:"https://github.com/RibonDAO/core-api",icon:O.Z},{title:"Integration API example",href:"https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md"}],I=[{title:"SDK Quick Start",text:"Integrate with the Ribon Protocol using JavaScript",to:"#"}],S=[{title:"Smart Contracts",text:"Start swapping from a smart contract",to:"docs/contract/smart-contract-overview"},{title:"Whitepaper",text:"Read the Ribon whitepaper",to:"https://ribon.io/wp-content/uploads/2021/08/Protocolo-Ribon-Whitepaper-v.0.2.pdf"}],H=o.Z.div(h||(h=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n"]))),W=o.Z.div(d||(d=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 16px;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 1rem 0;\n  max-width: 960px;\n  @media (max-width: 960px) {\n    grid-template-columns: 1fr;\n    padding: 1rem;\n    max-width: 100%;\n    margin: 0 1rem;\n  }\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n"]))),T=(0,o.Z)(W)(u||(u=(0,l.Z)(["\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 48px;\n  @media (max-width: 960px) {\n    grid-template-columns: 1fr;\n  }\n  @media (max-width: 640px) {\n    grid-template-columns: 1fr;\n  }\n"]))),_=o.Z.div(g||(g=(0,l.Z)(["\n  display: flex;\n  max-height: 250px;\n  min-width: 350px;\n  padding: 1rem;\n  flex-direction: column;\n  justify-content: center;\n  cursor: pointer;\n  border: 1px solid transparent;\n  border-radius: 20px;\n  border: 1px solid var(--ifm-color-emphasis-200);\n  /* flex: 1 1 0px; */\n  &:hover {\n    border: 1px solid var(--ifm-color-emphasis-400);\n    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n  }\n  @media (max-width: 960px) {\n    width: 100%;\n  }\n"]))),G=(0,o.Z)(_)(x||(x=(0,l.Z)(["\n  min-width: 250px;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  display: grid;\n  grid-template-columns: 48px 1fr;\n  gap: 24px;\n  h3 {\n    margin-bottom: 0.25rem;\n  }\n  p {\n    margin-bottom: 0px;\n  }\n"]))),Q=(0,o.Z)(_)(f||(f=(0,l.Z)(["\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);\n  background-color: #ffffff10;\n  backdrop-filter: blur(10px);\n  min-height: 200px;\n  /* background-color: var(--ifm-color-emphasis-0); */\n"]))),F=((0,o.Z)(Q)(E||(E=(0,l.Z)(["\n  max-height: auto;\n  @media (max-width: 960px) {\n    margin: 0 2rem;\n    max-height: fit-content;\n    width: fit-content;\n  }\n"]))),o.Z.div(w||(w=(0,l.Z)(["\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n"])))),q=o.Z.div(v||(v=(0,l.Z)(["\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 1rem;\n"]))),J=o.Z.div(y||(y=(0,l.Z)(["\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  a h3 {\n    color: black !important;\n  }\n"]))),K=o.Z.div(b||(b=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n"]))),U=(0,o.Z)(D.Z)(Z||(Z=(0,l.Z)(["\n  position: relative;\n  z-index: -1;\n  width: 100%;\n  object-fit: cover;\n"]))),Y=(0,o.Z)(U)(M||(M=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n  position: absolute;\n  opacity: 0.2;\n  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);\n"]))),N=o.Z.div(z||(z=(0,l.Z)(["\n  svg {\n    fill: var(--ifm-font-color-base);\n  }\n"]))),X=o.Z.div(k||(k=(0,l.Z)(["\n  @media (max-width: 960px) {\n    display: none;\n  }\n"])));function $(){return a.createElement(i.Z,{title:"Ribon Docs",description:"Technical Documentation For The Ribon Protocol"},a.createElement(H,null,a.createElement(K,null,a.createElement("div",{style:{padding:"4rem 0  ",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center"}},a.createElement("h1",{style:{fontWeight:"600"}}," Welcome to the Ribon Docs"),a.createElement(X,null,a.createElement(B.Z,null)," ")),a.createElement(Y,{alt:"Docusaurus themed image",sources:{light:(0,R.Z)("/img/banner.png"),dark:(0,R.Z)("/img/banner.png")}}),a.createElement(W,null,V.map((function(e){return a.createElement(c.Z,{style:{textDecoration:"none"},to:e.to},a.createElement(Q,{key:e.title},a.createElement(q,null,a.createElement(F,null,a.createElement(e.icon,{style:{width:"24px"},color:e.color})),a.createElement("svg",{style:{width:"24px",opacity:.2},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24"},a.createElement("path",{d:"M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"}))),a.createElement("h3",{style:{marginBottom:".75rem",color:e.color}},e.title),a.createElement("p",{style:{marginBottom:"0.5rem"}},e.text)))})))),a.createElement(T,{style:{gap:"56px",marginTop:"4rem"}},a.createElement("div",null,a.createElement("h2",null,"Getting Started"),a.createElement("p",null,"Explore these docs to get started integrating the Ribon Protocol in your dApp, smart contract or project."),a.createElement("div",null,I.map((function(e){return a.createElement(c.Z,{style:{textDecoration:"none"},key:e.title,to:e.to},a.createElement(_,{key:e.title,style:{marginBottom:"1rem"}},a.createElement(J,null,a.createElement("div",{style:{display:"flex",alignItems:"center"}},a.createElement("h3",{style:{marginBottom:"0rem"}},e.title)),a.createElement("svg",{style:{width:"24px",opacity:.2},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24"},a.createElement("path",{d:"M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"}))),a.createElement("p",{style:{marginBottom:"0rem"}},e.text)))})))),a.createElement("div",null,a.createElement("h2",null,"Developer Links"),a.createElement("p",null,"The Ribon codebase is comprised of an ecosystem of open source components."),P.map((function(e){return a.createElement(c.Z,{style:{textDecoration:"none"},href:e.href},a.createElement(_,{key:e.title,style:{marginBottom:"1rem"}},a.createElement(J,null,a.createElement(N,{style:{display:"flex",alignItems:"center"}},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120.78 117.79",style:{width:"24px"}},a.createElement("defs",null),a.createElement("title",null,"testlogo"),a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{class:"cls-1",d:"M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"}),a.createElement("path",{class:"cls-2",d:"M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"}),a.createElement("path",{class:"cls-2",d:"M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"}),a.createElement("path",{class:"cls-2",d:"M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"}),a.createElement("path",{class:"cls-2",d:"M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"}),a.createElement("path",{class:"cls-2",d:"M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"}),a.createElement("path",{class:"cls-2",d:"M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"}),a.createElement("path",{class:"cls-2",d:"M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"})))),a.createElement("h3",{style:{marginBottom:"0rem",marginLeft:"16px"}},e.title)),a.createElement("svg",{style:{width:"24px",height:"24px",opacity:.2},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24"},a.createElement("path",{d:"M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"})))))})))),a.createElement("hr",null),a.createElement(T,{style:{gap:"48px",alignItems:"center"}},a.createElement(U,{style:{maxHeight:"400px"},sources:{light:(0,R.Z)("/img/banner.png"),dark:(0,R.Z)("/img/banner.png")}}),a.createElement("div",null,a.createElement("h2",null,"Quick Links"),a.createElement("p",null),S.map((function(e){return a.createElement(c.Z,{style:{},to:e.to||e.href},a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}},a.createElement("h3",{style:{marginBottom:"0rem"}},e.title),a.createElement("svg",{style:{width:"16px",opacity:.2},xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24"},a.createElement("path",{d:"M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"}))))})))),a.createElement("hr",null),a.createElement(W,null,a.createElement(c.Z,{style:{textDecoration:"none"},href:"https://discord.gg/BVjycZYE4Q"},a.createElement(G,null,a.createElement(j,{style:{width:"48px",height:"48px"}}),a.createElement("div",null,a.createElement("h3",null,"Discord"),a.createElement("p",null,"Hop in to the #dev-chat to get realtime help.")))),a.createElement(c.Z,{style:{textDecoration:"none"},href:"https://gov.uniswap.org/"},a.createElement(G,null,a.createElement(A.Z,{style:{width:"48px",height:"48px"}}),a.createElement("div",null,a.createElement("h3",null,"Forum"),a.createElement("p",null,"Discuss governance and more.")))),a.createElement(c.Z,{style:{textDecoration:"none"},href:"https://github.com/RibonDAO"},a.createElement(G,null,a.createElement(N,null,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120.78 117.79",style:{width:"48px"}},a.createElement("defs",null),a.createElement("g",{id:"Layer_2","data-name":"Layer 2"},a.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},a.createElement("path",{class:"cls-1",d:"M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"}),a.createElement("path",{class:"cls-2",d:"M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"}),a.createElement("path",{class:"cls-2",d:"M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"}),a.createElement("path",{class:"cls-2",d:"M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"}),a.createElement("path",{class:"cls-2",d:"M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"}),a.createElement("path",{class:"cls-2",d:"M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"}),a.createElement("path",{class:"cls-2",d:"M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"}),a.createElement("path",{class:"cls-2",d:"M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"}))))," "),a.createElement("div",null,a.createElement("h3",null,"GitHub"),a.createElement("p",null,"View all Ribon repositories.")))))))}}}]);
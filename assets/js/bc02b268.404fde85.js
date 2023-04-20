"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9486],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(o),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return o?n.createElement(h,a(a({ref:t},l),{},{components:o})):n.createElement(h,a({ref:t},l))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},57300:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=o(87462),i=o(63366),r=(o(67294),o(3905)),a=["components"],s={id:"rucio_advisory_board",title:"Rucio Advisory Board"},c=void 0,d={unversionedId:"rucio_advisory_board",id:"rucio_advisory_board",title:"Rucio Advisory Board",description:"Version 1.0",source:"@site/../docs/rucio_advisory_board.md",sourceDirName:".",slug:"/rucio_advisory_board",permalink:"/documentation/rucio_advisory_board",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rucio_advisory_board.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1681980421,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{id:"rucio_advisory_board",title:"Rucio Advisory Board"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Mandate and responsibilities of the board",id:"mandate-and-responsibilities-of-the-board",level:2},{value:"Composition",id:"composition",level:2},{value:"Organisation",id:"organisation",level:2}],u={toc:p},m="wrapper";function h(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)(m,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Version 1.0"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The major success of the Rucio project can, in large part, be traced back to the way\nthe project is organised and how design decisions are made: An open development team,\ncomprised of technical experts rooted in the scientific community, drives the\ndevelopment based on expertise, technical best practices and input from their\nrespective communities",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This recipe of success is core to the culture and identity\nof the Rucio project and must not change."),(0,r.kt)("p",null,"However, with the success of the project, and the on-boarding of many scientific\ncommunities, this process does have shortcomings which this proposal tries to address.\nSpecifically, in the existing process long-term strategic perspectives of the\ninvolved scientific communities are not very well covered, simply because they are\nbeyond the scope of the technical experts participating in the development team. For\nthe same reason it is also difficult to address and discuss the identification of\nperson-power, funding streams, and the common submission/participation in funded\niprojects."),(0,r.kt)("p",null,"These shortcomings should be settled by complementing the existing process with the\ncreation of a ",(0,r.kt)("strong",{parentName:"p"},"Rucio Advisory Board"),"."),(0,r.kt)("h2",{id:"mandate-and-responsibilities-of-the-board"},"Mandate and responsibilities of the board"),(0,r.kt)("p",null,"The primary function of the Rucio advisory board (RAB) is to provide expertise from\nrepresentatives of Rucio communities and to advise the Rucio project leader.\nLong-term priorities and plans of communities should be discussed by the RAB in\norder to advise on the alignment of Rucio project objectives and plans. This should\nalso lead to the identification of common objectives to form common development\nefforts. The resource and person-power situation within the Rucio project, the\ndiscussion and identification of funding streams and collaboration on funded\nprojects are also within the scope of the RAB. The Rucio project lead communicates\nthe advice given by the advisory board to the development team."),(0,r.kt)("p",null,"The board provides non-binding strategic advice and is informal in nature."),(0,r.kt)("h2",{id:"composition"},"Composition"),(0,r.kt)("p",null,"The RAB is composed of a group of community representatives. The goal is to\ncomplement the expertise of the development team, and thus representatives should\nhave knowledge about the long-term strategy of their community and ideally have\nresponsibility for their project programme and budget."),(0,r.kt)("p",null,"Membership in the RAB is by invitation of the Rucio project leader. However,\nsuggestions for expanding the board should ideally come from the RAB itself.\nRepresentatives serve a 2-year, renewable, term. Invitations to join the board\nare made to the respective community itself, which should in return nominate one,\nexceptionally two, representatives to join the board. Nominations are discussed\nwith the Rucio project leader."),(0,r.kt)("p",null,"The Rucio project leader is an ex-officio member of the board and chairs the\nboard meetings."),(0,r.kt)("h2",{id:"organisation"},"Organisation"),(0,r.kt)("p",null,"The RAB meets as needed, nominally twice a year. Meetings generally take place\nat CERN, with remote participation possibilities. The RAB members agree to\nselect a secretary for each meeting who will be in charge of keeping minutes.\nMinutes are kept internal to the RAB."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"A Rucio Community usually describes, but is not limited to, a scientific collaboration/experiment using/contributing to Rucio",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);
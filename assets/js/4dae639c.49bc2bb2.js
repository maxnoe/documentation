"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5548],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59429:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=o(87462),r=o(63366),i=(o(67294),o(3905)),a=["components"],s={id:"project_organisation",title:"Project Organisation"},c=void 0,l={unversionedId:"project_organisation",id:"project_organisation",title:"Project Organisation",description:"Rucio is organised as a community-driven, open-source, project.",source:"@site/../docs/project_organisation.md",sourceDirName:".",slug:"/project_organisation",permalink:"/documentation/project_organisation",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/project_organisation.md",tags:[],version:"current",lastUpdatedBy:"Dimitrios Christidis",lastUpdatedAt:1683287462,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{id:"project_organisation",title:"Project Organisation"},sidebar:"docs",previous:{title:"Type Annotation Guide",permalink:"/documentation/developer/type_annotation_guide"},next:{title:"Rucio Advisory Board",permalink:"/documentation/rucio_advisory_board"}},p={},u=[{value:"Project leader",id:"project-leader",level:2},{value:"Component leads",id:"component-leads",level:2},{value:"Rucio Advisory Board",id:"rucio-advisory-board",level:2},{value:"Special Interest Groups",id:"special-interest-groups",level:2},{value:"Contributors / Developers",id:"contributors--developers",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,s=(0,r.Z)(e,a);return(0,i.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rucio is organised as a community-driven, open-source, project.\nAn open development team, comprised of technical experts rooted in the scientific\ncommunity, drives the development based on expertise, technical best-practices and\ninput from their respective communities. This openness is core to the identity and\nthe success of the project."),(0,i.kt)("p",null,"To organise the daily development work as well as the long-term strategic objectives\nof the software, the project consists of several entities described on this page."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project organisation",src:o(68672).Z,width:"936",height:"487"})),(0,i.kt)("p",null,'A list of members of the current "Core Team" can be seen ',(0,i.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/team.html"},"here"),"."),(0,i.kt)("h2",{id:"project-leader"},"Project leader"),(0,i.kt)("p",null,"The project leader has the overall responsibility of steering the project. This\nincludes coordinating, planning, and assessing the development activity of the\nRucio developers. "),(0,i.kt)("h2",{id:"component-leads"},"Component leads"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/documentation/component_leads"},"component leads")," take formal responsibility in planning\nand developing contributions for their respective components. They are the\ncore experts and the point-of-contact in case of issues as well as to guide new\ndevelopments within their components."),(0,i.kt)("h2",{id:"rucio-advisory-board"},"Rucio Advisory Board"),(0,i.kt)("p",null,"The primary function of the Rucio advisory board (RAB) is to provide expertise from\nrepresentatives of Rucio communities and to advise the Rucio project leader.\nLong-term priorities and plans of communities should be discussed by the RAB in order\nto advise on the alignment of Rucio project objectives and plans. This should also\nlead to the identification of common objectives to form common development efforts.\nThe resource and person-power situation within the Rucio project, the discussion and\nidentification of funding streams and collaboration on funded projects are also\nwithin the scope of the RAB. The Rucio project lead communicates the advice given by\nthe advisory board to the development team."),(0,i.kt)("p",null,"Detailed mandate and responsibility of the board can be found ",(0,i.kt)("a",{parentName:"p",href:"/documentation/rucio_advisory_board"},"here"),"."),(0,i.kt)("h2",{id:"special-interest-groups"},"Special Interest Groups"),(0,i.kt)("p",null,"Rucio Special Interest Groups (SIG) serve the purpose to offer a forum for interested users,\noperators, and developers to discuss and plan the evolution of a specific part of Rucio.\nThe topic of a SIG needs to be well-defined and the community interest on the topic\nneeds to be above a threshold to justify the creation of a SIG, instead of covering the\ntopic just within the weekly Rucio meeting. A SIG topic can involve one or multiple\nRucio components, or even the entire system. SIGs are open to any interrested community\nmember."),(0,i.kt)("p",null,"Each SIG must define"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A well-defined objective of the group (Creation of a report, Development of\na functionality, ...)"),(0,i.kt)("li",{parentName:"ul"},"An expected end-date"),(0,i.kt)("li",{parentName:"ul"},"Means to achieve the objective, such as regular meetings, a mailing-list, mattermost\nchannel, a workshop, ..."),(0,i.kt)("li",{parentName:"ul"},"A convener")),(0,i.kt)("p",null,"Currently there are two Rucio special interest groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quality of Service (QoS)"),(0,i.kt)("li",{parentName:"ul"},"Metadata")),(0,i.kt)("h2",{id:"contributors--developers"},"Contributors / Developers"),(0,i.kt)("p",null,"Rucio could not exist without the numerous contributors who spent their valuable time\nto improve the software. A list of contributors can be seen ",(0,i.kt)("a",{parentName:"p",href:"about_our_contributors"},"here"),"."))}f.isMDXComponent=!0},68672:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/project_organisation-34e098b66c4fc3eaf02022fd457704a7.svg"}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3086],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Replica management with replication rules"},s=void 0,c={unversionedId:"replica_management",id:"replica_management",title:"Replica management with replication rules",description:"Replica management is based on replication rules defined on data identifiers",source:"@site/../docs/replica_management.md",sourceDirName:".",slug:"/replica_management",permalink:"/documentation/replica_management",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replica_management.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1674809559,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{title:"Replica management with replication rules"},sidebar:"docs",previous:{title:"Permission model",permalink:"/documentation/permission_model"},next:{title:"Replication rule examples",permalink:"/documentation/replication_rules_examples"}},p={},d=[{value:"Footnotes",id:"footnotes",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Replica management is based on replication rules defined on data identifiers\n(files, datasets, containers). A replication rule is owned by an account and\ndefines the minimum number of replicas to be available on a list of RSEs,\ndenoted by an ",(0,i.kt)("a",{parentName:"p",href:"/documentation/rse_expressions"},"RSE Expression"),".  Accounts are allowed to set\nmultiple rules",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Rules may optionally have a limited lifetime and can be\nadded, removed or modified at any time."),(0,i.kt)("p",null,"An example listing of replication rules is given below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prod: 1x replica @ CERN, no lifetime"),(0,i.kt)("li",{parentName:"ul"},"barisits: 1x replica @ US-T2, until 2019-01-01"),(0,i.kt)("li",{parentName:"ul"},"vgaronne: 2x replica @ T1, no lifetime")),(0,i.kt)("p",null,"A rule engine validates the rules and creates transfer primitives to fulfil all\nrules, e.g. transfer a file from RSE A to RSE B. The rule engine is triggered\nwhen a new rule is defined on an existing data identifier, or when a file is\nadded to a dataset with existing rules.  The rule engine will only create the\nminimum set of necessary transfer primitives to satisfy all rules."),(0,i.kt)("p",null,"Notifications can be provided for rules and their underlying transfer\nrequests. All transfer requests are transient."),(0,i.kt)("p",null,"The deletion service supports two different modes: greedy and non-greedy. Greedy\nmeans that the service tries to immediately delete all replicas which are not\nprotected by a replication rule. Non-greedy deletion is triggered when storage\npolicy dictates that space must be freed. The deletion service will look for\nreplicas on that RSE which can be deleted without violating any replication\nrule. The deletion service will use a Least Recently Used (LRU) algorithm to\nselect replicas for deletion. The deletion service will also immediately delete\nall replicas of any file which is declared obsolete."),(0,i.kt)("p",null,"Some examples of replication rules are listed\n",(0,i.kt)("a",{parentName:"p",href:"/documentation/replication_rules_examples"},"here"),"."),(0,i.kt)("h2",{id:"footnotes"},"Footnotes"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"The system may reject rules if these violate other policies, e.g., only\nspecific accounts are allowed to request replication rules for tape systems.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);
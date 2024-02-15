"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4648],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>h});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(45072),n=r(95656),i=(r(11504),r(95788)),o=["components"],l={title:"1.23.0"},s=void 0,u={unversionedId:"release-notes/1.23.0",id:"release-notes/1.23.0",title:"1.23.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.23.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.0",permalink:"/documentation/release-notes/1.23.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.0.md",tags:[],version:"current",frontMatter:{title:"1.23.0"}},c={},p=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],g={toc:p},m="wrapper";function h(e){var t=e.components,r=(0,n.c)(e,o);return(0,i.yg)(m,(0,a.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),(0,i.yg)("p",null,"This release marks the start of the 1.23 ",(0,i.yg)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",(0,i.yg)("strong",{parentName:"p"},"July 2022"),"."),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding column ",(0,i.yg)("inlineCode",{parentName:"p"},"services")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"messages")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"messages_history")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"a193a275255c"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Preparation for QoS feature (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"c0937668555f")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"50280c53117c"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"rse_qos_map")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"qos_class")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"rses")," table")))),(0,i.yg)("h2",{id:"important-changes"},"Important changes"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Due to the metadata unification feature (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096"),") added in this release, the APIs for ",(0,i.yg)("inlineCode",{parentName:"li"},"add_did_meta"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"get_did_meta"),", and ",(0,i.yg)("inlineCode",{parentName:"li"},"delete_did_meta")," were removed. This data is now available through the plugin mechanism of the common ",(0,i.yg)("inlineCode",{parentName:"li"},"get_metadata")," API.")),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: MultiVO functionality for Rucio ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2635"},"#2635")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Unification of metadata interfaces ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: QoS: Core and interfaces ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3543"},"#3543")),(0,i.yg)("li",{parentName:"ul"},"Messaging: Extending Hermes to submit to influxDB or Elastic ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3680"},"#3680"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: token exchange of JWTs not acquired via Rucio CLI (cases with offline_access scope) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3778"},"#3778")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Support bulk requests in the list_dataset_replicas CLI API ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2459"},"#2459")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Introduce BelleII activities ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3771"},"#3771")),(0,i.yg)("li",{parentName:"ul"},"RSE Manager: GlobusRSEProtocol Modifications: remove RSEDeterministicTranslation and call super of protocol base class ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3584"},"#3584")),(0,i.yg)("li",{parentName:"ul"},"Testing: Reaper tests make no assertions or deletions ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3726"},"#3726")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Adding list and exists methods to GlobusRSEProtocol ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3346"},"#3346")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Introduce caching of a MultiHop path to optimize algorithm runtime ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3830"},"#3830"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: fix to py2/3 compatibility of common.utils  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3743"},"#3743")),(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: Token validation for credential signing request ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3823"},"#3823")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Internal error during adding duplicate attribute to account ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3777"},"#3777")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Fix extract_scope method for BelleII ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3797"},"#3797")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Conveyor submitter creates partitions wrongly ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3752"},"#3752"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"features-1"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Moving upload method from rsemgr to client ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3084"},"#3084"))),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Allow passing the dynamic parameter to get_did() ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3760"},"#3760"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Python 3 error with uploadclient json.dump ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3747"},"#3747"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Harden security on the Web UI ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3757"},"#3757"))))}h.isMDXComponent=!0}}]);
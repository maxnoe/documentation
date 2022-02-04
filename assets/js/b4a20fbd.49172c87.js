(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(377)),c=["components"],o={title:"1.24.0rc1",sidebar_label:"1.24.0rc1"},l={unversionedId:"release-notes/1.24.0rc1",id:"release-notes/1.24.0rc1",isDocsHomePage:!1,title:"1.24.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.24.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.0rc1",permalink:"/documentation/release-notes/1.24.0rc1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.0rc1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1643965784,formattedLastUpdatedAt:"2/4/2022",sidebar_label:"1.24.0rc1",frontMatter:{title:"1.24.0rc1",sidebar_label:"1.24.0rc1"}},s=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,c);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the\n",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about\nupgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade\nhead")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Adding missing indices which were only available as functional oracle\nindices. For oracle databases installed with the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/sql/oracle/schema.sql"},"schema.sql"),"\ndefinition, these should already exist (Please verify). (Alembic revision\n",Object(i.b)("inlineCode",{parentName:"p"},"8ea9122275b1"),")"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"SUBSCRIPTIONS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"subscriptions")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"CONTENTS_RULE_EVAL_FB_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"contents")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REPLICAS_STATE_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"BAD_REPLICAS_ACCOUNT_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"bad_replicas")," table"),Object(i.b)("li",{parentName:"ul"},"Adding ",Object(i.b)("inlineCode",{parentName:"li"},"REQUESTS_DEST_RSE_ID_IDX")," on ",Object(i.b)("inlineCode",{parentName:"li"},"requests")," table"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Update of ",Object(i.b)("inlineCode",{parentName:"p"},"REQUESTS_STATE_CHK")," constraint in ",Object(i.b)("inlineCode",{parentName:"p"},"requests")," table in preparation\nfor Conveyor Preparer (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"d23453595260"),")"))),Object(i.b)("h2",{id:"important-changes"},"Important changes"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"This Rucio release line drops support for Python 2.7 on the Server/Daemon\nSide. Only Python 3.6, 3.7 and 3.8 are supported from now on. Rucio clients\nare still Python 2.7 compatible for the foreseen future (EOL will be\nannounced). If your environment is requiring to run Rucio under Python 2.7 we\nrecommend the Rucio 1.23 LTS release line, which will be supported until\n2022.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Due to a fix (",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/3994"},"#3994"),") in the\nsalting-algorithm used for Python 3 all hashes for stored passwords in Rucio\nneed to be re-collected. This only affects password authentication, X509,\nKerberos or OIDCS authentication is unaffected."))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add check that alembic version of DB works with rucio release ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1157"},"#1157")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Some function based indexes missing in models.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2714"},"#2714")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Policy packages should support multi-VO Rucio installations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3542"},"#3542")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Provide a bulk method for setting metadata ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3847"},"#3847")),Object(i.b)("li",{parentName:"ul"},"Database: Upgrade SQLAlchemy version ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4055"},"#4055")),Object(i.b)("li",{parentName:"ul"},"Replicas: Allow declaring bad replicas via RSE/DID pair and REST API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4099"},"#4099")),Object(i.b)("li",{parentName:"ul"},"Transfers: Re-Write of Conveyor-Throttler and the throtteling system ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4056"},"#4056"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Make tool execution-dir independent ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4113"},"#4113")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Hardcoded atlas-adc-ddm-support eMail address for rule approval ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4164"},"#4164")),Object(i.b)("li",{parentName:"ul"},"Deletion: all_rses option redundant for light and dark reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3933"},"#3933")),Object(i.b)("li",{parentName:"ul"},"Release management: Upgrade information in setup.py (1.24.0) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4120"},"#4120")),Object(i.b)("li",{parentName:"ul"},"Release management: 1.24 Dependency upgrade ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4157"},"#4157")),Object(i.b)("li",{parentName:"ul"},"Release management: Python memcached package ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4169"},"#4169")),Object(i.b)("li",{parentName:"ul"},"Replicas: Set geoip as default sorting algorithm in list_replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4017"},"#4017"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Userpass authentication not backwards compatible nor unicode capable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3994"},"#3994")),Object(i.b)("li",{parentName:"ul"},"Clients: list_replicas returns a generator with an empty string when there are no replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2517"},"#2517")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Clean URLs coming from AWS ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4159"},"#4159")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: S3 endpoints in TPC must use s3s:// instead of s3:// ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4173"},"#4173")),Object(i.b)("li",{parentName:"ul"},"DIRAC: Bug in Belle II permission for dirac ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4174"},"#4174")),Object(i.b)("li",{parentName:"ul"},"Release management: Security upgrade for oic dependency ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4181"},"#4181"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Rucio upload with rse_expression ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4129"},"#4129"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: sorting of column of type datetime in datatable broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1771"},"#1771"))))}b.isMDXComponent=!0},377:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
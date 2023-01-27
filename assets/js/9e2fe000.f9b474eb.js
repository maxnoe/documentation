"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},64797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],l={title:"1.30.0rc1"},s=void 0,u={unversionedId:"release-notes/1.30.0rc1",id:"release-notes/1.30.0rc1",title:"1.30.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.30.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.30.0rc1",permalink:"/documentation/release-notes/1.30.0rc1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.30.0rc1.md",tags:[],version:"current",frontMatter:{title:"1.30.0rc1"}},p={},c=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"release-candidate"},"Release Candidate"),(0,i.kt)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.kt)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,i.kt)("p",null,"The following changes are necessary and are covered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Correcting length of ",(0,i.kt)("inlineCode",{parentName:"p"},"rse_expression")," in rule history tables (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"p"},"83f991c63a93"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Conveyor throttler evolution (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"p"},"13d4f70c66a9"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Creation of ",(0,i.kt)("inlineCode",{parentName:"li"},"transfer_limits")," table"),(0,i.kt)("li",{parentName:"ul"},"Drop and re-creation of ",(0,i.kt)("inlineCode",{parentName:"li"},"rse_transfer_limits")," table"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dropping/Renaming of several columns in the ",(0,i.kt)("inlineCode",{parentName:"p"},"distances")," table (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"p"},"140fef722e91"),")"))),(0,i.kt)("h2",{id:"important-changes"},"Important changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most metric names were changed in this release. If you collect prometheus and/or statsd metrics, the monitoring dashboards and alerting rules will have to be updated."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Important Note (unrelated to this particular release)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The prometheus metrics are the main supported way of collecting metrics since ",(0,i.kt)("inlineCode",{parentName:"li"},"1.28"),"."),(0,i.kt)("li",{parentName:"ul"},"There are no plans to deprecate carbon metrics yet, but there is no active development in this field anymore."),(0,i.kt)("li",{parentName:"ul"},"This update may be a good opportunity to switch to native prometheus metrics. Especially if you use prometheus anyway and rely on the ",(0,i.kt)("inlineCode",{parentName:"li"},"statsd exporter")," to bridge the gap between statsd and prometheus."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deactivation of automatic ",(0,i.kt)("inlineCode",{parentName:"p"},"https-\\>davs")," translation for transfers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This automatic translation was necessary in the past but should be largely deprecated due to more recent versions of storage software"),(0,i.kt)("li",{parentName:"ul"},"If you notice issues related to this, you can turn translation back on by setting the config option ",(0,i.kt)("inlineCode",{parentName:"li"},"[transfers]rewrite_https_to_davs=True")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Support RFC format for X509 identities"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There are two formats: an RFC-compliant (e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"CN=John Doe,OU=Users,DC=example,DC=com"),") and a legacy (e.g.\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"/DC=com/DC=example/OU=Users/CN=John Doe"),")"),(0,i.kt)("li",{parentName:"ul"},"In Rucio ",(0,i.kt)("inlineCode",{parentName:"li"},"1.29")," and prior, X509 identities must be stored in the legacy format and the authentication server tries to silently convert them from the RFC to the legacy format, if necessary"),(0,i.kt)("li",{parentName:"ul"},"In Rucio ",(0,i.kt)("inlineCode",{parentName:"li"},"1.30"),", this conversion has been removed",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Communities who would like to keep using the legacy format must ensure that\xa0",(0,i.kt)("inlineCode",{parentName:"li"},"LegacyDNStringFormat"),"\xa0in mod_ssl is enabled"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Almost all fields from the distances table are removed. The only important field preserved from ",(0,i.kt)("inlineCode",{parentName:"p"},"1.29")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1.30")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"ranking")," (renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"distance"),"). Rucio ",(0,i.kt)("inlineCode",{parentName:"p"},"1.30")," is compatible both with the old ",(0,i.kt)("inlineCode",{parentName:"p"},"1.29")," table format and the ",(0,i.kt)("inlineCode",{parentName:"p"},"1.30")," table format. If you desire to run Rucio ",(0,i.kt)("inlineCode",{parentName:"p"},"1.29")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"1.30"),' in parallel, database migrations associated with the "distances" table must be delayed until the full migration of all daemons and servers to ',(0,i.kt)("inlineCode",{parentName:"p"},"1.30"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The throttler rules format has changed in an incompatible way. The update of the database schema will result in removal of all existing throttling rules. Rules in the new format ",(0,i.kt)("em",{parentName:"p"},"must")," be created before running throttler again, otherwise all waiting requests will be transitioned to queued state and be submitted without throttling."))),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Support RFC format for X509 identities ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5842"},"#5842")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Introduce heartbeat handler to all daemons ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5443"},"#5443"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"retrying")," dependency ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5344"},"#5344")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Proper versioning for policy packages ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5652"},"#5652")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Enforce tokens by default in Flask ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5822"},"#5822")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: switch to lazy-filling of account_usage counters ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5914"},"#5914")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: fix type of 'session' function arguments  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5947"},"#5947")),(0,i.kt)("li",{parentName:"ul"},"Monitoring & Logging: rework prometheus/statsd metric names ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5804"},"#5804")),(0,i.kt)("li",{parentName:"ul"},"Protocols: Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"pysftp")," protocol ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5347"},"#5347")),(0,i.kt)("li",{parentName:"ul"},"REST & API: remove traces endpoint from the default list in flask ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5958"},"#5958")),(0,i.kt)("li",{parentName:"ul"},"Subscriptions: Introduce new exclude_site algorithm for chained subscriptions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5935"},"#5935")),(0,i.kt)("li",{parentName:"ul"},"Testing: Fix unit tests for non-ATLAS policies round 2/3 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5839"},"#5839")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Re-work/cleanup ",(0,i.kt)("inlineCode",{parentName:"li"},"distance")," table ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5454"},"#5454")),(0,i.kt)("li",{parentName:"ul"},"Transfers: rework conveyor-throttler  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5805"},"#5805")),(0,i.kt)("li",{parentName:"ul"},"Transfers: remove https-",">","davs translation on FTS submission ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5993"},"#5993"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Database: Alembic context issue with  move_rse_artributes_to_rse_attributes migration ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5823"},"#5823")),(0,i.kt)("li",{parentName:"ul"},"Database: incorrect rse_expression length in rule_history* migrations ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5846"},"#5846")),(0,i.kt)("li",{parentName:"ul"},"globus RSE protocol silently ignores errors ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5987"},"#5987")),(0,i.kt)("li",{parentName:"ul"},"Protocols: webdav.py Default.stat() module: Match error when finding size of current file ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5308"},"#5308")),(0,i.kt)("li",{parentName:"ul"},"Protocols: WebDAV protocol XML parser doesn't handle XML namespaces correctly ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5700"},"#5700")),(0,i.kt)("li",{parentName:"ul"},"Protocols: bad-str-strip-call errors in pylint ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6002"},"#6002"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Fix Potential for time zone confusion ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5781"},"#5781"))),(0,i.kt)("h2",{id:"webui"},"WebUI"),(0,i.kt)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WebUI: r2d2 list_rules link is broken, gives 404 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5970"},"#5970"))))}h.isMDXComponent=!0}}]);
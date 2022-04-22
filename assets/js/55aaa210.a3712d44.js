(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(388)),l=["components"],o={title:"1.22.0rc1",sidebar_label:"1.22.0rc1"},c={unversionedId:"release-notes/1.22.0rc1",id:"release-notes/1.22.0rc1",isDocsHomePage:!1,title:"1.22.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.22.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.0rc1",permalink:"/documentation/release-notes/1.22.0rc1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.0rc1.md",version:"current",lastUpdatedBy:"Joel Dierkes",lastUpdatedAt:1650638116,formattedLastUpdatedAt:"4/22/2022",sidebar_label:"1.22.0rc1",frontMatter:{title:"1.22.0rc1",sidebar_label:"1.22.0rc1"}},b=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:b};function s(e){var t=e.components,n=Object(r.a)(e,l);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(i.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(i.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(i.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(i.b)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about\nupgrading your database schema."),Object(i.b)("p",null,"The following changes are necessary and are covered by the ",Object(i.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"OAuth2.0 and JWT feature support (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"d1189a09c6e0"),")"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Update ",Object(i.b)("inlineCode",{parentName:"li"},"IDENTITIES_TYPE_CHK")," constraint in ",Object(i.b)("inlineCode",{parentName:"li"},"identities")," table"),Object(i.b)("li",{parentName:"ul"},"Update ",Object(i.b)("inlineCode",{parentName:"li"},"ACCOUNT_MAP_ID_TYPE_CHK")," constraint in ",Object(i.b)("inlineCode",{parentName:"li"},"account_map")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"oidc_scope")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"audience")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"refresh_token")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"refresh")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"TOKENS_REFRESH_CHK")," constraint to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"refresh_start")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"refresh_expired_at")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"refresh_lifetime")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"oauth_requests")," table"),Object(i.b)("li",{parentName:"ul"},"Change size of ",Object(i.b)("inlineCode",{parentName:"li"},"token")," column in ",Object(i.b)("inlineCode",{parentName:"li"},"tokens")," table"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Changes for Multi-VO functionality (Alembic revision ",Object(i.b)("inlineCode",{parentName:"p"},"a118956323f8"),")"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"vos")," table"),Object(i.b)("li",{parentName:"ul"},"Insert default row to ",Object(i.b)("inlineCode",{parentName:"li"},"vos")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"vo")," column to ",Object(i.b)("inlineCode",{parentName:"li"},"rses")," table"),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"RSES_VOS_FK")," foreign key constraint to ",Object(i.b)("inlineCode",{parentName:"li"},"rses")," table"),Object(i.b)("li",{parentName:"ul"},"Update ",Object(i.b)("inlineCode",{parentName:"li"},"RSES_RSE_UQ")," unique contraint in ",Object(i.b)("inlineCode",{parentName:"li"},"rses")," table")))),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Rucio user authentication via OIDC protocol (XDC IAM), getting user info and JWT tokens\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2612"},"#2612")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Need VO table and VO column in RSE table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2727"},"#2727")),Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper 2.0 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2412"},"#2412")),Object(i.b)("li",{parentName:"ul"},"Release management: Add oidc auth templates to setup.py ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3348"},"#3348")),Object(i.b)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.22 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3360"},"#3360")),Object(i.b)("li",{parentName:"ul"},"Release management: Better way to deal with configuration / permissions / policy ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/533"},"#533"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Protection of sources too strict in the reaper ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1637"},"#1637"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Fixes to OIDC AuthN/Z after first deployment on a testbed ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3337"},"#3337")),Object(i.b)("li",{parentName:"ul"},"Deletion: only_delete_obsolete is not working properly ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3399"},"#3399"))))}s.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||p[d]||i;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
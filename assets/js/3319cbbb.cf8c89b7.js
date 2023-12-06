"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91120:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"33.0.0"},l=void 0,u={unversionedId:"release-notes/33.0.0",id:"release-notes/33.0.0",title:"33.0.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/33.0.0.md",sourceDirName:"release-notes",slug:"/release-notes/33.0.0",permalink:"/documentation/release-notes/33.0.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/33.0.0.md",tags:[],version:"current",frontMatter:{title:"33.0.0"}},p={},c=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"Technology Preview: New Token Support",id:"technology-preview-new-token-support",level:2},{value:"Technology Preview: New WebUI",id:"technology-preview-new-webui",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],h={toc:c},m="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.kt)("p",null,"This major release requires a database schema upgrade. Please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,i.kt)("p",null,"The following changes are necessary and are covered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dropping ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp_dids")," table (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"p"},"4df2c5ddabc0"),")")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Creating ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_stats")," table (Alembic revision ",(0,i.kt)("inlineCode",{parentName:"p"},"a08fa8de1545"),")"))),(0,i.kt)("h2",{id:"important-changes"},"Important changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are no notable changes in helm charts this version. However, if you are updating from a helm chart prior to 32.0.0, please follow the instruction from the previous rucio release ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/releases/tag/1.31.0"},"1.31.0"),' and perform the updates associated to "breaking", "highly recommended" and (optionally) "recommended" helm-chart changes. ')),(0,i.kt)("h2",{id:"technology-preview-new-token-support"},"Technology Preview: New Token Support"),(0,i.kt)("p",null,"In key places, there is a new backwards-incompatible token implementation that supersedes what was previously available. It should be considered a technology preview that will continue to evolve and reach maturity in future releases. Communities already using tokens should test this new release thoroughly and get in contact with the development team. "),(0,i.kt)("h2",{id:"technology-preview-new-webui"},"Technology Preview: New WebUI"),(0,i.kt)("p",null,"The alpha release of the new WebUI will be rolled out in the following days. This version of the WebUI does not replace the existing UI and the transition is foreseen to happen over the future release candidates. For example, OIDC authentication workflows are not yet supported and the URL's from the old UI do not map to the URLs in the new one. The communities are, therefore, still advised to keep using the old Rucio UI until we have made further improvements and prepared a migration guide. The list of supported features in the new WebUI are here ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/webui/issues/301"},"https://github.com/rucio/webui/issues/301"),". The purpose of this release is to start involving users and communities for feedback while fixing the bugs and tasks that are already on our roadmap."),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Design and implement a token cache module ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6183"},"#6183")),(0,i.kt)("li",{parentName:"ul"},"Authentication & Authorisation: Design and implement a token request module ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6187"},"#6187")),(0,i.kt)("li",{parentName:"ul"},"Deletion: Use new token request procedure for deletions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6390"},"#6390")),(0,i.kt)("li",{parentName:"ul"},"update dependencies for the 33.0.0 release  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6378"},"#6378")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Transfer status visual representation  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6189"},"#6189"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Plugin module for Auto Approval ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6203"},"#6203")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: drop support for the 1.29 distances table format ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6367"},"#6367")),(0,i.kt)("li",{parentName:"ul"},"Deletion: Review state of temporary dids (and thus Light Reaper) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6317"},"#6317")),(0,i.kt)("li",{parentName:"ul"},"allow exposing /ping on a separate rest endpoint ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6394"},"#6394")),(0,i.kt)("li",{parentName:"ul"},"Testing: Simplify the test pipeline ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6212"},"#6212")),(0,i.kt)("li",{parentName:"ul"},"Transfers: revisit submitter source selection strategy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5776"},"#5776")),(0,i.kt)("li",{parentName:"ul"},"Transfers: implement the configuration option for source selection strategy ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6342"},"#6342")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Use new token request procedure for third-party-copy transfers ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6401"},"#6401"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Transfers: Panda jobs fail for QoS RSE when RSE type is DISK  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6399"},"#6399"))))}d.isMDXComponent=!0}}]);
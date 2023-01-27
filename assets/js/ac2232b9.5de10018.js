"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,d=p["".concat(u,".").concat(h)]||p[h]||m[h]||a;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},21689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"1.14.6"},u=void 0,l={unversionedId:"release-notes/1.14.6",id:"release-notes/1.14.6",title:"1.14.6",description:"Rucio",source:"@site/../docs/release-notes/1.14.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.6",permalink:"/documentation/release-notes/1.14.6",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.6.md",tags:[],version:"current",frontMatter:{title:"1.14.6"}},c={},p=[{value:"Rucio",id:"rucio",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rucio"},"Rucio"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: RSE distance APIs not exposed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/330"},"#330")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: support for multiple permission and schema policy ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/356"},"#356")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: add # in cms regexp name ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/394"},"#394")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Configurable name length ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/399"},"#399")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Client: Check URL escaping code for handling of / ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/411"},"#411")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Include the network domain (wan, lan) in list_replicas ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/64"},"#64")),(0,a.kt)("li",{parentName:"ul"},"Documentation: space-usage: Add documentation. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/329"},"#329")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Contributing guide Improvement  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/331"},"#331")),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Provide dev container that mounts code ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/322"},"#322")),(0,a.kt)("li",{parentName:"ul"},"Release management: AUTHORS update ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/380"},"#380")),(0,a.kt)("li",{parentName:"ul"},"Testing: propagate the rigth postgresql file in travis ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/359"},"#359"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: get_submitted_at_rucio should return an array of submitted_at time stamps ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/232"},"#232")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: redirect: wrong link follow format to metalink ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/348"},"#348")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: PostgreSQL not working, 1 test failing ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/388"},"#388")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: ",(0,a.kt)("inlineCode",{parentName:"li"},"import rucio.core.rule")," fails with missing section ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/407"},"#407")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Move rule permission check is not working ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/426"},"#426")),(0,a.kt)("li",{parentName:"ul"},"Core & Internals: database: bootstrap mismatch between SSH and GSS ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/439"},"#439")),(0,a.kt)("li",{parentName:"ul"},"Infrastructure: Fix missing cx_Oracle dependency in DockerFile ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/317"},"#317")),(0,a.kt)("li",{parentName:"ul"},"Life time model: Atropos doesn't properly take into account computed eol_at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/412"},"#412")),(0,a.kt)("li",{parentName:"ul"},"Subscriptions: Change the set_new_dids method to set NULL value instead of 0 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/447"},"#447")),(0,a.kt)("li",{parentName:"ul"},"Testing: Database tests are not executed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/383"},"#383")),(0,a.kt)("li",{parentName:"ul"},"Transfers: Link_ranking based sorting in case of multipe tape replicas is done wrong ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/351"},"#351"))),(0,a.kt)("h2",{id:"clients"},"Clients"),(0,a.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Clients: Avoid session reuse when new token is needed ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/433"},"#433")),(0,a.kt)("li",{parentName:"ul"},"Clients: Client-side escaping of generated URLs ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/436"},"#436"))),(0,a.kt)("h2",{id:"webui"},"WebUI"),(0,a.kt)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WebUI: add suspicious files dump description to WebUI ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/363"},"#363")),(0,a.kt)("li",{parentName:"ul"},"WebUI: Copyright statement of WebUI footer needs to be updated to include 2018 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/430"},"#430"))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,d=p["".concat(l,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"transfers-submitter",title:"Transfers Submitter"},l=void 0,u={unversionedId:"transfers-submitter",id:"transfers-submitter",title:"Transfers Submitter",description:"The conveyor-submitter (transfer submitter) is the rucio daemon in charge",source:"@site/../docs/transfers_submitter.md",sourceDirName:".",slug:"/transfers-submitter",permalink:"/documentation/transfers-submitter",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/transfers_submitter.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1675427285,formattedLastUpdatedAt:"Feb 3, 2023",frontMatter:{id:"transfers-submitter",title:"Transfers Submitter"},sidebar:"docs",previous:{title:"Transfers Throttler",permalink:"/documentation/transfers-throttler"},next:{title:"Configure Rucio To Use Globus Online as a Transfer Tool",permalink:"/documentation/configure-rucio-globus"}},c={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor-submitter")," (transfer submitter) is the rucio daemon in charge\nof submitting transfers for execution by an external third-party-copy\ntrasfertool. As input, it gets the transfer requests in ",(0,o.kt)("inlineCode",{parentName:"p"},"queued")," state and\nperforms multiple tasks on them with the end goal of submitting the actual\ntransfer to one or more transfertools."),(0,o.kt)("p",null,"Historically, submitter was the main entry point into the transfer machinery\ninstead of the preparer. Because of that, many old rucio installations don't\nrun the preparer daemon. To allow running in such configuration, submitter\nautomatically detects if preparer is running and, if it's not running, will\nperform the \"Source replica selection\". See the preparer documentation for more\ndetails."),(0,o.kt)("p",null,"The Submitter:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(if preparer is not running) selects the source replica"),(0,o.kt)("li",{parentName:"ul"},"computes the path for the selected replica"),(0,o.kt)("li",{parentName:"ul"},"checks transfertool-specific RSE attributes"),(0,o.kt)("li",{parentName:"ul"},"creates intermediate hops for multi-hop transfers"),(0,o.kt)("li",{parentName:"ul"},"generates the full URIs to be used by the transfertool"),(0,o.kt)("li",{parentName:"ul"},"performs the actual submission of the transfer")),(0,o.kt)("p",null,"If the configuration value ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor/filter_transfertool")," is set, submitter\nwill only work on transfers having the ",(0,o.kt)("inlineCode",{parentName:"p"},"transfertool")," attribute set to the\ncorrect value. This database field is filled by the preparer, so preparer is\nrequired for multi-transfertool deployments."),(0,o.kt)("p",null,"To verify if a path cen be submitted by any of the transfertools configured\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor/transfertool"),", transfertool-specific RSE attributes are used. For\nexample, the fts3 transfertool requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"fts")," RSE attribute with a list of\nfts servers; while the globus transfertool requires the ",(0,o.kt)("inlineCode",{parentName:"p"},"globus_endpoint_id"),"\nattribute on both source and destination RSE."),(0,o.kt)("p",null,"If a path can be submitted, all missing hops are created into the database,\nand submitter goes to the submission step, which is straightforward and\nconsists of calling the transfertool with the correct arguments."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6300],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>d});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,d=u["".concat(a,".").concat(f)]||u[f]||y[f]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:i,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var n=r(45072),i=r(95656),o=(r(11504),r(95788)),l=["components"],c={title:"FileClient"},a=void 0,p={unversionedId:"client_api/fileclient",id:"client_api/fileclient",title:"FileClient",description:"list\\file\\replicas",source:"@site/../docs/client_api/fileclient.md",sourceDirName:"client_api",slug:"/client_api/fileclient",permalink:"/documentation/client_api/fileclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/fileclient.md",tags:[],version:"current",frontMatter:{title:"FileClient"},sidebar:"docs",previous:{title:"ExportClient",permalink:"/documentation/client_api/exportclient"},next:{title:"ImportClient",permalink:"/documentation/client_api/importclient"}},s={},u=[{value:"list_file_replicas",id:"list_file_replicas",level:2}],y={toc:u},f="wrapper";function d(e){var t=e.components,r=(0,i.c)(e,l);return(0,o.yg)(f,(0,n.c)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"list_file_replicas"},"list","_","file","_","replicas"),(0,o.yg)("span",{style:{"white-space":"pre"}},(0,o.yg)("p",null,"List file replicas."),(0,o.yg)("table",{style:{border:"none"}},(0,o.yg)("tbody",null,(0,o.yg)("tr",{style:{border:"none"}},(0,o.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Arguments"),":")),(0,o.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"scope"),": the scope."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"lfn"),": the lfn."))),(0,o.yg)("tr",{style:{border:"none"}},(0,o.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Returns"),":")),(0,o.yg)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.yg)("p",null,"  List of replicas.")))))))}d.isMDXComponent=!0}}]);
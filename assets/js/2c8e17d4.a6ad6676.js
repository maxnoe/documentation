"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2740],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>f});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,f=p["".concat(l,".").concat(y)]||p[y]||m[y]||o;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},86777:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(45072),a=t(95656),o=(t(11504),t(95788)),c=["components"],i={title:"1.20.3rc2"},l=void 0,s={unversionedId:"release-notes/1.20.3rc2",id:"release-notes/1.20.3rc2",title:"1.20.3rc2",description:"General",source:"@site/../docs/release-notes/1.20.3rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.3rc2",permalink:"/documentation/release-notes/1.20.3rc2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.3rc2.md",tags:[],version:"current",frontMatter:{title:"1.20.3rc2"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},y="wrapper";function f(e){var r=e.components,t=(0,a.c)(e,c);return(0,o.yg)(y,(0,n.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("h3",{id:"enhancements"},"Enhancements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Core & Internals: Replace use of RSE names with ids in core ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2500"},"#2500")),(0,o.yg)("li",{parentName:"ul"},"Core & Internals: small enhancements for data import ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2725"},"#2725")),(0,o.yg)("li",{parentName:"ul"},"Traces: Kronos needs rse_id update ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2737"},"#2737"))),(0,o.yg)("h3",{id:"bugs"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Core & Internals: Incorrectly passing strings to SQLAlchemy without an explicit text() declaration ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2732"},"#2732")),(0,o.yg)("li",{parentName:"ul"},"Core & Internals: Daemon crashes in 1.20.3rc1 ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2747"},"#2747"))))}f.isMDXComponent=!0}}]);
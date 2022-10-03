(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(443)),o=["components"],c={title:"1.26.4"},u={unversionedId:"release-notes/1.26.4",id:"release-notes/1.26.4",isDocsHomePage:!1,title:"1.26.4",description:"General",source:"@site/../docs/release-notes/1.26.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.4",permalink:"/documentation/release-notes/1.26.4",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.4.md",version:"current",frontMatter:{title:"1.26.4"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],s={toc:l};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Database: Change OIC to 19.12  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4803"},"#4803")),Object(a.b)("li",{parentName:"ul"},"Dataset deletion: Undertaker: Force deletion of replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4689"},"#4689")),Object(a.b)("li",{parentName:"ul"},"Docker & Kubernetes: Export all ports to localhost with specific bind ip ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4782"},"#4782")),Object(a.b)("li",{parentName:"ul"},"Messaging: Change timeout behaviour of hermes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4757"},"#4757"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Authentication & Authorisation: Temporary fix for token deletion hint ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4817"},"#4817")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Remove client_cert and client_key from atlas client template ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4787"},"#4787")),Object(a.b)("li",{parentName:"ul"},"WebUI: Fix setup_webui script ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4789"},"#4789"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Clients: Rucio download is not able to download files if the scope or name contains "/" ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3031"},"#3031"))))}b.isMDXComponent=!0},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(f,c(c({ref:t},l),{},{components:r})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{363:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(388)),i=["components"],c={title:"1.23.19",sidebar_label:"1.23.19"},s={unversionedId:"release-notes/1.23.19",id:"release-notes/1.23.19",isDocsHomePage:!1,title:"1.23.19",description:"General",source:"@site/../docs/release-notes/1.23.19.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.19",permalink:"/documentation/release-notes/1.23.19",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.19.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1649688477,formattedLastUpdatedAt:"4/11/2022",sidebar_label:"1.23.19",frontMatter:{title:"1.23.19",sidebar_label:"1.23.19"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Release management: Update paramiko dependency due to security advisory ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5412"},"#5412")),Object(o.b)("li",{parentName:"ul"},"Release management: Pin the ",Object(o.b)("inlineCode",{parentName:"li"},"werkzeug")," package version prior to 2.1.0 in Flask 1.1.2 versions ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5419"},"#5419"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Jinja2 3.1.0 is incompatible with Flask 1.1.2 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5398"},"#5398")),Object(o.b)("li",{parentName:"ul"},"Release management: Flask fails after itsdangerous module\u2019s update ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5258"},"#5258"))))}p.isMDXComponent=!0},388:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{262:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return l}));var r=n(3),i=n(7),o=(n(0),n(388)),a=["components"],c={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},s={unversionedId:"notifications",id:"notifications",isDocsHomePage:!1,title:"Notifications",description:"External applications can require synchronisation on events relative to",source:"@site/../docs/notifications.md",sourceDirName:".",slug:"/notifications",permalink:"/documentation/notifications",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/notifications.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1649688477,formattedLastUpdatedAt:"4/11/2022",sidebar_label:"Notifications",frontMatter:{id:"notifications",title:"Notifications",sidebar_label:"Notifications"},sidebar:"docs",previous:{title:"Accounting and quota",permalink:"/documentation/accounting_and_quota"},next:{title:"Subscriptions",permalink:"/documentation/subscriptions"}},u=[],p={toc:u};function l(t){var e=t.components,n=Object(i.a)(t,a);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"External applications can require synchronisation on events relative to\ndata availability and can subscribe to particular events, e.g., dataset\nstate changes, replication rule state changes, etc. Rucio publishes\nmessages via the ",Object(o.b)("a",{parentName:"p",href:"https://stomp.github.io"},"STOMP")," protocol (to e.g.\n",Object(o.b)("a",{parentName:"p",href:"https://activemq.apache.org"},"ActiveMQ"),") when these events happen."))}l.isMDXComponent=!0},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=i.a.createContext({}),p=function(t){var e=i.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return i.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.a.createElement(i.a.Fragment,{},e)}},d=i.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(a,".").concat(d)]||l[d]||f[d]||o;return n?i.a.createElement(b,c(c({ref:e},u),{},{components:n})):i.a.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
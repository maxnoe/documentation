(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{292:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"toc",(function(){return u})),n.d(e,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(433)),a=["components"],c={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},s={unversionedId:"notifications",id:"notifications",isDocsHomePage:!1,title:"Notifications",description:"External applications can require synchronisation on events relative to",source:"@site/../docs/notifications.md",sourceDirName:".",slug:"/notifications",permalink:"/documentation/notifications",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/notifications.md",version:"current",lastUpdatedBy:"Rizart Dona",lastUpdatedAt:1658758291,formattedLastUpdatedAt:"7/25/2022",sidebar_label:"Notifications",frontMatter:{id:"notifications",title:"Notifications",sidebar_label:"Notifications"},sidebar:"docs",previous:{title:"Accounting and quota",permalink:"/documentation/accounting_and_quota"},next:{title:"Subscriptions",permalink:"/documentation/subscriptions"}},u=[],p={toc:u};function l(t){var e=t.components,n=Object(o.a)(t,a);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"External applications can require synchronisation on events relative to\ndata availability and can subscribe to particular events, e.g., dataset\nstate changes, replication rule state changes, etc. Rucio publishes\nmessages via the ",Object(i.b)("a",{parentName:"p",href:"https://stomp.github.io"},"STOMP")," protocol (to e.g.\n",Object(i.b)("a",{parentName:"p",href:"https://activemq.apache.org"},"ActiveMQ"),") when these events happen."))}l.isMDXComponent=!0},433:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=o.a.createContext({}),p=function(t){var e=o.a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=p(t.components);return o.a.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,a=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=r,b=l["".concat(a,".").concat(d)]||l[d]||f[d]||i;return n?o.a.createElement(b,c(c({ref:e},u),{},{components:n})):o.a.createElement(b,c({ref:e},u))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
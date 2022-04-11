(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(388)),i=["components"],s={id:"additional_layers_and_resources",title:"Additional Layers and Resources"},c={unversionedId:"additional_layers_and_resources",id:"additional_layers_and_resources",isDocsHomePage:!1,title:"Additional Layers and Resources",description:"In addition to the four main layers, we have the",source:"@site/../docs/additional_layers_and_resources.md",sourceDirName:".",slug:"/additional_layers_and_resources",permalink:"/documentation/additional_layers_and_resources",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/additional_layers_and_resources.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1649688477,formattedLastUpdatedAt:"4/11/2022",frontMatter:{id:"additional_layers_and_resources",title:"Additional Layers and Resources"},sidebar:"docs",previous:{title:"Main Components",permalink:"/documentation/main_components"},next:{title:"Requirements",permalink:"/documentation/requirements"}},l=[],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In addition to the four ",Object(o.b)("a",{parentName:"p",href:"/documentation/main_components"},"main layers"),", we have the\nstorage resources & transfer tools, as well as the underlying persistent\nlayers. These are represented in the architecture diagram by the different\n",Object(o.b)("em",{parentName:"p"},"queuing systems"),", ",Object(o.b)("em",{parentName:"p"},"transactional")," relational databases, & ",Object(o.b)("em",{parentName:"p"},"analytics")," storage\non non-relational databases."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage & Transfer Tools layer")),Object(o.b)("p",null,"The Storage layer is responsible for the various interactions with different\ngrid middleware tools & storage systems. The transfer tool interface is a\nfeature of Rucio that enables the daemons to submit, query, and cancel transfers\ngenerically & independently from the actual transfer service being used."),Object(o.b)("p",null,"This layer is not a software that resides in a datacenter but is more\nrepresentative of the various abstractions in a storage system. It can be\nconfigured dynamically & centrally to suite requirements."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Persistence Layer")),Object(o.b)("p",null,"This is the layer responsible for keeping all the data & application states for\nall daemons. Also known as the ",Object(o.b)("strong",{parentName:"p"},"catalog"),", it requires a transactional\ndatabase."),Object(o.b)("p",null,"The persistence layer supports many different types of transactions relational\ndatabase management systems such as SQLite, MySQL, PostgreSQL, or Oracle. Both\nupgrading & downgrading of the database schema are supported."))}d.isMDXComponent=!0},388:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);
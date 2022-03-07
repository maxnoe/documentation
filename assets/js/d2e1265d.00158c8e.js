(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(378)),i=["components"],c={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},l={unversionedId:"requirements",id:"requirements",isDocsHomePage:!1,title:"Requirements",description:"Rucio relies on several dependencies, some of them being a hard requirement,",source:"@site/../docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/documentation/requirements",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/requirements.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1646660442,formattedLastUpdatedAt:"3/7/2022",sidebar_label:"Requirements",frontMatter:{id:"requirements",title:"Requirements",sidebar_label:"Requirements"},sidebar:"docs",previous:{title:"Additional Layers and Resources",permalink:"/documentation/additional_layers_and_resources"},next:{title:"Concepts and terminology",permalink:"/documentation/concepts"}},u=[{value:"Python",id:"python",children:[]},{value:"Database",id:"database",children:[]}],p={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Rucio relies on several dependencies, some of them being a hard requirement,\nothers being optional depending on the used Rucio functionality."),Object(o.b)("p",null,"To install Rucio, we generally recommend a Kubernetes-based deployment based on\nour ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts"},"helm-charts"),". A direct deployment\nusing Rucio ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/u/rucio"},"docker containers"),", or Rucio\n",Object(o.b)("a",{parentName:"p",href:"https://pypi.org/project/rucio/"},"pip")," packages is also possible."),Object(o.b)("h2",{id:"python"},"Python"),Object(o.b)("p",null,"Rucio server, daemons and clients are written in Python and thus depend on an\ninstalled Python interpreter. Since the Rucio ",Object(o.b)("a",{parentName:"p",href:"../release-notes/1.24.0"},"1.24"),"\nrelease servers and daemons require ",Object(o.b)("strong",{parentName:"p"},"Python 3.6")," or upwards. The clients\nstill support ",Object(o.b)("strong",{parentName:"p"},"Python 2.7"),", but will drop support with the Rucio 1.29 LTS\nrelease in July 2022."),Object(o.b)("h2",{id:"database"},"Database"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Database"),Object(o.b)("th",{parentName:"tr",align:null},"Supported version"),Object(o.b)("th",{parentName:"tr",align:null},"Note"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"SQLite"),Object(o.b)("td",{parentName:"tr",align:null},"3+"),Object(o.b)("td",{parentName:"tr",align:null},"For testing only")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"MySQL"),Object(o.b)("td",{parentName:"tr",align:null},"8"),Object(o.b)("td",{parentName:"tr",align:null},"No support for SSH public key authentication")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"PostgreSQL"),Object(o.b)("td",{parentName:"tr",align:null},"12 and higher"),Object(o.b)("td",{parentName:"tr",align:null})),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Oracle"),Object(o.b)("td",{parentName:"tr",align:null},"19c"),Object(o.b)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
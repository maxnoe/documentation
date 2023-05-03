"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4461],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||c;return n?t.createElement(f,i(i({ref:r},l),{},{components:n})):t.createElement(f,i({ref:r},l))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84327:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=n(87462),o=n(63366),c=(n(67294),n(3905)),i=["components"],a={title:"rucio-hermes"},u=void 0,s={unversionedId:"bin/rucio-hermes",id:"bin/rucio-hermes",title:"rucio-hermes",description:"",source:"@site/../docs/bin/rucio-hermes.md",sourceDirName:"bin",slug:"/bin/rucio-hermes",permalink:"/documentation/bin/rucio-hermes",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-hermes.md",tags:[],version:"current",frontMatter:{title:"rucio-hermes"},sidebar:"docs",previous:{title:"rucio-hermes-legacy",permalink:"/documentation/bin/rucio-hermes-legacy"},next:{title:"rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner"}},l={},p=[],m={toc:p},d="wrapper";function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,c.kt)(d,(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"usage: rucio-hermes [-h] [--run-once] [--threads THREADS] [--bulk BULK]\n                    [--sleep-time SLEEP_TIME]\n\nHermes is a daemon that get the messages and sends them to external services (influxDB, ES, ActiveMQ).\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Delay control: second control per cycle\n\nRun the daemon::\n\n  $ rucio-hermes --run-once\n    \n")))}f.isMDXComponent=!0}}]);
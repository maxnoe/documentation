"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1872],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?t.createElement(d,c(c({ref:r},p),{},{components:n})):t.createElement(d,c({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},16516:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),c=["components"],a={title:"rucio-light-reaper"},s=void 0,l={unversionedId:"bin/rucio-light-reaper",id:"bin/rucio-light-reaper",title:"rucio-light-reaper",description:"",source:"@site/../docs/bin/rucio-light-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-light-reaper",permalink:"/documentation/bin/rucio-light-reaper",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-light-reaper.md",tags:[],version:"current",frontMatter:{title:"rucio-light-reaper"},sidebar:"docs",previous:{title:"rucio-kronos",permalink:"/documentation/bin/rucio-kronos"},next:{title:"rucio-minos-temporary-expiration",permalink:"/documentation/bin/rucio-minos-temporary-expiration"}},p={},u=[],m={toc:u};function f(e){var r=e.components,n=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-light-reaper [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                          [--chunk-size CHUNK_SIZE] [--scheme SCHEME]\n                          [--rses RSES [RSES ...]]\n                          [--exclude-rses EXCLUDE_RSES]\n                          [--include-rses INCLUDE_RSES] [--vos VOS [VOS ...]]\n                          [--sleep-time SLEEP_TIME]\n\nThe light-reaper is responsible of deletion of temporary files\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers per process\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --scheme SCHEME       Force the reaper to use a particular protocol, e.g.,\n                        mock.\n  --rses RSES [RSES ...]\n                        List of RSEs\n  --exclude-rses EXCLUDE_RSES\n                        RSEs expression to exclude RSEs\n  --include-rses INCLUDE_RSES\n                        RSEs expression to include RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}f.isMDXComponent=!0}}]);
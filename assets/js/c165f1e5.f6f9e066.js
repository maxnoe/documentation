"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"rucio-dumper"},l=void 0,c={unversionedId:"bin/rucio-dumper",id:"bin/rucio-dumper",title:"rucio-dumper",description:"",source:"@site/../docs/bin/rucio-dumper.md",sourceDirName:"bin",slug:"/bin/rucio-dumper",permalink:"/documentation/bin/rucio-dumper",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-dumper.md",tags:[],version:"current",frontMatter:{title:"rucio-dumper"},sidebar:"docs",previous:{title:"rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper"},next:{title:"rucio-follower",permalink:"/documentation/bin/rucio-follower"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rucio-dumper [-h] [--fields FIELDS | --hide HIDE | --group-by GROUP_BY]\n                    [--sum SUM]\n                    [--csv | --csv-nohead | --tabulate {fancy_grid,fancy_outline,github,grid,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,moinmoin,orgtbl,pipe,plain,presto,pretty,psql,rst,simple,textile,tsv,unsafehtml,youtrack}]\n                    {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                    ...\n\nThis daemon is responsible to make file list dumps. The rucio-auditor daemon\nuse these dumps to discover dark data and check Rucio database consistency.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --fields FIELDS       Comma separated list of fields that should be printed\n  --hide HIDE           Comma separated list of fields that should not be\n                        printed\n  --group-by GROUP_BY   Group records, according to the the indicated fields\n                        FIXME\n  --sum SUM             Summatory of the values of the given fields (only\n                        numerical fields and should be used in combination\n                        with --group-by)\n  --csv                 Format the output as a CSV with headers\n  --csv-nohead          Format the output as a CSV without headers (default)\n  --tabulate {fancy_grid,fancy_outline,github,grid,html,jira,latex,latex_booktabs,latex_longtable,latex_raw,mediawiki,moinmoin,orgtbl,pipe,plain,presto,pretty,psql,rst,simple,textile,tsv,unsafehtml,youtrack}\n                        Format the output as a table (printing large tables\n                        can take several minutes)\n\ndump:\n  {dump-datasets,dump-complete-datasets,dump-replicas,consistency,consistency-manual}\n                        dump data FIXME\n    dump-datasets       List the dump of all datasets for a given RSE\n    dump-complete-datasets\n                        List the dump of all complete datasets for a given RSE\n    dump-replicas       List the dump of all replicas for a given RSE\n    consistency         Consistency check to verify possible lost files and\n                        dark data (replica dumps are downloaded automatically)\n    consistency-manual  Consistency check to verify possible lost files and\n                        dark data (replica dumps should be provided by the\n                        user)\n")))}m.isMDXComponent=!0}}]);
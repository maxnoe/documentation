"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||c;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),o=n(63366),c=(n(67294),n(3905)),a=["components"],i={title:"Rucio account"},s=void 0,u={unversionedId:"started/concepts/rucio_account",id:"started/concepts/rucio_account",title:"Rucio account",description:"A Rucio account is the unit of assigning privileges in Rucio. It can represent",source:"@site/../docs/started/concepts/rucio_account.md",sourceDirName:"started/concepts",slug:"/started/concepts/rucio_account",permalink:"/documentation/started/concepts/rucio_account",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rucio_account.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1696241368,formattedLastUpdatedAt:"Oct 2, 2023",frontMatter:{title:"Rucio account"},sidebar:"docs",previous:{title:"Requirements",permalink:"/documentation/started/requirements"},next:{title:"Files, Datasets, and Containers",permalink:"/documentation/started/concepts/file_dataset_container"}},p={},l=[],d={toc:l},f="wrapper";function m(e){var t=e.components,i=(0,o.Z)(e,a);return(0,c.kt)(f,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A Rucio account is the unit of assigning privileges in Rucio. It can represent\nindividual users (such as user1, user2, user3, ",".","..), a group of users (such as\ngroup1, group2, group3, ",".","..) or a centralized production activity such as\nservice accounts for data generation (datagen) or the workflow management\nsystems (wfms). A Rucio account is identified by a string."),(0,c.kt)("p",null,"All interactions with Rucio are always conducted by a Rucio account. A Rucio\nuser is authenticated by credentials, such as X509 certificates,\nusername/password, SSH, OIDC, or tokens. Credentials can map to one or more\naccounts (N:M mapping). The Rucio authentication system checks if the used\ncredentials are authorized to use the supplied Rucio account.  The figure below\ngives an example of the mapping between credentials and Rucio accounts:"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Figure 1",src:n(20732).Z,width:"663",height:"715"})))}m.isMDXComponent=!0},20732:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/accounts-93d4b277c0d0aa69863a288edf7227ba.png"}}]);
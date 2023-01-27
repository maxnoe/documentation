"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[517],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var l=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,o=function(t,e){if(null==t)return{};var n,l,o={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=l.createContext({}),u=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=u(n),k=o,m=p["".concat(c,".").concat(k)]||p[k]||d[k]||r;return n?l.createElement(m,i(i({ref:e},s),{},{components:n})):l.createElement(m,i({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=k;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a[p]="string"==typeof t?t:o,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},83055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var l=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],a={title:"AccountLimitClient"},c=void 0,u={unversionedId:"client_api/accountlimitclient",id:"client_api/accountlimitclient",title:"AccountLimitClient",description:"set\\account\\limit",source:"@site/../docs/client_api/accountlimitclient.md",sourceDirName:"client_api",slug:"/client_api/accountlimitclient",permalink:"/documentation/client_api/accountlimitclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/accountlimitclient.md",tags:[],version:"current",frontMatter:{title:"AccountLimitClient"},sidebar:"docs",previous:{title:"AccountClient",permalink:"/documentation/client_api/accountclient"},next:{title:"BaseClient",permalink:"/documentation/client_api/baseclient"}},s={},p=[{value:"set_account_limit",id:"set_account_limit",level:2},{value:"delete_account_limit",id:"delete_account_limit",level:2},{value:"set_local_account_limit",id:"set_local_account_limit",level:2},{value:"delete_local_account_limit",id:"delete_local_account_limit",level:2},{value:"set_global_account_limit",id:"set_global_account_limit",level:2},{value:"delete_global_account_limit",id:"delete_global_account_limit",level:2}],d={toc:p};function k(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set_account_limit"},"set","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Sets an account limit for a given limit scope."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,r.kt)("h2",{id:"delete_account_limit"},"delete","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Deletes an account limit for a given limit scope."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"locality"),": The scope of the account limit. 'local' or 'global'."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,r.kt)("h2",{id:"set_local_account_limit"},"set","_","local","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Sends the request to set an account limit for an account."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,r.kt)("h2",{id:"delete_local_account_limit"},"delete","_","local","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Sends the request to remove an account limit."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse"),": The rse name."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was removed successfully. False otherwise.")))))),(0,r.kt)("h2",{id:"set_global_account_limit"},"set","_","global","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Sends the request to set a global account limit for an account."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bytes_"),": An integer with the limit in bytes."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was created successfully else False.")))))),(0,r.kt)("h2",{id:"delete_global_account_limit"},"delete","_","global","_","account","_","limit"),(0,r.kt)("span",{style:{"white-space":"pre"}},(0,r.kt)("p",null,"Sends the request to remove a global account limit."),(0,r.kt)("table",{style:{border:"none"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"account"),": The name of the account."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rse_expression"),": The rse expression."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Raises"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AccountNotFound"),": if account doesn't exist."))),(0,r.kt)("tr",{style:{border:"none"}},(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":")),(0,r.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,r.kt)("p",null,"  True if quota was removed successfully. False otherwise.")))))))}k.isMDXComponent=!0}}]);
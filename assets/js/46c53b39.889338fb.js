"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"developing_with_rucio",title:"Developing with Rucio"},s=void 0,c={unversionedId:"user/developing_with_rucio",id:"user/developing_with_rucio",title:"Developing with Rucio",description:"Rucio Clients",source:"@site/../docs/user/developing_with_rucio.md",sourceDirName:"user",slug:"/user/developing_with_rucio",permalink:"/documentation/user/developing_with_rucio",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/developing_with_rucio.md",tags:[],version:"current",lastUpdatedBy:"egazzarr",lastUpdatedAt:1700646319,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{id:"developing_with_rucio",title:"Developing with Rucio"},sidebar:"docs",previous:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"},next:{title:"Setting up a Rucio demo environment",permalink:"/documentation/operator/setting_up_demo"}},p={},u=[{value:"Rucio Clients",id:"rucio-clients",level:2},{value:"Errors and Exceptions",id:"errors-and-exceptions",level:3},{value:"RESTful APIs",id:"restful-apis",level:2},{value:"Date format",id:"date-format",level:3},{value:"SSL only",id:"ssl-only",level:3},{value:"Response formats",id:"response-formats",level:3},{value:"Error handling",id:"error-handling",level:3}],d={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"rucio-clients"},"Rucio Clients"),(0,a.kt)("p",null,"Rucio includes a client class to remove some of the complexity of dealing with\nraw HTTP requests against the RESTful API."),(0,a.kt)("p",null,"All client methods are accessible through the high-level class Client.  Below is\none example of using Rucio Client class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from rucio.client import Client\nrucio_client = Client()\nrucio_client.ping()\n")),(0,a.kt)("p",null,"The methods are separated per resource type. The API in full can be viewed\n",(0,a.kt)("a",{parentName:"p",href:"client_api/accountclient"},"here"),"."),(0,a.kt)("h3",{id:"errors-and-exceptions"},"Errors and Exceptions"),(0,a.kt)("p",null,"In the case of an error, Rucio returns a Python Exception with the appropriate\nTraceback, a detailed error string, and a unique error number. If the error\noccurred on the server side, it will be propagated to the client. The command\nline clients will exit back to the shell with the POSIX ","[errno]","{.title-ref} of\nthe unique Rucio error number. The full and up to date list can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/lib/rucio/common/exception.py"},"Exception\ndefinition"),"."),(0,a.kt)("h2",{id:"restful-apis"},"RESTful APIs"),(0,a.kt)("p",null,"Each resource can be accessed or modified using specially formed URLs and the\nstandard HTTP methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"GET to read\nPOST to create\nPUT to update\nDELETE to remove\n")),(0,a.kt)("p",null,"We require that all requests are done over SSL. The API supports JSON\nformats. Rucio uses ",(0,a.kt)("a",{parentName:"p",href:"http://oauth.net/"},"OAuth")," to authenticate all API\nrequests. The method is to get an authentication token, and use it for the rest\nof the requests. Descriptions of the actions you may perform on each resource\ncan be found in the REST API documentation."),(0,a.kt)("h3",{id:"date-format"},"Date format"),(0,a.kt)("p",null,"All dates returned are in UTC and are strings in the following format (RFC 1123,\nex RFC 822): ",(0,a.kt)("inlineCode",{parentName:"p"},"Mon, 13 May 2013 10:23:03 UTC")),(0,a.kt)("p",null,"In code format, which can be used in all programming languages that support\nstrftime or strptime:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"%a, %d %b %Y %H:%M:%S UTC\n")),(0,a.kt)("h3",{id:"ssl-only"},"SSL only"),(0,a.kt)("p",null,"We require that all requests(except for the ping) are done over SSL."),(0,a.kt)("h3",{id:"response-formats"},"Response formats"),(0,a.kt)("p",null,"The currently-available response format for all REST endpoints is the\nstring-based format JavaScript Object Notation (",(0,a.kt)("a",{parentName:"p",href:"http://www.json.org/"},"JSON"),").\nThe server answer can be one of the following content-type in the http Header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"Content-type: application/json\nContent-Type: application/x-json-stream\n")),(0,a.kt)("p",null,"In the last case, it corresponds to JSON objects delimited by newlines(streaming\nJSON for large answer), e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": 1, "foo": "bar" }\n{ "id": 2, "foo": "baz" }\n...\n')),(0,a.kt)("h3",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"Errors are returned using standard HTTP error code syntax.  Additional info is\nincluded in the header or the body of the return call, JSON-formatted with the\nparameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"ExceptionClass\nExceptionMessage\n")),(0,a.kt)("p",null,"Where ",(0,a.kt)("inlineCode",{parentName:"p"},"ExceptionClass")," refers to Rucio Exceptions."))}h.isMDXComponent=!0}}]);
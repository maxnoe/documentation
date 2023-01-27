"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7604],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:e},c),{},{components:a})):n.createElement(f,o({ref:e},c))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52247:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"metadata_attributes",title:"Metadata attributes"},l=void 0,u={unversionedId:"metadata_attributes",id:"metadata_attributes",title:"Metadata attributes",description:"Meta-data associated with a dataset/file is represented using",source:"@site/../docs/metadata_attributes.md",sourceDirName:".",slug:"/metadata_attributes",permalink:"/documentation/metadata_attributes",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/metadata_attributes.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1674809559,formattedLastUpdatedAt:"Jan 27, 2023",frontMatter:{id:"metadata_attributes",title:"Metadata attributes"},sidebar:"docs",previous:{title:"Rucio Storage Element",permalink:"/documentation/rucio_storage_element"},next:{title:"Permission model",permalink:"/documentation/permission_model"}},c={},d=[],p={toc:d};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Meta-data associated with a dataset/file is represented using\nattribute/value pairs. Meta-data attributes are classified into four\ncategories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System-defined attributes"),": size (bytes), checksums (adler32, md5),\ncreationtime, modificationtime, status, length (datasets/containers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Physics attributes"),": GUID, number of events, project, datatype, run_number,\nstream_name, prod_step, version, campaign, lumiblocknr"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Workflow management attributes"),": storing information like which task\n(task_id) or job (panda_id) produced the file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Data management attributes"),": necessary for the organisation of data on the\ngrid (see Replica Management section)")),(0,i.kt)("p",null,"For datasets, it is possible that the value of a meta-data attribute is\na function of the meta-data of its constituents, e.g. the total size is\nthe sum of the sizes of the constituents. In this case it is not\npossible to assign a value to it."))}m.isMDXComponent=!0}}]);
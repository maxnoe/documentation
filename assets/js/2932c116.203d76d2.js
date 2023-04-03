"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7604],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),u=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?r.createElement(f,o(o({ref:e},c),{},{components:a})):r.createElement(f,o({ref:e},c))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[d]="string"==typeof t?t:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52247:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"metadata_attributes",title:"Metadata attributes"},l=void 0,u={unversionedId:"metadata_attributes",id:"metadata_attributes",title:"Metadata attributes",description:"Meta-data associated with a dataset/file is represented using",source:"@site/../docs/metadata_attributes.md",sourceDirName:".",slug:"/metadata_attributes",permalink:"/documentation/metadata_attributes",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/metadata_attributes.md",tags:[],version:"current",lastUpdatedBy:"Radu Carpa",lastUpdatedAt:1680532275,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{id:"metadata_attributes",title:"Metadata attributes"},sidebar:"docs",previous:{title:"Rucio Storage Element",permalink:"/documentation/rucio_storage_element"},next:{title:"Permission model",permalink:"/documentation/permission_model"}},c={},d=[],p={toc:d},m="wrapper";function f(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)(m,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Meta-data associated with a dataset/file is represented using\nattribute/value pairs. Meta-data attributes are classified into four\ncategories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"System-defined attributes"),": size (bytes), checksums (adler32, md5),\ncreationtime, modificationtime, status, length (datasets/containers)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Physics attributes"),": GUID, number of events, project, datatype, run_number,\nstream_name, prod_step, version, campaign, lumiblocknr"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Workflow management attributes"),": storing information like which task\n(task_id) or job (panda_id) produced the file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Data management attributes"),": necessary for the organisation of data on the\ngrid (see Replica Management section)")),(0,i.kt)("p",null,"For datasets, it is possible that the value of a meta-data attribute is\na function of the meta-data of its constituents, e.g. the total size is\nthe sum of the sizes of the constituents. In this case it is not\npossible to assign a value to it."))}f.isMDXComponent=!0}}]);
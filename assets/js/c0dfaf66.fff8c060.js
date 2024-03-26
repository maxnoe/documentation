"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3685],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>h});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(58168),i=n(98587),a=(n(96540),n(15680)),r=["components"],l={title:"REST API Documentation"},p=void 0,c={unversionedId:"developer/rest_api_doc",id:"developer/rest_api_doc",title:"REST API Documentation",description:"Rucio provides a Rest API interface for client-server communication. The code",source:"@site/../docs/developer/rest_api_doc.md",sourceDirName:"developer",slug:"/developer/rest_api_doc",permalink:"/documentation/developer/rest_api_doc",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/rest_api_doc.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1711016110,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{title:"REST API Documentation"},sidebar:"docs",previous:{title:"Contributing Guide",permalink:"/documentation/contributing"},next:{title:"Type Annotation Guide",permalink:"/documentation/developer/type_annotation_guide"}},s={},d=[{value:"Tools",id:"tools",level:2},{value:"APISpec",id:"apispec",level:3},{value:"ReDoc",id:"redoc",level:3},{value:"@redocly/openapi-cli",id:"redoclyopenapi-cli",level:3},{value:"Tips",id:"tips",level:2},{value:"Build/verify often",id:"buildverify-often",level:3},{value:"Commit the doc and code changes together",id:"commit-the-doc-and-code-changes-together",level:3},{value:"Skim the OpenAPI definition",id:"skim-the-openapi-definition",level:3},{value:"OpenAPI Tools",id:"openapi-tools",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,i.A)(e,r);return(0,a.yg)(m,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Rucio provides a Rest API interface for client-server communication. The code\nfor the server is located in the Rucio project under ",(0,a.yg)("inlineCode",{parentName:"p"},"lib/rucio/rest/flask/v1"),"."),(0,a.yg)("p",null,"The Rest API Documentation provides a sufficient documentation of all endpoints\nand should be descriptive enough so that it is not required to look at the code\nanymore."),(0,a.yg)("h2",{id:"tools"},"Tools"),(0,a.yg)("p",null,"The main framework for the Rest API Documentation is ",(0,a.yg)("strong",{parentName:"p"},"OpenAPI"),". APISpec\nextracts the OpenAPI specification conform method documentation strings from the\nFlask API and constructs the overall OpenAPI specification file. This\nspecification file contains all endpoints and their parameter and return value\ndocumentation."),(0,a.yg)("h3",{id:"apispec"},"APISpec"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"APISpec")," is a python framework to extract Python doc comments and generate a\nvalid OpenAPI spec file from it. The documentation for each endpoint is a\nyaml-conform python method doc string starting after ",(0,a.yg)("inlineCode",{parentName:"p"},"---"),". The\n",(0,a.yg)("inlineCode",{parentName:"p"},"apispec_webframeworks.flask")," library connects the Python doc comments with the\nendpoints given by Flask."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"tools/generate_rest_api_doc.py")," generates the OpenAPI specification file with\nAPISpec."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The latest OpenAPI specification for the Rest API Documentation is available\n",(0,a.yg)("a",{parentName:"p",href:"pathname:///yaml/rest_api_doc_spec.yaml"},"here"),".")),(0,a.yg)("h3",{id:"redoc"},"ReDoc"),(0,a.yg)("p",null,"ReDoc creates a static html front-end for a given specification file. ReDoc has\nseveral advantages over other front-end tools:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It is fast."),(0,a.yg)("li",{parentName:"ul"},'The generated output is a static file, thus no "hosting" is needed.'),(0,a.yg)("li",{parentName:"ul"},"The generated file is structured, easy to read, contains a search field, and\nthe possibility to display examples.")),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Front-end generators only need the spec file and some configuration to generate\na user friendly view of the documentation. Select a generator from the ",(0,a.yg)("a",{parentName:"p",href:"https://openapi.tools/#documentation"},"OpenAPI\nTools")," and generate your own front-end.")),(0,a.yg)("p",null,"To generate the ReDoc html file run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install -g redoc-cli\nredoc-cli build rest_api_doc_spec_file.yaml --output rest_api_doc.html\n")),(0,a.yg)("h3",{id:"redoclyopenapi-cli"},"@redocly/openapi-cli"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"openapi-cli")," verifies the integrity of the generated spec file. Common\nproblems, e.g. typos in keywords and duplicated path specifications, get\nfiltered and produces an error, if found."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"openapi-cli")," is integrated in the Github Actions, they run in the ",(0,a.yg)("inlineCode",{parentName:"p"},"syntax")," test\nsuite. To manually check the generated spec file, run"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"rucio/tools/test/check_rest_api_documentation.sh FILE\n")),(0,a.yg)("h2",{id:"tips"},"Tips"),(0,a.yg)("h3",{id:"buildverify-often"},"Build/verify often"),(0,a.yg)("p",null,"Syntax errors are not easy to spot and appear often. To efficiently add new\ndocumentation or edit multiple old ones, gradually apply your changes and\nbuild/verify the spec file (both steps take not more than a few seconds). This\nway any error gets caught in the development cycle, not at the end."),(0,a.yg)("h3",{id:"commit-the-doc-and-code-changes-together"},"Commit the doc and code changes together"),(0,a.yg)("p",null,"The doc changes are tightly coupled with the code. Making a lot of changes to\nthe code and then one commit with all the documentation changes leads to a\ndivergent history (What if the code commits get reverted?)."),(0,a.yg)("h3",{id:"skim-the-openapi-definition"},"Skim the ",(0,a.yg)("a",{parentName:"h3",href:"https://swagger.io/specification/"},"OpenAPI")," definition"),(0,a.yg)("p",null,"OpenAPI is feature rich and may have some easier/standardized way to express\nwhat you think. E.g. deprecated fields can be marked with ",(0,a.yg)("inlineCode",{parentName:"p"},"deprecated: true"),".\nKnowing the framework and library you're working with is always a good idea. ;-)"),(0,a.yg)("h3",{id:"openapi-tools"},(0,a.yg)("a",{parentName:"h3",href:"https://openapi.tools/"},"OpenAPI Tools")),(0,a.yg)("p",null,"The OpenAPI Tools are a collection of tools to support writing, verifying and\ndisplaying Rest API Documentations. They also provide some ideas on how to\nfurther integrate the documentation into other parts of your code base, e.g. for\ninput validation."))}h.isMDXComponent=!0}}]);
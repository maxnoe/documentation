"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(l,".").concat(d)]||s[d]||h[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53198:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={id:"administration",title:"Rucio Administration Tricks",sidebar_label:"Administration Tricks"},l=void 0,p={unversionedId:"operator/administration",id:"operator/administration",title:"Rucio Administration Tricks",description:"Rucio container code hot-patching",source:"@site/../docs/operator/administration.md",sourceDirName:"operator",slug:"/operator/administration",permalink:"/documentation/operator/administration",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/administration.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1698409170,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"administration",title:"Rucio Administration Tricks",sidebar_label:"Administration Tricks"},sidebar:"docs",previous:{title:"Database Operations",permalink:"/documentation/operator/database"},next:{title:"Configuration parameters",permalink:"/documentation/operator/configuration_parameters"}},u={},s=[{value:"Rucio container code hot-patching",id:"rucio-container-code-hot-patching",level:2},{value:"Creating a patch from existing pull request",id:"creating-a-patch-from-existing-pull-request",level:3},{value:"Mounting a patch in a kubernetes cluster",id:"mounting-a-patch-in-a-kubernetes-cluster",level:3}],h={toc:s},d="wrapper";function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(d,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rucio-container-code-hot-patching"},"Rucio container code hot-patching"),(0,o.kt)("p",null,"The rucio official containers provide a way to hotpatch the source code\nbefore running rucio. This behavior may be used to rapidly fix a production\ndeployment without having to wait for the change to be merged and released by\nthe rucio team."),(0,o.kt)("p",null,"The behavior is very simple: any file found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/patch/*")," directory inside\nthe containers will be fed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"patch")," command-line tool in the order\nreturned by this glob matching."),(0,o.kt)("p",null,"The procedures described bellow are only intended for temporary fixes. If a\npermanent change is needed, we highly encourage you to open a pull request\nin rucio to spare you the toil related to maintaining your own local patch set."),(0,o.kt)("h3",{id:"creating-a-patch-from-existing-pull-request"},"Creating a patch from existing pull request"),(0,o.kt)("p",null,"Lets assume you run rucio ",(0,o.kt)("inlineCode",{parentName:"p"},"1.27.3")," in production, and you realize there is\na bug in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conveyor-poller")," daemon. You contact the rucio team and are\ntold that a fix was already done in the pull request\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/pull/5246/commits"},"#5246"),"\nand will be released next week. Follow\nthe following steps to create a patch file from this pull request without\nhaving to wait for the next rucio release to fix your issue:"),(0,o.kt)("p",null,"Clone the main rucio repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rucio/rucio.git\ncd rucio\n# Create a new branch from the 1.27.3 release tag\ngit checkout 1.27.3 -b patch-0-hotfix_conveyor_poller_on_1.27.3\n")),(0,o.kt)("p",null,"The #5246 pull request was submitted by the user ",(0,o.kt)("inlineCode",{parentName:"p"},"rcarpa")," from his rucio\nfork ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rcarpa/rucio"},"rcarpa/rucio"),". You'll have to add\nthis fork repository as a git remote:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add rcarpa https://github.com/rcarpa/rucio.git\ngit fetch rcarpa\n# Cherry-pick the commit from the #5246 pull request.\n# Beware, some PR can have multiple commits\ngit cherry-pick 47d36345469ac9c1391cacd09487d4ec6ced627f\n")),(0,o.kt)("p",null,"Now you can create the patch with the differences between the rucio 1.27.3\nrelease and the current state of the repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git diff 1.27.3 > hotfix_conveyor_poller.patch\n")),(0,o.kt)("h3",{id:"mounting-a-patch-in-a-kubernetes-cluster"},"Mounting a patch in a kubernetes cluster"),(0,o.kt)("p",null,"If you deploy rucio in a kubernetes cluster using the official rucio\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts/"},"helm charts")," and want to hotfix\nrucio using a patch file created in the previous section, follow these steps:"),(0,o.kt)("p",null,"Create a kubernetes secret from the hotfix patch: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n rucio create secret generic hotfix-conveyor-poller-patch --from-file=hotfix_conveyor_poller.patch\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," if you have more than one cluster, don't forget to create the\nsecrets in each cluster to be patched."),(0,o.kt)("p",null,"Now you'll have to update the helm ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," file for each helm release and\nadd the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"    secretMounts:\n      - secretFullName: hotfix-conveyor-poller-patch\n        mountPath: /patch/hotfix_conveyor_poller.patch\n        subPath: hotfix_conveyor_poller.patch\n")))}m.isMDXComponent=!0}}]);
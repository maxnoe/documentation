"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,b=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},70166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={title:"SubscriptionClient"},p=void 0,s={unversionedId:"client_api/subscriptionclient",id:"client_api/subscriptionclient",title:"SubscriptionClient",description:"add\\_subscription",source:"@site/../docs/client_api/subscriptionclient.md",sourceDirName:"client_api",slug:"/client_api/subscriptionclient",permalink:"/documentation/client_api/subscriptionclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/subscriptionclient.md",tags:[],version:"current",frontMatter:{title:"SubscriptionClient"},sidebar:"docs",previous:{title:"ScopeClient",permalink:"/documentation/client_api/scopeclient"},next:{title:"TouchClient",permalink:"/documentation/client_api/touchclient"}},c={},u=[{value:"add_subscription",id:"add_subscription",level:2},{value:"list_subscriptions",id:"list_subscriptions",level:2},{value:"update_subscription",id:"update_subscription",level:2},{value:"list_subscription_rules",id:"list_subscription_rules",level:2}],d={toc:u},k="wrapper";function b(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(k,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add_subscription"},"add","_","subscription"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Adds a new subscription which will be verified against every new added file and dataset"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": Name of the subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"): Account identifier"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"filter_")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),"): Dictionary of attributes by which the input data should be filtered\n",(0,o.kt)("strong",{parentName:"p"},"Example"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"{'dsn': 'data11_hi*.express_express.*,data11_hi*physics_MinBiasOverlay*', 'account': 'tzero'}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"replication_rules")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),"): Replication rules to be set : Dictionary with keys copies, rse_expression, weight, rse_expression"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"comments")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"): Comments for the subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lifetime")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Integer or False"),"): Subscription's lifetime (days); False if subscription has no lifetime"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"retroactive")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),"): Flag to know if the subscription should be applied on previous data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dry_run")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),"): Just print the subscriptions actions without actually executing them (Useful if retroactive flag is set)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"priority")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Integer"),"): The priority of the subscription (3 by default)")))))),(0,o.kt)("h2",{id:"list_subscriptions"},"list","_","subscriptions"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Returns a dictionary with the subscription information :"),(0,o.kt)("p",null,"Examples: ",(0,o.kt)("inlineCode",{parentName:"p"},"{'status': 'INACTIVE/ACTIVE/BROKEN', 'last_modified_date': ...}")),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": Name of the subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"): Account identifier"))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,"``: exception.NotFound if subscription is not found"))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,"  ",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),": Dictionary containing subscription parameter")))))),(0,o.kt)("h2",{id:"update_subscription"},"update","_","subscription"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Updates a subscription"),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": Name of the subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"): Account identifier"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"filter_")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),"): Dictionary of attributes by which the input data should be filtered\n",(0,o.kt)("strong",{parentName:"p"},"Example"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"{'dsn': 'data11_hi*.express_express.*,data11_hi*physics_MinBiasOverlay*', 'account': 'tzero'}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"replication_rules")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Dict"),"): Replication rules to be set : Dictionary with keys copies, rse_expression, weight, rse_expression"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"comments")," (",(0,o.kt)("inlineCode",{parentName:"p"},"String"),"): Comments for the subscription"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"lifetime")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Integer or False"),"): Subscription's lifetime (days); False if subscription has no lifetime"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"retroactive")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),"): Flag to know if the subscription should be applied on previous data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dry_run")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"),"): Just print the subscriptions actions without actually executing them (Useful if retroactive flag is set)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"priority")," (",(0,o.kt)("inlineCode",{parentName:"p"},"Integer"),"): The priority of the subscription"))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,"``: exception.NotFound if subscription is not found")))))),(0,o.kt)("h2",{id:"list_subscription_rules"},"list","_","subscription","_","rules"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"List the associated rules of a subscription."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"var(--ifm-background-color)",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"account"),": Account of the subscription."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name"),": Name of the subscription.")))))))}b.isMDXComponent=!0}}]);
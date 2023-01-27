"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=o.createContext({}),u=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return o.createElement(a.Provider,{value:n},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(t),f=i,m=p["".concat(a,".").concat(f)]||p[f]||l[f]||r;return t?o.createElement(m,s(s({ref:n},d),{},{components:t})):o.createElement(m,s({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=f;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:i,s[1]=c;for(var u=2;u<r;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},74691:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),s=["components"],c={title:"rucio-admin"},a=void 0,u={unversionedId:"bin/rucio-admin",id:"bin/rucio-admin",title:"rucio-admin",description:"",source:"@site/../docs/bin/rucio-admin.md",sourceDirName:"bin",slug:"/bin/rucio-admin",permalink:"/documentation/bin/rucio-admin",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-admin.md",tags:[],version:"current",frontMatter:{title:"rucio-admin"},sidebar:"docs",previous:{title:"rucio-abacus-rse",permalink:"/documentation/bin/rucio-abacus-rse"},next:{title:"rucio-atropos",permalink:"/documentation/bin/rucio-atropos"}},d={},p=[],l={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'usage: rucio-admin [-h] [--version] [--verbose] [-H ADDRESS]\n                   [--auth-host ADDRESS] [-a ACCOUNT] [-S AUTH_STRATEGY]\n                   [-T TIMEOUT] [--vo VO] [-u USERNAME] [-pwd PASSWORD]\n                   [--oidc-user OIDC_USERNAME] [--oidc-password OIDC_PASSWORD]\n                   [--oidc-scope OIDC_SCOPE] [--oidc-audience OIDC_AUDIENCE]\n                   [--oidc-auto] [--oidc-polling]\n                   [--oidc-refresh-lifetime OIDC_REFRESH_LIFETIME]\n                   [--oidc-issuer OIDC_ISSUER] [--certificate CERTIFICATE]\n                   [--ca-certificate CA_CERTIFICATE]\n                   {data,account,identity,rse,scope,config,subscription,replicas}\n                   ...\n\npositional arguments:\n  {data,account,identity,rse,scope,config,subscription,replicas}\n    data                Import and export data\n    account             Account methods\n    identity            Identity methods\n    rse                 RSE (Rucio Storage Element) methods\n    scope               Scope methods\n    config              Configuration methods. The global configuration of\n                        data mangement system can by modified.\n    subscription        Subscription methods. The methods for automated and\n                        regular processing of some specific rules.\n    replicas            Replica methods\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --version             show program\'s version number and exit\n  --verbose, -v         Print more verbose output\n  -H ADDRESS, --host ADDRESS\n                        The Rucio API host\n  --auth-host ADDRESS   The Rucio Authentication host\n  -a ACCOUNT, --account ACCOUNT\n                        Rucio account to use\n  -S AUTH_STRATEGY, --auth-strategy AUTH_STRATEGY\n                        Authentication strategy (userpass, x509, ssh ...)\n  -T TIMEOUT, --timeout TIMEOUT\n                        Set all timeout values to SECONDS\n  --vo VO               VO to authenticate at. Only used in multi-VO mode.\n  -u USERNAME, --user USERNAME\n                        username\n  -pwd PASSWORD, --password PASSWORD\n                        password\n  --oidc-user OIDC_USERNAME\n                        OIDC username\n  --oidc-password OIDC_PASSWORD\n                        OIDC password\n  --oidc-scope OIDC_SCOPE\n                        Defines which (OIDC) information user will share with\n                        Rucio. Rucio requires at least -sc="openid profile".\n                        To request refresh token for Rucio, scope must include\n                        "openid offline_access" and there must be no active\n                        access token saved on the side of the currently used\n                        Rucio Client.\n  --oidc-audience OIDC_AUDIENCE\n                        Defines which audience are tokens requested for.\n  --oidc-auto           If not specified, username and password credentials\n                        are not required and users will be given a URL to use\n                        in their browser. If specified, the users explicitly\n                        trust Rucio with their IdP credentials.\n  --oidc-polling        If not specified, user will be asked to enter a code\n                        returned by the browser to the command line. If\n                        --polling is set, Rucio Client should get the token\n                        without any further interaction of the user. This\n                        option is active only if --auto is *not* specified.\n  --oidc-refresh-lifetime OIDC_REFRESH_LIFETIME\n                        Max lifetime in hours for this an access token will be\n                        refreshed by asynchronous Rucio daemon. If not\n                        specified, refresh will be stopped after 4 days. This\n                        option is effective only if --oidc-scope includes\n                        offline_access scope for a refresh token to be granted\n                        to Rucio.\n  --oidc-issuer OIDC_ISSUER\n                        Defines which Identity Provider is goign to be used.\n                        The issuer string must correspond to the keys\n                        configured in the /etc/idpsecrets.json auth server\n                        configuration file.\n  --certificate CERTIFICATE\n                        Client certificate file\n  --ca-certificate CA_CERTIFICATE\n                        CA certificate to verify peer against (SSL)\n')))}f.isMDXComponent=!0}}]);
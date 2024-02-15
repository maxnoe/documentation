"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[776],{95788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>d});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[f]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>f});var r=n(45072),o=n(95656),i=(n(11504),n(95788)),s=["components"],a={title:"rucio-conveyor-throttler"},c=void 0,u={unversionedId:"bin/rucio-conveyor-throttler",id:"bin/rucio-conveyor-throttler",title:"rucio-conveyor-throttler",description:"",source:"@site/../docs/bin/rucio-conveyor-throttler.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-throttler",permalink:"/documentation/bin/rucio-conveyor-throttler",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-throttler.md",tags:[],version:"current",frontMatter:{title:"rucio-conveyor-throttler"},sidebar:"docs",previous:{title:"rucio-conveyor-submitter",permalink:"/documentation/bin/rucio-conveyor-submitter"},next:{title:"rucio-dark-reaper",permalink:"/documentation/bin/rucio-dark-reaper"}},l={},f=[],p={toc:f},m="wrapper";function d(e){var t=e.components,n=(0,o.c)(e,s);return(0,i.yg)(m,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-conveyor-throttler [-h] [--run-once] [--sleep-time SLEEP_TIME]\n\nThe Conveyor-Throttler daemon is responsible for managing the internal queue of transfer requests. Depending on transfer limits of current and waiting transfers, it decides whether a transfer should be put in the queue or not.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n\nIn this example, the transfer limit will be one transfer which means that there should be only one active transfer at the time.\nThere will be two waiting transfer requests and no current active transfer.\nAfter running the daemon, there will be one transfer in the queue which can then be started.\n\nSetup the transfer limit::\n\n  $ python\n  from rucio.core.rse import set_rse_transfer_limits\n  set_rse_transfer_limits('MOCK2', 'User Subscriptions', max_transfers=1)\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,MOCK2' --value 1\n\nIf Rucio is running in multi-VO mode, then the RSE ID should be used in place of its name when setting the config::\n\n  $ rucio-admin rse info MOCK2\n  Settings:\n  =========\n    ...\n  Attributes:\n  ===========\n    ...\n  Protocols:\n  ==========\n    ...\n  Usage:\n  ======\n    ...\n    rse_id: 9c54c73cbd534450b2202a576f809f1f\n  $ rucio-admin config set --section throttler --option 'User Subscriptions,9c54c73cbd534450b2202a576f809f1f' --value 1\n\nUpload two files and create replication rules to the same RSE::\n\n  $ rucio upload --scope mock --rse MOCK --name file1 filename.txt\n  $ rucio add-rule mock:file 1 MOCK2\n  $ rucio upload --scope mock --rse MOCK --name file2 filename.txt\n  $ rucio add-rule mock:file2 1 MOCK2\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': WAITING, ...}\n\nTwo transfer requests with the state 'WAITING' got created.\n\nRun the daemon::\n\n  $ rucio-conveyor-throttler --run-once\n\nCheck transfer requests::\n\n    $ python\n    from rucio.db.sqla import session,models\n    [request.to_dict() for request in session.get_session().query(models.Request).all()]\n    # [{'state': WAITING, ...}, {'state': QUEUED, ...}\n\nFinally one of the transfer requests got put in the queue and can be picked up by the Conyevor-Submitter daemon to submit the transfer job to the transfertool.\nThe other request will have to wait until one of the queued requests is done or until the transfer limit changes.\n")))}d.isMDXComponent=!0}}]);
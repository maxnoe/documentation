"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},26459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"1.31.0"},l=void 0,c={unversionedId:"release-notes/1.31.0",id:"release-notes/1.31.0",title:"1.31.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.31.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.31.0",permalink:"/documentation/release-notes/1.31.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.31.0.md",tags:[],version:"current",frontMatter:{title:"1.31.0"}},u={},p=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"Helm chart changes",id:"helm-chart-changes",level:2},{value:"breaking change: Version <code>1.31.x</code> of <code>rucio-servers</code> helm chart is incompatible with old values",id:"breaking-change-version-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values",level:3},{value:"Highly recommended change: rework of the <code>additionalSecrets</code> section",id:"highly-recommended-change-rework-of-the-additionalsecrets-section",level:3},{value:"Recommended change: rework of ftsRenewal section",id:"recommended-change-rework-of-ftsrenewal-section",level:3},{value:"Your opinion is welcomed: deprecation of implicit secrets",id:"your-opinion-is-welcomed-deprecation-of-implicit-secrets",level:3},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},h="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.kt)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,i.kt)("p",null,"The following changes are necessary and are covered by the ",(0,i.kt)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Adding ",(0,i.kt)("inlineCode",{parentName:"li"},"REPLICAS_RSE_ID_TOMBSTONE_IDX")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"replicas")," table; ",(0,i.kt)("strong",{parentName:"li"},"CAUTION"),": If you add this index online, make sure the index is fully built before you deploy 1.31!")),(0,i.kt)("h2",{id:"important-changes"},"Important changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This release enables the usage of temporary tables per default. Previously, this was an opt-in, now it is an opt-out. If you notice any issues due to this change, you can turn the usage of temporary tables off via setting the ",(0,i.kt)("inlineCode",{parentName:"li"},"[core]use_temp_tables=False")," setting in the config table.")),(0,i.kt)("h2",{id:"helm-chart-changes"},"Helm chart changes"),(0,i.kt)("h3",{id:"breaking-change-version-131x-of-rucio-servers-helm-chart-is-incompatible-with-old-values"},"breaking change: Version ",(0,i.kt)("inlineCode",{parentName:"h3"},"1.31.x")," of ",(0,i.kt)("inlineCode",{parentName:"h3"},"rucio-servers")," helm chart is incompatible with old values"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What changes?"),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"rucio-server")," helm chart doesn't support anymore to deploy separate ",(0,i.kt)("inlineCode",{parentName:"p"},"api"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"trace")," servers. Only a single server deployment can be done by one helm release."),(0,i.kt)("p",null,"There are two possible cases.\n1) If your helm values don't set any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"authReplicaCount")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"traceReplicaCount")," (or set them to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"), the impact of this release will be very limited on you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- If you have any of the\n  `authService`\n  `traceService`\n  `authIngress`\n  `traceIngress`\n  `authServerResources`\n  `traceServerResources`\n  `authServerResources`\n  sections set in the values. They were already ignored anyway because of\n  `authReplicaCount` and `traceReplicaCount` not being set. You can safely\n  remove these sections\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After that, you'll have to substitute any of the following constructs: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"exposeErrorLogs:\n  server: ... \nuseSSL:\n  server: ...\nminReadySeconds:\n  server: ...\nreadinessProbe:\n  server: \n    initialDelaySeconds: ...\n    ...\nlivenessProbe:\n  server:\n    initialDelaySeconds: ...\n    ...\nserverType:\n  server: ...\nlogFormat:\n  server: ... \n")),(0,i.kt)("p",{parentName:"li"}," with "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"exposeErrorLogs: ... \nuseSSL: ...\nminReadySeconds: ...\nreadinessProbe:\n  initialDelaySeconds: ...\n  ...\nlivenessProbe:\n  initialDelaySeconds: ...\n  ...\nserverType: ...\nlogFormat: ...\n")),(0,i.kt)("p",{parentName:"li"}," if any of the sections have an ",(0,i.kt)("inlineCode",{parentName:"p"},"authServer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"traceServer")," attribute, it can be removed."))),(0,i.kt)("p",null,"2) If your values set ",(0,i.kt)("inlineCode",{parentName:"p"},"authReplicaCount")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"traceReplicaCount")," to any positive integer, you'll have to split your helm release into multiple helm releases."),(0,i.kt)("p",null,"   For example. An initial helm release with values.yaml like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"   replicaCount: 3\n   authReplicaCount: 2\n   traceReplicaCount: 1\n\n   service: \n      something\n   authService\n      anotherThing\n   traceService\n      thirdThing\n\n   useSSL:\n      server: false\n      authServer: true\n")),(0,i.kt)("p",null,"   Will have to become 3 different helm releases with following values: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"api servers:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"replicaCount: 3\nservice: \n   something\nuseSSL: false\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"auth servers:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'replicaCount: 2\nservice: \n   anotherThing\nuseSSL: true\nconfig:\n  api:\n    endpoints: "ping, auth"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"trace servers:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'replicaCount: 1\nservice: \n   thirdThing\nconfig:\n  api:\n    endpoints: "ping, traces, nongrid_traces"\n')))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why this change?"),"\nThe helm chart was difficult to maintain and had a lot of duplicate code to support an edge case for which a reasonable work-around exists. The behavior of the chart was also not consistent between ",(0,i.kt)("inlineCode",{parentName:"p"},"trace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," servers. Moreover, it didn't allow to set distinct parameters for those servers. Rather than trying to complicate things even further and fix inconsistent behavior, it was decided it's a better way forward to drop support for it."),(0,i.kt)("h3",{id:"highly-recommended-change-rework-of-the-additionalsecrets-section"},"Highly recommended change: rework of the ",(0,i.kt)("inlineCode",{parentName:"h3"},"additionalSecrets")," section"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What changes?"),"\nSupport for ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalSecrets")," will be dropped in a future major release. To be ready for that change, you can already migrate to the new format, for both ",(0,i.kt)("inlineCode",{parentName:"p"},"rucio-servers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rucio-daemons")," helm charts. The old format will still be supported throughout the whole 1.31, but will be dropped in 1.32."),(0,i.kt)("p",null,"Substituted all occurrences of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"additionalSecrets:\n  volumename:\n    secretName: ...\n    mountPath: ...\n    subPath: ...\n")),(0,i.kt)("p",null,"with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"secretMounts:\n  - secretName: ...\n    mountPath: ...\n    subPath: ...\n    volumeName: volumename  # volumeName is optional in most cases and will be inferred from secretName if ommited \n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why this change?"),"\nAvoiding user-input keys in the yaml object (here: the volume name) is more consistent with the overall kubernetes best practices. User input is always passed via yaml values, not via yaml keys. One of the consequences of this change is improved support for kubernetes kustomize. Secrets can now be referred via the ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldSpecs.path")," fields in kustomize."),(0,i.kt)("p",null,"Renaming ",(0,i.kt)("inlineCode",{parentName:"p"},"additionalSecrets")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"secretMount")," is a cosmetic change. The new name seems to better reflect the function of this section."),(0,i.kt)("h3",{id:"recommended-change-rework-of-ftsrenewal-section"},"Recommended change: rework of ftsRenewal section"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What changes?"),"\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"ftsRenewal")," sections in both ",(0,i.kt)("inlineCode",{parentName:"p"},"rucio-servers")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rucio-daemons")," helm charts suffered a major rework. The old format will still be supported throughout the whole 1.31 release line. There is no plan to drop support of the old format in 1.32, but we may decide to do so if the maintenance burden will be judged too high in the meantime. "),(0,i.kt)("p",null,"In the new format, secrets and env variable have to be specified explicitly, rather than being selected implicitly depending on the 'vo' attribute.\nSee the documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts/tree/master/charts/rucio-daemons#conveyor"},"https://github.com/rucio/helm-charts/tree/master/charts/rucio-daemons#conveyor")," and helm values: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts/blob/master/charts/rucio-daemons/values.yaml#L408"},"https://github.com/rucio/helm-charts/blob/master/charts/rucio-daemons/values.yaml#L408")," for example of new configuration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why this change?"),"\nTwo independent reasons:\n1) the new format introduced support for multi-vo.\n2) the source code of ftsRenewal cronjob became full of if/else to support vo-specific configurations. Configuring a new VO, with different requirements, was very difficult and required co-ordinated changes in multiple upstream rucio repositories. The new format is now much more flexible, but this comes at the price of increased verbosity of the configuration"),(0,i.kt)("h3",{id:"your-opinion-is-welcomed-deprecation-of-implicit-secrets"},"Your opinion is welcomed: deprecation of implicit secrets"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What changes?"),"\nNothing, yet. But we are evaluating the possibility to deprecate implicit secrets required by helm charts. If the community will not be against removing support for implicit secrets, the support will be gradually removed in future major releases."),(0,i.kt)("p",null,"If you want to participate and provide your opinion, you'll have to set ",(0,i.kt)("inlineCode",{parentName:"p"},"useDeprecatedImplicitSecrets: false")," in helm charts. This way, some secrets will not be automatically mounted into the containers. You'll have to explicitly mount corresponding secrets via helm values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"secretMounts:\n- secretFullName: releasename-rucio-x509up\n  mountPath: /opt/proxy\n- secretFullName: releasename-rucio-ca-bundle\n  mountPath: /opt/certs/\n\nautomatix:\n  extraSecretMounts:\n    - secretFullName: releasename-rucio-ca-bundle-reaper\n      mountPath: /etc/grid-security/certificates/\nreaper:\n  extraSecretMounts:\n    - secretFullName: releasename-rucio-ca-bundle-reaper\n      mountPath: /etc/grid-security/certificates/\ndarkReaper:\n  extraSecretMounts:\n    - secretFullName: releasename-rucio-ca-bundle-reaper\n      mountPath: /etc/grid-security/certificates/\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Why this change?"),"\nWe consider that explicit declaration of dependencies in helm charts is a better practice. Requiring secrets with specific names to be created inside the cluster before running the helm chart is very confusing to new users. "),(0,i.kt)("p",null,"This change also allows you to pick a different name for the secrets and share them between multiple helm releases."),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metadata: Merge list_dids and list_dids_extended methods ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5448"},"#5448")),(0,i.kt)("li",{parentName:"ul"},"Recovery: Allow for file recovery policies based on scope ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5928"},"#5928"))),(0,i.kt)("h3",{id:"enhancements"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Core & Internals: Unicode support along all Core/API/REST API ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4045"},"#4045")),(0,i.kt)("li",{parentName:"ul"},"Core & Internals: switch ON temporary tables workflows by default ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6084"},"#6084")),(0,i.kt)("li",{parentName:"ul"},"Documentation: Fix broken Rest API docs view ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4992"},"#4992")),(0,i.kt)("li",{parentName:"ul"},"Messaging: Migrate to hermes-2 as default ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6089"},"#6089")),(0,i.kt)("li",{parentName:"ul"},"Use of bulk_insert_mappings in reaper causes issue with Hermes : Closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6152"},"#6152")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6153"},"#6153")),(0,i.kt)("li",{parentName:"ul"},"Release management: update dependencies for the 1.31 release ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6110"},"#6110")),(0,i.kt)("li",{parentName:"ul"},"Transfers: Remove full_mode switch from conveyor-receiver ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5453"},"#5453"))),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Messaging: Use of bulk_insert_mappings in reaper causes issue with Hermes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6152"},"#6152")),(0,i.kt)("li",{parentName:"ul"},'REST & API: create_did_sample broken for DIDs with "/" ',(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5608"},"#5608")),(0,i.kt)("li",{parentName:"ul"},"Subscriptions: The transmogrifier updates the subscription history table everytime it runs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6109"},"#6109"))),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients: Use GFAL\u2019s create_parent transfer parameter ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2973"},"#2973"))))}d.isMDXComponent=!0}}]);
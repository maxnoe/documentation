"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[283],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>m});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function _(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),C=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=C(e.components);return t.createElement(o.Provider,{value:a},e.children)},p="mdxType",O={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},E=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=_(e,["components","mdxType","originalType","parentName"]),p=C(n),E=r,m=p["".concat(o,".").concat(E)]||p[E]||O[E]||l;return n?t.createElement(m,i(i({ref:a},u),{},{components:n})):t.createElement(m,i({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=E;var _={};for(var o in a)hasOwnProperty.call(a,o)&&(_[o]=a[o]);_.originalType=e,_[p]="string"==typeof e?e:r,i[1]=_;for(var C=2;C<l;C++)i[C]=n[C];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}E.displayName="MDXCreateElement"},8094:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>_,metadata:()=>C,toc:()=>p});var t=n(58168),r=n(98587),l=(n(96540),n(15680)),i=["components"],_={id:"installing_daemons",title:"Installing Rucio Daemons"},o=void 0,C={unversionedId:"operator/installing_daemons",id:"operator/installing_daemons",title:"Installing Rucio Daemons",description:"Prerequisites",source:"@site/../docs/operator/installing_daemons.md",sourceDirName:"operator",slug:"/operator/installing_daemons",permalink:"/documentation/operator/installing_daemons",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/installing_daemons.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1709052120,formattedLastUpdatedAt:"Feb 27, 2024",frontMatter:{id:"installing_daemons",title:"Installing Rucio Daemons"},sidebar:"docs",previous:{title:"Installing Rucio Server",permalink:"/documentation/operator/installing_server"},next:{title:"Configuration",permalink:"/documentation/operator/configuration"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install via pip",id:"install-via-pip",level:2},{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"RUCIO_DAEMON",id:"rucio_daemon",level:3},{value:"RUCIO_DAEMON_ARGS",id:"rucio_daemon_args",level:3},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",level:3},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",level:3}],O={toc:p},E="wrapper";function m(e){var a=e.components,n=(0,r.A)(e,i);return(0,l.yg)(E,(0,t.A)({},O,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.yg)("p",null,"The Rucio daemons run on Python 2.7, 3.6 and 3.7 on any Unix-like\nplatform."),(0,l.yg)("h2",{id:"install-via-pip"},"Install via pip"),(0,l.yg)("p",null,"Heads up: We recommend to use the docker-based install (see next\nsection) as it will configure many things for you automatically. Only\nuse the pip-based install if you have a good reason and know how to\nconfigure your web service manually:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),(0,l.yg)("p",null,"This will pull the latest release from\n",(0,l.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},(0,l.yg)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},(0,l.yg)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),(0,l.yg)("h2",{id:"install-via-docker"},"Install via Docker"),(0,l.yg)("p",null,"This image provides the Rucio daemons. Each daemon has to be run in a\nseparate container. It supports MySQL, PostgreSQL, Oracle, and SQLite as\ndatabase backends."),(0,l.yg)("p",null,"This image expects that there is an already initialised Rucio DB. To\nstart a simple ",(0,l.yg)("inlineCode",{parentName:"p"},"judge-cleaner")," daemon using a database on\n",(0,l.yg)("inlineCode",{parentName:"p"},"mysql.db")," without any additional parameters just run this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-judge-cleaner \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n')),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_DAEMON")," environment variable gives the name of\nthe rucio daemon."),(0,l.yg)("p",null,"Rucio can be configured fully using environment variables like\n",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". If you want to instead use a\ncomplete rucio.cfg it can also be mounted. This will then ignore the\n",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG")," environment variables:"),(0,l.yg)("p",null,"The rucio.cfg is used to configure the database backend and the daemons:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n")),(0,l.yg)("p",null,"By default the daemon logs are written to stdout and stderr if you want\nto write to a file you can use ",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," like\nthis:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/rucio -e RUCIO_DAEMON=judge-cleaner \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  rucio/rucio-daemons\n")),(0,l.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,l.yg)("p",null,"As shown in the examples above the rucio-daemon image can be configured\nusing environment variables that are passed with ","[docker\nrun]","{.title-ref}. Below is a list of all available variables and their\nbehaviour:"),(0,l.yg)("h3",{id:"rucio_daemon"},"RUCIO_DAEMON"),(0,l.yg)("p",null,"This variable is mandatory and it specifies the name of the daemon,\ne.g., ",(0,l.yg)("inlineCode",{parentName:"p"},"hermes"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"kronos"),",\n",(0,l.yg)("inlineCode",{parentName:"p"},"judge-evaluator"),", etc."),(0,l.yg)("h3",{id:"rucio_daemon_args"},"RUCIO_DAEMON_ARGS"),(0,l.yg)("p",null,"Any additional command line parameter can be specified here, e.g.,\n",(0,l.yg)("inlineCode",{parentName:"p"},"\\--run-once")," This field is optional."),(0,l.yg)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),(0,l.yg)("p",null,"By default, the log output of the daemon is written to stdout and\nstderr. If you set this variable to ",(0,l.yg)("inlineCode",{parentName:"p"},"True")," the output will\nbe written to ",(0,l.yg)("inlineCode",{parentName:"p"},"access_log")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"error_log")," under\n",(0,l.yg)("inlineCode",{parentName:"p"},"/var/log/rucio")),(0,l.yg)("h3",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),(0,l.yg)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the\nconfiguration file prefixed by ",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the\n",(0,l.yg)("inlineCode",{parentName:"p"},"default")," value in the ",(0,l.yg)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",(0,l.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available\nenvironment variables are:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_ACCOUNTS_SPECIAL_ACCOUNTS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RECYCLE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERPASSWORD"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SITES"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SLEEP_TIME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_DATASET_LIFETIME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SET_METADATA"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_RESULTS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_CACHE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SCHEME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_TRANSFERTOOL"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSHOSTS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACERT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USERCERT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACHE_TIME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USE_DETERMINISTIC_ID"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_POLL_TIMEOUT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SUBMIT_TIMEOUT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_BRING_ONLINE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_QUEUE_MODE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USING_MEMCACHE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSMONHOSTS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_KEY_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_CERT_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_DESTINATION"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_BROKERS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_VONAME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USERNAME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PASSWORD"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_NONSSL_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USE_SSL"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_KEY_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_CERT_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_DESTINATION"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_BROKERS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_VONAME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_FROM"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_TEST"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_BROKERS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_KEY_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_CERT_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_QUEUE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_PREFETCH_SIZE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_CHUNKSIZE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SUBSCRIPTION_ID"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_USE_SSL"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_RECONNECT_ATTEMPTS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_EXCLUDED_USRDNS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_USERNAME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PASSWORD"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_DATASET_WAIT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_PORT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_KEY_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_CERT_FILE"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_DESTINATION"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_BROKERS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_VONAME"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_ACCOUNT"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_GCS"),(0,l.yg)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_SIGNATURE_LIFETIME")))}m.isMDXComponent=!0}}]);
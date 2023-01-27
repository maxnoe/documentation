"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||h[p]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},83233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"rucio-judge-evaluator"},s=void 0,l={unversionedId:"bin/rucio-judge-evaluator",id:"bin/rucio-judge-evaluator",title:"rucio-judge-evaluator",description:"",source:"@site/../docs/bin/rucio-judge-evaluator.md",sourceDirName:"bin",slug:"/bin/rucio-judge-evaluator",permalink:"/documentation/bin/rucio-judge-evaluator",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-evaluator.md",tags:[],version:"current",frontMatter:{title:"rucio-judge-evaluator"},sidebar:"docs",previous:{title:"rucio-judge-cleaner",permalink:"/documentation/bin/rucio-judge-cleaner"},next:{title:"rucio-judge-injector",permalink:"/documentation/bin/rucio-judge-injector"}},d={},u=[],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: rucio-judge-evaluator [-h] [--run-once] [--threads THREADS]\n                             [--sleep-time SLEEP_TIME] [--did-limit DID_LIMIT]\n\nThe Judge-Evaluator daemon is responsible for execution and reevaluation of replication rules. First it checks if there are DIDs that have changed content e.g. attached or detached DIDs.In case of a new attachment, the replication rule for the dataset has to be applied to the attached DID, too. If the attached DID has already a replica on a RSE that satisfies the RSE expression of the rule, then the lock counter of that replica gets increased. If it does not have any replica satisfying the rule, then a new replica has to be created. In case of a new detachment, the replica has to be removed or the lock counter of the replica has to be decreased, depending on which RSE the replica exist. If the DID is a dataset, its properties like size and length also get updated and also an entry is saved to mark a change for possible collection replicas which have to be updated by another daemon.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n  --did-limit DID_LIMIT\n                        Maximum number of dids to evaluate\n\nSame RSEs:\nCreate a dataset with a replication rule and upload a file to the same RSE. Then attach it to the dataset::\n\n  $ rucio add-dataset mock:dataset\n  $ rucio add-rule mock:dataset 1 MOCK\n  $ rucio upload --scope mock --rse MOCK --name file filename.txt\n  $ rucio attach mock:dataset mock:file\n\nCheck the rules and locks for the dataset and the replica::\n\n  $ rucio list-rules mock:dataset\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  e95941c165d54e38b6e46990de06d3d4  root       mock:dataset  OK[0/0/0]               MOCK                     1                   2018-12-03 12:35:43\n\n  $ rucio list-rule mock:file\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  cfec9a944cdd4543b7267a34a2584631  root       mock:file     OK[1/0/0]               MOCK                     1                   2018-12-11 08:29:49\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 1\n\nThere is one rule for the dataset which we created before and one lock and one rule for the replica which got created with the upload of the file.\n\nRun the daemon::\n\n  $ rucio-judge-evaluator --run-once\n\nCheck the locks for the replica again::\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 2\n\nThe replica of the DID mock:file has now 2 locks on RSE MOCK, because it is protected by the replication rule of the dataset and the first replication rule\n\nDifferent RSEs:\nCreate a dataset with a replication rule and upload a file to another RSE. Then attach it to the dataset::\n\n  $ rucio add-dataset mock:dataset\n  $ rucio add-rule mock:dataset 1 MOCK\n  $ rucio upload --scope mock --rse MOCK2 --name file filename.txt\n  $ rucio attach mock:dataset mock:file\n\nCheck the rules and locks for the dataset and the replica::\n\n  $ rucio list-rules mock:dataset\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  e95941c165d54e38b6e46990de06d3d4  root       mock:dataset  OK[0/0/0]               MOCK                     1                   2018-12-03 12:35:43\n\n  $ rucio list-rule mock:file\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  cfec9a944cdd4543b7267a34a2584631  root       mock:file     OK[1/0/0]               MOCK2                    1                   2018-12-11 08:29:49\n\n  $ python\n  from rucio.db.sqla import session, models\n  from rucio.core.rse import get_rse_id\n  rse_id = get_rse_id('MOCK2')\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock', rse_id=rse_id).first().lock_cnt // 1\n\nThere is one rule for the dataset which we created before and one lock and one rule for the replica which got created with the upload of the file.\n\nRun the daemon::\n\n  $ rucio-judge-evaluator --run-once\n\nCheck the replicas for the DID mock:file::\n\n  $ python\n  from rucio.db.sqla import session, models\n  session.get_session().query(models.RSEFileAssociation).filter_by(name='file', scope='mock').first()\n  // [{'name': 'file','lock_cnt': 1, 'state': COPYING, 'scope': 'mock', 'rse_id': 'f81f366593754c01b0c340fa5ea0ab90'},\n  //  {'scope': 'mock', 'rse_id': '1330d5daee37474c88ba888101d7b859', 'name': 'file', 'state': AVAIABLE, 'lock_cnt': 1}]\n\nThe DID mock:file has now two replicas with one lock each.\nAs the file replica is attached to the dataset and the rule for the dataset specifies another RSE MOCK instead of the upload RSE, it has to be replicated to this RSE.\nTherefor a second replica in state COPYING got created on RSE MOCK.\n    \n")))}p.isMDXComponent=!0}}]);
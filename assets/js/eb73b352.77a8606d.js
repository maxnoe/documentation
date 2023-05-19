"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>S});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,S=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(S,o(o({ref:t},c),{},{components:n})):r.createElement(S,o({ref:t},c))}));function S(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>S,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"RSE Expressions"},i=void 0,p={unversionedId:"started/concepts/rse_expressions",id:"started/concepts/rse_expressions",title:"RSE Expressions",description:"An RSE Expression allows to select a set of RSEs, for example to",source:"@site/../docs/started/concepts/rse_expressions.md",sourceDirName:"started/concepts",slug:"/started/concepts/rse_expressions",permalink:"/documentation/started/concepts/rse_expressions",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rse_expressions.md",tags:[],version:"current",lastUpdatedBy:"James Perry",lastUpdatedAt:1684505496,formattedLastUpdatedAt:"May 19, 2023",frontMatter:{title:"RSE Expressions"},sidebar:"docs",previous:{title:"Replication rule examples",permalink:"/documentation/started/concepts/replication_rules_examples"},next:{title:"Accounting and quota",permalink:"/documentation/started/concepts/accounting_and_quota"}},c={},u=[{value:"Simple RSE Expressions",id:"simple-rse-expressions",level:2},{value:"Operators",id:"operators",level:2},{value:"Composing RSE Expressions",id:"composing-rse-expressions",level:2}],m={toc:u},d="wrapper";function S(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An RSE Expression allows to select a set of RSEs, for example to\ncreate replication rules. The RSE Expression consists of one or more\nterms. A term can be a single RSE name or a condition over the RSE\nattributes. The RSE Expression Parser resolves each term to a set of\nRSEs. Terms can be connected by operators to form more complex\nexpressions. For example, users can write RSE expressions to address all\nTier 2 RSEs, all the RSEs in certain cloud, all Tier 2 RSEs not in\ncertain clouds, etc."),(0,a.kt)("h2",{id:"simple-rse-expressions"},"Simple RSE Expressions"),(0,a.kt)("p",null,"Rucio allows to test RSE Expressions, using the command list-rses.\nThe most simple RSE Expression is the one containing the name of a\nparticular RSE."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The following expression returns all RSEs:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --rses '*'\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK LIP-COIMBRA_LOCALGROUPDISK\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Whereas the next expression only returns a set containing a single\nRSE:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --rses\n\nEELA-UNLP_SCRATCHDISK\nELA-UNLP_SCRATCHDISK\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Another simple RSE Expression allows to list the set of all the RSEs\nin a particular site:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --rses site=EELA-UNLP\n\nEELA-UNLP_PRODDISK\nEELA-UNLP_DATADISK\nEELA-UNLP_SCRATCHDISK\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Or all the RSEs who's type is ",(0,a.kt)("inlineCode",{parentName:"p"},"SCRATCHDISK"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --rses type=SCRATCHDISK\n\nUNI-SIEGEN-HEP_SCRATCHDISK\nNCG-INGRID-PT_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nINFN-T1_SCRATCHDISK\nFMPHI-UNIBA_SCRATCHDISK\nINFN-FRASCATI_SCRATCHDISK\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Or all the Spanish sites:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0058:~$ rucio list-rses --rses SPAINSITES\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK\nLIP-COIMBRA_LOCALGROUPDISK\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Also numerical comparisons with ",(0,a.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,a.kt)("inlineCode",{parentName:"p"},">")," are possible:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'jbogadog@lxplus0058:~$ rucio list-rses --rses "freespace>3000"\n\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\n')))),(0,a.kt)("p",null,"Note that if the RSE Expression returns an empty set, Rucio returns an error as\nan RSE Expression must resolve to ",(0,a.kt)("strong",{parentName:"p"},"at least one")," RSE. Thus, an error does not\nnecessarily mean that the syntax of the expression is wrong, it might just\nresult into an empty list."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"3.")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"4."),", the RSE Expression refers to an attribute in the RSE that must\nbe equal to a given value to match the expression. While in ",(0,a.kt)("inlineCode",{parentName:"p"},"2.")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5."),", the\nexpression matches an RSE if the attribute is True. In ",(0,a.kt)("inlineCode",{parentName:"p"},"6.")," a numerical term is\nused to resolve all RSEs with more than 3000 TB free space. It is possible to\nsee the list of attributes for a particular RSE with Rucio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rse-attributes EELA-UNLP_SCRATCHDISK\n\nftstesting: https://fts3-pilot.cern.ch:8446\n\nALL: True\nESTIER2S: True\nphysgroup: None\nspacetoken: ATLASSCRATCHDISK\n\nfts: https://fts3.cern.ch:8446,https://lcgfts3.gridpp.rl.ac.uk:8446,https://fts.usatlas.bnl.gov:8446\n\nsite: EELA-UNLP\nEELA-UNLP_SCRATCHDISK: True\ndatapolicyt0disk: False\ncloud: ES\nSPAINSITES: True\ndatapolicyt0taskoutput: False\n\nfts_testing: https://fts3-pilot.cern.ch:8446\ntier: 3\ndatapolicyt0tape: False\ntype: SCRATCHDISK\nistape: False\n")),(0,a.kt)("p",null,"Most of the RSEs share the same set of attributes, and is possible to create RSE\nExpressions based on all of them."),(0,a.kt)("h2",{id:"operators"},"Operators"),(0,a.kt)("p",null,"Operators are used to connect terms in order to get more complex RSE\nExpressions/terms. The syntactic functionality of the Rucio RSE Expressions\nParser allows the basic operations defined in mathematical set theory, Union,\nIntersection and Complement. Using an operator on two sets of RSEs will\nconstruct a new set based on the given sets."),(0,a.kt)("p",null,"The symbols A and B in this table stand for a term."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:null},"Interpretation"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A","|","B"),(0,a.kt)("td",{parentName:"tr",align:null},"UNION"),(0,a.kt)("td",{parentName:"tr",align:null},"A union B"),(0,a.kt)("td",{parentName:"tr",align:null},"tier=1","|","tier=2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A&B"),(0,a.kt)("td",{parentName:"tr",align:null},"INTERSECT"),(0,a.kt)("td",{parentName:"tr",align:null},"A intersect B"),(0,a.kt)("td",{parentName:"tr",align:null},"tier=1&country=us")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A","\\","B"),(0,a.kt)("td",{parentName:"tr",align:null},"COMPLEMENT"),(0,a.kt)("td",{parentName:"tr",align:null},"A complement B"),(0,a.kt)("td",{parentName:"tr",align:null},"cloud=ES","\\","type=SCRATCHDISK")))),(0,a.kt)("h2",{id:"composing-rse-expressions"},"Composing RSE Expressions"),(0,a.kt)("p",null,"Using the operators described above, it's possible to create expressions to\nselect whatever RSE you need to put your data in. Use the following list of\nexamples to build your own RSE Expressions."),(0,a.kt)("p",null,"All Tier 2 sites in DE cloud:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=2&cloud=DE'\nPRAGUELCG2_PPSLOCALGROUPDISK\nFMPHI-UNIBA_LOCALGROUPDISK\n...\nUNI-FREIBURG_DATADISK\nDESY-HH_PRODDISK\n")),(0,a.kt)("p",null,"Note the use of the single quotes. Single quotes are needed to avoid the shell\ninterpret the ",(0,a.kt)("inlineCode",{parentName:"p"},"&"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\|")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"\\\\")," as commands."),(0,a.kt)("p",null,"All tier 1 but not the ones in country=us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=us'\n\nINFN-T1_MCTAPE\nBNL-OSG2_DATATAPE\nBNL-OSG2_DDMTEST\nNIKHEF-ELPROD_PHYS-SUSY\n")),(0,a.kt)("p",null,"However, take care of the subtle differences. While the first expression exclude\nUnited States' sites, the second doesn't:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=us'|wc -l\n115\n\njbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=US'|wc -l\n117\n")),(0,a.kt)("p",null,"The filters are processed from left to right. Is possible to use parenthesis to\nforce the order of operation. See the following example to get all the\n",(0,a.kt)("inlineCode",{parentName:"p"},"SCRATCHDISK"),"s in IT or FR clouds:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"jbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'cloud=IT|cloud=FR&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  '(cloud=IT|cloud=FR)&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'type=SCRATCHDISK&(cloud=IT|cloud=FR)' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'type=SCRATCHDISK&cloud=IT|cloud=FR' | wc -l\n92\n")),(0,a.kt)("p",null,"While the first three operations are equivalent, the last return sites in cloud\n",(0,a.kt)("inlineCode",{parentName:"p"},"FR")," but not only the ",(0,a.kt)("inlineCode",{parentName:"p"},"SCRATCHDISK"),"s but the ",(0,a.kt)("inlineCode",{parentName:"p"},"GROUPDISK"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"DATADISK"),"s too,\namong other types."))}S.isMDXComponent=!0}}]);
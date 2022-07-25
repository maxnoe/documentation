(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(433)),r=["components"],s={id:"multi-vo-rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VI Rucio"},c={unversionedId:"multi-vo-rucio",id:"multi-vo-rucio",isDocsHomePage:!1,title:"Multi-VO Rucio",description:"This section provides an overview of using Rucio for multiple virtual",source:"@site/../docs/multi_vo_rucio.md",sourceDirName:".",slug:"/multi-vo-rucio",permalink:"/documentation/multi-vo-rucio",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/multi_vo_rucio.md",version:"current",lastUpdatedBy:"Rizart Dona",lastUpdatedAt:1658758291,formattedLastUpdatedAt:"7/25/2022",sidebar_label:"Multi-VI Rucio",frontMatter:{id:"multi-vo-rucio",title:"Multi-VO Rucio",sidebar_label:"Multi-VI Rucio"}},l=[{value:"Changes to the Client",id:"changes-to-the-client",children:[]},{value:"Changes to the rucio.cfg on the Server and Daemons",id:"changes-to-the-ruciocfg-on-the-server-and-daemons",children:[]},{value:"Role of the super_root",id:"role-of-the-super_root",children:[]},{value:"Access of super_root Functions",id:"access-of-super_root-functions",children:[]},{value:"Starting a M-VO Instance",id:"starting-a-m-vo-instance",children:[]},{value:"Creating VOs",id:"creating-vos",children:[]},{value:"Managing VOs",id:"managing-vos",children:[]},{value:"Long VO Name Mapping",id:"long-vo-name-mapping",children:[]},{value:"Converting Existing Instances",id:"converting-existing-instances",children:[]},{value:"Practicalities",id:"practicalities",children:[]},{value:"S-VO to M-VO",id:"s-vo-to-m-vo",children:[]},{value:"M-VO to S-VO",id:"m-vo-to-s-vo",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,'This section provides an overview of using Rucio for multiple virtual\norganizations (VOs) on a single instance with the "Multi-VO" feature. Rather\nthan each VO having to set up an entire instance by themselves, they can share\nthe same server and database which are run by a central "super_root", and\ncontinue to use Rucio as they would a normal or "Single-VO" instance. Their\naccounts, scopes and RSEs are associated with their VO which ensures all rules\nand replicas are kept separate from other VOs using the instance.'),Object(i.b)("h2",{id:"changes-to-the-client"},"Changes to the Client"),Object(i.b)("p",null,"At the CLI and client level there are few changes to how Rucio is used. These\ncases, such as optional arguments for VO, are covered in documentation for the\naffected function. The main change is the addition of two options in the\n",Object(i.b)("inlineCode",{parentName:"p"},"rucio.cfg")," file, one to flag that the instance is being run in M-VO mode and\nanother to specify the VO the users belong to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"[common]\n...\nmulti_vo = True\n\n[client]\n...\nvo = abc\n")),Object(i.b)("h2",{id:"changes-to-the-ruciocfg-on-the-server-and-daemons"},"Changes to the rucio.cfg on the Server and Daemons"),Object(i.b)("p",null,"Similar settings need to be changed on the server and daemon rucio.cfg files as\nwell as on the client end.  For the server ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," should also be set in the\nconfig file.  For the daemons another section is needed to be added, this is to\nmap each VO to its own proxy certificate. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cfg"},"[vo_certs]\n...\n<3 char vo name> = <path/to/vo/proxy>\n")),Object(i.b)("p",null,"It is recommended that the proxies are placed in /tmp/x509up_<VO",">",", and the\ncertificates and keys are placed in /opt/rucio/certs/<VO",">","/ and\n/opt/rucio/keys/<VO",">","/ respectively."),Object(i.b)("p",null,"However, ",Object(i.b)("inlineCode",{parentName:"p"},"vo")," should not be set for the server or the daemons as these parts of\nRucio are not associated with a single VO. If ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is not set, or set to\nFalse, then Rucio will operate normally."),Object(i.b)("p",null,"Similar settings need to be changed on the server and daemon rucio.cfg files as\nwell as on the client end.  For the server ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," should also be set in the\nconfig file.  For the daemons another section is needed to be added, this is to\nmap each VO to its own proxy certificate. Rucio uses this information when\nsubmitting and polling transfers to use the correct certificates.  '''cfg\n","[vo_certs]"," ...  <3 char vo name> = <path/to/vo/proxy> ''' However, ",Object(i.b)("inlineCode",{parentName:"p"},"vo")," should\nnot be set for the server or the daemons as these parts of Rucio are not\nassociated with a single VO. If ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is not set, or set to False, then\nRucio will operate normally."),Object(i.b)("h2",{id:"role-of-the-super_root"},"Role of the super_root"),Object(i.b)("p",null,"While root accounts still retain their administrative role within a VO, for\nexample adding RSEs and accounts, functions relating to the creation and\nmanagement of VOs is handled by the super_root account, a concept introduced\nwith M-VO Rucio. It is worth noting that the super_root account ",Object(i.b)("strong",{parentName:"p"},"cannot")," be\nused to perform individual VO administration; the roles of super_root and root\nare distinct."),Object(i.b)("h2",{id:"access-of-super_root-functions"},"Access of super_root Functions"),Object(i.b)("p",null,"As the super_root functions aren't intended for use by normal users of admins,\nthey do not have an implementation in the client or CLI. They can be accessed\nfrom the core or the :ref:",Object(i.b)("inlineCode",{parentName:"p"},"vo-rest-api"),", however the latter will require the VO\nendpoint to be added to the aliases file used when setting up the server as it\nis disabled by default."),Object(i.b)("h2",{id:"starting-a-m-vo-instance"},"Starting a M-VO Instance"),Object(i.b)("p",null,"When bootstrapping the database as part of the Rucio installation, if M-VO is\nenabled in ",Object(i.b)("inlineCode",{parentName:"p"},"rucio.cfg"),' then the super_root account is created automatically. The\ndefault VO "def" is also created, and the super_root acccount is associated with\nit. The identity used to access this account can be managed in the usual way.'),Object(i.b)("h2",{id:"creating-vos"},"Creating VOs"),Object(i.b)("p",null,"When creating a new VO with the ",Object(i.b)("inlineCode",{parentName:"p"},"add_vo")," function you need to specify the three\ndigit identifier for the new VO, which can contain letters and numbers. This\nmust be unique for the instance. A more complete description can also be\noptionally included, along with an email to use for the root of this new VO. In\naddition to creating the new VO, a root account is also created for this VO, and\nhas all identities associated with super_root added to it. The identities for\nthe new root can then be configured as usual."),Object(i.b)("h2",{id:"managing-vos"},"Managing VOs"),Object(i.b)("p",null,"In addition to creating VOs, the description and email for a VO can be altered\nusing ",Object(i.b)("inlineCode",{parentName:"p"},"update_vo"),". If the root user of a VO loses access to their account, the\nsuper_root can associate a new identity with it using\n",Object(i.b)("inlineCode",{parentName:"p"},"recover_vo_root_identity"),". Finally, a list of current VOs and their\ndescriptions is accessible via ",Object(i.b)("inlineCode",{parentName:"p"},"list_vos"),"."),Object(i.b)("h2",{id:"long-vo-name-mapping"},"Long VO Name Mapping"),Object(i.b)("p",null,"The rucio database stores all VO references as a single three-character tag for\nperformance reasons. It's possible to create aliases for these tag to allow\nusers/clients to specify long VO names when getting a token (and modifying VOs)\nand have these converted to the internal tag automatically. Long VO names should\nonly use the basic DNS name character set of alphanumber charaters, hyphen and\ndot (a-zA-Z0-9-.). The alias mappings are stored in the vo-map section of the\nconfigs database table and can be edited via the usual methods for modifying\nthis config. The option name is the long VO name and the value is the short\nname; for example these can be added using the CLI:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"rucio-admin config set --section vo-map --option my.long.vo --value mlv\nrucio-admin config set --section vo-map --option another.vo --value ant\n")),Object(i.b)("p",null,"You may specify more than one alias for a VO if required."),Object(i.b)("h2",{id:"converting-existing-instances"},"Converting Existing Instances"),Object(i.b)("p",null,"As opposed to starting a new M-VO instance from scratch, it may be desirable to\nconvert the database for an existing (S-VO) Rucio instance into a M-VO instance\nso that additional VOs can be added without disrupting the original VO or\nneeding to create a second instance. Conversely, one VO within a M-VO instance\nmay grow to the point where it needs its own dedicated instance, and so\nconverting data from M-VO to S-VO may also be desirable. These operations can be\nperformed using utility functions included with Rucio."),Object(i.b)("p",null,"As mentioned above, in order to configure a M-VO instance of Rucio only the\nconfig file needs to change. However for an existing instance any entries\nalready in the database will not be associated with a VO (or associated with\ntheir old one if previously in M-VO mode). In order to change these, direct\noperations on the database are required. These commands are generated using\nSQLAlchemy, and can either be run directly on the database or printed out and\nrun manually."),Object(i.b)("h2",{id:"practicalities"},"Practicalities"),Object(i.b)("p",null,'Before attempting to convert existing data, it is recommended that a backup of\nthe database is taken in case an issue arises. Furthermore, of the databases\nsupported by Rucio, only PostgreSQL has been tested on real data. Based on this\ntest (which was performed on a machine with 64GB memory and four Intel Xeon\nE5-2430 v2), the tables with 2 columns that needed updating were converted at a\nrate of 5GB of data per hour. However many tables do not need any changes, so\nthe process will likely be faster than this in practice. Another approach to\nspeed up the conversion is to skip the "history" tables, as these can be very\nlarge. Unlike other tables these do not have foreign key constraints set, and so\ndo not need to be updated in order to use the database. While the history will\nbe inaccessible from the new VO, it will still exist in the database and could\nbe accessed using the ',Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account if needed."),Object(i.b)("h2",{id:"s-vo-to-m-vo"},"S-VO to M-VO"),Object(i.b)("p",null,"Before starting, ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," in the config file.\nThe SQL commands needed to convert the database involve dropping foreign key\nconstraints that affect accounts/scopes, then altering the relevant columns,\nbefore re-adding the constraints. The 3 character identifier for the VO, a full\ndescription and an admin email should be provided:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ tools/convert_database_vo.py convert_to_mvo new \"New VO for existing data\" rucio@email.com\nALTER TABLE account_limits DROP CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\";\n...\nUPDATE account_limits SET account=(split_part(account_limits.account, '@', 1) \\\n  || CAST('@new' AS CHAR(4))) WHERE \\\n    split_part(account_limits.account, '@', 2) = '';\n...\nALTER TABLE account_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" \\\n  FOREIGN KEY(account) REFERENCES accounts (account);\n")),Object(i.b)("p",null,"In this example, no changes will be made to the database by running the script,\nand so the SQL will need to be run manually. After running the commands, a\n",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account should be setup to allow administrative functions like\nadding more VOs:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ python\n>>> from rucio.db.sqla.util import create_root_account\n>>> create_root_account(create_counters=False)\n")),Object(i.b)("p",null,"Alternatively by specifying ",Object(i.b)("inlineCode",{parentName:"p"},"--commit_changes")," the script will attempt to\nmodify the database as it runs, however this requires the account used by the\nRucio instance to access the database to be the owner of the the tables. In\nthis case, the ",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account can be added as part of the script by\npassing the argument ",Object(i.b)("inlineCode",{parentName:"p"},"--create_super_root"),". If there is an error during the\nconversion, then none of the changes will be committed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ tools/convert_database_vo.py --commit_changes \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com \\\n  --create_super_root\n')),Object(i.b)("p",null,"Finally, there is the option to skip the (potentially very large) tables of\nhistorical data using ",Object(i.b)("inlineCode",{parentName:"p"},"--skip_history"),". In this case the commands to alter those\ntables are omitted:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ tools/convert_database_vo.py --skip_history \\\n  convert_to_mvo new "New VO for existing data" rucio@email.com\n')),Object(i.b)("h2",{id:"m-vo-to-s-vo"},"M-VO to S-VO"),Object(i.b)("p",null,"Before starting, ensure that ",Object(i.b)("inlineCode",{parentName:"p"},"multi_vo")," is set to ",Object(i.b)("inlineCode",{parentName:"p"},"True")," in the config file\n(this option can be removed after completing the conversion). The first stage of\nthe conversion is the same as before, dropping foreign key constraints and\nrenaming the entries that were associated with the old VO. The name of this VO\nis the only required argument: ",Object(i.b)("inlineCode",{parentName:"p"},"bash $ tools/convert_database_vo.py\nconvert_to_svo old ALTER TABLE account_limits DROP CONSTRAINT\n\"ACCOUNT_LIMITS_ACCOUNT_FK\"; ...  UPDATE account_limits SET\naccount=split_part(account_limits.account, '@', 1) WHERE\nsplit_part(account_limits.account, '@', 2) = 'old'; ...  ALTER TABLE\naccount_limits ADD CONSTRAINT \"ACCOUNT_LIMITS_ACCOUNT_FK\" FOREIGN KEY(account)\nREFERENCES accounts (account); ")," By default data associated with any other VOs\nis left in the database, but will be inaccessible to Rucio users. By setting\npass the argument ",Object(i.b)("inlineCode",{parentName:"p"},"--delete_vos"),", these entries will be deleted from the\ndatabase completely:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"tools/convert_database_vo.py convert_to_svo old --delete_vos ...  \\\n  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = 'xyz'; \\\n  ...  DELETE FROM account_limits WHERE \\\n    split_part(account_limits.account, '@', 2) = '123'; ...\n")),Object(i.b)("p",null,"Once again, historical tables skipped with ",Object(i.b)("inlineCode",{parentName:"p"},"--skip_history"),", and the commands\ncan be run directly against the database using the ",Object(i.b)("inlineCode",{parentName:"p"},"--commit_changes")," argument;\nif this is not set then the ",Object(i.b)("inlineCode",{parentName:"p"},"super_root")," account should be manually deleted\nafter running the SQL: ",Object(i.b)("inlineCode",{parentName:"p"},"bash $ python >>> from rucio.common.types import\nInternalAccount >>> from rucio.core.account import del_account >>>\ndel_account(InternalAccount('super_root', vo='def')) ")))}u.isMDXComponent=!0},433:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,b=u["".concat(r,".").concat(p)]||u[p]||h[p]||i;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
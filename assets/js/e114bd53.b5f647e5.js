"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={id:"database",title:"Database Operations",sidebar_label:"Database Operations"},s=void 0,p={unversionedId:"operator/database",id:"operator/database",title:"Database Operations",description:"Supported databases",source:"@site/../docs/operator/database.md",sourceDirName:"operator",slug:"/operator/database",permalink:"/documentation/operator/database",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/database.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1688478745,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"database",title:"Database Operations",sidebar_label:"Database Operations"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/documentation/operator/monitoring"},next:{title:"Administration Tricks",permalink:"/documentation/operator/administration"}},d={},c=[{value:"Supported databases",id:"supported-databases",level:2},{value:"Additional options",id:"additional-options",level:2},{value:"Connection pooling",id:"connection-pooling",level:3},{value:"Upgrading and downgrading the database schema",id:"upgrading-and-downgrading-the-database-schema",level:2},{value:"Creating a new version as a developer",id:"creating-a-new-version-as-a-developer",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"supported-databases"},"Supported databases"),(0,r.kt)("p",null,"Rucio uses ",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy")," as the object-relational\nmapper between Python and SQL. Rucio is extensively tested against SQLite,\nMySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the\nbox. The appropriate connection string has to be set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),", for\nexample:"),(0,r.kt)("p",null,"Oracle:\n",(0,r.kt)("inlineCode",{parentName:"p"},"oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))")),(0,r.kt)("p",null,"MySQL/MariaDB: ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql+pymysql://rucio:rucio@localhost/rucio")),(0,r.kt)("p",null,"PostgreSQL: ",(0,r.kt)("inlineCode",{parentName:"p"},"postgresql://rucio:rucio@localhost:6601/rucio")),(0,r.kt)("p",null,"SQLite: ",(0,r.kt)("inlineCode",{parentName:"p"},"sqlite:////tmp/rucio.db")),(0,r.kt)("p",null,"Please ensure correct UNIX permissions on the SQLite file, such that the web\nserver process can read and write to it."),(0,r.kt)("h2",{id:"additional-options"},"Additional options"),(0,r.kt)("h3",{id:"connection-pooling"},"Connection pooling"),(0,r.kt)("p",null,"Connection pooling is enabled by default, but can be disabled by setting the option"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dosini"},"poolclass = nullpool\n")),(0,r.kt)("p",null,"in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[database]")," section in ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/rucio.cfg"),"."),(0,r.kt)("p",null,"Other valid values are ",(0,r.kt)("inlineCode",{parentName:"p"},"singletonthreadpool"),",\nwhich is the default pooling mechanism when using the SQLite engine,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"queuepool"),",\nwhich is the default otherwise."),(0,r.kt)("p",null,"Note that the chosen ",(0,r.kt)("inlineCode",{parentName:"p"},"poolclass")," may conflict with other pooling options.\nFor instance, one cannot combine ",(0,r.kt)("inlineCode",{parentName:"p"},"poolclass = nullpool")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pool_size")," option."),(0,r.kt)("h2",{id:"upgrading-and-downgrading-the-database-schema"},"Upgrading and downgrading the database schema"),(0,r.kt)("p",null,"Rucio uses ",(0,r.kt)("a",{parentName:"p",href:"http://alembic.zzzcomputing.com/en/latest/"},"Alembic")," as a database\nmigration tool, which works hand-in-hand with\n",(0,r.kt)("a",{parentName:"p",href:"https://www.sqlalchemy.org/"},"SQLAlchemy"),". Ensure that int ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/alembic.ini")," the\ndatabase connection string is is set to the same database connection string as\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"etc/rucio.cfg")," and issue the following command to verify the changes to the\nupgrade of the schema:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alembic upgrade head --sql")),(0,r.kt)("p",null,"You can edit and then apply the SQL directly on your database. We do not advise\nrunning automatic upgrades/downgrades with alembic."),(0,r.kt)("p",null,"Notabene, schema upgrades are reserved for feature releases and will not happen\nwith patch releases."),(0,r.kt)("h2",{id:"creating-a-new-version-as-a-developer"},"Creating a new version as a developer"),(0,r.kt)("p",null,"If you want to create an upgrade path for the schema, you need to generate a\nschema upgrade+downgrade file:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alembic revision -m 'schema change message'")),(0,r.kt)("p",null,"This will output the name of the file that has been generated with two functions\n",(0,r.kt)("inlineCode",{parentName:"p"},"def upgrade()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"def downgrade()")," that need to be implemented. These should\nreflect the changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/rucio/db/sqla/models.py")," SQLAlchemy mapping.\n3"))}m.isMDXComponent=!0}}]);
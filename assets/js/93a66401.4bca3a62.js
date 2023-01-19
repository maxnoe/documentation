(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{286:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var i=t(3),a=t(7),r=(t(0),t(457)),o=["components"],c={id:"installing_server",title:"Installing Rucio Server"},l={unversionedId:"installing_server",id:"installing_server",isDocsHomePage:!1,title:"Installing Rucio Server",description:"Prerequisites",source:"@site/../docs/installing_server.md",sourceDirName:".",slug:"/installing_server",permalink:"/documentation/installing_server",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/installing_server.md",version:"current",lastUpdatedBy:"Johannes Lange",lastUpdatedAt:1674120944,formattedLastUpdatedAt:"1/19/2023",frontMatter:{id:"installing_server",title:"Installing Rucio Server"},sidebar:"docs",previous:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"},next:{title:"Installing Rucio Daemons",permalink:"/documentation/installing_daemons"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install via pip",id:"install-via-pip",children:[]},{value:"Install via Docker",id:"install-via-docker",children:[]},{value:"Environment Variables",id:"environment-variables",children:[{value:"RUCIO_ENABLE_SSL",id:"rucio_enable_ssl",children:[]},{value:"RUCIO_SSL_PROTOCOL",id:"rucio_ssl_protocol",children:[]},{value:"RUCIO_CA_PATH",id:"rucio_ca_path",children:[]},{value:"RUCIO_DEFINE_ALIASES",id:"rucio_define_aliases",children:[]},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",children:[]},{value:"RUCIO_LOG_LEVEL",id:"rucio_log_level",children:[]},{value:"RUCIO_LOG_FORMAT",id:"rucio_log_format",children:[]},{value:"RUCIO_HOSTNAME",id:"rucio_hostname",children:[]},{value:"RUCIO_SERVER_ADMIN",id:"rucio_server_admin",children:[]}]},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",children:[]},{value:"Server Configuration for Open ID Connect AuthN/Z",id:"server-configuration-for-open-id-connect-authnz",children:[{value:"Configuration for Daemons",id:"configuration-for-daemons",children:[]},{value:"Rucio WebUI Login with CERN SSO",id:"rucio-webui-login-with-cern-sso",children:[]}]}],u={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,o);return Object(r.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The Rucio server runs on Python 2.7, 3.6 and 3.7 on any Unix-like platform."),Object(r.b)("h2",{id:"install-via-pip"},"Install via pip"),Object(r.b)("p",null,"Heads up: We recommend to use the docker-based install (see next section) as it\nwill configure many things for you automatically. Only use the pip-based install\nif you have a good reason and know how to configure your webservices manually:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),Object(r.b)("p",null,"This will pull the latest release from\n",Object(r.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},Object(r.b)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},Object(r.b)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),Object(r.b)("h2",{id:"install-via-docker"},"Install via Docker"),Object(r.b)("p",null,"A simple server without SSL can be started like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server -p 80:80 -d rucio/rucio-server\n")),Object(r.b)("p",null,"This will start up a simple server using sqlite based on an automatically\ngenerated configuration. You can check if the server is running with"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost/ping\n")),Object(r.b)("p",null,"This should return the Rucio version used in the container. Any other curl\nrequests will not work as the database backend is not initialized as this image\nis meant to be used with an already bootstrapped database backend. I.e., that\nthe container has to be configured to point to the correct database. There are\ntwo ways to manage the Rucio configuration: using environment variables or by\nmounting a full rucio.cfg."),Object(r.b)("p",null,"If you want to set the connection string for the database it can be done using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT")," environment variable, e.g., to start a\ncontainer connecting to a MySQL DB running at ",Object(r.b)("inlineCode",{parentName:"p"},"mysql.db")," you could use something\nlike this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-server \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n')),Object(r.b)("p",null,"The are much more configuration parameters available that will be listed at the\nend of this readme."),Object(r.b)("p",null,"Another way to configure Rucio is to directly mount a complete rucio.cfg into\nthe container. This will then be used instead of the auto-generated one, e.g.,\nif you have a rucio.cfg ready on your host system under ",Object(r.b)("inlineCode",{parentName:"p"},"/tmp/rucio.cfg")," you\ncould start a container like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("p",null,"The rucio.cfg is used to configure the database backend."),Object(r.b)("p",null,"If you want to enable SSL you would need to set the ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_SSL")," variable\nand also need to include the host certificate, key and the the CA certificate as\nvolumes. E.g.,:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/ca.pem:/etc/grid-security/ca.pem \\\n  -v /tmp/hostcert.pem:/etc/grid-security/hostcert.pem \\\n  -v /tmp/hostkey.pem:/etc/grid-security/hostkey.pem \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 443:443 \\\n  -e RUCIO_ENABLE_SSL=True \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("p",null,"By default the output of the Apache web server is written directly to stdout and\nstderr. If you would rather direct them into separate files it can be done using\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," variable. The storage folder of the logs can be used as\na volume:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/httpd \\\n  -p 80:80 \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  -d \\\n  rucio/rucio-server\n")),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"As shown in the examples above the rucio-server image can be configured using\nenvironment variables that are passed with ",Object(r.b)("inlineCode",{parentName:"p"},"docker run"),". Below is a list of all\navailable variables and their behavior:"),Object(r.b)("h3",{id:"rucio_enable_ssl"},"RUCIO_ENABLE_SSL"),Object(r.b)("p",null,"By default, the rucio server runs without SSL on port 80. If you want to enable\nSSL set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True"),". If you enable SSL you will also have to provide\nthe host certificate and key and the certificate authority file. The server will\nlook for ",Object(r.b)("inlineCode",{parentName:"p"},"hostcert.pem"),", ",Object(r.b)("inlineCode",{parentName:"p"},"hostkey.pem")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ca.pem")," under ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/grid-security"),"\nso you will have to mount them as volumes. Furthermore you will also have to\nexpose port 443."),Object(r.b)("h3",{id:"rucio_ssl_protocol"},"RUCIO_SSL_PROTOCOL"),Object(r.b)("p",null,"By default, the server will only accept TLSv1.2 connections. Defining this\nenvironment variable will allow specification of a custom Apache SSLProtocol."),Object(r.b)("h3",{id:"rucio_ca_path"},"RUCIO_CA_PATH"),Object(r.b)("p",null,"If you are using SSL and want use ",Object(r.b)("inlineCode",{parentName:"p"},"SSLCACertificatePath")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"SSLCARevocationPath")," you can do so by specifying the path in this variable."),Object(r.b)("h3",{id:"rucio_define_aliases"},"RUCIO_DEFINE_ALIASES"),Object(r.b)("p",null,"By default, the web server is configured with all common rest endpoints except\nthe authentication endpoint. If you want to specify your own set of aliases you\ncan set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True"),". The web server then expects an alias file under\n",Object(r.b)("inlineCode",{parentName:"p"},"/opt/rucio/etc/aliases.conf")),Object(r.b)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),Object(r.b)("p",null,"By default, the log output of the web server is written to stdout and stderr. If\nyou set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True")," the output will be written to ",Object(r.b)("inlineCode",{parentName:"p"},"access_log")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"error_log")," under ",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/httpd"),"."),Object(r.b)("h3",{id:"rucio_log_level"},"RUCIO_LOG_LEVEL"),Object(r.b)("p",null,"The default log level is ","[info]","{.title-ref}. You can change it using this\nvariable."),Object(r.b)("h3",{id:"rucio_log_format"},"RUCIO_LOG_FORMAT"),Object(r.b)("p",null,"The default rucio log format is\n",Object(r.b)("inlineCode",{parentName:"p"},'%ht%tt%{X-Rucio-Forwarded-For}it%Tt%Dt\\"%{X-Rucio-Auth-Token}i\\"t%{X-Rucio-RequestId}it%{X-Rucio-Client-Ref}it\\"%r\\"t%\\>st%b'),"\nYou can set your own format using this variable."),Object(r.b)("h3",{id:"rucio_hostname"},"RUCIO_HOSTNAME"),Object(r.b)("p",null,"This variable sets the server name in the apache config."),Object(r.b)("h3",{id:"rucio_server_admin"},"RUCIO_SERVER_ADMIN"),Object(r.b)("p",null,"This variable sets the server admin in the apache config."),Object(r.b)("h2",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),Object(r.b)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the configuration file\nprefixed by ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available environment variables are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POLL_RECYCLE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_USERPASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TRACEDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_USERNAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TOPIC"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_WEBUI_USERCERT")),Object(r.b)("h2",{id:"server-configuration-for-open-id-connect-authnz"},"Server Configuration for Open ID Connect AuthN/Z"),Object(r.b)("p",null,"In order to be able to use ",Object(r.b)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC"),"\nJSON Web Tokens (",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JWTs"),") and\nrelated ",Object(r.b)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2.0")," authentication and authorization with Rucio,\none first needs to have an account with an Identity Provider (IdP)\nwhich will act as Rucio admin account representing the Rucio Application.\nCurrently, the only fully supported IdP is ",Object(r.b)("a",{parentName:"p",href:"https://indigo-iam.github.io/v/current/"},"INDIGO IAM"),".\nOnce you have got your Rucio Service IAM Account ","[A]","\n(and its subject claim identifier), you will need to ",Object(r.b)("a",{parentName:"p",href:"https://indigo-iam.github.io/docs/v/current/user-guide/client-registration.html"},"register two IAM Rucio\nclients"),"\nlinked to this account. Please save the relevant ",Object(r.b)("strong",{parentName:"p"},"client_id"),",\n",Object(r.b)("strong",{parentName:"p"},"client_secret"),", and ",Object(r.b)("strong",{parentName:"p"},"registration access token (RAT)")," in\na safe place, as you will be needing them."),Object(r.b)("p",null,"In both clients, one needs to setup the ",Object(r.b)("strong",{parentName:"p"},"redirect_uris")," to\ninclude the following paths:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"https://<your_server_name>/auth/oidc_token\nhttps://<your_server_name>/auth/oidc_code\n")),Object(r.b)("p",null,"We will use one client as\n",Object(r.b)("strong",{parentName:"p"},"Rucio Auth IAM Client")," ","[C1]"," (i.e. client for the authentication and\nauthorization on the Rucio server). This client needs to have ",Object(r.b)("strong",{parentName:"p"},"token_exchange"),",\n",Object(r.b)("strong",{parentName:"p"},"token_refresh"),", and ",Object(r.b)("strong",{parentName:"p"},"authorization_code")," grants enabled. For ",Object(r.b)("strong",{parentName:"p"},"token_exchange"),"\nand ",Object(r.b)("strong",{parentName:"p"},"token_refresh")," you might need to contact the IAM admin as such settings are\nusually not accessible to IAM users. In addition, you will need to request your\nIAM admin to allow your client returning refresh tokens with lifetime being visible\nin their unverified header. In addition Rucio assumes refresh tokens to expire\nimmediately after their first use, which has to be also confirmed by your IAM admin."),Object(r.b)("p",null,"The second\nclient, let's call it ",Object(r.b)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]",", can be used by a Rucio probe\nscript (e.g. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/probes/blob/master/attic/check_scim"},"check_scim"),",\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/ESCAPE-WP2/Utilities-and-Operations-Scripts/blob/master/iam-rucio-sync/sync_iam_rucio.py"},"sync_iam_rucio"),")\nin order to synchronize existing Rucio accounts with Rucio\nidentities. Rucio will also use this client's credentials in order to request\ntokens for itself. The IAM administrator must include the ",Object(r.b)("strong",{parentName:"p"},"scim:read")," scope and\nallow the ",Object(r.b)("strong",{parentName:"p"},"client_credentials")," grant type for ","[C2]"," in order\nto grant you rights to pre-provision IAM users for Rucio. Examples of the\nconfiguration of these two clients follow below:"),Object(r.b)("p",null,"Example of the ",Object(r.b)("strong",{parentName:"p"},"Rucio Auth IAM Client")," ","[C1]"," configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "AbcCDe123...",\n  "registration_access_token": "AbcCDe123...",\n  "redirect_uris": [\n    "https://rucio-auth.cern.ch/auth/oidc_token",\n    "https://rucio-auth.cern.ch/auth/oidc_code",\n  ],\n  "client_name": "rucio-admin-client",\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address fts phone openid profile offline_access \\\n    rucio email wlcg wlcg.groups fts:submit-transfer",\n  "grant_types": [\n    "refresh_token",\n    "urn:ietf:params:oauth:grant-type:token-exchange",\n    "authorization_code"\n  ],\n  "response_types": [\n    "code"\n  ],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/fdc297fc-0907-4a68-9022-3ccc7dd2501a",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700620\n}\n')),Object(r.b)("p",null,"Example of the ",Object(r.b)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]"," configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'{\n  "client_id": "AbcDe123...",\n  "registration_access_token": "AbcDe123...",\n  "client_secret": "AbcDe123...",\n  "redirect_uris": [],\n  "client_name": null,\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address scim:read phone email wlcg profile \\\n    fts:submit-transfer rucio fts fts:submit-transfer",\n  "grant_types": [\n    "client_credentials"\n  ],\n  "response_types": [],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/5b5e5d37-926b-4b42-8a98-a0b4b28baf18",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700703\n}\n')),Object(r.b)("p",null,"To make the Rucio server aware of the two clients above, one has to exchange the\nempty dictionary in ",Object(r.b)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," file with one containing the\nrelevant information. Example of such dictionary (for multiple IdPs) follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "<IdP nickname>": {\n\n        "issuer": "https://<issuer_server_name>",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<C1_client_id>",\n        "client_secret": "<C1_client_secret>",\n\n        # this is not really needed for the OIDC functionality\n        # but it is suggested to store it anyway as it is required\n        # to edit the client in INDIGO IAM\n        "registration_access_token": "<C1_client_RAT_string>",\n\n        "SCIM": {\n            "client_id": "<C2_client_id>",\n            "client_secret": "<C2_client_secret>",\n            "registration_access_token": "<C2_client_RAT_string>"\n        }\n    },\n\n    "wlcg": {\n\n        "issuer": "https://wlcg.cloud.cnaf.infn.it/",\n\n        "redirect_uris": [\n            "https://rucio-auth.cern.ch/auth/oidc_token",\n            "https://rucio-auth.cern.ch/auth/oidc_code"\n        ],\n\n        "client_id": "fdc297fc-09 ...",\n        "client_secret": "APFVcga_X ...",\n        "registration_access_token": "eyJraWQiOi ...",\n\n        "SCIM": {\n            "client_id": "5b5e5d3 ...",\n            "client_secret": "IQqAcMOa ...",\n            "registration_access_token": "eyJraW ..."\n        }\n    },\n\n    "xdc": { ... },\n}\n')),Object(r.b)("p",null,"After this is done, please make sure your ",Object(r.b)("inlineCode",{parentName:"p"},"rucio.cfg")," file contains the\nfollowing section:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"[oidc]\nidpsecrets = /path/to/your/idpsecrets.json\nadmin_issuer = <IdP_nickname>\nexpected_audience = '<rucio>'\nexpected_scope = 'openid profile'\n")),Object(r.b)("p",null,"Parameters ",Object(r.b)("strong",{parentName:"p"},"idpsecrets")," and ",Object(r.b)("strong",{parentName:"p"},"admin_issuer")," have to be present.\n",Object(r.b)("strong",{parentName:"p"},"IdP nickname")," stands for your preferred IdP (e.g. 'wlcg'). The IdP\nspecified under ",Object(r.b)("strong",{parentName:"p"},"admin_issuer")," will be contacted to get information about Rucio\nUsers (SCIM) and to request tokens for the Rucio ",Object(r.b)("strong",{parentName:"p"},"root")," account.  The\n",Object(r.b)("strong",{parentName:"p"},"expected_scope")," and ",Object(r.b)("strong",{parentName:"p"},"expected_audence")," parameters are optional and if not filled,\nthe Rucio server will set them to ",Object(r.b)("inlineCode",{parentName:"p"},"openid profile")," and ",Object(r.b)("inlineCode",{parentName:"p"},"rucio"),"\nrespectively. The expected scopes and audiences have to be configured\ncorrespondingly on the side of your registered clients at your IdP (usually you\ncan control accepted scopes and audiences for your clients via an IdP web\ninterface)."),Object(r.b)("p",null,"To finalize the process, one should assign the OIDC identities to the relevant\nRucio ",Object(r.b)("strong",{parentName:"p"},"admin_account")," (e.g. 'root', 'ddmadmin'). This identity ID is\ncomposed of the Rucio Service IAM Account ","[A]"," subject claim and\nissuer url such as demonstrated below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# Add the Rucio Service IAM Account ID as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=b3127dc7-2be3-417b-9647-6bf61238ad01, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),Object(r.b)("p",null,"A second identity has to be added to the same ",Object(r.b)("strong",{parentName:"p"},"admin_account")," representing\nthe ",Object(r.b)("strong",{parentName:"p"},"client_credentials")," flow of the Rucio application, i.e.  of the\n",Object(r.b)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]"," from above. This identity consists of\nthe ",Object(r.b)("strong",{parentName:"p"},"client_id")," of ","[C2]"," and the issuer (the token obtained via the\nclient credentials flow using ","[C2]"," will contain in the ",Object(r.b)("strong",{parentName:"p"},"sub")," claim the\n",Object(r.b)("strong",{parentName:"p"},"client_id")," of ","[C2]"," instead of Rucio Service IAM Account ","[A]"," ",Object(r.b)("strong",{parentName:"p"},"sub")," claim):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# Add the Rucio Admin IAM Client client_id as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),Object(r.b)("p",null,"Note: In case you can not/will not run any IAM -> Rucio user mapping tool in\norder to sync Rucio accounts with their IAM identities, you should assign the\nappropriate OIDC identity manually (as in the example above) to each Rucio\naccount which is meant to use the OIDC authN/Z:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# Add an IAM User Account ID as an OIDC identity\n# (needs to be done for each user!)\nrucio-admin identity add --account rucio_user_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),Object(r.b)("p",null,"Finally, in order to ensure the correct lifetime management of the tokens and auth\nsessions, one has to run the ",Object(r.b)("strong",{parentName:"p"},"oauth-manager")," daemon."),Object(r.b)("h3",{id:"configuration-for-daemons"},"Configuration for Daemons"),Object(r.b)("p",null,"OIDC authN/Z is also supported by the Rucio conveyor daemons and more\nspecifically by the ",Object(r.b)("strong",{parentName:"p"},"conveyor-submitter")," and ",Object(r.b)("strong",{parentName:"p"},"conveyor-poller")," ones.\n",Object(r.b)("strong",{parentName:"p"},"Conveyor-submitter")," is responsible for submission of the transfers created in\nconnection with an existing Rucio rule. ",Object(r.b)("strong",{parentName:"p"},"Conveyor-poller")," is responsible for\npolling the state of the transfers that have been submitted and updating the\nrelevant state in the database."),Object(r.b)("p",null,"In order to enable this functionality, RSEs must have an attribute set as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"oidc_support: True\n")),Object(r.b)("p",null,"In general, the Rucio account which created such a rule will be used to request a\nJWT token for OAuth2 authentication with FTS3. More specifically, there\nare three Rucio authentication flows that are possible:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"User Token Exchange"),": In this case, a valid OIDC token that the user authenticated\nwith in Rucio is getting ",Object(r.b)("a",{parentName:"p",href:"https://indigo-iam.github.io/docs/v/current/user-guide/api/oauth-token-exchange.html"},"exchanged"),"\nwith an appropriate token that is intended to be served to the FTS3 server.\nThis FTS3 intended token must have a specific audience ","[*]"," as well as\nspecific scopes ","[**]"," that the FTS3 server expects, this applies for the next\nauthentication flows as well. It is also worth noting that the acquired FTS3\nintended token includes all original claims that were present in the initial token.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Admin Flow"),": In this Rucio authN/Z flow, the ",Object(r.b)("a",{parentName:"p",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow"},"client_credentials"),"\nflow is used with the ",Object(r.b)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]",". The ",Object(r.b)("strong",{parentName:"p"},"sub")," claim of the\nacquired token becomes the ",Object(r.b)("strong",{parentName:"p"},"client_id")," of ","[C2]",". In this case any group membership\nthat was present in the original token is not included in the new FTS3 intended\ntoken. Additionally, for this flow to be successful a valid user OIDC token\nmust already be present in the database.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Admin Root Flow"),": This scenario has the same logic as flow 2, with the\ndifference that it is used when the relevant rule is created by the\nRucio ",Object(r.b)("strong",{parentName:"p"},"admin_account")," (e.g. 'root').\nNo other user token is involved in this case."))),Object(r.b)("p",null,"In all three formerly mentioned cases, if a valid FTS3 intended token\nalready exists in the Rucio database then a new token is not requested\nand the existing one is used."),Object(r.b)("p",null,"The OIDC authentication mechanism shall be configured by the\nfollowing parameters in the ",Object(r.b)("inlineCode",{parentName:"p"},"rucio.cfg")," file:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"[conveyor]\n# if set to True, then only flow 1 will be tried\n# if set to False, then flow 1 will never be tried\nallow_user_oidc_tokens = False (default)\n\n# FTS3 intended audience [*]\nrequest_oidc_audience = 'fts:example' (default)\n\n# FTS3 intended scopes [**]\nrequest_oidc_scope = 'fts:submit-transfer' (default)\n")),Object(r.b)("p",null,"For the ",Object(r.b)("strong",{parentName:"p"},"conveyor-poller")," to work an additional configuration is needed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"[conveyor]\npoller_oidc_account = rucio_admin_account\n")),Object(r.b)("p",null,"On an another level, the ",Object(r.b)("strong",{parentName:"p"},"reaper")," daemon can be also configured to\nperform deletions of files on the storage by using an OIDC token,\nthe following configuration is needed:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cfg"},"[reaper]\noidc_account = rucio_admin_account\noidc_audience = same logic as [*] but for the storage\noidc_scope = same logic as [**] but for the storage\n")),Object(r.b)("p",null,"Note aside: For some IdPs it may happen that the scope and audience claims are\nnot a part of the token payload. For this reason Rucio has a fall-back mechanism\nto get this information using the IdPs introspection endpoint. To allow Rucio to\nintrospect tokens that were not issued by its clients, please talk to the IdP\nadmin who should enable this functionality for your clients."),Object(r.b)("h3",{id:"rucio-webui-login-with-cern-sso"},"Rucio WebUI Login with CERN SSO"),Object(r.b)("p",null,"By using the Rucio OIDC capabilities it is possible to integrate the\n",Object(r.b)("a",{parentName:"p",href:"https://auth.docs.cern.ch/user-documentation/oidc/oidc/"},"CERN SSO")," service with\nthe WebUI so users will be able to login with a CERN account.\nPlease note that in contrast to INDIGO IAM, the CERN IdP can only be\nused for WebUI login at the moment and not for the other operations\nthat were described previously. The following steps are needed:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The Rucio administrators need to create a new application at the\n",Object(r.b)("a",{parentName:"p",href:"https://application-portal.web.cern.ch/"},"Application Portal"),".\nPlease note that the ",Object(r.b)("strong",{parentName:"p"},"Application Identifier")," field will be the\naudience claim in the tokens acquired by the CERN Authorization Service.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the newly created Application, a new ",Object(r.b)("strong",{parentName:"p"},"SSO Registration")," is needed.\nPlease select OIDC in the\n'Which protocol does your application use for authentication?' question.\nAt the same time, the two Rucio redirect URIs are needed as\ndescribed in the ",Object(r.b)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," configuration that was mentioned previously.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The new CERN IdP needs to be added in the ",Object(r.b)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," configuration,\nwith the newly acquired client secret that was given after step 2.\nPlease note that in this case the SCIM field needs to be filled even though\nit will never be used for this IdP, one can just repeat the original\nclient_id and client_secret. The configuration will have the following format:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    # ...\n    "cern": {\n\n        "issuer": "https://auth.cern.ch/auth/realms/cern",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<SSO_client_id>", # Same as Application Identifier\n        "client_secret": "<SSO_client_secret>",\n\n        "SCIM": {\n            "client_id": "<SSO_client_id>",\n            "client_secret": "<SSO_client_secret>",\n        }\n    }\n    # ...\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Finally, the CERN user identities need to be mapped to Rucio accounts\nas it was previously described. One example mapping follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"},'# Add an CERN User Account Username as an OIDC identity\n# (needs to be done for each user!)\n# Note that the SUB field is the CERN Account username\nrucio-admin identity add --account rucio_user_account \\\n--type OIDC \\\n--id "SUB=ridona, \\\n    ISS=https://auth.cern.ch/auth/realms/cern" \\\n--email "rucio@cern.ch"\n')))))}p.isMDXComponent=!0},457:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=i,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return t?a.a.createElement(h,c(c({ref:n},s),{},{components:t})):a.a.createElement(h,c({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[b]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);
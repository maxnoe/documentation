"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9656,9772],{12597:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Se});var a=n(11504),r=n(14971),l=n(85008),o=n(45864),c=n(14456),i=n(44304),d=n(69920),s=n(46192),m=n(82160),u=n(84357),b=n(53943),p=n(27124);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function v(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),r=n[0],l=n[1],o=(0,a.useRef)(!1),c=(0,b.yI)(),i=c.startScroll,d=c.cancelScroll;return(0,b.SM)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(o.current?o.current=!1:a>=r?(d(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.c)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return i(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.c)("clean-btn",o.W.common.backToTopButton,h.backToTopButton,t&&h.backToTopButtonShow),type:"button",onClick:n})}var E=n(13856),f=n(55592),g=n(11432),_=n(21824),C=n(68164),k=n(45072);function S(e){return a.createElement("svg",(0,k.c)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.G)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.c)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(S,{className:I.collapseSidebarButtonIcon}))}var x=n(43868),T=n(95656),y=n(40436),B=Symbol("EmptyContext"),w=a.createContext(B);function A(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(w.Provider,{value:o},t)}var W=n(58448),L=n(13376),M=n(76016),H=n(93664),P=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,u.G)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function D(e){var t=e.item,n=e.onItemClick,l=e.activePath,c=e.level,d=e.index,s=(0,T.c)(e,P),m=t.items,u=t.label,b=t.collapsible,p=t.className,h=t.href,v=(0,_.y)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,H.c)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.OQ)(e):void 0}),[e,t])}(t),f=(0,i.Md)(t,l),g=(0,L.Sc)(h,l),C=(0,W.a)({initialState:function(){return!!b&&(!f&&t.collapsed)}}),S=C.collapsed,I=C.setCollapsed,N=function(){var e=(0,a.useContext)(w);if(e===B)throw new y.AH("DocSidebarItemsExpandedStateProvider");return e}(),x=N.expandedItem,A=N.setExpandedItem,D=function(e){void 0===e&&(e=!S),A(e?null:d),I(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,y.i0)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:f,collapsed:S,updateCollapsed:D}),(0,a.useEffect)((function(){b&&null!=x&&x!==d&&v&&I(!0)}),[b,x,d,I,v]),a.createElement("li",{className:(0,r.c)(o.W.docs.docSidebarItemCategory,o.W.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":S},p)},a.createElement("div",{className:(0,r.c)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(M.c,(0,k.c)({className:(0,r.c)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?function(e){null==n||n(t),h?D(!1):(e.preventDefault(),D())}:function(){null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=E?E:"#":E},s),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:function(e){e.preventDefault(),D()}})),a.createElement(W.U,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(X,{items:m,tabIndex:S?-1:0,onItemClick:n,activePath:l,level:c+1})))}var G=n(18136),U=n(3232);const R={menuExternalLink:"menuExternalLink_NmtK"};var V=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,n=e.onItemClick,l=e.activePath,c=e.level,d=(e.index,(0,T.c)(e,V)),s=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,i.Md)(t,l),h=(0,G.c)(s);return a.createElement("li",{className:(0,r.c)(o.W.docs.docSidebarItemLink,o.W.docs.docSidebarItemLinkLevel(c),"menu__list-item",u),key:m},a.createElement(M.c,(0,k.c)({className:(0,r.c)("menu__link",!h&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},h&&{onClick:n?function(){return n(t)}:void 0},d),m,!h&&a.createElement(U.c,null)))}const K={menuHtmlItem:"menuHtmlItem_M9Kj"};function j(e){var t=e.item,n=e.level,l=e.index,c=t.value,i=t.defaultStyle,d=t.className;return a.createElement("li",{className:(0,r.c)(o.W.docs.docSidebarItemLink,o.W.docs.docSidebarItemLinkLevel(n),i&&[K.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:c}})}var O=["item"];function Q(e){var t=e.item,n=(0,T.c)(e,O);switch(t.type){case"category":return a.createElement(D,(0,k.c)({item:t},n));case"html":return a.createElement(j,(0,k.c)({item:t},n));default:return a.createElement(z,(0,k.c)({item:t},n))}}var Y=["items"];function q(e){var t=e.items,n=(0,T.c)(e,Y);return a.createElement(A,null,t.map((function(e,t){return a.createElement(Q,(0,k.c)({key:t,item:e,index:t},n))})))}const X=(0,a.memo)(q),J={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function Z(e){var t=e.path,n=e.sidebar,l=e.className,c=function(){var e=(0,x.el)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,b.SM)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,u.G)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.c)("menu thin-scrollbar",J.menu,c&&J.menuWithAnnouncementBar,l)},a.createElement("ul",{className:(0,r.c)(o.W.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}const $="sidebar_njMd",ee="sidebarWithHideableNavbar_wUlq",te="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function ae(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,c=(0,_.y)(),i=c.navbar.hideOnScroll,d=c.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.c)($,i&&ee,o&&te)},i&&a.createElement(C.c,{tabIndex:-1,className:ne}),a.createElement(Z,{path:t,sidebar:n}),d&&a.createElement(N,{onClick:l}))}const re=a.memo(ae);var le=n(45168),oe=n(18200),ce=function(e){var t=e.sidebar,n=e.path,l=(0,oe.q)();return a.createElement("ul",{className:(0,r.c)(o.W.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function ie(e){return a.createElement(le.Mx,{component:ce,props:e})}const de=a.memo(ie);function se(e){var t=(0,g.U)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(re,e),r&&a.createElement(de,e))}const me={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ue(e){var t=e.toggleSidebar;return a.createElement("div",{className:me.expandButton,title:(0,u.G)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.G)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(S,{className:me.expandButtonIcon}))}const be={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function pe(e){var t,n=e.children,r=(0,s.m)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function he(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,c=(0,f.IT)().pathname,i=(0,a.useState)(!1),d=i[0],s=i[1],m=(0,a.useCallback)((function(){d&&s(!1),!d&&(0,E.I)()&&s(!0),l((function(e){return!e}))}),[l,d]);return a.createElement("aside",{className:(0,r.c)(o.W.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&s(!0)}},a.createElement(pe,null,a.createElement("div",{className:(0,r.c)(be.sidebarViewport,d&&be.sidebarViewportHidden)},a.createElement(se,{sidebar:t,path:c,onCollapse:m,isHidden:d}),d&&a.createElement(ue,{toggleSidebar:m}))))}const ve={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,s.m)();return a.createElement("main",{className:(0,r.c)(ve.docMainContainer,(t||!l)&&ve.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.c)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,t&&ve.docItemWrapperEnhanced)},n))}const fe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function ge(e){var t=e.children,n=(0,s.m)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(m.c,{wrapperClassName:fe.docsWrapper},a.createElement(v,null),a.createElement("div",{className:fe.docPage},n&&a.createElement(he,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=n(29772),Ce=n(48712);function ke(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Ce.c,{version:t.version,tag:(0,c.SE)(t.pluginId,t.version)}),a.createElement(l.U7,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Se(e){var t=e.versionMetadata,n=(0,i.sr)(e);if(!n)return a.createElement(_e.default,null);var c=n.docElement,m=n.sidebarName,u=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(ke,e),a.createElement(l.cr,{className:(0,r.c)(o.W.wrapper.docsPages,o.W.page.docsDocPage,e.versionMetadata.className)},a.createElement(d.Q,{version:t},a.createElement(s.y,{name:m,items:u},a.createElement(ge,null,c)))))}},29772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(11504),r=n(84357),l=n(85008),o=n(82160);function c(){return a.createElement(a.Fragment,null,a.createElement(l.U7,{title:(0,r.G)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.c,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.c,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.c,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.c,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},69920:(e,t,n)=>{n.d(t,{E:()=>c,Q:()=>o});var a=n(11504),r=n(40436),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.AH("DocsVersionProvider");return e}}}]);
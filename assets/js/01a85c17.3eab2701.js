"use strict";(self.webpackChunkweb_source=self.webpackChunkweb_source||[]).push([[13],{6165:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7294),r=n(6010),l=n(6698),c=n(6742);const s="sidebar_q+wC",o="sidebarItemTitle_9G5K",i="sidebarItemList_6T4b",m="sidebarItem_cjdF",u="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs";var f=n(4973);function g(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:i},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))))))}var b=n(571);const E=function(e){const{sidebar:t,toc:n,children:c,...s}=e,o=t&&t.items.length>0;return a.createElement(l.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},o&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,r.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},c),n&&a.createElement("div",{className:"col col--2"},a.createElement(b.Z,{toc:n})))))}},94:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(7294),r=n(6165),l=n(6584),c=n(941);const s=function(e){const{tags:t,sidebar:n}=e,s=(0,c.MA)();return a.createElement(r.Z,{title:s,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,s),a.createElement(l.Z,{tags:Object.values(t)}))}},571:(e,t,n)=>{n.d(t,{r:()=>f,Z:()=>g});var a=n(7294),r=n(6010),l=n(941);function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>c(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.LU)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,a.useRef)(void 0),n=o();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=s({anchorTopOffset:n.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_vrFS",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(f,{isChild:!0,toc:e.children}))))):null}const g=function(e){let{toc:t}=e;return i(d),a.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},a.createElement(f,{toc:t}))}},7211:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010),l=n(6742);const c="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";const i=function(e){const{permalink:t,name:n,count:i}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,{[s]:!i,[o]:i})},n,i&&a.createElement("span",null,i))}},6584:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(7211),l=n(941);const c="tag_7kA+";function s(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:c},a.createElement(r.Z,e))))),a.createElement("hr",null))}const o=function(e){let{tags:t}=e;const n=(0,l.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(s,{key:e.letter,letterEntry:e}))))}}}]);
!function(e){function t(t){for(var a,l,i=t[0],m=t[1],d=t[2],c=0,u=[];c<i.length;c++)l=i[c],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&u.push(n[l][0]),n[l]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);for(r&&r(t);u.length;)u.shift()();return o.push.apply(o,d||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],a=!0,i=1;i<s.length;i++){var m=s[i];0!==n[m]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=s[0]))}return e}var a={},n={2:0},o=[];function l(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=a,l.d=function(e,t,s){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(s,a,function(t){return e[t]}.bind(null,a));return s},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],m=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var r=m;o.push([123,0]),s()}({109:function(e,t,s){},123:function(e,t,s){"use strict";s.r(t);s(14);var a=s(0),n=s(1),o=(s(22),s(5));i=1,window.addEventListener("DOMContentLoaded",()=>{var e=Object(a.a)("div.nextpage a").innerText;if(""===e?Object(a.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}):(l=Object(a.a)("div.nextpage a").getAttribute("href"),Object(a.a)("#postlist").insertAdjacentHTML("afterend",'<div class="mdui-hoverable nextpage2">'.concat(e,"</div>")),Object(a.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}),Object(a.a)("div.main").addEventListener("click",e=>{var t;e.target.classList.contains("nextpage2")&&"div"===e.target.tagName.toLowerCase()&&(Object(a.a)("div.nextpage2").style.display="none",Object(a.a)("div.nextpage2").insertAdjacentHTML("afterend",'<div class="mdui-spinner mdx-ajax-loading mdui-center"></div>'),mdui.updateSpinners(),t=l,Object(o.a)(t,{credentials:"same-origin"}).then(e=>{i++;let t=(new DOMParser).parseFromString(e,"text/html");l=t.querySelector("div.nextpage a"),enhanced_ajax&&parseInt(sessionStorage.getItem("mdx_index_loaded_page"))<=30&&(sessionStorage.setItem("mdx_index_page_"+i,window.btoa(encodeURIComponent(e))),sessionStorage.setItem("mdx_index_loaded_page",i));let s="";if(null===l)s=e.replace('<div class="nextpage mdui-center"></div>',""),Object(a.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{s=e;let t=(new DOMParser).parseFromString(s,"text/html").querySelector("div.nextpage");t.parentNode.removeChild(t),Object(a.a)("div.nextpage2").style.display=""}Object(a.a)("div.mdx-ajax-loading",e=>{e.parentNode.removeChild(e)});let n=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(s,"text/html")).getElementById("postlist").innerHTML;Object(a.a)("#postlist").insertAdjacentHTML("beforeend",n)}).catch(()=>{mdui.snackbar({message:ajax_error,timeout:5e3,position:"top"})}))})),enhanced_ajax&&document.getElementById("postlist").getElementsByTagName("a").length>0)if(sessionStorage.getItem("mdx_index_page_1")){if(sessionStorage.getItem("mdx_index_page_1")!==window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))){for(let e=1;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++)sessionStorage.removeItem("mdx_index_page_"+e);sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)}else if(parseInt(sessionStorage.getItem("mdx_index_loaded_page"))>1)for(let e=2;e<=parseInt(sessionStorage.getItem("mdx_index_loaded_page"));e++){var t=decodeURIComponent(window.atob(sessionStorage.getItem("mdx_index_page_"+e)));let s=(new DOMParser).parseFromString(t,"text/html"),n="";if(null===(l=s.querySelector("div.nextpage a")))n=t.replace('<div class="nextpage mdui-center"></div>',""),Object(a.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{n=t;let e=(new DOMParser).parseFromString(n,"text/html").querySelector("div.nextpage");e.parentNode.removeChild(e),Object(a.a)("div.nextpage2").style.display=""}let o=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(n,"text/html")).getElementById("postlist").innerHTML;Object(a.a)("#postlist").insertAdjacentHTML("beforeend",o),i=e}}else sessionStorage.setItem("mdx_index_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_index_loaded_page",1)});var l,i,m=s(2);s(109);s.p=window.mdxPublicPath;var d=0,r=document.querySelector("meta[name='theme-color']"),c=!1,u="",g=!1;r&&(u=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),c=!0);var y,p,h=!1,f=1,b="unset",x="undefined"!=typeof offlineMode&&offlineMode;function B(){if(f){(e=document.documentElement.scrollTop||document.body.scrollTop)>y&0==d&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),d=1),e<=y&1==d&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),d=0);let t=0;if("single"!==b){e<=y?(t=(y-e)/p,t>1&&(t=1)):t=e>y?0:1,document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",t,"important");const s=document.getElementsByClassName("mdx-slide-content");if(s.length>0){for(const e of[...s])e.style.setProperty("background-color","rgba(var(--mdx-theme-color-with-white-head), ".concat(.4*(1-t)+.6,")"),"important");Object(a.a)(".swiper-pagination",e=>{e.style.setProperty("opacity",t,"important")})}}}else if(!f){var e;(e=document.documentElement.scrollTop||document.body.scrollTop)>20&0==d&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),d=1),e<=20&1==d&&(document.getElementsByClassName("mdui-toolbar-self")[0].classList.toggle("mdui-color-theme"),document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),document.getElementsByClassName("scrollToTop")[0].classList.toggle("mdui-fab-hide"),d=0)}h=!1}function E(e){e.matches?("tworow"===b&&(N(),document.getElementsByClassName("theFirstPage")[0].style.setProperty("opacity",1,"important")),b="single"):("single"===b&&N(),b="tworow")}function v(e){"user"!==sessionStorage.getItem("mrm_enable")?e.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}function w(){if(document.getElementsByClassName("mdx-hp-g-r").length){document.getElementsByClassName("mdx-hp-g-r")[0].style.display="block";var e=1,t=1,s=(210+parseInt(getComputedStyle(document.querySelector("a>div.mdx-li.mdui-card"),null).marginRight))*document.querySelectorAll("a>div.mdx-li.mdui-card").length+10,o=0,l=0,i=document.getElementById("mdx-sp-out-c");i.onscroll=function(){o=i.offsetWidth,(l=i.scrollLeft)>5&&e?(Object(n.a)(Object(a.a)(".mdx-hp-g-l",null,"array"),"in",200),e=0):l<=5&&!e&&(Object(n.a)(Object(a.a)(".mdx-hp-g-l",null,"array"),"out",200),e=1),s-o-l<=1&&t?(Object(n.a)(Object(a.a)(".mdx-hp-g-r",null,"array"),"out",200),t=0):s-o-l>1&&!t&&(Object(n.a)(Object(a.a)(".mdx-hp-g-r",null,"array"),"in",200),t=1)}}}function O(){var e=document.getElementsByClassName("mdx-posts-may-related");if(e.length){let t=document.getElementsByClassName("mdx-posts-may-related")[0].getElementsByClassName("mdx-li");(t[0].offsetWidth+8)*t.length-15<e[0].offsetWidth?(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="hidden",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="hidden"):(document.getElementsByClassName("mdx-hp-g-l")[0].style.visibility="visible",document.getElementsByClassName("mdx-hp-g-r")[0].style.visibility="visible")}}0===document.getElementsByClassName("theFirstPage").length?f=0:(y=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,p=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),window.addEventListener("load",()=>{B();let e=document.getElementsByClassName("theFirstPage");e.length>0&&setTimeout(()=>{e[0].classList.add("mdx-anmi-loaded"),e[0].style.setProperty("transition","opacity 0s","important")},500)}),window.addEventListener("scroll",()=>{h||(requestAnimationFrame(B),h=!0)}),window.addEventListener("resize",()=>{f&&(y=document.getElementsByClassName("theFirstPage")[0].offsetHeight-document.getElementsByClassName("titleBarGobal")[0].offsetHeight-1,p=.37*document.getElementsByClassName("theFirstPage")[0].offsetHeight-20),w(),O()}),document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){Object(m.a)(Object(a.a)("html"),{scrollTop:"0px"},500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),c&&r.setAttribute("content",u)):(sessionStorage.setItem("ns_night-styles","true"),c&&r.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),window.addEventListener("DOMContentLoaded",()=>{if(w(),document.getElementsByTagName("body")[0].classList.contains("mdx-first-tworows")){var e=window.matchMedia("screen and (orientation:landscape) and (min-width: 750px)");e.addEventListener("change",E),E(e)}if(document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var t=window.matchMedia("(prefers-reduced-motion: reduce)");t.addEventListener("change",v),v(t)}O();const s=document.getElementsByClassName("mdx-swiper");s.length>0&&new Swiper(s[0],{autoplay:!0,loop:!0,keyboard:!0,pagination:{el:".swiper-pagination"}})}),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let e=document.getElementById("SearchBar");if(e.style.display="block",Object(n.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"in",300),Object(n.a)(Object(a.a)(".fullScreen",null,"array"),"in",300),Object(a.a)("#SearchBar > *",e=>Object(m.a)(e,{opacity:"1"},200)),setTimeout(()=>{document.getElementsByClassName("outOfSearch")[0].style.width="75%",e.classList.add("mdui-color-theme")},0),document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),x){let e=document.getElementsByClassName("OutOfsearchBox")[0];e.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",e.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1),document.getElementsByClassName("mdx-tworow-search").length&&document.getElementsByClassName("mdx-tworow-search")[0].addEventListener("click",(function(){setTimeout(()=>{document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock")},500),Object(a.a)("#mdx-search-anim",e=>{e.style.width=this.offsetWidth-12+"px",e.style.top=this.getBoundingClientRect().top+"px",e.style.left=this.getBoundingClientRect().left+"px"}),document.getElementById("mdx-search-anim").classList.add("mdx-search-anim-show"),this.style.visibility="hidden";let e=document.getElementById("SearchBar");e.style.display="block";var t=document.getElementsByClassName("outOfSearch");if(document.getElementsByClassName("mdx-theme-white").length?Object(a.a)("#mdx-search-anim",e=>{e.style.width=.75*document.getElementById("searchform").offsetWidth-12+"px",e.style.height=t[0].offsetHeight-10+"px",e.style.top=t[0].getBoundingClientRect().top+"px",e.style.left="7px",e.style.backgroundColor="rgba(152, 152, 152, 0.3)",e.style.color="rgba(255, 255, 255, .3)"}):Object(a.a)("#mdx-search-anim",e=>{e.style.width=.75*document.getElementById("searchform").offsetWidth-12+"px",e.style.height=t[0].offsetHeight-10+"px",e.style.top=t[0].getBoundingClientRect().top+"px",e.style.left="7px",e.style.backgroundColor="rgba(255, 255, 255, 0.3)",e.style.color="rgba(255, 255, 255, .3)"}),setTimeout(()=>{document.getElementById("searchform").classList.add("mdx-searchform-show"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").style.opacity=1},500),document.getElementById("mdx-search-anim").getElementsByTagName("i")[0].style.color="#fff",Object(n.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"in",500),e.classList.add("mdui-color-theme"),Object(n.a)(Object(a.a)(".fullScreen",null,"array"),"in",500),document.getElementsByClassName("seainput")[0].focus(),x){let e=document.getElementsByClassName("OutOfsearchBox")[0];e.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",e.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}g=!0}),!1);for(let e of document.getElementsByClassName("sea-close"))e.addEventListener("click",N,!1);function N(){if(document.getElementsByClassName("seainput")[0].blur(),g){var e=document.getElementsByClassName("mdx-tworow-search")[0],t=document.getElementById("mdx-search-anim");Object(n.a)(Object(a.a)(".fullScreen",null,"array"),"out",500),document.querySelector("a.mdui-btn.mdui-btn-icon.sea-close").removeAttribute("style"),document.getElementById("searchform").classList.remove("mdx-searchform-show"),t.classList.add("mdx-search-anim-show"),Object(a.a)("#mdx-search-anim",t=>{t.style.width=e.offsetWidth-22+"px",t.style.height="50px",t.style.top=e.getBoundingClientRect().top+"px",t.style.left=e.getBoundingClientRect().left+"px",t.style.backgroundColor=window.getComputedStyle(e).backgroundColor,t.style.color=window.getComputedStyle(e).color}),t.getElementsByTagName("i")[0].style.color=window.getComputedStyle(e.getElementsByTagName("i")[0]).color,Object(n.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"out",500),window.setTimeout(C,500),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e.classList.contains("mdx-search-lock")&&e.classList.toggle("mdx-search-lock"),document.getElementById("mdx-search-anim").classList.remove("mdx-search-anim-show"),document.getElementsByClassName("mdx-tworow-search")[0].style.visibility="visible"},500)}else Object(a.a)("#SearchBar > *",e=>Object(m.a)(e,{opacity:"0"},200)),Object(n.a)(Object(a.a)(".fullScreen",null,"array"),"out",300),Object(n.a)(Object(a.a)(".OutOfsearchBox",null,"array"),"out",300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout(C,300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e.classList.contains("mdx-search-lock")&&e.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300);g=!1}function C(){document.getElementById("SearchBar").style.display="none"}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&Object(m.a)(Object(a.a)("html"),{scrollTop:"0px"},500)})),window.addEventListener("DOMContentLoaded",()=>{var e=0,t=0;for(let s of document.querySelectorAll("#mdx_menu > li")){if(s.classList.contains("menu-item-has-children")){s.classList.add("mdui-collapse-item"),s.classList.remove("mdui-list-item"),s.innerHTML='<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="'.concat(s.getElementsByTagName("a")[0].getAttribute("href"),'">').concat(s.getElementsByTagName("a")[0].innerHTML,'</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">').concat(s.getElementsByTagName("ul")[0].innerHTML,"</ul>"),e=1;for(let e of s.getElementsByTagName("ul"))for(let s of e.getElementsByTagName("li"))s.classList.contains("current-menu-item")&&(t=1);t&&(s.classList.remove("current-menu-item","current_page_item"),s.classList.add("mdui-collapse-item-open")),t=0}if(e){let e=document.getElementById("mdx_menu");e.classList.add("mdui-collapse"),e.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var s="undefined"==typeof displayCookie||displayCookie,a="undefined"==typeof cookieFlagName?"mdx_cookie":cookieFlagName,n=document.getElementById("mdx-cookie-notice");s&&n&&!localStorage.getItem(a)&&(n.classList.add("mdx-cookie-notice-show"),n.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem(a,"true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1))})}});
//# sourceMappingURL=js.js.map
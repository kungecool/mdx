!function(e){function t(t){for(var n,i,d=t[0],r=t[1],l=t[2],c=0,u=[];c<d.length;c++)i=d[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(m&&m(t);u.length;)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,d=1;d<o.length;d++){var r=o[d];0!==a[r]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={1:0},s=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var d=window.webpackJsonp=window.webpackJsonp||[],r=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var m=r;s.push([124,0]),o()}({124:function(e,t,o){"use strict";o.r(t);o(14);var n=o(1),a=(o(22),o(5)),s=o(0);d=1,window.addEventListener("DOMContentLoaded",()=>{var e=Object(s.a)("div.nextpage a").innerText;if(""===e?Object(s.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}):(i=Object(s.a)("div.nextpage a").getAttribute("href"),Object(s.a)("#postlist").insertAdjacentHTML("afterend",'<div class="mdui-hoverable nextpage2">'.concat(e,"</div>")),Object(s.a)("div.nextpage",e=>{e.parentNode.removeChild(e)}),Object(s.a)("div.main-in-other").addEventListener("click",e=>{var t;e.target.classList.contains("nextpage2")&&"div"===e.target.tagName.toLowerCase()&&(Object(s.a)("div.nextpage2").style.display="none",Object(s.a)("div.nextpage2").insertAdjacentHTML("afterend",'<div class="mdui-spinner mdx-ajax-loading mdui-center"></div>'),mdui.updateSpinners(),t=i,Object(a.a)(t,{credentials:"same-origin"}).then(e=>{d++;let t=(new DOMParser).parseFromString(e,"text/html");i=t.querySelector("div.nextpage a"),enhanced_ajax&&parseInt(sessionStorage.getItem("mdx_"+window.location.href+"_loaded_page"))<=15&&(sessionStorage.setItem("mdx_"+window.location.href+"_page_"+d,window.btoa(encodeURIComponent(e))),sessionStorage.setItem("mdx_"+window.location.href+"_loaded_page",d));let o="";if(null===i)o=e.replace('<div class="nextpage mdui-center"></div>',""),Object(s.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{o=e;let t=(new DOMParser).parseFromString(o,"text/html").querySelector("div.nextpage");t.parentNode.removeChild(t),Object(s.a)("div.nextpage2").style.display=""}Object(s.a)("div.mdx-ajax-loading",e=>{e.parentNode.removeChild(e)});let n=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(o,"text/html")).getElementById("postlist").innerHTML;Object(s.a)("#postlist").insertAdjacentHTML("beforeend",n)}).catch(()=>{mdui.snackbar({message:ajax_error,timeout:5e3,position:"top"})}))})),enhanced_ajax&&document.getElementById("postlist").getElementsByTagName("a").length>0)if(sessionStorage.getItem("mdx_"+window.location.href+"_page_1")){if(sessionStorage.getItem("mdx_"+window.location.href+"_page_1")!==window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))){for(let e=1;e<=parseInt(sessionStorage.getItem("mdx_"+window.location.href+"_loaded_page"));e++)sessionStorage.removeItem("mdx_"+window.location.href+"_page_"+e);sessionStorage.setItem("mdx_"+window.location.href+"_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_"+window.location.href+"_loaded_page",1)}else if(parseInt(sessionStorage.getItem("mdx_"+window.location.href+"_loaded_page"))>1)for(let e=2;e<=parseInt(sessionStorage.getItem("mdx_"+window.location.href+"_loaded_page"));e++){var t=decodeURIComponent(window.atob(sessionStorage.getItem("mdx_"+window.location.href+"_page_"+e)));let o=(new DOMParser).parseFromString(t,"text/html"),n="";if(null===(i=o.querySelector("div.nextpage a")))n=t.replace('<div class="nextpage mdui-center"></div>',""),Object(s.a)("div.nextpage2",e=>{e.parentNode.removeChild(e)});else{n=t;let e=(new DOMParser).parseFromString(n,"text/html").querySelector("div.nextpage");e.parentNode.removeChild(e),Object(s.a)("div.nextpage2").style.display=""}let a=("undefined"!=typeof data2Parsed?data2Parsed:(new DOMParser).parseFromString(n,"text/html")).getElementById("postlist").innerHTML;Object(s.a)("#postlist").insertAdjacentHTML("beforeend",a),d=e}}else sessionStorage.setItem("mdx_"+window.location.href+"_page_1",window.btoa(encodeURIComponent(document.getElementById("postlist").getElementsByTagName("a")[0].href))),sessionStorage.setItem("mdx_"+window.location.href+"_loaded_page",1)});var i,d,r=o(2);o.p=window.mdxPublicPath;var l=0,m=0,c=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").innerHTML,u=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline").getAttribute("href"),g=document.querySelector("meta[name='theme-color']"),p=!1,y="";g&&(y=document.querySelector("meta[name='mdx-main-color']").getAttribute("content"),p=!0);var f="undefined"!=typeof offlineMode&&offlineMode,h=!1;function b(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.querySelector("div.mdui-toolbar > a.mdui-typo-headline");e>10&&0==l&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),l=1),e<=10&&1==l&&(document.getElementById("titleBar").classList.toggle("mdui-shadow-2"),l=0),e>170&&0==m&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),t.innerHTML=acPageTitle,t.removeAttribute("href"),m=1),e<=170&&1==m&&(document.querySelector(".scrollToTop").classList.toggle("mdui-fab-hide"),t.innerHTML=c,t.setAttribute("href",u),m=0),h=!1}window.onscroll=function(){h||(requestAnimationFrame(b),h=!0)},document.getElementsByClassName("scrollToTop")[0].addEventListener("click",(function(){Object(r.a)(document.getElementsByTagName("html")[0],{scrollTop:"0px"},500)}),!1),document.getElementById("tgns")&&document.getElementById("tgns").addEventListener("click",(function(){document.getElementsByTagName("body")[0].classList.contains("mdui-theme-layout-dark")?(sessionStorage.setItem("ns_night-styles","false"),p&&g.setAttribute("content",y)):(sessionStorage.setItem("ns_night-styles","true"),p&&g.setAttribute("content","#212121")),document.getElementsByTagName("body")[0].classList.toggle("mdui-theme-layout-dark")}),!1),document.getElementsByClassName("seai")[0].addEventListener("click",(function(){let e=document.getElementById("SearchBar");if(e.style.display="block",Object(n.a)(document.getElementsByClassName("OutOfsearchBox"),"in",300),Object(n.a)(document.getElementsByClassName("fullScreen"),"in",300),Array.prototype.forEach.call(document.querySelectorAll("#SearchBar > *"),e=>{Object(r.a)(e,{opacity:"1"},200)}),setTimeout(()=>{document.getElementsByClassName("outOfSearch")[0].style.width="75%",e.classList.add("mdui-color-theme")},0),document.getElementsByClassName("seainput")[0].focus(),document.getElementsByTagName("body")[0].classList.toggle("mdx-search-lock"),f){let e=document.getElementsByClassName("OutOfsearchBox")[0];e.innerHTML='<div class="searchBoxFill"></div><div class="underRes">'+tipMutiOff+"</div>",e.style.pointerEvents="auto",document.getElementsByClassName("seainput")[0].setAttribute("disabled","disabled")}}),!1);for(let e of document.getElementsByClassName("sea-close"))e.addEventListener("click",v,!1);function v(){document.getElementsByClassName("seainput")[0].blur(),Array.prototype.forEach.call(document.querySelectorAll("#SearchBar > *"),e=>{Object(r.a)(e,{opacity:"0"},200)}),Object(n.a)(document.getElementsByClassName("fullScreen"),"out",300),Object(n.a)(document.getElementsByClassName("OutOfsearchBox"),"out",300),document.getElementsByClassName("outOfSearch")[0].style.width="30%",window.setTimeout(x,300),document.getElementById("SearchBar").classList.remove("mdui-color-theme"),setTimeout(()=>{let e=document.getElementsByTagName("body")[0];e.classList.contains("mdx-search-lock")&&e.classList.toggle("mdx-search-lock"),document.getElementsByClassName("outOfSearch")[0].removeAttribute("style")},300)}function x(){document.getElementById("SearchBar").style.display="none"}function _(e){"user"!==sessionStorage.getItem("mrm_enable")?e.matches&&document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")?sessionStorage.getItem("mrm_enable")||(mdui.snackbar({message:reduce_motion_i18n_1,buttonText:reduce_motion_i18n_2,timeout:7e3,onButtonClick:function(){sessionStorage.setItem("mrm_enable","user"),document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")},position:"top"}),sessionStorage.setItem("mrm_enable","sys"),document.getElementsByTagName("body")[0].classList.add("mdx-reduce-motion")):(sessionStorage.getItem("mrm_enable")&&mdui.snackbar({message:reduce_motion_i18n_3,timeout:5e3,position:"top"}),sessionStorage.removeItem("mrm_enable")):document.getElementsByTagName("body")[0].classList.remove("mdx-reduce-motion")}document.getElementsByClassName("mdui-typo-headline")[0].addEventListener("click",(function(){1==mdx_tapToTop&&Object(r.a)(document.getElementsByTagName("html")[0],{scrollTop:"0px"},500)})),window.addEventListener("DOMContentLoaded",()=>{b();var e=0,t=0;for(let o of document.querySelectorAll("#mdx_menu > li")){if(o.classList.contains("menu-item-has-children")){o.classList.add("mdui-collapse-item"),o.classList.remove("mdui-list-item"),o.innerHTML='<div class="mdui-collapse-item-header mdui-list-item mdui-ripple"><div class="mdui-list-item-content"><a class="mdx-sub-menu-a" href="'.concat(o.getElementsByTagName("a")[0].getAttribute("href"),'">').concat(o.getElementsByTagName("a")[0].innerHTML,'</a></div><i class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i></div><ul class="mdui-collapse-item-body mdui-list mdui-list-dense">').concat(o.getElementsByTagName("ul")[0].innerHTML,"</ul>"),e=1;for(let e of o.getElementsByTagName("ul"))for(let o of e.getElementsByTagName("li"))o.classList.contains("current-menu-item")&&(t=1);t&&(o.classList.remove("current-menu-item","current_page_item"),o.classList.add("mdui-collapse-item-open")),t=0}if(e){let e=document.getElementById("mdx_menu");e.classList.add("mdui-collapse"),e.setAttribute("mdui-collapse","")}}new mdui.Collapse("#mdx_menu");var o="undefined"==typeof displayCookie||displayCookie,n=document.getElementById("mdx-cookie-notice");if(o&&n&&!localStorage.getItem("mdx_cookie")&&(n.classList.add("mdx-cookie-notice-show"),n.getElementsByTagName("button")[0].addEventListener("click",(function(){localStorage.setItem("mdx_cookie","true"),document.getElementById("mdx-cookie-notice").style.bottom="-400px",setTimeout(()=>{document.getElementById("mdx-cookie-notice").classList.remove("mdx-cookie-notice-show")},400)}),!1)),document.getElementsByTagName("body")[0].classList.contains("mdx-reduce-motion")){var a=window.matchMedia("(prefers-reduced-motion: reduce)");a.addEventListener("change",_),_(a)}})}});
//# sourceMappingURL=ac.js.map
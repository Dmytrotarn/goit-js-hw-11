import{S as f,i as l}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="43985824-437e417885fe4ca625fa28e08",p="https://pixabay.com/api/";function d(i){const r=new URLSearchParams({key:u,q:i});return fetch(`${p}?${r}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function m(i){return i.map(({webformatURL:r,largeImageURL:s,tags:n,likes:e,views:t,comments:o,downloads:c})=>`<li class="item-results">
        	<a href="${s}" class="gallery-link">
            <img src="${r}" alt="${n}" class="gallery-img"/>
        	</a>
        	<div class="wrap-info">
            <ul class="list-info">
              <li class="item-info">
                <p class="headline-info">Likes</p>
                <p class="text-info">${e}</p>
              </li>
              <li class="item-info">
                <p class="headline-info">Views</p>
                <p class="text-info">${t}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Comments</p>
                <p class="text-info">${o}</p>
            </li>
            <li class="item-info">
                <p class="headline-info">Downloads</p>
                <p class="text-info">${c}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const a=document.querySelector(".search-input"),h=document.querySelector(".search-btn"),g=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});h.addEventListener("click",L);function L(i){i.preventDefault();const r=a.value.trim();if(r==""){l.error({title:"Error",message:"Illegal operation"});return}d(r).then(s=>{if(!r){l.error({title:"Error",message:"Illegal operation"});return}a.value="",g.innerHTML=m(s.hits),y.refresh()})}
//# sourceMappingURL=commonHelpers.js.map

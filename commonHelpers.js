import{S as d,i as a}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="43985824-437e417885fe4ca625fa28e08",m="https://pixabay.com/api/";function h(i){const s=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function y(i){return i.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:o,downloads:f})=>`<li class="item-results">
        	<a href="${r}" class="gallery-link">
            <img src="${s}" alt="${n}" class="gallery-img"/>
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
                <p class="text-info">${f}</p>
            </li>
            </ul>
          </div>
        </li>`).join("")}const l=document.querySelector(".search-input");document.querySelector(".search-btn");const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=document.querySelector(".form"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});g.addEventListener("submit",S);function S(i){i.preventDefault();const s=l.value.trim();if(s===""){a.error({message:"Input field can not be empty",position:"topRight"}),l.value="",c.innerHTML="";return}u.classList.remove("is-hidden"),h(s).then(r=>{if(r.total===0){a.show({message:'"Sorry, there are no images matching your search query. Please try again!"',color:"blue",position:"topRight"}),u.classList.add("is-hidden"),c.innerHTML="";return}c.innerHTML=y(r.hits),L.refresh()}).catch(r=>{a.error({message:`${r}`})}).finally(()=>{l.value="",u.classList.add("is-hidden")})}
//# sourceMappingURL=commonHelpers.js.map

import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function p(i){return i.map(({webformatURL:t,largeImageURL:o,tags:r,likes:e,views:s,comments:a,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${o}" >
<img class="gallery-img" src="${t}" alt=${r} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${a}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${f}</li>
</ul> 
</li>


    `).join("")}function d(i){const t="https://pixabay.com/api/",o="43311498-bd26fa1e6ae7e25f586fd794c",r=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}?${r}`;return fetch(e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const h=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l=document.querySelector(".js-list"),n=document.querySelector(".js-search-form"),u=document.querySelector(".hide");n.addEventListener("submit",y);function y(i){i.preventDefault();const t=n.elements.picture.value;n.reset(),u.classList.remove("hide"),d(t).then(r=>{r.hits.length===0?c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(o(),l.innerHTML="",l.insertAdjacentHTML("beforeend",p(r.hits)),h.refresh())}).catch(r=>{console.log("error",r),o(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})});function o(){u.classList.add("hide")}}
//# sourceMappingURL=commonHelpers.js.map

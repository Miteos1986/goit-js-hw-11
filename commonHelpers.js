import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function p(o){return o.map(({webformatURL:t,largeImageURL:i,tags:r,likes:e,views:s,comments:a,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${i}" >
<img class="gallery-img" src="${t}" alt=${r} />
</a>
<ul class="gallery-list">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${a}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${f}</li>
</ul> 
</li>


    `).join("")}function d(o){const t="https://pixabay.com/api/",i="43311498-bd26fa1e6ae7e25f586fd794c",r=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${t}?${r}`;return fetch(e).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const h=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l=document.querySelector(".js-list"),n=document.querySelector(".js-search-form"),u=document.querySelector(".hide");n.addEventListener("submit",y);function y(o){o.preventDefault(),u.classList.remove("hide"),l.innerHTML="";const t=n.elements.picture.value;n.reset(),d(t).then(r=>{r.hits.length===0?(i(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})):(l.insertAdjacentHTML("beforeend",p(r.hits)),h.refresh())}).catch(r=>{console.log("error",r),i(),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{i()});function i(){u.classList.add("hide")}}
//# sourceMappingURL=commonHelpers.js.map

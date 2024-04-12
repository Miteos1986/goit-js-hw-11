import{S as l}from"./assets/vendor-5af972a3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const n="https://pixabay.com/api/",u="43311498-bd26fa1e6ae7e25f586fd794c",p=new URLSearchParams({key:u,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`${n}?${p}`).then(t=>{if(!t.ok)throw new Error(t.status);return console.log("ok"),t.json()}).then(t=>console.log(t)).catch(t=>console.log(t));const f=document.querySelector(".js-list");f.insertAdjacentHTML("beforeend",d);new l(".gallery a",{sourceAttr:"href",captionsData:"title",captionPosition:"bottom",captionDelay:200});function d(t){return t.map(({webformatURL:r,largeImageURL:a,tags:i,likes:e,views:s,comments:o,downloads:c})=>`
<li class="gallery-item">
<a class="gallery-link" href="${r}" >
<img class="gallery-img" src="${a}" alt=${i} width=360 />
</a>
<ul class="gallary">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${s}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${o}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${c}</li>
</ul> 
</li>


    `).join("")}
//# sourceMappingURL=commonHelpers.js.map

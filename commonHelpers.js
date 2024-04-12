import{i as l,S as u}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function p(r){return r.map(({webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:a,downloads:c})=>`
<li data-id=${id} class="gallery-item">
<a class="gallery-link" href="${o}" >
<img class="gallery-img" src="${s}" alt=${i} width=360 />
</a>
<ul class="gallery">
<li class="subscribe"><span class="span-subscribe">likes</span> ${e}</li>
<li class="subscribe"><span class="span-subscribe">views</span> ${t}</li>
<li class="subscribe"><span class="span-subscribe">comments</span> ${a}</li>
<li class="subscribe"><span class="span-subscribe">downloads</span> ${c}</li>
</ul> 
</li>


    `).join("")}const f="https://pixabay.com/api/",m="43311498-bd26fa1e6ae7e25f586fd794c",d=new URLSearchParams({key:m,q:"searchImg",image_type:"photo",orientation:"horizontal",safesearch:"true"}),h=`${f}?${d}`;function b(r){fetch(h).then(s=>{if(!s.ok)throw new Error(s.status);return console.log("ok"),s.json()}).then(s=>s.hits).catch(s=>l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}))}const y=document.querySelector(".js-list"),n=document.querySelector(".js-search-form");n.addEventListener("submit",g);function g(r){r.preventDefault(),n.elements.input.value,b().then(s=>y.insertAdjacentHTML("beforeend",p(s.hits)))}new u(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

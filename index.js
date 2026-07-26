import{a as p,S as m,i as n}from"./assets/vendor-rqo82K9y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",g="56863221-91f0530995b67356440c1de64";function h(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(d,{params:r}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:f,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img class="gallery-image" src="${s}" alt="${e}" />
          </a>
          
          <div class="info">
            <p class="info-item"><b>Likes</b><span class="info-value">${t}</span></p>
            <p class="info-item"><b>Views</b><span class="info-value">${a}</span></p>
            <p class="info-item"><b>Comments</b><span class="info-value">${f}</span></p>
            <p class="info-item"><b>Downloads</b><span class="info-value">${u}</span></p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){l.innerHTML=""}function v(){c.classList.add("is-active")}function P(){c.classList.remove("is-active")}const S=document.querySelector(".form");S.addEventListener("submit",q);function q(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(r===""){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}L(),v(),h(r).then(s=>{if(s.hits.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffffff",messageColor:"#ffffff"});return}b(s.hits)}).catch(s=>{n.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error(s)}).finally(()=>{P()}),o.currentTarget.reset()}
//# sourceMappingURL=index.js.map

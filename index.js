import{S as p,i as a}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d="47404996-12b53dec464063fd6255bb496",m="https://pixabay.com/api/";async function g(o,t=1,n=12){const i=`${m}?key=${d}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`,e=await fetch(i);if(!e.ok)throw new Error("Failed to fetch images");return await e.json()}function y(o){return o.map(({webformatURL:t,largeImageURL:n,tags:i,likes:e,views:r,comments:s,downloads:u})=>`<a href="${n}" class="gallery__item">
            <img src="${t}" alt="${i}" loading="lazy" />
            <div class="info">
            <p><b>Likes:</b> ${e}</p>
            <p><b>Views:</b> ${r}</p>
            <p><b>Comments:</b> ${s}</p>
            <p><b>Downloads:</b> ${u}</p>
            </div>
        </a>`).join("")}function f(o){o.innerHTML=""}const h=document.querySelector("#search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");let b=new p(".gallery a");h.addEventListener("submit",async o=>{o.preventDefault();const t=o.target.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Search field cannot be empty!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffff",messageColor:"#ffff"});return}try{c.style.display="block";const n=await g(t);if(c.style.display="none",n.hits.length===0){a.warning({title:"No Results",message:"Sorry, there are no images matching your search query.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffff",messageColor:"#ffff"}),f(l);return}f(l),l.innerHTML=y(n.hits),b.refresh()}catch{c.style.display="none",a.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#ffff",messageColor:"#ffff"})}});
//# sourceMappingURL=index.js.map
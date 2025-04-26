import{S as c,N as l,K as u,a as p,i as d}from"./assets/vendor-QzhIA74k.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=document.querySelector(".swiper-wrapper"),f=document.querySelector(".reviews-section");new c(".swiper",{modules:[l,u],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},keyboard:{enabled:!0}});const w=new IntersectionObserver((o,t)=>{o.forEach(s=>{s.isIntersecting&&(g(),t.unobserve(s.target))})},{root:null,threshold:.5});async function v(){try{return(await p.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{d.show({title:"Error",message:"Something went wrong",backgroundColor:"red",titleColor:"#fff",messageColor:"#fff"});const t=m();a.innerHTML=t}}async function g(){const t=(await v()).map(s=>`<div class="swiper-slide">
          <blockquote class="swiper-slide-text">${s.review}</blockquote>
          <div class="swiper-slide-content-wrapper">
            <img src="${s.avatar_url}" alt="Blockquote author" class="swiper-slide-image" />
            <h3 class="swiper-slide-title">${s.author}</h3>
          </div>
        </div>`);a.innerHTML=t.join("")}function m(){return`<div class="swiper-slide">
          <p>Not found</p>
        </div>`}w.observe(f);
//# sourceMappingURL=index.js.map

!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-opens]"),closeModalBtn:document.querySelector("[data-modal-closes]"),modal:document.querySelector("[data-modals]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var e=document.querySelectorAll(".corzina-btn"),t=document.querySelector(".list__js"),s=(document.querySelector(".cart"),document.querySelector(".cart__quantity")),a=document.querySelector(".fullprice"),n=(document.querySelector(".box__js"),document.querySelector(".cart-product__number"),0),l=function(e){return e.replace(/\s/g,"")},c=function(e){return String(e).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ")},i=function(){a.textContent="".concat(c(n)," zl")},o=function(){var e=document.querySelector(".list__js").children.length;s.textContent=e,0===e?s.classList.add("un-active-qvontiti"):s.classList.remove("un-active-qvontiti")};o();var r,d,y=function(e){var t=e.dataset.id;document.querySelector('.item-js[data-id="'.concat(t,'"]')).querySelector(".corzina-btn").disabled=!1,function(e){n-=Math.round(e)+1}(parseInt(l(e.querySelector(".cart-product__price").textContent))),i(),e.remove(),o()};e.forEach((function(e){e.closest(".product").setAttribute("data-id",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),e.addEventListener("click",(function(e){var s,a=e.currentTarget,r=a.closest(".product"),d=r.dataset.id,y=r.querySelector(".img").getAttribute("src"),v=r.querySelector(".title").textContent,u=l(r.querySelector(".menu__price").textContent),m=parseInt(l(r.querySelector(".menu__price").textContent));s=m,n+=Math.round(s)+1,i(),t.insertAdjacentHTML("afterbegin",function(e,t,s,a){return'\n\t\t\n        <li class="cart__item product" data-id="'.concat(a,'">\n\t\t\t<div class="cart__box">\n\t\t\t\t<img class="image-switch__img img" src ="').concat(e,'" alt="" width="130">\n\t\t\t\t<div class="btn__box">\n\t\t\t\t    <h2 class="cart-item__title">').concat(t,'</h2>\n\t\t\t\t\t<span class="cart-product__price">').concat(c(s),'</span>\n\t\t\t\t\t<div class="btn__boxs">\n\t\t\t\t\t    <button class="btn_plus">+</button>\n\t\t\t\t\t\t<span class="cart-product__number">1</span>\n                    \t<button class="btn_min">-</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button  type="button" class="corzina-btn__close">x</button>\n\t\t\t</div>\n\t\t</li>\n\t')}(y,v,u,d)),o(),a.disabled=!0}))})),t.addEventListener("click",(function(e){var t=document.querySelectorAll(".corzina-btn__close"),s=document.querySelectorAll(".btn_plus"),a=document.querySelectorAll(".btn_min"),n=!0,l=!1,c=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var r=i.value;e.target===r&&y(e.target.closest(".product"))}}catch(e){l=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(l)throw c}}var d=!0,v=!1,u=void 0;try{for(var m,p=s[Symbol.iterator]();!(d=(m=p.next()).done);d=!0){var L=m.value;e.target===L&&console.log(e.currentTarget.sdsd)}}catch(e){v=!0,u=e}finally{try{d||null==p.return||p.return()}finally{if(v)throw u}}var b=!0,S=!1,_=void 0;try{for(var q,f=a[Symbol.iterator]();!(b=(q=f.next()).done);b=!0){q.value;e.target}}catch(e){S=!0,_=e}finally{try{b||null==f.return||f.return()}finally{if(S)throw _}}})),r=document.querySelector("[data-menu-btn]"),d=document.querySelector("[data-menu]"),r.addEventListener("click",(function(){var e="true"===r.getAttribute("aria-expended")||!1;r.classList.toggle("is-open"),r.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),d.classList.toggle("is-open")}));var v=document.querySelector(".cap__list"),u=document.querySelector(".cap__logo"),m=v.querySelector(".golovna"),p=v.querySelector(".roly"),L=v.querySelector(".sety"),b=v.querySelector(".napoy"),S=v.querySelector(".salaty"),_=v.querySelector(".akciy"),q=(v.querySelector(".pl"),v.querySelector(".uk")),f=document.querySelector(".ro"),g=document.querySelector(".se"),k=document.querySelector(".nap"),E=document.querySelector(".sal"),h=document.querySelector(".js_ak"),x=document.querySelector(".js_menu"),j=document.querySelector(".js_napoy"),A=document.querySelector(".js_salat"),M=document.querySelector(".js_set"),w=document.querySelector(".js_golo"),C=document.querySelector("[data-menu-btn]"),z=document.querySelector("[data-menu]");function B(){var e="true"===C.getAttribute("aria-expended")||!1;C.classList.toggle("is-open"),C.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),z.classList.toggle("is-open")}f.addEventListener("click",(function(){h.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="none",x.style.display="block",m.classList.remove("active"),b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),p.classList.add("active")})),p.addEventListener("click",(function(){h.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="none",x.style.display="block",m.classList.remove("active"),b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),p.classList.add("active"),B()})),m.addEventListener("click",(function(){h.style.display="none",x.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),p.classList.remove("active"),m.classList.add("active"),B()})),u.addEventListener("click",(function(){h.style.display="none",x.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),p.classList.remove("active"),m.classList.add("active")})),q.addEventListener("click",(function(){h.style.display="none",x.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",B()})),L.addEventListener("click",(function(){h.style.display="none",x.style.display="none",j.style.display="none",w.style.display="none",A.style.display="none",M.style.display="block",b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.add("active"),B()})),g.addEventListener("click",(function(){h.style.display="none",x.style.display="none",j.style.display="none",w.style.display="none",A.style.display="none",M.style.display="block",b.classList.remove("active"),S.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.add("active")})),b.addEventListener("click",(function(){h.style.display="none",x.style.display="none",M.style.display="none",w.style.display="none",A.style.display="none",j.style.display="block",S.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.remove("active"),b.classList.add("active"),B()})),k.addEventListener("click",(function(){h.style.display="none",x.style.display="none",M.style.display="none",w.style.display="none",A.style.display="none",j.style.display="block",S.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.remove("active"),b.classList.add("active")})),S.addEventListener("click",(function(){h.style.display="none",x.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",A.style.display="block",b.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.remove("active"),S.classList.add("active"),B()})),E.addEventListener("click",(function(){h.style.display="none",x.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",A.style.display="block",b.classList.remove("active"),_.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.remove("active"),S.classList.add("active")})),_.addEventListener("click",(function(){A.style.display="none",x.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",h.style.display="block",b.classList.remove("active"),S.classList.remove("active"),p.classList.remove("active"),m.classList.remove("active"),L.classList.remove("active"),_.classList.add("active"),B()})),document.querySelector(" .js-speaker-form").addEventListener("sumbit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEarch((function(e,t){return console.log("".concat(t,": ").concat(e))}))}))}();
//# sourceMappingURL=index.55bb6b21.js.map

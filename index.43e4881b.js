!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-opens]"),closeModalBtn:document.querySelector("[data-modal-closes]"),modal:document.querySelector("[data-modals]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var e=document.querySelectorAll(".corzina-btn"),t=document.querySelector(".list__js"),s=(document.querySelector(".cart"),document.querySelector(".cart__quantity")),a=document.querySelector(".fullprice"),n=(document.querySelector(".box__js"),document.querySelector(".cart-product__number"),0),c=function(e){return e.replace(/\s/g,"")},l=function(e){return Number.parseInt(e)},o=function(){a.textContent="".concat(l(n)," zl")},i=function(){var e=document.querySelector(".list__js").children.length;s.textContent=e,0===e?s.classList.add("un-active-qvontiti"):s.classList.remove("un-active-qvontiti")};i();var r=function(e){var t=e.dataset.id;document.querySelector('.item-js[data-id="'.concat(t,'"]')).querySelector(".corzina-btn").disabled=!1,function(e){n-=Math.round(e)}(parseInt(c(e.querySelector(".cart-product__price").textContent))),o(),e.remove(),i()};e.forEach((function(e){e.closest(".product").setAttribute("data-id",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),e.addEventListener("click",(function(e){var s,a=e.currentTarget,r=a.closest(".product"),d=r.dataset.id,y=r.querySelector(".img").getAttribute("src"),u=r.querySelector(".title").textContent,v=c(r.querySelector(".menu__price").textContent),p=parseInt(c(r.querySelector(".menu__price").textContent));s=p,n+=Math.round(s),o(),t.insertAdjacentHTML("afterbegin",function(e,t,s,a){return'\n\t\t\n        <li class="cart__item product" data-id="'.concat(a,'">\n\t\t\t<div class="cart__box">\n\t\t\t\t<img class="image-switch__img img" src ="').concat(e,'" alt="" width="130">\n\t\t\t\t<div class="btn__box">\n\t\t\t\t    <h2 class="cart-item__title">').concat(t,'</h2>\n\t\t\t\t\t<span class="cart-product__price">').concat(l(s),'</span>\n\t\t\t\t\t<div class="btn__boxs">\n\t\t\t\t\t    <button class="btn_plus">+</button>\n\t\t\t\t\t\t<span class="cart-product__number">1</span>\n                    \t<button class="btn_min">-</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button  type="button" class="corzina-btn__close">x</button>\n\t\t\t</div>\n\t\t</li>\n\t')}(y,u,v,d)),i(),a.disabled=!0}))}));var d,y,u=0,v=0;t.addEventListener("click",(function(e){var t=document.querySelectorAll(".corzina-btn__close"),s=document.querySelectorAll(".btn_plus"),a=document.querySelectorAll(".btn_min"),n=!0,c=!1,l=void 0;try{for(var o,i=t[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value;e.target===d&&r(e.target.closest(".product"))}}catch(e){c=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(c)throw l}}var y=!0,p=!1,m=void 0;try{for(var L,_=s[Symbol.iterator]();!(y=(L=_.next()).done);y=!0){var b=L.value;if(e.target===b){u=Number(e.target.parentNode.querySelector(".cart-product__number").textContent),u+=1,e.target.parentNode.querySelector(".cart-product__number").textContent=u;var S=e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent;v=u*Number(S),e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent=v}}}catch(e){p=!0,m=e}finally{try{y||null==_.return||_.return()}finally{if(p)throw m}}var q=!0,f=!1,g=void 0;try{for(var k,x=a[Symbol.iterator]();!(q=(k=x.next()).done);q=!0){var E=k.value;if(e.target===E){(u-=1)<1?u=1:e.target.parentNode.querySelector(".cart-product__number").textContent=u;var h=e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent;v=(u-1)*Number(h),e.target.parentNode.parentNode.querySelector(".cart-product__price").textContent=v}}}catch(e){f=!0,g=e}finally{try{q||null==x.return||x.return()}finally{if(f)throw g}}})),d=document.querySelector("[data-menu-btn]"),y=document.querySelector("[data-menu]"),d.addEventListener("click",(function(){var e="true"===d.getAttribute("aria-expended")||!1;d.classList.toggle("is-open"),d.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),y.classList.toggle("is-open")}));var p=document.querySelector(".cap__list"),m=document.querySelector(".cap__logo"),L=p.querySelector(".golovna"),_=p.querySelector(".roly"),b=p.querySelector(".sety"),S=p.querySelector(".napoy"),q=p.querySelector(".salaty"),f=p.querySelector(".akciy"),g=(p.querySelector(".pl"),p.querySelector(".uk")),k=document.querySelector(".ro"),x=document.querySelector(".se"),E=document.querySelector(".nap"),h=document.querySelector(".sal"),N=document.querySelector(".js_ak"),C=document.querySelector(".js_menu"),j=document.querySelector(".js_napoy"),A=document.querySelector(".js_salat"),M=document.querySelector(".js_set"),w=document.querySelector(".js_golo"),z=document.querySelector("[data-menu-btn]"),B=document.querySelector("[data-menu]");function I(){var e="true"===z.getAttribute("aria-expended")||!1;z.classList.toggle("is-open"),z.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),B.classList.toggle("is-open")}k.addEventListener("click",(function(){N.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="none",C.style.display="block",L.classList.remove("active"),S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),b.classList.remove("active"),_.classList.add("active")})),_.addEventListener("click",(function(){N.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="none",C.style.display="block",L.classList.remove("active"),S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),b.classList.remove("active"),_.classList.add("active"),I()})),L.addEventListener("click",(function(){N.style.display="none",C.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),b.classList.remove("active"),_.classList.remove("active"),L.classList.add("active"),I()})),m.addEventListener("click",(function(){N.style.display="none",C.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),b.classList.remove("active"),_.classList.remove("active"),L.classList.add("active")})),g.addEventListener("click",(function(){N.style.display="none",C.style.display="none",j.style.display="none",A.style.display="none",M.style.display="none",w.style.display="block",I()})),b.addEventListener("click",(function(){N.style.display="none",C.style.display="none",j.style.display="none",w.style.display="none",A.style.display="none",M.style.display="block",S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.add("active"),I()})),x.addEventListener("click",(function(){N.style.display="none",C.style.display="none",j.style.display="none",w.style.display="none",A.style.display="none",M.style.display="block",S.classList.remove("active"),q.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.add("active")})),S.addEventListener("click",(function(){N.style.display="none",C.style.display="none",M.style.display="none",w.style.display="none",A.style.display="none",j.style.display="block",q.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.remove("active"),S.classList.add("active"),I()})),E.addEventListener("click",(function(){N.style.display="none",C.style.display="none",M.style.display="none",w.style.display="none",A.style.display="none",j.style.display="block",q.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.remove("active"),S.classList.add("active")})),q.addEventListener("click",(function(){N.style.display="none",C.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",A.style.display="block",S.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.remove("active"),q.classList.add("active"),I()})),h.addEventListener("click",(function(){N.style.display="none",C.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",A.style.display="block",S.classList.remove("active"),f.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.remove("active"),q.classList.add("active")})),f.addEventListener("click",(function(){A.style.display="none",C.style.display="none",M.style.display="none",w.style.display="none",j.style.display="none",N.style.display="block",S.classList.remove("active"),q.classList.remove("active"),_.classList.remove("active"),L.classList.remove("active"),b.classList.remove("active"),f.classList.add("active"),I()})),document.querySelector(" .js-speaker-form").addEventListener("sumbit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEarch((function(e,t){return console.log("".concat(t,": ").concat(e))}))}))}();
//# sourceMappingURL=index.43e4881b.js.map

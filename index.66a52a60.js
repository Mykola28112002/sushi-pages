!function(){var e,t,s;e=document.querySelector(".fullprice"),t=document.querySelector(".print_fullprice"),(s={openModalBtn:document.querySelector("[data-modal-opens]"),closeModalBtn:document.querySelector("[data-modal-closes]"),modal:document.querySelector("[data-modals]")}).openModalBtn.addEventListener("click",(function(){t.textContent=e.textContent,s.modal.classList.toggle("is-hidden")})),s.closeModalBtn.addEventListener("click",(function(){s.modal.classList.toggle("is-hidden")}));var n=document.querySelectorAll(".corzina-btn"),c=document.querySelector(".list__js"),a=(document.querySelector(".cart"),document.querySelector(".cart__quantity")),o=document.querySelector(".fullprice"),l=(document.querySelector(".box__js"),document.querySelector(".cart-product__number"),0),r=function(e){return e.replace(/\s/g,"")},i=function(e){return Number.parseInt(e)},d=function(){var e=document.querySelector(".list__js").children.length;a.textContent=e,0===e?a.classList.add("un-active-qvontiti"):a.classList.remove("un-active-qvontiti")},u=function(){o.textContent="".concat(i(l)," zl")},y=document.querySelector(".print_fullprice"),v=function(){y.textContent="".concat(i(p)," zl")},p=0,m=0,L=function(e,t){return m=t*e},_=function(e){return p=0,p+=Math.round(e)};d();var S=function(e){var t=e.dataset.id;document.querySelector('.item-js[data-id="'.concat(t,'"]')).querySelector(".corzina-btn").disabled=!1;var s=parseInt(r(e.querySelector(".cart-product__price-sum").textContent));!function(e){l-=Math.round(e)}(s),u(),e.remove(),_(s),v(),d()};n.forEach((function(e){e.closest(".product").setAttribute("data-id",Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)),e.addEventListener("click",(function(e){var t,s=e.currentTarget,n=s.closest(".product"),a=n.dataset.id,o=n.querySelector(".img").getAttribute("src"),y=n.querySelector(".title").textContent,p=r(n.querySelector(".menu__price").textContent),m=parseInt(r(n.querySelector(".menu__price").textContent));t=m,l+=Math.round(t),u(),v(),c.insertAdjacentHTML("afterbegin",function(e,t,s,n){return'\n\t\t\n        <li class="cart__item product" data-id="'.concat(n,'">\n\t\t\t<div class="cart__box">\n\t\t\t\t<img class="image-switch__img img" src ="').concat(e,'" alt="" width="130">\n\t\t\t\t<div class="btn__box">\n\t\t\t\t    <h2 class="cart-item__title">').concat(t,'</h2>\n\t\t\t\t\t<span class="cart-product__price-sum">').concat(i(s),'</span>\n\t\t\t\t\t<span class="cart-product__price">').concat(i(s),'</span>\n\t\t\t\t\t<div class="btn__boxs">\n\t\t\t\t\t\t<input class="cart-product__number" minlength="1" maxlength="3" value="1" type="number" name="value" >\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button  type="button" class="corzina-btn__close">x</button>\n\t\t\t</div>\n\t\t</li>\n\t')}(o,y,p,a)),d(),s.disabled=!0}))})),c.addEventListener("click",(function(e){document.querySelector(".fullprice"),document.querySelector(".print_fullprice");var t=document.querySelectorAll(".corzina-btn__close"),s=!0,n=!1,c=void 0;try{for(var a,o=t[Symbol.iterator]();!(s=(a=o.next()).done);s=!0){var l=a.value;if(e.target===l){S(e.target.closest(".product"));var r=e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent;console.log(r),_(r),v()}}}catch(e){n=!0,c=e}finally{try{s||null==o.return||o.return()}finally{if(n)throw c}}var i=document.querySelectorAll(".cart-product__number"),d=!0,u=!1,y=void 0;try{for(var p,q=i[Symbol.iterator]();!(d=(p=q.next()).done);d=!0){var g=p.value;e.target===g&&g.addEventListener("input",(function(e){var t=e.target.value;if(1==t){var s=e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price").textContent;console.log(s),e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent=s,console.log(e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent),L(s,t);var n=document.querySelector(".fullprice");document.querySelector(".print_fullprice").textContent=n.textContent}if(t>=2){var c=e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price").textContent;L(c,t),e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent=m;var a=e.currentTarget.parentNode.parentNode.querySelector(".cart-product__price-sum").textContent;_(a),v()}else console.log("kjxnfvljknzslkvn")}))}}catch(e){u=!0,y=e}finally{try{d||null==q.return||q.return()}finally{if(u)throw y}}})),d();var q,g,f=document.querySelector(".js-speaker-form");document.querySelector(".form__btn-order");f.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.userName.value,s=e.currentTarget.tel.value,n=e.currentTarget.mail.value,c=e.currentTarget.comment.value,a=e.currentTarget.parentNode.querySelector(".product");console.log(t),console.log(s),console.log(n),console.log(c),console.log(a)})),q=document.querySelector("[data-menu-btn]"),g=document.querySelector("[data-menu]"),q.addEventListener("click",(function(){var e="true"===q.getAttribute("aria-expended")||!1;q.classList.toggle("is-open"),q.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),g.classList.toggle("is-open")}));var b=document.querySelector(".cap__list"),k=document.querySelector(".cap__logo"),x=b.querySelector(".golovna"),E=b.querySelector(".roly"),h=b.querySelector(".sety"),C=b.querySelector(".napoy"),N=b.querySelector(".salaty"),j=b.querySelector(".akciy"),T=(b.querySelector(".pl"),b.querySelector(".uk")),A=document.querySelector(".ro"),M=document.querySelector(".se"),z=document.querySelector(".nap"),w=document.querySelector(".sal"),B=document.querySelector(".js_ak"),D=document.querySelector(".js_menu"),I=document.querySelector(".js_napoy"),F=document.querySelector(".js_salat"),H=document.querySelector(".js_set"),G=document.querySelector(".js_golo"),J=document.querySelector("[data-menu-btn]"),K=document.querySelector("[data-menu]");function O(){var e="true"===J.getAttribute("aria-expended")||!1;J.classList.toggle("is-open"),J.setAttribute("aria-expended",!e),document.body.classList.toggle("modal-open"),K.classList.toggle("is-open")}A.addEventListener("click",(function(){B.style.display="none",I.style.display="none",F.style.display="none",H.style.display="none",G.style.display="none",D.style.display="block",x.classList.remove("active"),C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),h.classList.remove("active"),E.classList.add("active")})),E.addEventListener("click",(function(){B.style.display="none",I.style.display="none",F.style.display="none",H.style.display="none",G.style.display="none",D.style.display="block",x.classList.remove("active"),C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),h.classList.remove("active"),E.classList.add("active"),O()})),x.addEventListener("click",(function(){B.style.display="none",D.style.display="none",I.style.display="none",F.style.display="none",H.style.display="none",G.style.display="block",C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),h.classList.remove("active"),E.classList.remove("active"),x.classList.add("active"),O()})),k.addEventListener("click",(function(){B.style.display="none",D.style.display="none",I.style.display="none",F.style.display="none",H.style.display="none",G.style.display="block",C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),h.classList.remove("active"),E.classList.remove("active"),x.classList.add("active")})),T.addEventListener("click",(function(){B.style.display="none",D.style.display="none",I.style.display="none",F.style.display="none",H.style.display="none",G.style.display="block",O()})),h.addEventListener("click",(function(){B.style.display="none",D.style.display="none",I.style.display="none",G.style.display="none",F.style.display="none",H.style.display="block",C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.add("active"),O()})),M.addEventListener("click",(function(){B.style.display="none",D.style.display="none",I.style.display="none",G.style.display="none",F.style.display="none",H.style.display="block",C.classList.remove("active"),N.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.add("active")})),C.addEventListener("click",(function(){B.style.display="none",D.style.display="none",H.style.display="none",G.style.display="none",F.style.display="none",I.style.display="block",N.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.remove("active"),C.classList.add("active"),O()})),z.addEventListener("click",(function(){B.style.display="none",D.style.display="none",H.style.display="none",G.style.display="none",F.style.display="none",I.style.display="block",N.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.remove("active"),C.classList.add("active")})),N.addEventListener("click",(function(){B.style.display="none",D.style.display="none",H.style.display="none",G.style.display="none",I.style.display="none",F.style.display="block",C.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.remove("active"),N.classList.add("active"),O()})),w.addEventListener("click",(function(){B.style.display="none",D.style.display="none",H.style.display="none",G.style.display="none",I.style.display="none",F.style.display="block",C.classList.remove("active"),j.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.remove("active"),N.classList.add("active")})),j.addEventListener("click",(function(){F.style.display="none",D.style.display="none",H.style.display="none",G.style.display="none",I.style.display="none",B.style.display="block",C.classList.remove("active"),N.classList.remove("active"),E.classList.remove("active"),x.classList.remove("active"),h.classList.remove("active"),j.classList.add("active"),O()})),document.querySelector(" .js-speaker-form").addEventListener("sumbit",(function(e){e.preventDefault(),new FormData(e.currentTarget).forEarch((function(e,t){return console.log("".concat(t,": ").concat(e))}))}))}();
//# sourceMappingURL=index.66a52a60.js.map

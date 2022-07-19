

const blocUk = document.querySelector(".cap__list");

const btnLogo = document.querySelector(".cap__logo");
const btnGolovnaUk = blocUk.querySelector(".golovna");
const btnGoRolyUk = blocUk.querySelector(".roly");
const btnGoSetyUk = blocUk.querySelector(".sety");
const btnGoNapoyUk = blocUk.querySelector(".napoy");
const btnGoSalatyUk = blocUk.querySelector(".salaty");
const btnGoAkciyUk = blocUk.querySelector(".akciy");
const btnGoPlUk = blocUk.querySelector(".pl");
const btnGoUUk = blocUk.querySelector(".uk");

const ro = document.querySelector(".ro");
const se = document.querySelector(".se");
const na = document.querySelector(".nap");
const sal = document.querySelector(".sal");


const ak = document.querySelector(".js_ak");
const menu = document.querySelector(".js_menu");
const napoy = document.querySelector(".js_napoy");
const salat = document.querySelector(".js_salat");
const set = document.querySelector(".js_set");
const golo = document.querySelector(".js_golo");

const menuBtnRef = document.querySelector('[data-menu-btn]');
const mobileMenuRef = document.querySelector('[data-menu]');

function close() {
     const expanded =
            menuBtnRef.getAttribute("aria-expended") === 'true' || false;
        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute('aria-expended', !expanded);
        document.body.classList.toggle('modal-open');
        mobileMenuRef.classList.toggle('is-open');
}
   
ro.addEventListener('click', () => {
    ak.style.display = 'none';
    napoy.style.display = 'none';
    salat.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';

    menu.style.display = 'block';

    btnGolovnaUk.classList.remove('active');
    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoRolyUk.classList.add('active');
});
btnGoRolyUk.addEventListener('click', () => {
    ak.style.display = 'none';
    napoy.style.display = 'none';
    salat.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';

    menu.style.display = 'block';

    btnGolovnaUk.classList.remove('active');
    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoRolyUk.classList.add('active');

    close()
   

});

btnGolovnaUk.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    napoy.style.display = 'none';
    salat.style.display = 'none';
    set.style.display = 'none';

    golo.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');

    btnGolovnaUk.classList.add('active');
    
    close()
    
});
btnLogo.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    napoy.style.display = 'none';
    salat.style.display = 'none';
    set.style.display = 'none';

    golo.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');

    btnGolovnaUk.classList.add('active');
    
    
});
btnGoUUk.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    napoy.style.display = 'none';
    salat.style.display = 'none';
    set.style.display = 'none';

    golo.style.display = 'block';
    
    close()
    
});
btnGoSetyUk.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    napoy.style.display = 'none';
    golo.style.display = 'none';
    salat.style.display = 'none';

    set.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');

    btnGoSetyUk.classList.add('active');

    close()
});
se.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    napoy.style.display = 'none';
    golo.style.display = 'none';
    salat.style.display = 'none';

    set.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');

    btnGoSetyUk.classList.add('active');

});
btnGoNapoyUk.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';
    salat.style.display = 'none';

    napoy.style.display = 'block';

    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoNapoyUk.classList.add('active');

    close()
});
na.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';
    salat.style.display = 'none';

    napoy.style.display = 'block';

    btnGoSalatyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoNapoyUk.classList.add('active');
});
btnGoSalatyUk.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';
    napoy.style.display = 'none';

    salat.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoSalatyUk.classList.add('active');

    close()
});
sal.addEventListener('click', () => {
    ak.style.display = 'none';
    menu.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';
    napoy.style.display = 'none';

    salat.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoAkciyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoSalatyUk.classList.add('active');
});
btnGoAkciyUk.addEventListener('click', () => {
    salat.style.display = 'none';
    menu.style.display = 'none';
    set.style.display = 'none';
    golo.style.display = 'none';
    napoy.style.display = 'none';

    ak.style.display = 'block';

    btnGoNapoyUk.classList.remove('active');
    btnGoSalatyUk.classList.remove('active');
    btnGoRolyUk.classList.remove('active');
    btnGolovnaUk.classList.remove('active');
    btnGoSetyUk.classList.remove('active');

    btnGoAkciyUk.classList.add('active');

    close()
});

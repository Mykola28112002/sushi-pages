import './js/cart';
import './js/corzina';
import './js/form';
import './js/menu';
import './js//clickBtn';

(() => {
    document
        .querySelector(' .js-speaker-form')
        .addEventListener('sumbit', e => {
            e.preventDefault();

            new FormData(e.currentTarget).forEarch((value, name) =>
                console.log(`${name}: ${value}`),
            );
        });
})();

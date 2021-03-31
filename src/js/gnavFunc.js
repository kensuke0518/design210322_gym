'use strict';

export const gnavFunc = () => {
    const gnavOpenBtn = document.querySelector('.js-gnav-open');
    const gnav = document.querySelector('.js-gnav');
    gnavOpenBtn.addEventListener('click', e => {
        gnavOpenBtn.classList.toggle('is-gnav-open');
        gnav.classList.toggle('is-gnav-open');
        document.body.classList.toggle('is-gnav-open');
    });
}


'use strict';

const bodyWidth = document.body.clientWidth;
const mqmd = 599; //ブレークポイント
export const gnavScrollFunc = () => {
    const header = document.querySelector('.l-header');
    const gnav = document.querySelector('.l-gnav');
    const headerBottom = header.getBoundingClientRect().bottom;
    const gnavHeight = gnav.clientHeight;
    const headerScrollBottom = window.pageYOffset + headerBottom;

    const headerPosition = () => {
        const scroll = window.pageYOffset;
        if (scroll >= headerScrollBottom) {
            gnav.style.position = 'fixed';
            gnav.style.top = 0;
            header.style.paddingBottom = gnavHeight + 'px';
        }
        else {
            gnav.style.position = '';
            gnav.style.top = '';
            header.style.paddingBottom = '';
        }
    }
    window.addEventListener('scroll', () => headerPosition(), false);
}
//画面サイズを可変した時に再判定したい
const bodyMovin = () => {
    if (bodyWidth > mqmd) {
        gnavScrollFunc();
    }
};
window.onload = bodyMovin;
//window.onresize = bodyMovin;
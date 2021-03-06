'use strict';

const mqmd = 599; //ブレークポイント
export const gnavScrollFunc = () => {
    const header = document.querySelector('.l-header');
    const gnav = document.querySelector('.l-gnav');
    
    const headerPosition = () => {
        const headerPb = isNaN(parseInt(header.style.paddingBottom)) ? 0 : parseInt(header.style.paddingBottom);
        const headerBottom = header.getBoundingClientRect().bottom - headerPb;
        const headerScrollBottom = window.pageYOffset + headerBottom;
        
        const scroll = window.pageYOffset;
        const gnavHeight = gnav.clientHeight;
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
    window.addEventListener('scroll', () => {
        const bodyWidth = document.body.clientWidth;
        if (bodyWidth > mqmd) {
            headerPosition();
        }
    });
}

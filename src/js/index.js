(() => {
    window.addEventListener('scroll', function () {
        const scroll = window.pageYOffset;
        const triggerClass = document.querySelectorAll('.scroll-trigger');
        const animateClass = 'is-show';

        for (let i = 0; i < triggerClass.length; i++) {
            const triggerTop = triggerClass[i].getBoundingClientRect().top;
            const windowHeight = window.outerHeight;
            if (scroll > triggerTop - windowHeight / 2) {
                triggerClass[i].classList.add(animateClass);
            }
        }
    })
})();

const gnavScroll = () => {
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
        else{
            gnav.style.position = '';
            gnav.style.top = '';
            header.style.paddingBottom = '';
        }
    }
    window.addEventListener('scroll', () => headerPosition());
}
gnavScroll();
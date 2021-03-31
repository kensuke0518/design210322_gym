'use strict';

export const scrollTriggerFunc = () => {
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
};

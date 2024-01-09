// import {
//     navBarEl,
//     heroSectionEl,
//     aboutSectionEl,
//     projectsSectionEl,
//     adventuresSectionEl,
//     contactSectionEl,
// } from '../constants.js';

// const sections = {
//     'hero': heroSectionEl,
//     'about': aboutSectionEl,
//     'projects': projectsSectionEl,
//     'adventures': adventuresSectionEl,
//     'contact': contactSectionEl
// };


// const clickHandler = event => {
//     event.preventDefault();

//     const target = event.target.dataset.target;
    
//     if (target && sections[target]) {
//         sections[target].scrollIntoView({behavior: 'smooth'});
//     }
// };

// const checkActiveSection =  () => {
//     for (const [key, section] of Object.entries(sections)) {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= 0) {
//             document.querySelector('.nav-bar__page-link--active')?.classList.remove('nav-bar__page-link--active');
//             document.querySelector(`[data-target=${key}]`)?.classList.add('nav-bar__page-link--active');
//         }
//     }
// };


// navBarEl.addEventListener('click', clickHandler);

// window.addEventListener('scroll', checkActiveSection);
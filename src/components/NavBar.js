import {
    navBarEl,
    navBarMenuEl,
    heroSectionEl,
    aboutSectionEl,
    projectsSectionEl,
    adventuresSectionEl,
    contactSectionEl,
} from '../common.js';

const sections = {
    'hero': heroSectionEl,
    'about': aboutSectionEl,
    'projects': projectsSectionEl,
    'adventures': adventuresSectionEl,
    'contact': contactSectionEl
};

const clickHandler = event => {
    event.preventDefault();

    const clickedLink = event.target.closest('.nav-bar__menu-link');
    const toggleBtn = event.target.closest('.nav-bar__toggle-btn');
 
    if (clickedLink) {
        scrollToLink(clickedLink);
    } else if (toggleBtn) {
        toggleDropdown();
    }
};

const scrollHandler = () => {
    const scrollPosition = window.scrollY;
    
    for (const [sectionName, sectionEl] of Object.entries(sections)) {
        const sectionTop = sectionEl.offsetTop;

        if (scrollPosition >= sectionTop) {
            const activeLink = document.querySelector(`[data-target="${sectionName}"]`);
            toggleActiveLink(activeLink);
        }
    }
};

const scrollToLink = link => {
    const target = link.dataset.target;

    if (target && sections[target]) {
        // only toggle the menu if it's currently expanded
        if (navBarMenuEl.classList.contains('nav-bar__menu--expanded')) toggleDropdown();
        sections[target].scrollIntoView({behavior: 'smooth'});
    }
}

const toggleDropdown = () => {
    navBarMenuEl.classList.toggle('nav-bar__menu--expanded');
};

const toggleActiveLink = link => {
    document.querySelectorAll('.nav-bar__menu-link--active').forEach(element => {
        element.classList.remove('nav-bar__menu-link--active');
    });
    link.classList.toggle('nav-bar__menu-link--active');
}

navBarEl.addEventListener('click', clickHandler);

window.addEventListener('scroll', scrollHandler);
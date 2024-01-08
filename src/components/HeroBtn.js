import {
    heroBtnEl,
    aboutSectionEl,
} from '../constants.js';

const clickHandler = () => {
    aboutSectionEl.scrollIntoView({behavior: 'smooth'});
};

heroBtnEl.addEventListener('click', clickHandler);
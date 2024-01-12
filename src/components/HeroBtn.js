import {
    heroBtnEl,
    aboutSectionEl,
} from '../common.js';

const clickHandler = () => {
    aboutSectionEl.scrollIntoView({behavior: 'smooth'});
};

heroBtnEl.addEventListener('click', clickHandler);
import {
    adventureDetailsEl,
} from '../common.js';

const renderAdventureDetails = adventure => {
    const adventureDetailsHTML = `
        <i class='fa-solid fa-x adventure-details__close-btn'></i>
        <h3 class='adventure-details__title'>${adventure.title}</h3>
    `;

    adventureDetailsEl.innerHTML = adventureDetailsHTML;

    adventureDetailsEl.classList.add('adventure-details--visible');

    const closeBtnEl = document.querySelector('.adventure-details__close-btn');

    closeBtnEl.addEventListener('click', () => {
        adventureDetailsEl.classList.remove('adventure-details--visible');
    });
};

export default renderAdventureDetails;
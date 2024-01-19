import {
    adventureDetailsEl,
} from '../common.js';

const renderAdventureDetails = adventure => {
    const adventureDetailsHTML = `
        <i class='fa-solid fa-x adventure-details__close-btn'></i>
        <h3 class='adventure-details__title'>${adventure.title}</h3>
        <div class='adventure-details__visits'>
            ${adventure.visits.map((visit, index) => `
                <button class='adventure-details__visit__date' data-index=${index}>${visit.date}</button>
            `).join('')}
            ${adventure.visits.map(visit => `
                <div class='adventure-details__visit'>
                    <div class='adventure-details__visit__images'>
                        ${visit.images.map(image => `
                            <img src=${image} class='adventure-details__visit__image'>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    adventureDetailsEl.innerHTML = adventureDetailsHTML;

    adventureDetailsEl.classList.add('adventure-details--visible');

    const closeBtnEl = document.querySelector('.adventure-details__close-btn');

    closeBtnEl.addEventListener('click', () => {
        adventureDetailsEl.classList.remove('adventure-details--visible');
    });
};

export default renderAdventureDetails;
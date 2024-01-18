import {
    adventureDetailsEl,
} from '../common.js';

const renderAdventureDetails = adventure => {
    console.log(adventure);
    const adventureDetailsHTML = `
        <i class='fa-solid fa-x adventure-details__close-btn'></i>
        <h3 class='adventure-details__title'>${adventure.title}</h3>
        <div class='adventure-details__visits'>
            ${adventure.visits.map(visit => `
                <div class='adventure-details__visit'>
                    <p class='adventure-details__visit__date'>${visit.date}</p>
                    <div class='adventure-details__visit__images'>
                        ${Object.values(visit.images).map(image => `
                            <img src=${image.default} class='adventure-details__visit__image'>
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
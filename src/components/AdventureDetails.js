import {
    adventureDetailsEl,
} from '../common.js';

const renderAdventureDetails = adventure => {
    const adventureDetailsHTML = `
        <i class='fa-solid fa-x adventure-details__close-btn'></i>
        <h3 class='adventure-details__title'>${adventure.title}</h3>
        <div class='adventure-details__dates'>
            ${adventure.visits.map((visit, index) => `
                <button class='adventure-details__date-btn' data-index=${index} ${index == 0 ? 'disabled':''}>${visit.date}</button>
            `).join('')}
        </div>
        ${adventure.visits.map((visit, index) => `
            <div class='adventure-details__visit ${index == 0 ? 'adventure-details__visit--visible':''}' data-index=${index}>
                ${visit.note ? 
                `<div class='adventure-details__note'>
                    <p class='adventure-details__note-text'>" ${visit.note} "</p>
                </div>` 
                : ''}
                <img src=${visit.images[0]} class='adventure-details__main-image'>
                <div class='adventure-details__images'>
                    ${visit.images.map((image, index) => `
                        <img src=${image} class='adventure-details__image ${index == 0 ? 'adventure-details__image--selected':''}'>
                    `).join('')}
                </div>
            </div>
        `).join('')}
    `;

    // Set details content and make visible
    adventureDetailsEl.innerHTML = adventureDetailsHTML;
    adventureDetailsEl.classList.add('adventure-details--visible');

    // Make sure main page doesn't scroll while details are open
    document.body.style.overflow = 'hidden';

    // Set up close button logic
    const closeBtnEl = document.querySelector('.adventure-details__close-btn');
    closeBtnEl.addEventListener('click', () => {
        adventureDetailsEl.classList.remove('adventure-details--visible');

        // Allow main page to scroll again
        document.body.style.overflow = 'auto';
    });

    // Select the newly created 
    const dateBtnEls = document.querySelectorAll('.adventure-details__date-btn');
    const visitEls = document.querySelectorAll('.adventure-details__visit');
    
    // No need to set up listeners if there is only one visit / date
    if (dateBtnEls.length > 1) {
        dateBtnEls.forEach(btn => {
            const btnIndex = btn.getAttribute('data-index');
            btn.addEventListener('click', () => {
                // Toggle the appropriate visit's visibility
                visitEls.forEach(visit => {
                    const visitIndex = visit.getAttribute('data-index');
                    visit.classList.toggle('adventure-details__visit--visible', btnIndex == visitIndex);
                });
                // Disable clicked button
                dateBtnEls.forEach(btn => btn.disabled = false);
                btn.disabled = true;
            });
        });
    }

    visitEls.forEach(visit => {
        const mainImageEl = visit.querySelector('.adventure-details__main-image');
        const imageEls = visit.querySelectorAll('.adventure-details__image');
    
        imageEls.forEach(image => {
            image.addEventListener('click', () => {
                mainImageEl.src = image.src;
                imageEls.forEach(image => image.classList.remove('adventure-details__image--selected'));
                image.classList.add('adventure-details__image--selected');
            });
        });
    });
};

export default renderAdventureDetails;
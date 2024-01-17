// CONSTANTS
export const AWS_API_URL = 'https://ejyvytm3z8.execute-api.us-west-2.amazonaws.com/email123/simpleemail';
export const DEFAULT_DISPLAY_TIME = 3000; //ms

// HERO DOM ELEMENTS
export const heroBtnEl = document.querySelector('.hero__btn');

// NAV BAR DOM ELEMENTS
export const navBarEl = document.querySelector('.nav-bar');
export const navBarMenuEl = document.querySelector('.nav-bar__menu');

// ADVENTURE MAP DOM ELEMENTS
export const adventureMapEl = document.querySelector('.adventure-map');
export const adventureDetailsEl = document.querySelector('.adventure-details');

// FORM DOM ELEMENTS
export const formEl = document.querySelector('.form');
export const formSpinnerEl = document.querySelector('.form__spinner');
export const formSuccessMsgEl = document.querySelector('.form__success-msg');
export const formErrorMsgEl = document.querySelector('.form__error-msg');
export const formNameInputEl = document.querySelector('#name');
export const formEmailInputEl = document.querySelector('#email');
export const formMessageInputEl = document.querySelector('#message');
export const formSubmitBtnEl = document.querySelector('.form__submit-btn');

// PAGE SECTIONS
export const heroSectionEl = document.querySelector('.hero');
export const aboutSectionEl = document.querySelector('.about');
export const projectsSectionEl = document.querySelector('.projects');
export const adventuresSectionEl = document.querySelector('.adventures');
export const contactSectionEl = document.querySelector('.contact');

// HELPER / UTILITY FUNCTIONS
export const sendEmail = async (url, data) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        const response = await fetch(url, requestOptions);
        const responseData = await response.json();

        if (!response.ok) {
            throw new Error(responseData.description || 'Failed to send email');
        }

        return responseData;
    } catch (error) {
        console.error('Error sending email:', error.message);
        throw new Error('Failed to send email');
    }
};
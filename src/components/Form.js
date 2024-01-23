import {
    formEl,
    formSpinnerEl,
    formSuccessMsgEl,
    formErrorMsgEl,
    formNameInputEl,
    formEmailInputEl,
    formMessageInputEl,
    formSubmitBtnEl,
    WEB3FORMS_URL,
    WEB3FORMS_PUBLIC_KEY,
    sendEmail,
    DEFAULT_DISPLAY_TIME,
} from '../common.js';

const submitHandler = async event => {
    event.preventDefault();

    const name = formNameInputEl.value;
    const email = formEmailInputEl.value;
    const message = formMessageInputEl.value;

    const postData = {
        access_key: WEB3FORMS_PUBLIC_KEY,
        subject: 'Website From Submission',
        name: name,
        email: email,
        message: message
    };

    toggleLoading(true);

    try {
        const result = await sendEmail(WEB3FORMS_URL, postData);

        clearInputFields();
        renderSuccessMsg();
        toggleLoading(false);

        console.log('Email sent successfully:', result);
    } catch (error) {
        clearInputFields();
        renderErrorMsg();
        toggleLoading(false);

        console.error('Failed to send email:', error.message);
    }
};

const clearInputFields = () => {
    formNameInputEl.value = '';
    formEmailInputEl.value = '';
    formMessageInputEl.value = '';
};

const renderSuccessMsg = () => {
    formEl.classList.toggle('form--hidden');
    formSuccessMsgEl.classList.toggle('form__success-msg--visible');
};

const renderErrorMsg = () => {
    formErrorMsgEl.classList.add('form__error-msg--visible');
    setTimeout(() => {
        formErrorMsgEl.classList.remove('form__error-msg--visible');
    }, DEFAULT_DISPLAY_TIME);
};

const toggleLoading = loading => {
    [formNameInputEl, formEmailInputEl, formMessageInputEl, formSubmitBtnEl].forEach(el => {
        el.disabled = loading;
    });

    formSpinnerEl.classList.toggle('form__spinner--visible', loading);
};

formEl.addEventListener('submit', submitHandler);
import {
    formEl,
    formNameInputEl,
    formEmailInputEl,
    formMessageInputEl,
} from '../constants.js';

const submitHandler = async event => {
    event.preventDefault();

    const name = formNameInputEl.value;
    const email = formEmailInputEl.value;
    const message = formMessageInputEl.value;

    const postData = {
        name: name,
        email: email,
        description: message
    };

    formNameInputEl.value = '';
    
    console.log(postData);
};

formEl.addEventListener('submit', submitHandler);
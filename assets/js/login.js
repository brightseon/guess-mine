const body = document.querySelector('body');
const loginForm = document.getElementById('jsLogin');

const NICKNAME = 'nickname';
const LOGGED_OUT = 'loggedOut';
const LOGGED_IN = 'loggedIn';

const nickname = localStorage.getItem(NICKNAME);

const logIn = nickname => {
    window.socket = io('/');
    window.socket.emit(window.releaseEvents.setNickname, { nickname });
};

if(nickname) {
    body.className = LOGGED_IN;

    logIn(nickname);
} else {
    body.className = LOGGED_OUT;
}

const handleFormSubmit = e => {
    e.preventDefault();

    const input = loginForm.querySelector('input');
    const { value } = input;

    input.value = '';
    localStorage.setItem(NICKNAME, value);

    body.className = LOGGED_IN;
    
    logIn(value);
};

if(loginForm) {
    loginForm.addEventListener('submit', handleFormSubmit);
}
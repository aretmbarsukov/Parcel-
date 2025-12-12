import logMessage, { message } from './math.js';

console.log("App started");
logMessage();
document.body.insertAdjacentHTML('beforeend', `<p>${message}</p>`);

/* Do work here */

let primaryButton = document.querySelector('.primary-button');
let secondaryButton = document.querySelector('#secondary-button');

primaryButton.addEventListener("click", () => {
    document.querySelector('.title').style.color = 'blue';
})

secondaryButton.addEventListener("click", () => {
    document.querySelector('.title').style.color = 'red';
})
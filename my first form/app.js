const button = document.querySelector('.button');
const input = document.getElementById('email');
const form = document.getElementById('form');
const text = document.querySelector('.text_valid');
const regEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

input.addEventListener('keydown', (e) => {
    if (regEX.test(e.target.value)) {
        input.setAttribute('class', 'success');
        text.style.display = 'none';
    } 
    else if(!regEX.test(e.target.value)) {
        input.setAttribute('class', 'error');
        text.style.display = 'block';
    }
});

button.addEventListener('click', () => {
    if (regEX.test(input.value)) {
        window.location.href = 'page.html' 
    } else if(!regEX.test(input.value)) {
        form.removeAttribute("action");
        alert('Invalid email! Please enter a valid email address.');;
    }
});

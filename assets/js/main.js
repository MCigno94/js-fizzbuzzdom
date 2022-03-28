const elementNumbers = document.querySelector('.numbers');

for (let i = 1; i <= 100; i++) {
    console.log(i);

    const markUp = document.createElement('div');
    markUp.innerHTML += i;
    markUp.classList.add('number');

    elementNumbers.insertAdjacentElement('beforeend', markUp);
}
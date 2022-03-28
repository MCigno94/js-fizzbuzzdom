const elementContainer = document.querySelector('.container');
const elementRow = document.createElement('div');
elementRow.classList.add('row', 'gap-3')
elementContainer.appendChild(elementRow);

for (let i = 1; i <= 100; i++) {
    const markUp = document.createElement('div');
    console.log(i);

    markUp.innerHTML += i;
    markUp.classList.add('number', 'col-1');

    elementRow.insertAdjacentElement('beforeend', markUp);

    if (i % 3 == 0 && i % 5 == 0) {
        markUp.innerHTML = 'fizzBuzz'
        markUp.style.backgroundColor = 'crimson'
    } else if (i % 5 == 0) {
        markUp.innerHTML = 'buzz'
        markUp.classList.add('bg-warning')
    } else if (i % 3 == 0) {
        markUp.innerHTML = 'fizz'
        markUp.classList.add('bg-secondary')
    } else {
        markUp.innerHTML = i
    }
}
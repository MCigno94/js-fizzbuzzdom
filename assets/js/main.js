const elementNumbers = document.querySelector('.numbers');

for (let i = 1; i <= 100; i++) {
    const markUp = document.createElement('div');
    console.log(i);

    markUp.innerHTML += i;
    markUp.classList.add('number');

    elementNumbers.insertAdjacentElement('beforeend', markUp);

    if (i % 3 == 0 && i % 5 == 0) {
        markUp.innerHTML = "fizzBuzz"
    } else if (i % 5 == 0) {
        markUp.innerHTML = "buzz"
    } else if (i % 3 == 0) {
        markUp.innerHTML = "fizz"
    } else {
        markUp.innerHTML = i
    }
}
import './main.css';

// const displayTimeLeft = document.getElementById('time-left');
// const displayGameResult = document.getElementById('result');
// const startPauseBtn = document.getElementById('start-pause-btn');
const squares = document.querySelectorAll('.game-container div');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

let currentIndex = 76;
const width = 9;

const frogMove = (e) => {
    squares[currentIndex].classList.remove('frog');

    if (e.key === 'ArrowUp' && currentIndex - width >= 0) {
        currentIndex -= width;
    } else if (e.key === 'ArrowDown' && currentIndex + width <= width * width) {
        currentIndex += width;
    } else if (e.key === 'ArrowRight' && currentIndex % width !== width - 1) {
        currentIndex += 1;
    } else if (e.key === 'ArrowLeft' && currentIndex % width !== 0) {
        currentIndex -= 1;
    }

    squares[currentIndex].classList.add('frog');

}

document.addEventListener('keyup', frogMove);

const moveCar = (carLeft) => {

    if (carLeft.classList.contains('c1')) {
        carLeft.classList.remove('c1');
        carLeft.classList.add('c3');
    } else if (carLeft.classList.contains('c2')) {
        carLeft.classList.remove('c2');
        carLeft.classList.add('c1');
    } else if (carLeft.classList.contains('c3')) {
        carLeft.classList.remove('c3');
        carLeft.classList.add('c2');
    }
}

const autoMove = () => {
    carsLeft.forEach(carLeft => moveCar(carLeft));
    carsRight.forEach(carRight => moveCar(carRight));
};

setInterval(autoMove, 1000);
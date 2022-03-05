import './main.css';

// const displayTimeLeft = document.getElementById('time-left');
// const displayGameResult = document.getElementById('result');
// const startPauseBtn = document.getElementById('start-pause-btn');
const squares = document.querySelectorAll('.game-container div');
const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');
const logsLeft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');

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

const moveCar = (car) => {

    if (car.classList.contains('c1')) {
        car.classList.remove('c1');
        car.classList.add('c3');
    } else if (car.classList.contains('c2')) {
        car.classList.remove('c2');
        car.classList.add('c1');
    } else if (car.classList.contains('c3')) {
        car.classList.remove('c3');
        car.classList.add('c2');
    }
}

const moveLogsLeft = (log) => {
    if (log.classList.contains('l1')) {
        log.classList.remove('l1');
        log.classList.add('l2');
    } else if (log.classList.contains('l2')) {
        log.classList.remove('l2');
        log.classList.add('l3');
    } else if (log.classList.contains('l3')) {
        log.classList.remove('l3');
        log.classList.add('l4');
    } else if (log.classList.contains('l4')) {
        log.classList.remove('l4');
        log.classList.add('l5');
    } else if (log.classList.contains('l5')) {
        log.classList.remove('l5');
        log.classList.add('l1');
    }
}

const moveLogsRight = (log) => {
    if (log.classList.contains('l1')) {
        log.classList.remove('l1');
        log.classList.add('l5');
    } else if (log.classList.contains('l2')) {
        log.classList.remove('l2');
        log.classList.add('l1');
    } else if (log.classList.contains('l3')) {
        log.classList.remove('l3');
        log.classList.add('l2');
    } else if (log.classList.contains('l4')) {
        log.classList.remove('l4');
        log.classList.add('l3');
    } else if (log.classList.contains('l5')) {
        log.classList.remove('l5');
        log.classList.add('l4');
    }
}

const autoMove = () => {
    carsLeft.forEach(carLeft => moveCar(carLeft));
    carsRight.forEach(carRight => moveCar(carRight));
    logsLeft.forEach(logLeft => moveLogsLeft(logLeft));
    logsRight.forEach(logRight => moveLogsRight(logRight));
};

setInterval(autoMove, 1000);